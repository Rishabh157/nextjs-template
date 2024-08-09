import React from "react";
import { Calendar } from "../../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";
import { Button } from "../../button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import ATMTypography from "../ATMTypography/ATMTypography";
import { format } from "date-fns";
import { ErrorMessage } from "formik";

type DateValue = any;

type ATMDatePickerProps = {
  name?: string;
  value: DateValue;
  label: string;
  placeholder: string;
  onChange: (e: DateValue) => void;
  inline?: boolean;
  disabled?: (date: Date) => boolean;
  required?: boolean;
  mode?: "single" | "range";
};

const ATMDatePicker = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  inline = false,
  disabled,
  required = false,
  mode = "single",
}: ATMDatePickerProps) => {
  const displayValue =
    mode === "single"
      ? value instanceof Date
        ? format(value, "dd MMM, yyyy")
        : placeholder
      : value && "from" in value && value.from
      ? `${format(value.from, "dd MMM")} - ${
          value.to ? format(value.to, "dd MMM") : "..."
        }`
      : placeholder;

  const handleSelect = (selectedValue: DateValue) => {
    onChange(selectedValue);
  };

  return (
    <div className={`gap-2 h-16 ${inline ? "flex" : "flex flex-col"}`}>
      {label && (
        <ATMTypography variant="span" extraClasses="min-w-[200px]">
          {label} {required && <span className="text-red-500"> * </span>}
        </ATMTypography>
      )}
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-[200px] pl-3 text-left font-normal")}
            >
              {displayValue}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode={mode}
              selected={value}
              onSelect={handleSelect}
              disabled={disabled}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <div>
          {name && (
            <ErrorMessage name={name}>
              {(errMsg) => (
                <ATMTypography variant="div" extraClasses="text-red-500 w-full">
                  {errMsg}
                </ATMTypography>
              )}
            </ErrorMessage>
          )}
        </div>
      </div>
    </div>
  );
};

export default ATMDatePicker;
