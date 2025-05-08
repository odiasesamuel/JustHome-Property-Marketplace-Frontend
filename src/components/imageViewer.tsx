import { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ImageViewer = {
  currentImg: string;
  imageUrls: string[];
  children: ReactNode;
};

const ImageViewer: React.FC<ImageViewer> = ({ currentImg, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-none p-0">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {/* Used img over Image for placeholder image on error */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={currentImg} alt={`property image`} width={500} height={500} className="h-auto w-full rounded-lg object-contain" onError={(e) => (e.currentTarget.src = "/images/image_placeholder.jpg")} />
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;
