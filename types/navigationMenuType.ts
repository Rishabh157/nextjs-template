// navigationMenu.ts

// Define the type for an individual option
export type Option = {
  id: string;
  label: string;
  optionUrl: string;
};

// Define the type for the props of ATMNavigationMenu
export type NavigationMenuProps = {
  id: string;
  type: "navigation-menu" | "link"; 
  label: string;
  options?: Option[]; // Optional, only required for 'navigation-menu' type
  url?: string; // Optional, only required for 'link' type
};
