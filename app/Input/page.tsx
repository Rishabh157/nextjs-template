"use client";
import MOLDialog from "@/components/ui/molecule/MOLDialog/MOLDialog";
import { useState } from "react";
import AddFormWrapper from "../form/Add/AddFormWrapper";

const radioGroupData = [
  {
    label: "Male",
    value: "MALE",
  },
  {
    label: "Female",
    value: "FEMALE",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
  {
    label: "Other",
    value: "OTHER",
  },
];

const options = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const Index = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = (open: boolean) => {
    setDialogOpen(open);
  };

  return (
    <div>
      <button onClick={handleOpenDialog}>
        Open Dialog from External Button
      </button>
      <MOLDialog
        header="My Dialog"
        width="500px"
        height="400px"
        isOpen={isDialogOpen}
        onOpenChange={handleCloseDialog}
      >
        <div>
          <AddFormWrapper />
        </div>
      </MOLDialog>
    </div>
  );
};

export default Index;
