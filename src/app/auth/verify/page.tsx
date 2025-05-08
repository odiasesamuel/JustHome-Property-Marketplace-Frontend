import Link from "next/link";
import { Button } from "@/components/ui/button";

type VerifyPageProps = {
  searchParams?: Promise<{
    status?: string;
    message?: string;
  }>;
};

const Verify = async (props: VerifyPageProps) => {
  const searchParams = await props.searchParams;
  const status = searchParams?.status;
  const message = searchParams?.message;
  return (
    <div className="space-y-3 px-[3.5%] text-center">
      <h1>{status === "success" ? "✅ Verification Successful" : "❌ Verification Failed"}</h1>
      <p>{message}</p>
      {status === "success" && (
        <Button asChild className="text-sm">
          <Link href="/auth?mode=signin">Sign in</Link>
        </Button>
      )}
    </div>
  );
};

export default Verify;
