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
      <Input type="text" className="w-full rounded-full px-5 py-4 text-sm shadow-md focus:outline-none placeholder:text-appGreen" placeholder="Enter state, area, Keywords..." ref={searchRef} defaultValue={searchParams.get("search") || ""} />
      <Button type="submit" className="bg-[#E7C873] rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center">
        <Search className="w-4 text-appGreen" />
      </Button>
    </form>
  );
};

export default SearchBar;
