"use client";

import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { signUpFormSchema } from "@/schemas/authFormSchema";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/authHttp";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const SignUpForm: React.FC<{}> = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: (successData) => {
      console.log("Success:", successData);
      sessionStorage.setItem("userToken", successData.token.value);
      sessionStorage.setItem("userInfo", JSON.stringify(successData.data));
      router.push("/");
    },
    onError: (error: any) => {
      if (error?.status === 409 && error?.data?.message) {
        setErrorMessage((prevErrMsg) => {
          return {
            ...prevErrMsg,
            email: error.data.message,
          };
        });
        return;
      }
      toast({
        variant: "destructive",
        title: "Error",
        description: error.data.message || "An unknown Error occurred",
      });
    },
  });

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      accountType: "Individual",
      password: "",
      confirmPassword: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    if (values.password !== values.confirmPassword) {
      setErrorMessage((prevErrMsg) => {
        return {
          ...prevErrMsg,
          password: "Password isn't the same as confirm password",
        };
      });
      return;
    }
    setErrorMessage((prevErrMsg) => {
      return {
        ...prevErrMsg,
        password: "",
      };
    });

    mutate({ firstName: values.firstName.trim(), lastName: values.lastName.trim(), email: values.email.trim().toLowerCase(), accountType: values.accountType, password: values.password, confirmPassword: values.confirmPassword });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="text-black w-full">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="kunle" {...field} className="p-3" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="text-black w-full">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Ojo" {...field} className="p-3" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-black w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="kunle.ojo@gmail.com" {...field} className="p-3" />
              </FormControl>
              <FormMessage>{errorMessage.email}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="accountType"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Account Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-sm py-5">
                    <SelectValue placeholder="" className="text-sm" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem className="text-sm" value="Individual">
                    Individual
                  </SelectItem>
                  <SelectItem className="text-sm" value="Property owner">
                    Property owner
                  </SelectItem>
                  <SelectItem className="text-sm" value="Property agent">
                    Property agent
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="text-black w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} className="p-3" />
              </FormControl>
              <FormMessage>{errorMessage.password}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="text-black w-full">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} className="p-3" />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-sm" disabled={isPending}>
          Submit
          {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
