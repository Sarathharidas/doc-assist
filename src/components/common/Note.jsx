import Box from "@mui/material/Box";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { PlayArrow } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../services/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import DADialog from "./DADialog";
import { useState } from "react";
import {
  deleteRecordConfirmationContent,
  deleteRecordConfirmationTitle,
} from "../../constants";

const Note = ({
  record,
  fetchRecords,
  selectedRecords,
  setSelectedRecords,
  isSelected,
  onSelect,
}) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const createdAt = record?.createdAt?.toDate();
  const navigate = useNavigate();

  const handleDeleteButtonClick = (event) => {
    event.stopPropagation();
    setDeleteConfirmation(!deleteConfirmation);
  };

  const deletePatientRecord = async () => {
    try {
      // Delete the document
      setDeleteLoading(true);
      await deleteDoc(doc(db, "patient", record?.id));
      if (selectedRecords.includes(record?.id)) {
        setSelectedRecords((prevSelectedRecords) =>
          prevSelectedRecords.filter((id) => id !== record?.id)
        );
      }
      toast.success("Patient successfully deleted!");
      setDeleteConfirmation(false);
      setDeleteLoading(false);
      fetchRecords();
    } catch (e) {
      toast.error("Error deleting patient: ", e);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteClose = () => {
    setDeleteConfirmation(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px 16px",
          cursor: "pointer",
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: "#1976d214",
          },
        }}
        onClick={() => navigate(`/visit/${record?.id}`)}
      >
        <FormControlLabel
          sx={{
            marginRight: "0",
          }}
          control={
            <Checkbox
              checked={isSelected}
              onChange={() => onSelect(record?.id)}
            />
          }
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            padding: "8px 16px",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#000000de",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            }}
            variant="p"
          >
            {record?.patientName}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#000000de",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            }}
            variant="p"
          >
            {createdAt?.toLocaleString()}
          </Typography>
          <Typography
            sx={{
              color: "#686d73",
              fontSize: "16px",
              fontWeight: "400",
              display: "none",
            }}
            variant="p"
          >
            Paused
          </Typography>
        </Box>
        <IconButton onClick={(event) => handleDeleteButtonClick(event)}>
          <DeleteIcon sx={{ color: "#686d73" }} />
        </IconButton>
        <IconButton>
          <PlayArrow />
        </IconButton>
      </Box>
      <DADialog
        open={deleteConfirmation}
        handleClose={handleDeleteClose}
        title={deleteRecordConfirmationTitle}
        message={deleteRecordConfirmationContent}
        onSucesss={deletePatientRecord}
        loading={deleteLoading}
      />
    </div>
  );
};

Note.prototype = {
  record: PropTypes.object,
};

export default Note;
