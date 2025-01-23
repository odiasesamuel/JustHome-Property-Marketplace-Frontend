import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type FooterProps = {
  className: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className} mt-[100px] text-white`}>
      <div className="bg-appGreen">
        <div className="flex flex-col items-center justify-center max-w-[500px] mx-auto h-[350px] gap-5">
          <Image alt="send icon" src="/images/send_icon.svg" width={100} height={100} className="w-12 h-12" />
          <h1 className="text-3xl font-medium"> Stay Up to Date</h1>
          <p className="text-xs font-light">Subscribe to our newsletter to receive our weekly feed.</p>

          <div className="w-full relative">
            <Input type="email" className="w-full rounded-full px-7 py-4 text-xs border-none focus:outline-none placeholder:text-white placeholder:text-xs bg-[#315952]" placeholder="Your e-mail" />
            <Button type="submit" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent shadow-none hover:bg-transparent">
              Send
              <ArrowRight className="w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#3D3E3F] w-full h-[80px]">
        <div className="w-3/4 h-full mx-auto flex items-center justify-between">
          <p className="text-xs">Copyright © 2024. JustHome</p>
          <div className="w-[200px] h-[50px] flex items-center">
            <Image alt="Logo of the company" src="/images/logo_white.svg" width={20} height={20} className="mr-3 w-6" />
            <h1 className="text-xl font-normal">JustHome</h1>
          </div>
          <div className="flex items-center gap-x-8">
            <Link href="http://www.linkedin.com/in/samuel-odiase-omoighe" target="_blank" rel="noopener noreferrer">
              <Image alt="Logo of the company" src="/images/facebook_icon.svg" width={5} height={5} className="w-2" />
            </Link>
            <Link href="http://www.linkedin.com/in/samuel-odiase-omoighe" target="_blank" rel="noopener noreferrer">
              <Image alt="Logo of the company" src="/images/twitter_icon.svg" width={5} height={5} className="w-3" />
            </Link>
            <Link href="http://www.linkedin.com/in/samuel-odiase-omoighe" target="_blank" rel="noopener noreferrer">
              <Image alt="Logo of the company" src="/images/instagram_icon.svg" width={5} height={5} className="w-3" />
            </Link>
            <Link href="http://www.linkedin.com/in/samuel-odiase-omoighe" target="_blank" rel="noopener noreferrer">
              <Image alt="Logo of the company" src="/images/linkedin_icon.svg" width={5} height={5} className="w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
