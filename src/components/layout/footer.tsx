import SubscriptionForm from "../form/subscriptionForm";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  className: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className} mt-[40px] text-white sm:mt-[75px] lg:mt-[100px]`}>
      <div className="bg-appGreen">
        <div className="mx-auto flex h-[300px] max-w-[500px] flex-col items-center justify-center gap-5 sm:h-[350px]">
          <Image alt="send icon" src="/images/send_icon.svg" width={100} height={100} className="h-12 w-12" />
          <h1 className="text-2xl font-medium sm:text-3xl"> Stay Up to Date</h1>
          <p className="text-xs font-light">Subscribe to our newsletter to receive our weekly feed.</p>
          <SubscriptionForm />
        </div>
      </div>
      <div className="h-[75px] w-full bg-[#3D3E3F] 2xs:h-[80px]">
        <div className="mx-auto flex h-full w-3/4 items-center justify-between">
          <p className="text-xs">Copyright © 2024. JustHome</p>
          <div className="hidden h-[50px] items-center 2xs:flex">
            <Image alt="Logo of the company" src="/images/logo_white.svg" width={20} height={20} className="mr-3 w-6" />
            <h1 className="text-base font-normal md:text-xl">JustHome</h1>
          </div>
          <div className="hidden items-center sm:flex sm:gap-x-6 md:gap-x-8">
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
