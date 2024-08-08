import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ATMTypography from "../ATMTypography/ATMTypography";
import { ErrorMessage } from "formik";

type Option = {
  value: string;
  label: string;
};

type ATMSelectProps = {
  value: Option | Option[]; // Updated type to handle single or multiple values
  name?: string;
  label: string;
  placeholder: string;
  onChange: (selected: Option | Option[]) => void;
  options: Option[];
  inline?: boolean;
  disabled?: boolean;
  required?: boolean;
  supportText?: string;
  multiple?: boolean;
};

export function ATMSelect({
  label,
  value,
  placeholder,
  name,
  onChange,
  options,
  inline = false,
  required = false,
  multiple = false,
  disabled = false,
  supportText,
}: ATMSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<Option[]>(
    Array.isArray(value) ? value : [] // Initialize state with the correct value
  );

  React.useEffect(() => {
    if (!multiple) {
      setSelectedValues(Array.isArray(value) ? [] : [value]);
    } else {
      setSelectedValues(Array.isArray(value) ? value : []);
    }
  }, [value, multiple]);

  const handleSelect = (currentOption: Option) => {
    if (multiple) {
      const isSelected = selectedValues.some(
        (option) => option.value === currentOption.value
      );
      const newValues = isSelected
        ? selectedValues.filter(
            (option) => option.value !== currentOption.value
          )
        : [...selectedValues, currentOption];
      setSelectedValues(newValues);
      onChange(newValues);
    } else {
      setSelectedValues([currentOption]);
      onChange(currentOption);
      setOpen(false);
    }
  };

  const isSelected = (option: Option) =>
    selectedValues.some((selected) => selected.value === option.value);

  return (
    <div className={`gap-2 mt-1 ${inline ? "flex" : "flex flex-col"}`}>
      {label && (
        <ATMTypography variant="span" extraClasses="min-w-[200px]">
          {label} {required && <span className="text-red-500">*</span>}
        </ATMTypography>
      )}
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] flex justify-between overflow-hidden scroll-auto"
              onClick={() => !disabled && setOpen((prev) => !prev)}
              disabled={disabled}
            >
              <ATMTypography variant="span" extraClasses="truncate">
                {selectedValues.length > 0
                  ? selectedValues.map((option) => option.label).join(", ")
                  : placeholder}
              </ATMTypography>
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search..." className="h-9" />
              <CommandList>
                <CommandEmpty>No options found.</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleSelect(option)}
                      className={cn("cursor-pointer p-2", {
                        "bg-gray-200": isSelected(option),
                      })}
                    >
                      {option.label}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          isSelected(option) ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="relative">
          <ATMTypography variant="div">{supportText}</ATMTypography>
          {name && (
            <ErrorMessage name={name}>
              {(errMsg) => (
                <ATMTypography
                  variant="div"
                  extraClasses="bg-white absolute top-0 text-red-500 w-full"
                >
                  {errMsg}
                </ATMTypography>
              )}
            </ErrorMessage>
          )}
        </div>
      </div>
    </div>
  );
}
