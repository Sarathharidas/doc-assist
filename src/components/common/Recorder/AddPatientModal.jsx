import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const AddPatientModal = ({
  showModal,
  patientName,
  setPatientName,
  patientNameError,
  setPatientNameError,
  handleClose,
  onSave = () => {},
}) => {
  return (
    <>
      <Dialog
        sx={{
          width: "-webkit-fill-available",
          "& form": {
            width: "-webkit-fill-available",
          },
        }}
        open={showModal}
        onClose={handleClose}
      >
        <CloseIcon
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "gray",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
        <DialogTitle
          sx={{
            padding: "16px 60px 16px 24px",
            "@media (max-width: 575px)": {
              padding: "16px 32px 16px 24px",
            },
          }}
        >
          Thank you for healing another human
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Who was the patient for this visit?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Patient name"
            fullWidth
            variant="standard"
            value={patientName}
            onChange={(e) => {
              if (e.target.value.trim() === "") {
                setPatientNameError(true);
              } else {
                setPatientNameError(false);
              }
              setPatientName(e.target.value);
            }}
          />
          {patientNameError && (
            <Typography sx={{ color: "red", fontSize: 12 }}>
              Patient name cannot be empty or contain only whitespace.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "#000000de" }} onClick={handleClose}>
            SKIP
          </Button>
          <Button sx={{ color: "#000000de" }} onClick={onSave}>
            CONFIRM NAME
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

AddPatientModal.propTypes = {
  showModal: PropTypes.bool,
  patientName: PropTypes.string,
  setPatientName: PropTypes.func,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func,
  onSave: PropTypes.func,
};

export default AddPatientModal;
