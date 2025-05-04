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
    <div className="relative w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit((values, event) => onSubmit(values, event))} className="">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormControl className="">
                  <div className="relative w-full px-4 sm:px-0">
                    <Input {...field} className="w-full rounded-full border-none bg-[#315952] px-7 py-4 text-xs placeholder:text-xs placeholder:text-white focus:outline-none" placeholder="Your e-mail" />
                    <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 transform bg-transparent shadow-none hover:bg-transparent">
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
