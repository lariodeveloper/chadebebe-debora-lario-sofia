import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function EventInfo() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          color="primary.dark"
          sx={{ mb: 4 }}
        >
          Anote na agenda
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 3,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: "center",
              border:
                "1px solid #F3DDE1",
            }}
          >
            <CalendarMonthIcon
              sx={{
                fontSize: 40,
                color: "primary.main",
              }}
            />

            <Typography
              variant="h6"
              sx={{ mt: 2 }}
            >
              Data e horário
            </Typography>

            <Typography color="text.secondary">
              27 de Setembro de 2026
            </Typography>

            <Typography color="text.secondary">
              Ao 12:00
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: "center",
              border:
                "1px solid #F3DDE1",
            }}
          >
            <LocationOnIcon
              sx={{
                fontSize: 40,
                color: "primary.main",
              }}
            />

            <Typography
              variant="h6"
              sx={{ mt: 2 }}
            >
              Local
            </Typography>

            <Typography color="text.secondary">
              Rua Teodoro da Silva, 953 - play
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
