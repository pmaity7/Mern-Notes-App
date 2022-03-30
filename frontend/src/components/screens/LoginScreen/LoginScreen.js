import React, { useEffect, useState } from "react";
import MainScreen from "../../MainScreen";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./LoginScreen.css";
import Loading from "../../Loading";
import ErrorPage from "../../ErrorPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userAction";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  async function submitHandler(e) {
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/mynotes");
  }
  return (
    <div>
      <MainScreen title="Login">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50%" },
          }}
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <div className="container">
            {loading && <Loading />}
            {error && <ErrorPage title={error} type="error" />}
            <TextField
              required={true}
              id="outlined-required"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <TextField
              required={true}
              id="outlined-required"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <br />
            <Button
              variant="contained"
              type="submit"
              className="form-button"
              sx={{ m: 1 }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </MainScreen>
    </div>
  );
}

export default LoginScreen;
