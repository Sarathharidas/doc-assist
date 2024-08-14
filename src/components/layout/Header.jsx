import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "../../App.css";
import HeroImg from "../../assets/image/hero-img.jpg";
import Images_Slider from "../common/Slider";
import Logo from "../../assets/image/logo.png";
import Footer from "./Footer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { clinicalCardContent, simplicityCardContent } from "../../constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");

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
    setDrawerOpen(false);
  };

  const handleTryFree = () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      navigate("/record");
    } else {
      navigate("/login");
    }
    setDrawerOpen(false);
  };

  const buttonConfigs = [
    {
      text: isLoggedIn ? "Log out" : "Log in",
      onClick: routeChange,
      backgroundColor: "transparent",
      borderColor: "#061f2f",
      hoverBackgroundColor: "#000",
      hoverTextColor: "#fff",
      ariaLabel: isLoggedIn ? "Log out" : "Log in",
    },
    {
      text: "Try for Free",
      onClick: handleTryFree,
      backgroundColor: "#d9c7ff",
      borderColor: "transparent",
      hoverBackgroundColor: "#000",
      hoverTextColor: "#fff",
      ariaLabel: "Try for Free",
    },
  ];

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
              <img style={{ width: "150px" }} src={Logo} alt="Logo" />
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
                {buttonConfigs?.map((headerButton, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={headerButton?.onClick}
                      sx={{
                        borderRadius: "8px",
                        marginLeft: "8px",
                        padding: "1rem 1.5rem",
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        lineHeight: 1,
                        color: "#061f2f",
                        backgroundColor: headerButton.backgroundColor,
                        border: `1px solid ${headerButton.borderColor}`,
                        textTransform: "capitalize",
                        transition: "background-color 0.2s, color 0.2s",
                        "&:hover": {
                          backgroundColor: headerButton.hoverBackgroundColor,
                          color: headerButton.hoverTextColor,
                        },
                        "@media (max-width: 767px)": {
                          display: "none",
                        },
                      }}
                    >
                      {headerButton?.text}
                    </Button>
                  );
                })}
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
          marginY: "40px",
          marginBottom: "0px",
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
                  We’ll do your patient notes
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
          paddingY: "40px",
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
          <Grid container spacing={2} alignItems={{ md: "stretch" }}>
            {clinicalCardContent?.map((clinicCardData) => {
              return (
                <Grid item xs={12} md={4} sm={6}>
                  <Box
                    sx={{
                      background: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
                      padding: "20px",
                      "@media (max-width: 1100px)": {
                        minHeight: "289px",
                      },
                      "@media (max-width: 991px)": {
                        minHeight: "325px",
                      },
                      "@media (max-width: 899px)": {
                        minHeight: "205px",
                      },
                      "@media (max-width: 767px)": {
                        minHeight: "325px",
                      },
                      "@media (max-width: 599px)": {
                        minHeight: "auto",
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
                      <img
                        src={clinicCardData?.logo}
                        alt={clinicCardData?.name}
                      />
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
                      {clinicCardData?.head}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#061f2f",
                        fontWeight: "500",
                        textAlign: "left",
                        minHeight: "135px",
                        "@media (max-width: 991px)": {
                          minHeight: "95px",
                        },
                        "@media (max-width: 575px)": {
                          fontSize: "15px",
                        },
                        "@media (max-width: 767px)": {
                          minHeight: "135px",
                        },
                        "@media (max-width: 599px)": {
                          minHeight: "auto",
                        },
                      }}
                    >
                      {clinicCardData?.content}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      {/* Instant clinical Card section */}

      {/* simplicity Card section */}
      <Box
        sx={{
          paddingY: "40px",
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
            {simplicityCardContent?.map((cardContent) => {
              return (
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
                    <img src={cardContent?.logo} alt={cardContent?.name} />
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
                          fontSize: "16px",
                        },
                      }}
                    >
                      {cardContent?.head}
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: 1.4,
                        color: "#061f2f",
                        fontSize: "18px",
                        fontWeight: 500,
                        "@media (max-width: 575px)": {
                          fontSize: "15px",
                        },
                      }}
                      variant="p"
                    >
                      {cardContent?.content}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Box
          sx={{
            textAlign: "center",
            display: "none",
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
      {isMobile ? (
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            zIndex: 0,
            "& .MuiModal-backdrop": {
              backgroundColor: "transparent",
            },
            "& .MuiDrawer-paper": {
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              borderRadius: "0px",
              top: "90px",
              boxShadow: "none",
            },
          }}
        >
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
            {buttonConfigs?.map((headerButton, index) => {
              return (
                <Button
                  key={index}
                  onClick={headerButton?.onClick}
                  sx={{
                    borderRadius: "8px",
                    marginLeft: "8px",
                    padding: "1rem 1.5rem",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#061f2f",
                    backgroundColor: headerButton.backgroundColor,
                    border: `1px solid ${headerButton.borderColor}`,
                    textTransform: "capitalize",
                    transition: "background-color 0.2s, color 0.2s",
                    width: "80%",
                    "&:hover": {
                      backgroundColor: headerButton.hoverBackgroundColor,
                      color: headerButton.hoverTextColor,
                    },
                  }}
                >
                  {headerButton?.text}
                </Button>
              );
            })}
          </Box>
        </Drawer>
      ) : null}

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

export default Header;
