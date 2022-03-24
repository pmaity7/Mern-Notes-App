import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              component="a"
              sx={{ flexGrow: 1, textDecoration: "none" }}
              href="#"
            >
              Notes App
            </Typography>

            <Button color="inherit" href="#">
              My Notes
            </Button>

            <Menu />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
