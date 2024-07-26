import Box from "@mui/material/Box";
import { Typography, Link } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Window from "../assets/image/windows-system-step1.png";
import Window_two from "../assets/image/windows-system-step2.png";
import Window_three from "../assets/image/windows-system-step3.png";
import Window_Four from "../assets/image/windows-system-step4.png";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { TextareaAutosize } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";
import SideBar from "../components/common/SideBar";
import Recorder from "../components/common/Recorder";
import { uploadAudio } from "../services/uploadAudio";

const FreedPage = () => {

  const handleSaveAudio = (data) => {
    console.log(data);
    uploadAudio(data?.blob, { patientName: data?.name })
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          background: "#1976d2",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "20px" }}>Freed</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            "& svg": { color: "#fff", filter: "none" },
          }}
        >
          <AddIcon />
          <ChatBubbleOutlineIcon />
          <AccountCircleIcon />
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <SideBar />

        <Box
          sx={{
            gridArea: "2 / 3 / 3 / 4",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            height: "calc(100vh - 50px)",
            width: "100%",
            position: "relative",
          }}
        >
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
            <Recorder getData={handleSaveAudio} />
          </Box>

          {/* ============================== End visit model ============================== */}
          <Box style={{ display: "none" }} sx={{ padding: "32px" }}>
            <Box>
              <Typography
                sx={{
                  // fontSize: '34px',
                  color: "#000000de",
                  margin: "0px 0px 0.35em",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "34px",
                  lineHeight: 1.235,
                  letterSpacing: "0.00735em",
                }}
                variant="h1"
              >
                Freed needs the microphone permission to capture visits
              </Typography>
              <Typography
                sx={{
                  // fontSize: '16px',
                  color: "#000000de",
                  margin: "0px 0px 5.6px",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: 1.5,
                  letterSpacing: "0.00938em",
                }}
                variant="p"
              >
                Please follow the steps below to allow Freed to access your
                microphone:
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "5px",
              }}
            >
              <Typography
                sx={{
                  margin: "0px",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.6,
                  letterSpacing: "0.0075em",
                }}
                variant="h3"
              >
                1. Use the Start menu to open Settings
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgba(0, 0, 0, 0.87)",
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  borderRadius: "4px",
                  boxShadow:
                    "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
                  display: "inline-block",
                  margin: "16px",
                }}
              >
                <img src={Window} alt="Window" />
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: "5px",
              }}
            >
              <Typography
                sx={{
                  margin: "0px",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.6,
                  letterSpacing: "0.0075em",
                }}
                variant="h3"
              >
                2. Click "Privacy"
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgba(0, 0, 0, 0.87)",
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  borderRadius: "4px",
                  boxShadow:
                    "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
                  display: "inline-block",
                  margin: "16px",
                }}
              >
                <img
                  style={{ maxWidth: "50vw" }}
                  src={Window_two}
                  alt="Window"
                />
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: "5px",
              }}
            >
              <Typography
                sx={{
                  margin: "0px",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.6,
                  letterSpacing: "0.0075em",
                }}
                variant="h3"
              >
                3. Click "Microphone" in the left navigation bar, then make sure
                that it says "Microphone access for this device is on" (click
                Change if it's Off)
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgba(0, 0, 0, 0.87)",
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  borderRadius: "4px",
                  boxShadow:
                    "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
                  display: "inline-block",
                  margin: "16px",
                }}
              >
                <img
                  style={{ maxWidth: "50vw" }}
                  src={Window_three}
                  alt="Window"
                />
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: "5px",
              }}
            >
              <Typography
                sx={{
                  margin: "0px",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.6,
                  letterSpacing: "0.0075em",
                }}
                variant="h3"
              >
                4. Scroll down and make sure that "Allow desktop apps to access
                your microphone" is On
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgba(0, 0, 0, 0.87)",
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  borderRadius: "4px",
                  boxShadow:
                    "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
                  display: "inline-block",
                  margin: "16px",
                }}
              >
                <img
                  style={{ maxWidth: "50vw" }}
                  src={Window_Four}
                  alt="Window"
                />
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  margin: "0px",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.6,
                  letterSpacing: "0.0075em",
                }}
              >
                5.
                <Link
                  sx={{
                    margin: "0px",
                    fontFamily: "inherit",
                    color: "rgb(25, 118, 210)",
                    textDecoration: "underline",
                    textDecorationColor: "rgba(25, 118, 210, 0.4)",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                >
                  Click here
                </Link>{" "}
                to start capturing a visit
              </Typography>
            </Box>
          </Box>
          {/* ============================== End visit model ============================== */}

          {/* ============================ Visit card Summary =============================== */}

          <Box
            style={{ display: "none" }}
            sx={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "rgba(0, 0, 0, 0.87)",
              boxShadow:
                "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
              position: "relative",
              transition: "margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              overflowAnchor: "none",
              borderRadius: "0px",
              margin: "25px",
              padding: "16px",
              width: "calc(100% - 100px)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "23px",
                letterSpacing: "0.00938em",
                color: "rgba(0, 0, 0, 0.87)",
                boxSizing: "border-box",
                cursor: "text",
                display: "inline-flex",
                WebkitBoxAlign: "center",
                alignItems: "center",
                position: "relative",
                gap: "8px",
              }}
            >
              Visit Summary{" "}
              <ErrorOutlineIcon
                sx={{
                  color: "#0000008a",
                  width: "15px",
                  height: "15px",
                }}
              />
            </Typography>

            <Box
              sx={{
                width: "100%",
                marginTop: "35px",
                marginBottom: "15px",
                "& textarea": {
                  width: "calc(100% - 40px)",
                  height: "auto !important",
                  resize: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.00938em",
                  color: "rgba(0, 0, 0, 0.87)",
                  padding: "16px",
                  borderRadius: "4px",
                },
              }}
            >
              <TextareaAutosize
                id="w3review"
                name="w3review"
                aria-label="empty textarea"
                rows={4}
                defaultValue="At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies."
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                <ThumbUpOffAltIcon
                  sx={{
                    color: "#0000008a",
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                  }}
                />
                <ThumbDownOffAltIcon
                  sx={{
                    color: "#0000008a",
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Box>
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    border: "1px solid #1976d2",
                  }}
                >
                  {" "}
                  <ContentCopyIcon
                    sx={{ width: "18px", height: "18px" }}
                  />{" "}
                  COPY
                </Button>
              </Box>
            </Box>
          </Box>

          {/* ============================ Visit card Summary =============================== */}
        </Box>
      </Box>
    </>
  );
};

export default FreedPage;
