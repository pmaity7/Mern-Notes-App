import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Copyright &copy; Notes App
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}

export default Footer;
