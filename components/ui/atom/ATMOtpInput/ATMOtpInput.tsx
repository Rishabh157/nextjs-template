import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../input-otp";

type ATMOtpInputProps = {
  name?: string;
  onChange: (e: number | string) => void;
  inline?: boolean;
  disabled?: boolean;
  required?: boolean;
  supportText?: string;
};
const ATMOtpInput = ({ onChange }: ATMOtpInputProps) => {
  return (
    <div>
      <InputOTP
        maxLength={4}
        onChange={(e) => {
          onChange(e);
        }}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default ATMOtpInput;
