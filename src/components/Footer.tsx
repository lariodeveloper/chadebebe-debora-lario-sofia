import { Box, Typography } from "@mui/material";

import { LeafSprig } from "./decorations";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 6,
        textAlign: "center",
        backgroundColor: "primary.dark",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 1,
          opacity: 0.9,
        }}
      >
        <LeafSprig size={44} sx={{ "& path": { stroke: "#F6D8E1" }, "& ellipse": { fill: "#F6D8E1" } }} />
        <LeafSprig
          size={44}
          flip
          sx={{ "& path": { stroke: "#F6D8E1" }, "& ellipse": { fill: "#F6D8E1" } }}
        />
      </Box>

      <Typography
        sx={{
          fontFamily: '"Leckerli One", cursive',
          fontSize: "2rem",
        }}
      >
        Esperamos você
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          opacity: 0.85,
        }}
      >
        Para celebrar a chegada da Sofia
      </Typography>
    </Box>
  );
}
