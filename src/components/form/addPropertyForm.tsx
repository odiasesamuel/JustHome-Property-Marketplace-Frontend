"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { addPropertySchema } from "@/schemas/propertySchema";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { addProperty } from "@/api/propertyHttp";
import { ApiError } from "next/dist/server/api-utils";
import { queryClient } from "@/api/queryClient";
import { Loader2 } from "lucide-react";

const AddPropertyForm = () => {
  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: addProperty,
    onSuccess: () => {
      setIsOpen(false);
      form.reset();
      toast({
        title: "Success",
        description: "Added property successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["userListedProperty"] });
      queryClient.invalidateQueries({ queryKey: ["property"] });
    },
    onError: (error: ApiError) => {
      setIsOpen(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });
  const form = useForm<z.infer<typeof addPropertySchema>>({
    resolver: zodResolver(addPropertySchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      state: "Lagos",
      LGA: "",
      area: "",
      description: "",
      numberOfRooms: "",
      propertyType: "Flat",
      forSaleOrRent: "Rent",
      price: "",
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const [imageErrorMessage, setImageErrorMessage] = useState("");

  async function onSubmit(values: z.infer<typeof addPropertySchema>, event?: React.BaseSyntheticEvent) {
    event?.preventDefault();
    setImageErrorMessage("");
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("state", values.state);
    formData.append("LGA", values.LGA);
    formData.append("city", values.LGA);
    formData.append("area", values.area);
    formData.append("description", values.description);
    formData.append("numberOfRooms", values.numberOfRooms.toString());
    formData.append("propertyType", values.propertyType);
    formData.append("forSaleOrRent", values.forSaleOrRent);
    formData.append("price", values.price.toString());
    if (values.imageFiles) {
      if (values.imageFiles.length > 10) {
        setImageErrorMessage("You can upload a maximum of 10 images.");
        return;
      }

      for (const file of Array.from(values.imageFiles)) {
        if (file.size > 10 * 1024 * 1024) {
          return;
        }
        formData.append("propertyImage", file);
      }
    }

    mutate(formData);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-6 text-xs xs:text-sm">
          Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Your Property</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full text-black">
                  <FormLabel>Property Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Grandeur Homes" {...field} className="p-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full text-black">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="08046817395" {...field} type="number" className="appearance-none p-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>State</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="py-[22px] text-sm">
                        <SelectValue placeholder="" className="text-sm" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem className="text-sm" value="Abuja">
                        Abuja
                      </SelectItem>
                      <SelectItem className="text-sm" value="Lagos">
                        Lagos
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="LGA"
              render={({ field }) => (
                <FormItem className="w-full text-black">
                  <FormLabel>Local Government Area</FormLabel>
                  <FormControl>
                    <Input placeholder="Ifako-ijaye" {...field} className="p-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem className="w-full text-black">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Parkview, Ikoyi, Lagos" {...field} className="p-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full md:col-span-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Give a description about your property" {...field} className="h-20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numberOfRooms"
              render={({ field }) => (
                <FormItem className="w-full text-black">
                  <FormLabel>Number of Rooms</FormLabel>
                  <FormControl>
                    <Input placeholder="5" {...field} type="number" className="appearance-none p-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Property Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="py-[22px] text-sm">
                        <SelectValue placeholder="" className="text-sm" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem className="text-sm" value="Duplex">
                        Duplex
                      </SelectItem>
                      <SelectItem className="text-sm" value="Flat">
                        Flat
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="forSaleOrRent"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Listing Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="py-[22px] text-sm">
                        <SelectValue placeholder="" className="text-sm" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem className="text-sm" value="Rent">
                        Rent
                      </SelectItem>
                      <SelectItem className="text-sm" value="Sale">
                        Sale
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full text-black">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="80000000" {...field} type="number" className="appearance-none p-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageFiles"
              render={({ field }) => (
                <FormItem className="w-full text-black md:col-span-2">
                  <FormLabel>Upload Images</FormLabel>
                  <FormControl>
                    <Input type="file" multiple accept="image/*" onChange={(event) => field.onChange(event.target.files)} className="p-3" />
                  </FormControl>
                  <FormMessage>{imageErrorMessage}</FormMessage>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full text-sm md:col-span-2" disabled={isPending}>
              Submit
              {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPropertyForm;
