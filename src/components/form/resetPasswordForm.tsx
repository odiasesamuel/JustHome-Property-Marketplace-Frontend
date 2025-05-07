"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { resetPasswordSchema } from "@/schemas/authFormSchema";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/api/authHttp";
import { ApiErrorType } from "@/types/apiResponse";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { ToastAction } from "../ui/toast";

const ResetPasswordForm: React.FC<{}> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (successData) => {
      toast({
        variant: "default",
        title: "Password Reset Successful!",
        description: "Your password has been successfully reset. You can now sign in with your new password.",
        action: (
          <ToastAction altText="Sing in" onClick={() => router.push("/auth?mode=signin")}>
            Sign in
          </ToastAction>
        ),
      });
    },
    onError: (error: ApiErrorType) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState("");
  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    event?.preventDefault();
    if (values.password !== values.confirmPassword) {
      setErrorMessage("Password isn't the same as confirm password");
      return;
    }
    mutate({ password: values.password, confirmPassword: values.confirmPassword, token });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full text-black">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} className="p-3" />
              </FormControl>
              <FormMessage>{errorMessage}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="w-full text-black">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} className="p-3" />
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

export default ResetPasswordForm;
