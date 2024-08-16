import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../dialog";

type MOLDialogProps = {
  children: ReactNode;
  header: string;
  width?: string;
  height?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const MOLDialog = ({
  children,
  header,
  width = "500px",
  height = "auto",
  isOpen,
  onOpenChange,
}: MOLDialogProps) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent
          style={{
            width,
            height,
            maxWidth: "none",
            maxHeight: "none",
          }}
          className="overflow-y-scroll"
        >
          <DialogHeader>
            <DialogTitle>{header}</DialogTitle>
            <DialogDescription>{children}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MOLDialog;
