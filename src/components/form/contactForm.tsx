"use client";

import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactMessageSchema } from "@/schemas/contactMessageSchema";
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "@/api/contactMessageHttp";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader, Loader2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      form.reset();
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.data.message || "Error sending message",
      });
    },
  });

  const form = useForm<z.infer<typeof contactMessageSchema>>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactMessageSchema>, event?: React.BaseSyntheticEvent) {
    event?.preventDefault();
    mutate({ name: values.name.trim(), email: values.email.trim(), phoneNumber: values.phoneNumber.trim(), message: values.message.trim() });
  }

  return (
    <>
      <Card className="w-[70%] rounded-none">
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit((values, event) => onSubmit(values, event))} className="space-y-8">
              <div className="flex justify-between">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-[32%]">
                      <FormControl className="w-full">
                        <Input placeholder="Your Name" {...field} className="rounded-none bg-[#F5F5F5] p-4 text-appGreen placeholder:text-appGreen" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-[32%]">
                      <FormControl className="w-full">
                        <Input placeholder="Your Email" {...field} className="rounded-none bg-[#F5F5F5] p-4 text-appGreen placeholder:text-appGreen" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-[32%]">
                      <FormControl className="w-full">
                        <Input placeholder="Your Phone" {...field} className="rounded-none bg-[#F5F5F5] p-4 text-appGreen placeholder:text-appGreen" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl className="w-full">
                        <Textarea placeholder="Your message" {...field} className="mt-8 h-[220px] rounded-none bg-[#F5F5F5] p-4 text-appGreen placeholder:text-appGreen" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button className="rounded-none px-6 py-4 font-semibold text-appGreen">
                  Send Message
                  {isPending ? <Loader2 className="animate-spin" /> : <ArrowRight />}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
