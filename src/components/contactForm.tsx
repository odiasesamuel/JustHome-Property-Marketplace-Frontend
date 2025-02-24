"use client";

import { useEffect } from "react";
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
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || "Error sending message",
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
    mutate(values);
  }

  return (
    <>
      <Card className="rounded-none w-[70%]">
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
                        <Input placeholder="Your Name" {...field} className="bg-[#F5F5F5] rounded-none p-4 text-appGreen placeholder:text-appGreen" />
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
                        <Input placeholder="Your Email" {...field} className="bg-[#F5F5F5] rounded-none p-4 text-appGreen placeholder:text-appGreen" />
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
                        <Input placeholder="Your Phone" {...field} className="bg-[#F5F5F5] rounded-none p-4 text-appGreen placeholder:text-appGreen" />
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
                        <Textarea placeholder="Your message" {...field} className="bg-[#F5F5F5] mt-8 p-4 text-appGreen placeholder:text-appGreen h-[220px] rounded-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button className="text-appGreen font-semibold px-6 py-4 rounded-none">
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
