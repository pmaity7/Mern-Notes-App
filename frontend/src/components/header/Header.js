import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
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
              component="div"
              sx={{ flexGrow: 1, textDecoration: "none" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Notes App
              </Link>
            </Typography>
            {userInfo && (
              <>
                <Button color="inherit">
                  <Link to="/mynotes" style={{ textDecoration: "none" }}>
                    My Notes
                  </Link>
                </Button>
                <Menu />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
