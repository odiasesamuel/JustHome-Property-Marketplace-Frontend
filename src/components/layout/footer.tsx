import SubscriptionForm from "../form/subscriptionForm";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  className: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className} mt-24 text-white`}>
      <div className="bg-appGreen">
        <div className="mx-auto flex h-[350px] max-w-[500px] flex-col items-center justify-center gap-5">
          <Image alt="send icon" src="/images/send_icon.svg" width={100} height={100} className="h-12 w-12" />
          <h1 className="text-3xl font-medium"> Stay Up to Date</h1>
          <p className="text-xs font-light">Subscribe to our newsletter to receive our weekly feed.</p>
          <SubscriptionForm />
        </div>
      </div>
      <div className="h-[80px] w-full bg-[#3D3E3F]">
        <div className="mx-auto flex h-full w-3/4 items-center justify-between">
          <p className="text-xs">Copyright © 2024. JustHome</p>
          <div className="flex h-[50px] w-[200px] items-center">
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
