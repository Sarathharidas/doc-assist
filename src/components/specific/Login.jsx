import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { signInWithGoogle } from "../services/firebase";
import { app } from "../../services/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useFormik } from "formik";
import { loginSchema } from "../../validation_schema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//import Loader from "../common/Loader";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);

        if (result.user.accessToken) {
          localStorage.setItem(
            "token",
            JSON.stringify(result.user.accessToken)
          );

          localStorage.setItem("userId", result.user.uid);

          const userInfo = {
            email: result.email,
            displayName: result.displayName,
            uid: result.user.uid,
          };
          localStorage.setItem("user", JSON.stringify(userInfo));
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-credential.") {
          console.log(error.message);
          toast.error("Invalid Email Or Password. Please Try Again");
        }
      });
  };

  const logIn = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: ({ email, password }) => {
      // Create a new user with email and password using firebase
      
      signInWithEmailAndPassword(auth, email, password)
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
            navigate("/");
          }
        })
        .catch((error) => {
         
          if (error.message === "Firebase: Error (auth/invalid-credential).") {
            toast.error("Invalid email or password. Please try again");
          }
        });
      // .catch((users,password) => {
      //     if (password !== users.passwordHash) {
      //        toast.error("Invalid password. Please try again")
      //      }
      //   })
    },
  });

 return (
    <>
      <Box sx={{ position: "relative", background: "#1976d2", padding: "10px" }}>
        <Typography sx={{ color: "#fff", fontSize: "25px" }} onClick={() => navigate("/")}>Freed</Typography>
        
      </Box>
      <Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "340px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#000",
                  marginBottom: "15px",
                }}
                variant="h1"
              >
                Welcome Back
              </Typography>
            </Box>
            <Button
              onClick={handleLogin}
              sx={{
                borderRadius: "4px",
                display: "flex",
                gap: "8px",
                border: "1px solid #d3d3d3 !important",
                textTransform: "capitalize",
                color: "#808080",
                width: "100%",
                marginBottom: "15px",
                textTransform: "none",
              }}
            >
              <svg
                className="c-eSSyNk"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="21px"
                height="21px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign in with Google
            </Button>
            <Box component='form' noValidate onSubmit={logIn.handleSubmit}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    marginBottom: "15px",
                    gap: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      border: "1px solid #d3d3d357",
                      width: "100%",
                      height: "0.1px #d3d3d369",
                    }}
                  ></Typography>
                  <Typography>OR</Typography>
                  <Typography
                    sx={{
                      border: "1px solid #d3d3d357",
                      width: "100%",
                      height: "0.1px #d3d3d369",
                    }}
                  ></Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "15px",
                  "& input": {
                    width: "307px",
                    padding: "10px 15px",
                    color: "#808080",
                    background: "transparent",
                    fontSize: '13px',
                  },
                }}
              >
                <TextField
                  placeholder="Email"
                  name="email"
                  autoComplete="email"
                  value={logIn.values.email}
                  onChange={logIn.handleChange}
                  onBlur={logIn.handleBlur}
                  error={logIn.errors.email && logIn.touched.email}
                  helperText={(logIn.errors.email && logIn.touched.email) && logIn.errors.email}
                  FormHelperTextProps={{ sx: { ml: 0, fontSize: 13 } }}
                />

                <TextField
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={logIn.values.password}
                  onChange={logIn.handleChange}
                  onBlur={logIn.handleBlur}
                  error={logIn.errors.password && logIn.touched.password}
                  helperText={(logIn.errors.password && logIn.touched.password) && logIn.errors.password}
                  FormHelperTextProps={{ sx: { ml: 0, fontSize: 13 } }}
                />
              </Box>

              <Box>
                <Button
                  type="submit"
                  sx={{
                    width: "100%",
                    fontWeight: "500",
                    background: "#115293",
                    color: "#fff",
                    marginTop: "15px",
                    marginBottom: "15px",
                    '&:hover': {
                      background: "#115293",
                    },
                  }}
                >
                 Sign in
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "4px",
                "& a": {
                  color: "#808080",
                  fontSize: "15px",
                },
                "& a:hover": {
                  color: "#a9a9a9",
                },
              }}
            >
              <Link to="##">{`Forgot your password?`}</Link>
              <Link to={"/signup"}>{`Don't have an account? Sign up`}</Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Login;

