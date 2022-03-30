import React, { useEffect, useState } from "react";
import MainScreen from "../../MainScreen";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./registerScreen.css";
import Loading from "../../Loading";
import ErrorPage from "../../ErrorPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userAction";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [picMessage, setPicMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const picHandler = (pics) => {
    console.log(pics);
    if (!pics) {
      setPicMessage("Upload a pic");
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notes-app");
      data.append("cloud_name", "dlnaagz9h");
      fetch("https://api.cloudinary.com/v1_1/dlnaagz9h/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url);
          setPic(data.url.toString());
        })
        .catch((err) => console.log(err));
    } else {
      setPicMessage("Please select an image");
    }
  };

  async function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPicMessage("Password and Confirm Password do not match");
      console.log("works");
    } else {
      dispatch(register(name, email, password, pic));
      navigate("/login");
    }
  }

  return (
    <div>
      <MainScreen title="Register">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50%" },
          }}
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <div className="container">
            {error && <ErrorPage title={error} type="error" />}
            {picMessage && <ErrorPage title={picMessage} type="error" />}
            {loading && <Loading />}
            <TextField
              required
              id="outlined-required"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <TextField
              required
              id="outlined-required"
              label="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password"
            />
            <TextField
              id="outlined"
              label="Profile pic"
              type="file"
              onChange={(e) => picHandler(e.target.files[0])}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <Button
              variant="contained"
              type="submit"
              className="form-button"
              sx={{ m: 1 }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Box>
      </MainScreen>
    </div>
  );
}

export default RegisterScreen;
