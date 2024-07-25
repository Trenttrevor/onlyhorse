"use client"

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

const LogoutButton = () => {
  return (
    <LogoutLink>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </LogoutLink>
  );
};

export default LogoutButton;
