import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  Switch,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { db } from "../services/firebase";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";

const VisitSummary = ({
  loadingRecords,
  fullSummary,
  currentRecord,
  setFullSummary,
  copySuccess,
  handleCopySummary,
  fetchRecords,
}) => {
  const [summaryText, setSummaryText] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  console.log("currentRecord", currentRecord);
  console.log("summaryText", summaryText);
  console.log("currentRecord?.summary", currentRecord?.summary);
  console.log("========", summaryText === currentRecord?.summary);

  useEffect(() => {
    setSummaryText(currentRecord?.summary);
  }, [currentRecord?.summary]);

  const handleUpdateRecord = async () => {
    setUpdateLoading(true);
    const docRef = doc(db, "patient", currentRecord?.id);

    try {
      await updateDoc(docRef, {
        summary: summaryText,
      });
      toast.success("Record updated successfully");
      fetchRecords();
    } catch (error) {
      toast.error("Some issue in updating record");
      console.error("Error updating document: ", error);
    } finally {
      setUpdateLoading(false);
    }
  };
  return (
    <Box
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
        Visit Summary
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
        {loadingRecords ? (
          <CircularProgress />
        ) : (
          <TextareaAutosize
            id="w3review"
            name="w3review"
            aria-label="empty textarea"
            minRows={4}
            placeholder="Please enter summary"
            value={summaryText}
            onChange={(e) => setSummaryText(e.target.value)}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <FormControlLabel
            control={<Switch checked={fullSummary} disabled={loadingRecords} />}
            label="Full Summary"
            onClick={() => setFullSummary(!fullSummary)}
          />
        </Box>
        <Box>
          {summaryText === currentRecord?.summary ? (
            <Button
              disabled={copySuccess}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                border: `1px solid ${
                  copySuccess ? "rgba(0,0,0,0.26)" : "#1976d2"
                }`,
              }}
              onClick={() => handleCopySummary(currentRecord?.summary ?? "")}
            >
              <ContentCopyIcon sx={{ width: "18px", height: "18px" }} />
              {copySuccess ? "Copied!" : "COPY"}
            </Button>
          ) : (
            <Button
              disabled={updateLoading}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                border: `1px solid  ${
                  updateLoading ? "rgba(0,0,0,0.26)" : "#1976d2"
                }`,
              }}
              onClick={handleUpdateRecord}
            >
              Save
            </Button>
          )}
        </Box>
      </Box>
      {fullSummary && (
        <Box sx={{ marginTop: 3 }}>
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
            Full Transcript Summary
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
            {
              <TextareaAutosize
                id="w3review"
                name="w3review"
                aria-label="empty textarea"
                minRows={5}
                value={currentRecord?.transcript ?? ""}
              />
            }
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default VisitSummary;
