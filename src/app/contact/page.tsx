import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/form/contactForm";

const Contact = () => {
  return (
    <div className="flex justify-between px-[3.5%]">
      <Card className="w-[27%] rounded-none">
        <CardContent className="pt-6">
          <div>
            <div className="flex items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-appYellow">
                <Phone strokeWidth={1.5} size={20} className="text-white" />
              </div>
              <p className="font-medium">Call To Us</p>
            </div>
            <p className="my-5 text-sm">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +234-818-054-2105</p>
          </div>
          <div className="my-10 h-[1px] w-[80%] bg-black"></div>
          <div>
            <div className="flex items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-appYellow">
                <Mail size={20} strokeWidth={1.5} className="text-white" />
              </div>
              <p className="font-medium">Write To US</p>
            </div>
            <p className="my-5 text-sm">
              Fill out our form and we will contact <br /> you within 24 hours.
            </p>
            <p className="text-sm">Email: codewithodiase@gmail.com</p>
          </div>
        </CardContent>
      </Card>
      <ContactForm />
    </div>
  );
};

export default Contact;
