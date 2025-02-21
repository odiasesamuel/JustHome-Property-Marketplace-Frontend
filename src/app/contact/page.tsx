import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/contactForm";

const Contact = () => {
  return (
    <div className="px-[3.5%] flex justify-between">
      <Card className="rounded-none w-[27%]">
        <CardContent className="pt-6">
          <div>
            <div className="flex items-center">
              <div className="mr-4 rounded-full w-10 h-10 bg-appYellow flex items-center justify-center">
                <Phone strokeWidth={1.5} size={20} className="text-white" />
              </div>
              <p className="font-medium">Call To Us</p>
            </div>
            <p className="text-sm my-5">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +234-818-054-2105</p>
          </div>
          <div className="h-[1px] w-[80%] bg-black my-10"></div>
          <div>
            <div className="flex items-center">
              <div className="mr-4 rounded-full w-10 h-10 bg-appYellow flex items-center justify-center">
                <Mail size={20} strokeWidth={1.5} className="text-white" />
              </div>
              <p className="font-medium">Write To US</p>
            </div>
            <p className="text-sm my-5">
              Fill out our form and we will contact <br /> you within 24 hours.
            </p>
            <p className="text-sm">Email: codewithodiase@gmail.com</p>
          </div>
        </CardContent>
      </Card>

      {/* <Card className="rounded-none w-[70%]">
        <CardContent className="pt-6">
          <div className="flex justify-between">
            <Input type="text" placeholder="Your Name" className="bg-[#F5F5F5] w-[32%] rounded-none p-4 text-appGreen placeholder:text-appGreen" />
            <Input type="email" placeholder="Your Email" className="bg-[#F5F5F5] w-[32%] rounded-none p-4 text-appGreen placeholder:text-appGreen" />
            <Input type="tel" placeholder="Your Phone" className="bg-[#F5F5F5] w-[32%] rounded-none p-4 text-appGreen placeholder:text-appGreen" />
          </div>
          <Textarea placeholder="Your message" className="bg-[#F5F5F5] my-8 p-4 text-appGreen placeholder:text-appGreen h-[220px]" />

          <div className="flex justify-end">
            <Button className="text-appGreen font-semibold px-6 py-4 rounded-none">
              Send Message
              <ArrowRight />
            </Button>
          </div>
        </CardContent>
      </Card> */}
      <ContactForm />
    </div>
  );
};

export default Contact;
