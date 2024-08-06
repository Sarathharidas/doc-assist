import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const DADialog = ({
  open,
  handleClose,
  title,
  message,
  onSucesss,
  loading = false,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={onSucesss}
          autoFocus
          disabled={loading}
          sx={{ textTransform: "inherit" }}
        >
          Delete
        </Button>
        <Button onClick={handleClose} sx={{ textTransform: "inherit" }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DADialog;
