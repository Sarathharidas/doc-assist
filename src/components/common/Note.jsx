import Box from "@mui/material/Box";
import { Typography, FormControlLabel, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { PlayArrow } from "@mui/icons-material";

const Note = ({ record }) => {
  const createdAt = record?.createdAt?.toDate();
  return (
    <div>
      {" "}
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
      >
        <FormControlLabel
          sx={{
            marginRight: "0",
          }}
          control={<Checkbox checked={false} />}
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
            }}
            variant="p"
          >
            Paused
          </Typography>
        </Box>
        <DeleteIcon sx={{ color: "#686d73" }} />
        <PlayArrow />
      </Box>
    </div>
  );
};

Note.prototype = {
  record: PropTypes.object,
};

export default Note;
