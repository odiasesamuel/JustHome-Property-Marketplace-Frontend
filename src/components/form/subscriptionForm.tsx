"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { subscribeToNewsletterSchema } from "@/schemas/contactMessageSchema";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { subscribeToNewsletter } from "@/api/contactMessageHttp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";

const SubscriptionForm = () => {
  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: subscribeToNewsletter,
    onSuccess: () => {
      form.reset();
      toast({
        title: "Success",
        description: "Subscribed successfully!",
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

  const form = useForm<z.infer<typeof subscribeToNewsletterSchema>>({
    resolver: zodResolver(subscribeToNewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof subscribeToNewsletterSchema>, event?: React.BaseSyntheticEvent) {
    event?.preventDefault();
    mutate({ email: values.email.trim() });
  }

  return (
    <div className="w-full relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit((values, event) => onSubmit(values, event))} className="">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormControl className="">
                  <div className="w-full relative">
                    <Input {...field} className="w-full rounded-full px-7 py-4 text-xs border-none focus:outline-none placeholder:text-white placeholder:text-xs bg-[#315952]" placeholder="Your e-mail" />
                    <Button type="submit" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent shadow-none hover:bg-transparent">
                      Send
                      {isPending ? <Loader2 className="animate-spin" /> : <ArrowRight className="w-4 text-white" />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default SubscriptionForm;
