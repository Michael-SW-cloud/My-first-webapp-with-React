import { Drawer, Box, Typography, IconButton, MenuItem, ListItem, ListItemIcon } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";
import HomePage from "./HomePage";
import Settings from "./Settings";
import { useState } from "react";
const MuiDrawer = () => {
    const [isDrwaerOpen,setIsDrwerOpen] =useState(false)
    return (
      <>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => setIsDrwerOpen(true)}
        >
          <TfiAlignJustify />
        </IconButton>
        <Drawer
          anchor="left"
          open={isDrwaerOpen}
          onClose={() => setIsDrwerOpen(false)}
        >
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <div className="div-nav-element">
              <Link to="/">Dashboard</Link>
            </div>
            <div className="div-nav-element">
              <Link to="/Setting"> Settings</Link>
            </div>
          </Box>
        </Drawer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Setting" element={<Settings />} />
        </Routes>
        ;
      </>
    );
}
export default MuiDrawer;