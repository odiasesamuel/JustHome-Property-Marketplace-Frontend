"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { editPropertySchema } from "@/schemas/propertySchema";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { editProperty } from "@/api/propertyHttp";
import { Loader2 } from "lucide-react";
import { queryClient } from "@/api/queryClient";
import { Property } from "@/types/apiResponse";

type EditPropertyFormProps = {
  propertyData: Property;
};

const EditPropertyForm: React.FC<EditPropertyFormProps> = ({ propertyData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, email, phoneNumber, state, LGA, area, description, numberOfRooms, propertyType, forSaleOrRent, price } = propertyData;
  const form = useForm<z.infer<typeof editPropertySchema>>({
    resolver: zodResolver(editPropertySchema),
    defaultValues: { name, email, phoneNumber, state, LGA, area, description, numberOfRooms, propertyType, forSaleOrRent, price },
  });
  useEffect(() => {
    if (isOpen) {
      form.reset({ name, email, phoneNumber, state, LGA, area, description, numberOfRooms, propertyType, forSaleOrRent, price });
    }
  }, [isOpen, propertyData, form]);

  const param = useParams();
  const slug = param.slug as string;
  const propertyId = slug.split("-").pop();

  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: editProperty,
    onSuccess: () => {
      setIsOpen(false);
      toast({
        title: "Success",
        description: "Edited property successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["userListedProperty"] });
      queryClient.invalidateQueries({ queryKey: ["property"] });
      queryClient.invalidateQueries({ queryKey: ["property", propertyId] });
    },
    onError: (error: any) => {
      // Error not working
      setIsOpen(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.data.message || "Error editing property",
      });
    },
  });

  const [imageErrorMessage, setImageErrorMessage] = useState("");

  async function onSubmit(values: z.infer<typeof editPropertySchema>, event?: React.BaseSyntheticEvent) {
    event?.preventDefault();
    setImageErrorMessage("");
    const editedPropertyData = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      state: values.state,
      LGA: values.LGA,
      area: values.area,
      city: values.LGA,
      description: values.description,
      numberOfRooms: values.numberOfRooms,
      propertyType: values.propertyType,
      forSaleOrRent: values.forSaleOrRent,
      price: values.price,
    };

    const imageFormData = new FormData();
    if (values.imageFiles) {
      if (values.imageFiles.length > 10) {
        setImageErrorMessage("You can upload a maximum of 10 images.");
        return;
      }

      for (const file of Array.from(values.imageFiles)) {
        if (file.size > 10 * 1024 * 1024) {
          return;
        }
        imageFormData.append("propertyImage", file);
      }
    }

    mutate({ editedPropertyData, imageFormData, propertyId });
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="rounded-lg text-sm">
          Edit property
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Your Property</DialogTitle>
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
                  <FormControl className="w-full">
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

export default EditPropertyForm;
