"use client";

import { useAuth } from "@/context/authContext";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { signInFormSchema } from "@/schemas/authFormSchema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/authHttp";
import { ApiErrorType } from "@/types/apiResponse";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const SignInForm: React.FC<{}> = () => {
  const { login } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: signIn,
    onSuccess: (successData) => {
      const loggedInUser = successData.loggedInUser;
      const userToken = successData.token.value;
      login(loggedInUser, userToken);
      router.push("/");
    },
    onError: (error: ApiErrorType) => {
      if (error.statusCode === 401) {
        setErrorMessage("Oops! We couldn't verify your details. Please check your email and password.");
        return;
      }

      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
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

  async function onSubmit(values: z.infer<typeof signInFormSchema>, event?: React.BaseSyntheticEvent) {
    event?.preventDefault();
    mutate({ email: values.email.trim().toLowerCase(), password: values.password });
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
        {isError && (
          <Link href="/auth/forgot-password" className="cursor-pointer text-sm text-appGreen underline underline-offset-4">
            Forgot password?
          </Link>
        )}
        <Button type="submit" className="w-full text-sm" disabled={isPending}>
          Sign in
          {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
