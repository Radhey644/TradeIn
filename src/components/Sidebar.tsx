"use client"
import React, { useState } from "react";
import SideDashboard from "./SideDashboard";
import { useMediaQuery } from "@chakra-ui/react";
import AppDrawer from "./AppDrawer";
const Sidebar = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  return (
    <>
    {
    isLargerThan800? <SideDashboard/> :  <AppDrawer/>
 }
    </>
   
  )
}

export default Sidebar;
