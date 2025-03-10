"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Verify = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const message = searchParams.get("message");
  return (
    <div className="px-[3.5%] text-center space-y-3">
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
