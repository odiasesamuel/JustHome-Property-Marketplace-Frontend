import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import React from "react";

type DeleteProjectButtonProps = {
  isPendingDeletion: boolean;
  handlePropertyDeletion: () => void;
};

const DeleteProjectButton: React.FC<DeleteProjectButtonProps> = ({ isPendingDeletion, handlePropertyDeletion }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="rounded-lg text-sm">
          Delete property
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm property deletion</AlertDialogTitle>
          <AlertDialogDescription>Are you sure you want to delete property?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive" onClick={handlePropertyDeletion} disabled={isPendingDeletion}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProjectButton;
