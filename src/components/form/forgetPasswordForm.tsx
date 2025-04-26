"use client";

import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { requestResetPasswordSchema } from "@/schemas/authFormSchema";
import { useMutation } from "@tanstack/react-query";
import { signIn, requestResetPassword } from "@/api/authHttp";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const ForgotPasswordForm: React.FC<{}> = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: requestResetPassword,
    onSuccess: (successData) => {
      toast({
        variant: "default",
        title: "You got mail!",
        description: "We've sent a password reset link to your email. Click the link to reset your password.",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.data?.message || "An unknown error occurred",
      });
    },
  });

  const form = useForm<z.infer<typeof requestResetPasswordSchema>>({
    resolver: zodResolver(requestResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof requestResetPasswordSchema>) {
    mutate({ email: values.email.trim().toLowerCase() });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full text-black">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="kunle.ojo@gmail.com" {...field} className="p-3" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full text-sm" disabled={isPending}>
          Continue
          {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
        <p className="mt-6 text-center text-sm text-black">
          Remembered your password?
          <Link href="/auth?mode=signin" className="ml-1 cursor-pointer text-appGreen underline underline-offset-4">
            Sign in here
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
