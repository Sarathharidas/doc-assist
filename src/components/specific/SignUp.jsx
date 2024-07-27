import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/firebase";
import { useState } from "react";
import { Signup_Schema } from "../../validation_schema";
//import Snackbar from "@material-ui/core/Snackbar";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const SignUp = () => {
  const [initialValues] = useState({ email: "", password: "" });
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const navigate = useNavigate();

  const SignUp = useFormik({
    initialValues,
    validationSchema: Signup_Schema,
    enableReinitialize: true,
    onSubmit: ({ email, password }) => {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          if (res?.user?.accessToken) {
            localStorage.setItem("token", JSON.stringify(res.user.accessToken));
            const userInfo = {
              email: res.email,
              displayName: res.displayName,
              uid: res.user.uid,
            };
            localStorage.setItem("userId", res.user.uid);
            localStorage.setItem("user", JSON.stringify(userInfo));
          }
          navigate("/record");
        })
        .catch((err) => console.log("Error => ", err));
    },
  });
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "400px",
              backgroundColor: "rgb(255, 255, 255)",
              color: "rgba(0, 0, 0, 0.87)",
              transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              borderRadius: "4px",
              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
              padding: "40px 56px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "1.5rem",
                lineHeight: 1.334,
                letterSpacing: "0em",
                textAlign: "center",
                margin: "32px",
              }}
              variant="h5"
            >
              Create Your Freed Account
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={SignUp.handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <TextField
                // sx={{
                //   width: '100%', padding: '6px 15px',
                //   border: '1px solid #d3d3d3',
                //   borderRadius: '4px',
                //   borderBottom: '0',
                //   fontSize: '14px',
                //   '&:hover': {
                //     borderBottom: '0px !important',
                //   },
                //   '&:before': {
                //     borderBottom: '1px solid #d3d3d3 !important',
                //   },
                //   '&:after': {
                //     borderBottom: '0px !important',
                //   },
                // }}
                placeholder="Email"
                name="email"
                autoComplete="email"
                value={SignUp.values.email}
                onChange={SignUp.handleChange}
                onBlur={SignUp.handleBlur}
                error={SignUp.errors.email && SignUp.touched.email}
                helperText={
                  SignUp.errors.email &&
                  SignUp.touched.email &&
                  SignUp.errors.email
                }
                FormHelperTextProps={{ sx: { ml: 0, fontSize: 13 } }}
              />

              <TextField
                // sx={{
                //   width: '100%', padding: '6px 15px',
                //   border: '1px solid #d3d3d3',
                //   borderRadius: '4px',
                //   borderBottom: '0',
                //   fontSize: '14px',
                //   '&:hover': {
                //     borderBottom: '0px !important',
                //   },
                //   '&:before': {
                //     borderBottom: '1px solid #d3d3d3 !important',
                //   },
                //   '&:after': {
                //     borderBottom: '0px !important',
                //   },
                // }}
                placeholder="Create Password"
                name="password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={SignUp.values.password}
                onChange={SignUp.handleChange}
                onBlur={SignUp.handleBlur}
                error={SignUp.errors.password && SignUp.touched.password}
                helperText={
                  SignUp.errors.password &&
                  SignUp.touched.password &&
                  SignUp.errors.password
                }
                FormHelperTextProps={{ sx: { ml: 0, fontSize: 13 } }}
              />

              <Button
                type="submit"
                sx={{
                  width: "100%",
                  background: "#d9c7ff",
                  borderColor: "#b7a8d9",
                  color: "#061f2f",
                  fontSize: "14px",
                }}
                disabled={!acceptPolicy}
              >
                CREATE ACCOUNT
              </Button>

              <Box
                sx={{
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                <Link
                  href="/login"
                  sx={{
                    color: "#808080",
                    fontSize: "14px",
                    textDecoration: "underline",
                    textDecorationColor: "#808080",
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Box>
              <Box>
                <FormControlLabel
                  sx={{
                    display: "contents",
                  }}
                  control={
                    <Checkbox
                      checked={acceptPolicy}
                      onChange={() => setAcceptPolicy((prev) => !prev)}
                    />
                  }
                  label={
                    <span>
                      I agree to the terms of{" "}
                      <Link component={RouterLink} to={"#"}>
                        Privacy Policy,
                      </Link>
                      <Link component={RouterLink} to={"#"}>
                        term of use and BAA.
                      </Link>
                    </span>
                  }
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#000000de",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Your data is protected with HIPAA-compliant encryption.
                </Typography>
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  borderTop: "1px solid #d3d3d3",
                  marginTop: "25px",
                }}
              >
                <Typography
                  sx={{
                    color: "#000000de",
                    fontSize: "14px",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "5px",
                  }}
                >
                  Do you want to try Freed without signing up?
                </Typography>
                <Link href="/freedpage">Try the Live Demo</Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
