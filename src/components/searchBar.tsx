"use client";

import { useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type SearchBarProps = {
  className: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const searchParams = useSearchParams();
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handlePropertySearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchRef.current?.value.trim();
    if (!query) return;

    const params = new URLSearchParams(searchParams);
    params.set("search", query);
    params.set("page", "1");

    router.push(`/listing?${params.toString()}`);
  };

  return (
    <form className={`${className} relative`} onSubmit={handlePropertySearch}>
      <Input type="text" className="w-full rounded-full px-5 py-4 text-sm shadow-md placeholder:text-appGreen focus:outline-none" placeholder="Enter state, area, Keywords..." ref={searchRef} defaultValue={searchParams.get("search") || ""} />
      <Button type="submit" className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#E7C873]">
        <Search className="w-4 text-appGreen" />
      </Button>
    </form>
  );
};

export default SearchBar;
