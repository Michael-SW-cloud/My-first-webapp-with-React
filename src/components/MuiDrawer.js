import { Drawer, Box, Typography, IconButton } from "@mui/material";

import { TfiAlignJustify } from "react-icons/tfi";
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
            <Typography variant="h6" component="div">
              Side Panel
            </Typography>
          </Box>
        </Drawer>
      </>
    );
}
export default MuiDrawer;