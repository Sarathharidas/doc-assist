import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import "../../App.css";
import HeroImg from "../../assets/image/hero-img.jpg";
import Images_Slider from "../common/Slider";
import Note from "../../assets/image/Note.svg";
import Work from "../../assets/image/Work.svg";
import Easy from "../../assets/image/Easy.svg";
import Visit from "../../assets/image/start-visit.png";
import Logo from "../../assets/image/logo.png";
import Footer from "./Footer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userId");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.clear();
    } else {
      let path = "/login";
      navigate(path);
    }
  };

  const handleTryFree = () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      navigate("/record");
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      {/* header section */}
      <Box
        sx={{
          borderBottom: "1px solid rgba(6, 31, 47, 0.5)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
              margin: "0.5rem auto",
            }}
          >
            <Box>
              <Typography>
                <img style={{ width: "150px" }} src={Logo} alt="Logo" />
              </Typography>
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
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
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
                    "@media (max-width: 767px)": {
                      display: "none",
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
                    "@media (max-width: 767px)": {
                      display: "none",
                    },
                  }}
                  onClick={handleTryFree}
                >
                  Try for Free
                </Button>
                <IconButton
                  onClick={() => setDrawerOpen(!drawerOpen)}
                  sx={{
                    display: "none",
                    borderRadius: "8px",
                    marginLeft: "8px",
                    fontWeight: 500,
                    fontSize: "0px",
                    color: "#061f2f",
                    border: "1px solid #061f2f",
                    textTransform: "capitalize",
                    transition: "background-color 0.2s, color 0.2s",
                    "@media (max-width: 767px)": {
                      display: "block",
                    },
                  }}
                >
                  {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* header section */}

      {/* hero section */}
      <Box
        sx={{
          marginY: "80px",
          "@media (max-width: 1199px)": {
            marginTop: "20px",
            paddingBottom: "20px",
            marginBottom: "20px",
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            sx={{
              "@media (max-width: 575px)": {
                width: "inherit",
                marginLeft: "inherit",
                display: "inherit",
                WebkitBoxPack: "inherit",
              },
            }}
            container
            spacing={2}
            justifyContent="space-between"
          >
            <Grid
              sx={{
                "@media (max-width: 575px)": {
                  paddingLeft: "0px !important",
                  paddingTop: "0px !important",
                },
              }}
              item
              xs={12}
              lg={6}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                  "@media (max-width: 1199px)": {
                    maxWidth: "100%",
                    marginTop: "15px",
                    marginBottom: "25px",
                  },
                  "@media (max-width: 575px)": {
                    marginTop: "35px",
                    marginBottom: "25px",
                  },
                }}
              >
                <Typography
                  sx={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "40px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    paddingBottom: "20px",
                    "@media (max-width: 1199px)": {
                      fontSize: "48px",
                    },
                    "@media (max-width: 991px)": {
                      fontSize: "43px",
                    },
                    "@media (max-width: 575px)": {
                      fontSize: "25px",
                    },
                  }}
                  variant="h1"
                >
                  We’ll do your SOAP notes
                </Typography>
                <Typography
                  sx={{
                    letterSpacing: "-0.2px",
                    fontSize: "19px",
                    color: "#061f2f",
                    marginBottom: "15px",
                    lineHeight: "30px",
                  }}
                  variant="h1"
                >
                  Doctor-assist listens, transcribes and writes medical notes
                  for you.
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
                      padding: "16px 24px",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "18px",
                      color: "#061f2f",
                      background: "#d9c7ff",
                      textTransform: "capitalize",
                      transition: "background-color 0.2s, color 0.2s",
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                      "@media (max-width: 575px)": {
                        width: "100%",
                      },
                    }}
                    onClick={handleTryFree}
                  >
                    Try for Free
                  </Button>
                  <Typography
                    sx={{
                      color: "#061f2f",
                      opacity: 0.5,
                      fontSize: "12px",
                      marginTop: "10px",
                      marginLeft: "4px",
                    }}
                    variant="span"
                  >
                    No credit card needed
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              sx={{
                paddingTop: "0px !important",
                paddingLeft: "0px !important",
              }}
              item
              xs={12}
              lg={5}
            >
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
      <Box
        sx={{
          background: "#fff",
          display: "none",
        }}
      >
        <Box
          sx={{
            paddingBottom: "75px",
            display: "block",
            "@media (max-width: 1199px)": {
              paddingBottom: "10px",
            },
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                paddingTop: "75px",
                textAlign: "center",
                paddingBottom: "20px",
                "@media (max-width: 1199px)": {
                  paddingTop: "0px",
                  paddingBottom: "50px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "48px",
                  color: "#061f2f",
                  fontWeight: "400",
                  marginBottom: "5px",
                  "@media (max-width: 1199px)": {
                    fontSize: "48px",
                  },

                  "@media (max-width: 991px)": {
                    fontSize: "43px",
                  },

                  "@media (max-width: 575px)": {
                    fontSize: "34px",
                  },
                }}
                variant="h1"
              >
                Loved by over 10,000 clinicians
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#061f2f",
                  fontWeight: "400",
                }}
                variant="p"
              >
                (and their families)
              </Typography>
            </Box>
          </Container>
          <Box>
            {/* slider section */}
            <Images_Slider />
            <Box
              sx={{
                textAlign: "center",
              }}
            >
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
                  marginTop: "10px",
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

      {/* Instant clinical Card section */}
      <Box
        sx={{
          background: "#d9c7ff",
          paddingY: "80px",
          "@media (max-width: 1199px)": {
            paddingY: "50px",
          },
          "@media (max-width: 991px)": {
            paddingY: "20px",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "40px",
                color: "#061f2f",
                fontWeight: "500",
                textAlign: "left",
                marginBottom: "30px",
                "@media (max-width: 1199px)": {
                  fontSize: "48px",
                },

                "@media (max-width: 991px)": {
                  fontSize: "43px",
                },

                "@media (max-width: 575px)": {
                  fontSize: "25px",
                },
              }}
            >
              Instant Clinical Notes Tailored To You
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} sm={6}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
                  height: "240px",
                  "@media (max-width: 1199px)": {
                    height: "280px",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "65px",
                    height: "65px",
                    paddingBottom: "20px",

                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <img src={Note} alt="Note" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#061f2f",
                    fontWeight: "600",
                    textAlign: "left",
                    marginBottom: "5px",
                    "@media (max-width: 575px)": {
                      fontSize: "16px",
                    },
                  }}
                >
                  Notes in your style, 10x faster
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                >
                  Doctor-assist learns your style and format, with every edit.
                  Get customized clinical notes in moments, not hours.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
                  height: "240px",
                  "@media (max-width: 1199px)": {
                    height: "270px",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "65px",
                    height: "65px",
                    paddingBottom: "20px",

                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <img src={Work} alt="Work" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#061f2f",
                    fontWeight: "600",
                    textAlign: "left",
                    marginBottom: "5px",
                    "@media (max-width: 575px)": {
                      fontSize: "16px",
                    },
                  }}
                >
                  Works in every setting
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                >
                  Capture notes accurately for any specialty visit up to 2
                  hours, be it virtual or in office, even if it’s noisy.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
                  height: "240px",
                  "@media (max-width: 1199px)": {
                    height: "270px",
                  },
                }}
              >
                <Box
                  sx={{
                    paddingBottom: "20px",
                    width: "65px",
                    height: "65px",

                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <img src={Easy} alt="Easy" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#061f2f",
                    fontWeight: "600",
                    textAlign: "left",
                    marginBottom: "5px",
                    "@media (max-width: 575px)": {
                      fontSize: "16px",
                    },
                  }}
                >
                  Easy to use
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                >
                  Copy and paste into your “favorite” EHR. Support your patient
                  with easy to follow patient instructions.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Instant clinical Card section */}

      {/* simplicity Card section */}
      <Box
        sx={{
          paddingY: "80px",
          background: "#fff",
          "@media (max-width: 1199px)": {
            paddingY: "50px",
          },
          "@media (max-width: 991px)": {
            paddingY: "20px",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "40px",
                color: "#061f2f",
                fontWeight: "400",
                textAlign: "left",
                marginBottom: "30px",
                "@media (max-width: 1199px)": {
                  fontSize: "48px",
                },

                "@media (max-width: 991px)": {
                  fontSize: "43px",
                },

                "@media (max-width: 575px)": {
                  fontSize: "25px",
                  marginBottom: "25px",
                },
              }}
            >
              Off the charts simplicity
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid sx={{ paddingLeft: "0px" }} item xs={12} md={4} sm={6}>
              <Box
                sx={{
                  width: "auto",
                  height: "auto",

                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: ".5rem",
                  },
                  "@media (max-width: 1199px)": {
                    width: "auto",
                    height: "auto",
                  },
                }}
              >
                <img src={Visit} alt="visit-img" />
              </Box>
              <Box
                sx={{
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#061f2f",
                    marginBottom: "5px",
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                >
                  1. Capture
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.4,
                    color: "#061f2f",
                    fontSize: "20px",
                    fontWeight: 500,
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                  variant="p"
                >
                  {`Select “Capture visit”’ when your visit begins. Doctor-assist can
                  listen for up to two hours, whether it's a virtual or office
                  visit.`}
                </Typography>
              </Box>
            </Grid>
            <Grid sx={{ paddingLeft: "0px" }} item xs={12} md={4} sm={6}>
              <Box
                sx={{
                  width: "auto",
                  height: "auto",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: ".5rem",
                  },
                  "@media (max-width: 1199px)": {
                    width: "auto",
                    height: "auto",
                  },
                }}
              >
                <img src={Visit} alt="visit-img" />
              </Box>
              <Box
                sx={{
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#061f2f",
                    marginBottom: "5px",
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                >
                  2. Edit
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.4,
                    color: "#061f2f",
                    fontSize: "20px",
                    fontWeight: 500,
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                  variant="p"
                >
                  Select “End visit” and view your completed SOAP note in about
                  a minute. Edit to help Doctor-assist learn your style.
                </Typography>
              </Box>
            </Grid>
            <Grid sx={{ paddingLeft: "0px" }} item xs={12} md={4} sm={6}>
              <Box
                sx={{
                  width: "auto",
                  height: "auto",

                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: ".5rem",
                  },
                  "@media (max-width: 1199px)": {
                    width: "auto",
                    height: "auto",
                  },
                }}
              >
                <img src={Visit} alt="visit-img" />
              </Box>
              <Box
                sx={{
                  paddingTop: "20px",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#061f2f",
                    marginBottom: "5px",
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                >
                  3. Sign off
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.4,
                    color: "#061f2f",
                    fontSize: "20px",
                    fontWeight: 500,
                    "@media (max-width: 575px)": {
                      fontSize: "15px",
                    },
                  }}
                  variant="p"
                >
                  Send simple patient instructions, and copy completed notes
                  into any EHR.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
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
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "#000",
                color: "#d9c7ff",
              },
              "@media (max-width: 991px)": {
                marginTop: "40px",
              },
            }}
          >
            Try a Live Demo
          </Button>
        </Box>
      </Box>
      {/* simplicity Card section */}

      {/* Drawer for mobile-view */}
      <Drawer
        className="test010101"
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            borderRadius: "0px",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gap: "10px",
          }}
        >
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
              width: "80%",
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
              width: "80%",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
            onClick={handleTryFree}
          >
            Try for Free
          </Button>
        </Box>
      </Drawer>
      {/* Remove Instant clinical Card section or pricing section */}
      <Box
        sx={{
          display: "none",
          paddingY: "100px",
          "@media (max-width: 1199px)": {
            paddingY: "50px",
          },
          "@media (max-width: 991px)": {
            paddingY: "20px",
          },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "48px",
                color: "#061f2f",
                fontWeight: "400",
                textAlign: "center",
                marginBottom: "50px",
                "@media (max-width: 1199px)": {
                  fontSize: "48px",
                },
                "@media (max-width: 991px)": {
                  fontSize: "43px",
                },
                "@media (max-width: 575px)": {
                  fontSize: "34px",
                },
              }}
            >
              Pricing
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} sm={4}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  height: "285px",
                  boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
                  "@media (max-width: 575px)": {
                    height: "auto",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "32px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    marginBottom: "0px",
                  }}
                >
                  Trail
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  Free
                </Typography>

                <Box sx={{ marginY: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#061f2f",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    10 free visits
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#061f2f",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    Cancel anytime
                  </Typography>
                </Box>
                <Button
                  sx={{
                    marginTop: "20px",
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
                    "@media (max-width: 575px)": {
                      width: "100%",
                    },
                  }}
                  onClick={handleTryFree}
                >
                  Try for Free
                </Button>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    opacity: "0.5",
                    marginTop: "15px",
                    "@media (max-width: 575px)": {
                      textAlign: "center",
                    },
                  }}
                >
                  No credit card needed
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} sm={4}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  height: "285px",
                  boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
                  "@media (max-width: 575px)": {
                    height: "auto",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "32px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    marginBottom: "0px",
                  }}
                >
                  Individual
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    marginBottom: "10px",
                  }}
                >
                  $99 / month
                </Typography>

                <Box sx={{ marginY: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#061f2f",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    10 free visits
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#061f2f",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    Unlimited visits
                  </Typography>
                </Box>
                <Button
                  sx={{
                    borderRadius: "8px",
                    marginTop: "20px",
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
                    "@media (max-width: 575px)": {
                      width: "100%",
                    },
                  }}
                  onClick={handleTryFree}
                >
                  Try for Free
                </Button>

                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    opacity: "0.5",
                    marginTop: "15px",
                    "@media (max-width: 575px)": {
                      textAlign: "center",
                    },
                  }}
                >
                  No credit card needed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  height: "285px",
                  boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
                  "@media (max-width: 575px)": {
                    height: "auto",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "32px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    marginBottom: "0px",
                  }}
                >
                  Group
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#061f2f",
                    fontWeight: "500",
                    textAlign: "left",
                    marginBottom: "10px",
                  }}
                >
                  Custom pricing
                </Typography>
                <Box sx={{ marginY: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#061f2f",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    License management
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#061f2f",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    Organization-wide BAA
                  </Typography>
                </Box>
                <Button
                  sx={{
                    borderRadius: "8px",
                    marginTop: "20px",
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
                    "@media (max-width: 575px)": {
                      width: "100%",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </Box>
      {/* Instant clinical Card section */}
    </>
  );
};

export default Login;
