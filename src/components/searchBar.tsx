"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handlePropertySearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchRef.current?.value.trim();
    if (!query) return;

    console.log(query);
    router.push(`/listing?page=1&perPage=12&search=${encodeURIComponent(query)}`);
  };

  return (
    <form className="w-full relative" onSubmit={handlePropertySearch}>
      <Input type="text" className="w-full rounded-full px-5 py-4 text-sm shadow-md focus:outline-none placeholder:text-appGreen" placeholder="Enter state, area, Keywords..." ref={searchRef} />
      <Button type="submit" className="bg-[#E7C873] rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center">
        <Search className="w-4 text-appGreen" />
      </Button>
    </form>
  );
};

export default SearchBar;
