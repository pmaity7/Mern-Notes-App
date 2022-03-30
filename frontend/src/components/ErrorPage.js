import React from "react";
import { Alert } from "@mui/material";

function ErrorPage({ title, type }) {
  return (
    <Alert
      severity={type}
      sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
    >
      {title}
    </Alert>
  );
}

export default ErrorPage;
