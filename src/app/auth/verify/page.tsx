"use client";

import { useSearchParams } from "next/navigation";
const Verify = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const message = searchParams.get("message");
  return (
    <div className="px-[3.5%] text-center">
      <h1>{status === "success" ? "✅ Verification Successful" : "❌ Verification Failed"}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Verify;
