import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";
type Props = {
  children: any;
};
const ATMSheet = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <IconMenu2 />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        {/* <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>desc</SheetDescription>
        </SheetHeader> */}
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default ATMSheet;
