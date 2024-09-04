import React from "react";
import { Switch } from "../../switch";

const ATMSwitch = () => {
  return (
    <div>
      <Switch id="airplane-mode" onCheckedChange={(e) => console.log(e)} />
    </div>
  );
};

export default ATMSwitch;
