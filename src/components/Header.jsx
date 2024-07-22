import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Slider,
  Typography,
} from "@mui/material";
import "../App.css";
import HeroImg from "../assets/image/hero-img.jpg";
import Images_Slider from "../components/Slider"
import Note from "../assets/image/Note.svg";
import Visit from "../assets/image/start-visit.png";

import { Autoplay } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Login = () => {

  const [isLoggedIn, setIsLoggedIn] =useState(false)

  useEffect(() => {
    const token =localStorage.getItem("TOKEN")
    if (token){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[])

  let navigate = useNavigate();
  const routeChange = ()=>{
    let path ='/login';
    navigate(path)
  }

  return (
    <>
      {/* header section */}
      <Box
        sx={{
          borderBottom:"1px solid rgba(6, 31, 47, 0.5)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
              margin: "1rem auto",
            }}
          >
            <Box>
              <Typography>Logo</Typography>
            </Box>
            <Box>
              <List
                sx={{
                  display: "flex",
                  "& .MuiListItem-root": {
                    padding: 0,
                  },
                  "& a": {
                    color: "#061f2f",
                    letterSpacing: 0,
                    padding: ".5rem 1rem",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    transition: "opacity 0.2s cubic-bezier(.215,.61,.355,1)",
                    listStyleType: "none",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <Link>Features</Link>
                <Link>How it Works</Link>
                <Link>Pricing</Link>
                <Link>About Us</Link>
                <Button
                onClick={routeChange}
                  sx={{
                    borderRadius: "8px",
                    marginLeft: "8px",
                    padding: "1rem 1.5rem",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#061f2f",
                    border: "1px solid #061f2f",
                    textTransform: "capitalize",
                    transition: "background-color 0.2s, color 0.2s",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                 {isLoggedIn ? "Log out" : "Log in"}
                </Button>
                <Button
                  sx={{
                    borderRadius: "8px",
                    marginLeft: "8px",
                    padding: "1rem 1.5rem",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#061f2f",
                    background: "#d9c7ff",
                    textTransform: "capitalize",
                    transition: "background-color 0.2s, color 0.2s",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                  Try for Free
                </Button>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* header section */}

      {/* hero section */}
      <Box sx={{ marginTop: "5rem", paddingBottom: '5rem', }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  maxWidth: "24rem",
                }}
              >
                <Typography
                  sx={{
                    marginTop: 0,
                    marginBottom: 0,
                    fontSize: "4rem",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    paddingBottom: "20px",
                  }}
                  variant="h1"
                >
                  We’ll do your SOAP notes
                </Typography>
                <Typography
                  sx={{
                    letterSpacing: "-0.01em",
                    fontSize: "1.25rem",
                    color: "#061f2f",
                    marginBottom: "15px",
                    lineHeight: "30px",
                  }}
                  variant="h1"
                >
                  Freed listens, transcribes and writes medical notes for you.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    sx={{
                      width: "170px",
                      borderRadius: "8px",
                      padding: "1rem 1.5rem",
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      lineHeight: 1,
                      color: "#061f2f",
                      background: "#d9c7ff",
                      textTransform: "capitalize",
                      transition: "background-color 0.2s, color 0.2s",
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                    }}
                  >
                    Try for Free
                  </Button>
                  <Typography
                    sx={{
                      color: "#061f2f",
                      opacity: 0.5,
                      fontSize: "12px",
                      marginTop: "10px",
                      marginLeft: "10px",
                    }}
                    variant="span"
                  >
                    No credit card needed
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  "& img": {
                    width: "100%",
                    height: "auto",
                  },
                }}
              >
                <img src={HeroImg} alt="heroImg" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* hero section */}

      {/* slider section */}
      <Box sx={{
        background: "#fff",
      }}>
        <Box sx={{ paddingBottom: "75px", }}>
          <Container maxWidth="xl">
            <Box sx={{
              paddingTop: "75px",
              textAlign: 'center',
              paddingBottom: '20px',
            }}>
              <Typography sx={{
                fontSize: "48px",
                color: '#061f2f',
                fontWeight: '400',
                marginBottom: '5px',
              }} variant="h1">Loved by over 10,000 clinicians</Typography>
              <Typography sx={{
                fontSize: "20px",
                color: '#061f2f',
                fontWeight: '400',
              }} variant="p">(and their families)</Typography>
            </Box>
          </Container>
          <Box>
            <Images_Slider />
            <Box sx={{
              textAlign: 'center',
            }}>
              <Button
                sx={{
                  borderRadius: "8px",
                  marginLeft: "8px",
                  padding: "1rem 1.5rem",
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  color: "#061f2f",
                  background: "#d9c7ff",
                  textTransform: "capitalize",
                  transition: "background-color 0.2s, color 0.2s",
                  marginTop: '10px',
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#d9c7ff",
                  },
                }}
              >
                View More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* slider section */}

      {/* Instant clinical Card section */}
      <Box sx={{
        paddingY: '100px',
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ fontSize: "48px", color: "#061f2f", fontWeight: "400", textAlign: 'left', marginBottom: '50px' }}>
              Instant clinical notes tailored to you
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ background: '#fff', borderRadius: '16px', padding: '20px' }}>
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",

                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <img src={Note} alt="Note" />
                </Box>
                <Typography sx={{ fontSize: "20px", color: "#061f2f", fontWeight: "600", textAlign: 'left', marginBottom: '10px', marginTop: '30px' }}>Notes in your style, 10x faster</Typography>
                <Typography sx={{ fontSize: "20px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>Freed learns your style and format, with every edit. Get customized clinical notes in moments, not hours.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ background: '#fff', borderRadius: '16px', padding: '20px' }}>
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",

                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <img src={Note} alt="Note" />
                </Box>
                <Typography sx={{ fontSize: "20px", color: "#061f2f", fontWeight: "600", textAlign: 'left', marginBottom: '10px', marginTop: '30px' }}>Notes in your style, 10x faster</Typography>
                <Typography sx={{ fontSize: "20px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>Freed learns your style and format, with every edit. Get customized clinical notes in moments, not hours.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ background: '#fff', borderRadius: '16px', padding: '20px' }}>
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",

                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <img src={Note} alt="Note" />
                </Box>
                <Typography sx={{ fontSize: "20px", color: "#061f2f", fontWeight: "600", textAlign: 'left', marginBottom: '10px', marginTop: '30px' }}>Notes in your style, 10x faster</Typography>
                <Typography sx={{ fontSize: "20px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>Freed learns your style and format, with every edit. Get customized clinical notes in moments, not hours.</Typography>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
      {/* Instant clinical Card section */}

      {/* simplicity Card section */}
      <Box sx={{
        paddingY: '100px',
        background: '#fff',
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ fontSize: "48px", color: "#061f2f", fontWeight: "400", textAlign: 'left', marginBottom: '50px' }}>
              Off the charts simplicity
            </Typography>
          </Box>
          <Grid container spacing={2} >
            <Grid sx={{ paddingLeft: '0px' }} item xs={12} md={4}>
              <Box
                sx={{
                  width: "460px",
                  height: "330px",

                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: 'cover',
                    borderRadius: '.5rem',
                  },
                }}
              >
                <img src={Visit} alt="visit-img" />
              </Box>
              <Box sx={{
                paddingTop: '20px',
              }}>
                <Typography variant="h1" sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#061f2f',
                  marginBottom: '5px',

                }}>1. Capture</Typography>
                <Typography sx={{
                  lineHeight: 1.4,
                  color: '#061f2f',
                  fontSize: '20px',
                  fontWeight: 500,
                }} variant="p">Select “Capture visit”’ when your visit begins. Freed can listen for up to two hours, whether it's a virtual or office visit.</Typography>
              </Box>
            </Grid>
            <Grid sx={{ paddingLeft: '0px' }} item xs={12} md={4}>
              <Box
                sx={{
                  width: "460px",
                  height: "330px",

                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: 'cover',
                    borderRadius: '.5rem',
                  },
                }}
              >
                <img src={Visit} alt="visit-img" />
              </Box>
              <Box sx={{
                paddingTop: '20px',
              }}>
                <Typography variant="h1" sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#061f2f',
                  marginBottom: '5px',

                }}>2. Edit</Typography>
                <Typography sx={{
                  lineHeight: 1.4,
                  color: '#061f2f',
                  fontSize: '20px',
                  fontWeight: 500,
                }} variant="p">Select “End visit” and view your completed SOAP note in about a minute. Edit to help Freed learn your style.</Typography>
              </Box>
            </Grid>
            <Grid sx={{ paddingLeft: '0px' }} item xs={12} md={4}>
              <Box
                sx={{
                  width: "460px",
                  height: "330px",

                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: 'cover',
                    borderRadius: '.5rem',
                  },
                }}
              >
                <img src={Visit} alt="visit-img" />
              </Box>
              <Box sx={{
                paddingTop: '20px',
              }}>
                <Typography variant="h1" sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#061f2f',
                  marginBottom: '5px',

                }}>3. Sign off</Typography>
                <Typography sx={{
                  lineHeight: 1.4,
                  color: '#061f2f',
                  fontSize: '20px',
                  fontWeight: 500,
                }} variant="p">Send simple patient instructions, and copy completed notes into any EHR.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{
          textAlign: 'center',
        }}>
          <Button
            sx={{
              borderRadius: "8px",
              marginLeft: "8px",
              padding: "1rem 1.5rem",
              fontSize: "1.125rem",
              fontWeight: 500,
              lineHeight: 1,
              color: "#061f2f",
              background: "#d9c7ff",
              textTransform: "capitalize",
              transition: "background-color 0.2s, color 0.2s",
              marginTop: '10px',
              "&:hover": {
                backgroundColor: "#000",
                color: "#d9c7ff",
              },
            }}
          >
            Try a Live Demo
          </Button>
        </Box>
      </Box>
      {/* simplicity Card section */}



      {/* Instant clinical Card section */}
      <Box sx={{
        paddingY: '100px',
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ fontSize: "48px", color: "#061f2f", fontWeight: "400", textAlign: 'center', marginBottom: '50px' }}>
              Pricing
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ background: '#fff', borderRadius: '16px', padding: '20px', height: '285px', }}>
                <Typography sx={{ fontSize: "32px", color: "#061f2f", fontWeight: "500", textAlign: 'left', marginBottom: '0px', }}>Trail</Typography>
                <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>Free</Typography>
                <Box sx={{ marginY: '10px', }}>
                  <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>10 free visits</Typography>
                  <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>Cancel anytime</Typography>
                </Box>
                <Button
                  sx={{
                    marginTop: '20px',
                    borderRadius: "8px",
                    padding: "1rem 1.5rem",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#061f2f",
                    background: "#d9c7ff",
                    textTransform: "capitalize",
                    transition: "background-color 0.2s, color 0.2s",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                  Try for Free
                </Button>
                <Typography sx={{ fontSize: "15px", color: "#061f2f", fontWeight: "500", textAlign: 'left', opacity: '0.5', marginTop: '15px' }}>No credit card needed</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ background: '#fff', borderRadius: '16px', padding: '20px', height: '285px', }}>
                <Typography sx={{ fontSize: "32px", color: "#061f2f", fontWeight: "500", textAlign: 'left', marginBottom: '0px', }}>Individual</Typography>
                <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', marginBottom: '10px', }}>$99 / month</Typography>

                <Box sx={{ marginY: '10px', }}>
                  <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>10 free visits</Typography>
                  <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>Unlimited visits</Typography>
                </Box>
                <Button
                  sx={{
                    borderRadius: "8px",
                    marginTop: '20px',
                    padding: "1rem 1.5rem",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#061f2f",
                    background: "#d9c7ff",
                    textTransform: "capitalize",
                    transition: "background-color 0.2s, color 0.2s",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                  Try for Free
                </Button>

                <Typography sx={{ fontSize: "15px", color: "#061f2f", fontWeight: "500", textAlign: 'left', opacity: '0.5', marginTop: '15px' }}>No credit card needed</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ background: '#fff', borderRadius: '16px', padding: '20px', height: '285px', }}>
                <Typography sx={{ fontSize: "32px", color: "#061f2f", fontWeight: "500", textAlign: 'left', marginBottom: '0px', }}>Group</Typography>
                <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', marginBottom: '10px', }}>Custom pricing</Typography>
                <Box sx={{ marginY: '10px', }}>
                  <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>License management
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#061f2f", fontWeight: "500", textAlign: 'left', }}>Organization-wide BAA</Typography>
                </Box>
                <Button
                  sx={{
                    borderRadius: "8px",
                    marginTop: '20px',
                    padding: "1rem 1.5rem",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#061f2f",
                    background: "#d9c7ff",
                    textTransform: "capitalize",
                    transition: "background-color 0.2s, color 0.2s",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
            <Typography variant="h1" sx={{ fontSize: "16px", color: "#061f2f", fontWeight: "600", textAlign: 'center', }}>
              We're dedicated to making Freed accessible to all aspiring clinicians. If you're a student or trainee, please contact us for a discount.
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* Instant clinical Card section */}

    </>
  );
};

export default Login;
