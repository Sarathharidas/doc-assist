import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "16px",
            color: "#061f2f",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          We're dedicated to making Doctor-assist accessible to all aspiring
          clinicians. If you're a student or trainee, please contact us for a
          discount.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
