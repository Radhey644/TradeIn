"use client";
import React from "react";
import axios from "axios";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import router from "next/router";
import { AcmeLogo } from "./AcmeLogo";
import { SearchIcon } from "../Search-bar/SearchIcon";
import { arrayBuffer } from "stream/consumers";
import SearchBar from "../Search-bar/SearchBar";
const TradeInNavbar = () => {
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      location.reload();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Trades",
    "Activity",
    "Profit & Loss",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="flex w-full ">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/home" color="foreground">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">TradeIn</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Market News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem>
          {/* Search bar added */}
          <SearchBar/>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="ml-auto" justify="end">
        <NavbarItem>
          <Button color="primary" variant="flat" onClick={logout}>
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default TradeInNavbar;
