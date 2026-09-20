import type { ReactNode } from "react";

import { Box, Container, Typography } from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.light",
        color: "primary.dark",
        flexShrink: 0,
      }}
    >
      {children}
    </Box>
  );
}

export default function EventInfo() {
  return (
    <Box sx={{ py: { xs: 7, sm: 9 } }}>
      <Container maxWidth="sm">
        <Typography
          align="center"
          sx={{
            fontFamily: '"Baloo 2", sans-serif',
            fontWeight: 600,
            fontSize: "1.7rem",
            color: "primary.dark",
            mb: 4,
          }}
        >
          Anote na agenda
        </Typography>

        <Box
          sx={{
            border: "2px dashed",
            borderColor: "primary.main",
            borderRadius: "32px",
            backgroundColor: "#FCEAEF",
            px: { xs: 3, sm: 5 },
            py: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
            <IconBadge>
              <CalendarMonthIcon />
            </IconBadge>

            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                Dia 27 de setembro de 2026
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>às 12h</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              borderTop: "2px dashed",
              borderColor: "primary.light",
              my: 3,
            }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
            <IconBadge>
              <LocationOnIcon />
            </IconBadge>

            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                Local
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Rua Teodoro da Silva, 953, Vila Isabel
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
