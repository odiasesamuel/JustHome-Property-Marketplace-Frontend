"use client";

import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { signInFormSchema } from "@/schemas/authFormSchema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/authHttp";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const ForgotPassword: React.FC<{}> = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: (successData) => {
      sessionStorage.setItem("userToken", successData.token.value);
      sessionStorage.setItem("userInfo", JSON.stringify(successData.loggedInUser));
      router.push("/");
    },
    onError: (error: any) => {
      if (error?.status === 401) {
        setErrorMessage("Oops! We couldn't verify your details. Please check your email and password.");
        return;
      }

      toast({
        variant: "destructive",
        title: "Error",
        description: error?.data?.message || "An unknown error occurred",
      });
    },
  });

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    mutate({ email: values.email.trim().toLowerCase(), password: values.password });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-black w-full">
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
        <p className="text-black text-sm mt-6 text-center">
          Remembered your password?
          <Link href="/auth?mode=signin" className="text-appGreen cursor-pointer underline underline-offset-4 ml-1">
            Sign in here
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default ForgotPassword;
