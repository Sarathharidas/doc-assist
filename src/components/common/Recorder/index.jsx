import { Box, Button, CircularProgress, Typography } from "@mui/material";
import MicNoneIcon from "@mui/icons-material/MicNone";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PauseIcon from "@mui/icons-material/Pause";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import AddPatientModal from "./AddPatientModal";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// 1 aaj state levano
// ["empty" , "started" , "paused" , "resumed" , "ended"]
const Recorder = ({ getData }) => {
  /**
   * State of the recorder. One of:
   * - "empty": not recording
   * - "started": recording
   * - "paused": paused
   * - "resumed": resumed
   * - "ended": ended
   */
  const [isRecording, setIsRecording] = useState(false);
  /**
   * Whether the recording is paused or not.
   */
  const [isPaused, setIsPaused] = useState(false);
  /**
   * Whether the save audio modal is open or not.
   */
  const [saveAudioModal, setSaveAudioModal] = useState(false);
  /**
   * The name of the patient.
   */
  const [patientName, setPatientName] = useState("");
  /**
   * The audio blob.
   */
  const [audioBlob, setAudioBlob] = useState(null);
  /**
   * The media recorder.
   */
  const mediaRecorder = useRef(null);
  /**
   * The chunks of the audio blob.
   */
  const chunks = useRef([]);

  useEffect(() => {
    if (audioBlob) {
      const newFileName = `${new Date()
        .toISOString()
        .replace(/:/g, "-")
        .replace(/\..+/, "")}.mp3`;
      const newFile = new File([audioBlob?.blob], newFileName, {
        type: "audio/mp3",
      });
      getData({ blob: audioBlob?.blob, name: patientName });
      handleCloseModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioBlob]);

  /**
   * Start recording.
   */
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        chunks.current.push(e.data);
      };
      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/mp3" });
        chunks.current = [];
        saveRecording(blob);
      };
      mediaRecorder.current.start();
      setIsRecording(true);
      setIsPaused(false);
    } catch (err) {
      toast.error("Error accessing microphone");
      console.error("Error accessing microphone:", err);
    }
  };

  /**
   * Pause recording.
   */
  const pausedRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.pause();
      setIsPaused(true);
    }
  };

  /**
   * Resume recording.
   */
  const resumeRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === "paused") {
      mediaRecorder.current.resume();
      setIsPaused(false);
    }
  };

  /**
   * Play/pause recording.
   */
  const playPauseRecording = () => {
    if (isPaused) resumeRecording();
    else pausedRecording();
  };

  /**
   * Stop recording.
   */
  const stopRecording = () => {
    if (
      mediaRecorder.current &&
      ["recording", "paused"].includes(mediaRecorder.current.state)
    ) {
      mediaRecorder.current.stop();
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  /**
   * Set the save audio modal to true and pause the recording.
   */
  const handleSaveAudioName = () => {
    setSaveAudioModal(true);
    pausedRecording();
  };

  /**
   * Close the save audio modal and reset the patient name.
   */
  const handleCloseModal = () => {
    setPatientName("");
    setSaveAudioModal(false);
  };

  /**
   * Save the recording.
   * @param {Blob} blob - The audio blob.
   */
  const saveRecording = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudioBlob({ url, blob });
  };

  return (
    <>
      {!isRecording && (
        <Box
          sx={{
            "@media (max-width: 575px)": {
              margin: "0 35px",
            },
          }}
        >
          <Button
            onClick={startRecording}
            sx={{
              transition:
                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, " +
                "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, " +
                "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              borderRadius: "24px",
              padding: "0px 16px",
              minWidth: "48px",
              width: "auto",
              height: "48px",
              zIndex: 1050,
              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, " +
                "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, " +
                "rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
              color: "rgba(0, 0, 0, 0.87)",
              backgroundColor: "rgb(224, 224, 224)",
              margin: "8px",
            }}
          >
            <MicNoneIcon />
            CAPTURE CONVERSATION
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: "15px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                display: "flex",
                width: "130px",
                justifyContent: "center",
                gap: "10px",

                "& span": {
                  borderBottom: "1px solid #000",
                  display: "inline-block",
                  lineHeight: "0.1em",
                  margin: "10px 0 17px",
                  width: "50%",
                },
              }}
            >
              <span />
              or
              <span />
            </Typography>
          </Box>

          <Box
            sx={{
              marginBottom: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Typography sx={{ color: "#6b6b6b", fontSize: "14px" }}>
              Drag in or
            </Typography>

            <Button
              sx={{
                background: "transparent",
                boxShadow: "none",
                color: "#1976d2",
                padding: "0px",
                width: "auto",
                display: "contents",
                textTransform: "capitalize",
                "&:hover": {
                  background: "none",
                  boxShadow: "none",
                },
                "& svg": {
                  display: "none",
                },
              }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>

            <Typography sx={{ color: "#6b6b6b", fontSize: "14px" }}>
              a pre-recorded visit.
            </Typography>
          </Box>
        </Box>
      )}

      {isRecording && (
        <Box
          sx={{
            "@media (max-width: 575px)": {
              margin: "0 35px",
            },
          }}
        >
          <Typography
            sx={{
              color: "#000000de",
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "15px",
            }}
            variant="h1"
          >
            {isPaused ? "Paused" : "Listening"}
          </Typography>
          <Typography
            sx={{
              color: "#000000de",
              fontSize: "16px",
              fontWeight: "500",
            }}
            variant="p"
          >
            Press End Visit to generate your note, or play to continue.
          </Typography>

          <Box sx={{ marginTop: "15px" }}>
            <Button
              sx={{
                transition:
                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, " +
                  "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, " +
                  "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                borderRadius: "24px",
                padding: "0px 16px",
                minWidth: "48px",
                width: "auto",
                height: "48px",
                zIndex: 1050,
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, " +
                  "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, " +
                  "rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "rgb(224, 224, 224)",
                margin: "8px",
              }}
              onClick={handleSaveAudioName}
            >
              <MicNoneIcon /> END VISIT
            </Button>
            <Button
              sx={{
                transition:
                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, " +
                  "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, " +
                  "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                borderRadius: "24px",
                padding: "0px 16px",
                minWidth: "48px",
                width: "auto",
                height: "48px",
                zIndex: 1050,
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, " +
                  "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, " +
                  "rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "rgb(224, 224, 224)",
                margin: "8px",
              }}
              onClick={playPauseRecording}
            >
              {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
            </Button>
          </Box>
        </Box>
      )}

      <AddPatientModal
        showModal={saveAudioModal}
        patientName={patientName}
        setPatientName={setPatientName}
        onSave={stopRecording}
        handleClose={handleCloseModal}
      />
    </>
  );
};

Recorder.prototype = {
  getData: PropTypes.func,
};

export default Recorder;
