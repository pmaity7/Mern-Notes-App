import { Container, Button } from "@mui/material";
import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="main">
      <Container>
        <div className="intro-text">
          <div>
            <h1 className="title">Welcome to Notes App</h1>
            <p className="subtitle">Keep all your notes in one single space.</p>
          </div>
          <div className="buttonContainer">
            <Button
              size="large"
              variant="contained"
              className="landingButton"
              href="/login"
            >
              Login
            </Button>
            <Button
              size="large"
              variant="contained"
              className="landingButton"
              href="/register"
            >
              Register
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;
