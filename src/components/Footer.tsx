import {
  Box,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: "center",
        backgroundColor:
          "primary.dark",
        color: "white",
      }}
    >
      <Typography
        sx={{
          fontFamily:
            '"Playfair Display", serif',
          fontSize: "1.5rem",
        }}
      >
        Esperamos você ❤️
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          opacity: 0.8,
        }}
      >
        Para celebrar a chegada da Sofia
      </Typography>
    </Box>
  );
}
