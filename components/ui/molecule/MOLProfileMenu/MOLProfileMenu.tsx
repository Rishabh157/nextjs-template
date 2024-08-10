import React from "react";
import ATMAvatar from "../../atom/ATMAvatar/ATMAvatar";
import ATMDropdownMenu from "../../atom/ATMDropdownMenu/ATMDropdownMenu";

const MOLProfileMenu = () => {
  return (
    <div>
      <ATMDropdownMenu
        trigger={<ATMAvatar />}
        // label="Account Details"
        items={[
          {
            id: "",
            content: "My Profile",
            onClick: () => {},
          },
          {
            id: "",
            content: "Orders",
            onClick: () => {},
          },
          {
            id: "",
            content: "Wishlist",
            onClick: () => {},
          },
          {
            id: "",
            content: "Notifications",
            onClick: () => {},
          },
          {
            id: "",
            content: "Logout",
            onClick: () => {},
          },
        ]}
      ></ATMDropdownMenu>
    </div>
  );
};

export default MOLProfileMenu;
