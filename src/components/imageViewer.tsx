import { ReactNode, useState } from "react";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ImageViewer = {
  currentImg: string;
  imageUrls: string[];
  children: ReactNode;
};

const ImageViewer: React.FC<ImageViewer> = ({ currentImg, imageUrls, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 border-none">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {/* Used img over Image for placeholder image on error */}
        <img src={currentImg} alt={`property image`} width={500} height={500} className="w-full h-auto object-contain rounded-lg" onError={(e) => (e.currentTarget.src = "/images/image_placeholder.jpg")} />
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;
