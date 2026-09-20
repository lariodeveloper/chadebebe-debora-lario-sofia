import { useEffect, useState } from "react";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

const EVENT_DATE = new Date(
  "2026-09-27T12:00:00"
);

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference =
    EVENT_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }

  return {
    dias: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    horas: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutos: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    segundos: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(
      calculateTimeLeft()
    );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    ["dias", timeLeft.dias],
    ["horas", timeLeft.horas],
    ["min", timeLeft.minutos],
    ["seg", timeLeft.segundos],
  ];

  return (
    <Box sx={{ py: { xs: 6, sm: 7 } }}>
      <Container maxWidth="sm">
        <Typography
          align="center"
          sx={{
            fontFamily: '"Baloo 2", sans-serif',
            fontWeight: 600,
            fontSize: "1.4rem",
            color: "primary.dark",
          }}
        >
          Estamos contando os dias
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, 1fr)",
            gap: { xs: 1.5, sm: 2 },
            mt: 3,
          }}
        >
          {items.map(([label, value]) => (
            <Paper
              key={label}
              elevation={0}
              sx={{
                py: 2,
                textAlign: "center",
                backgroundColor: "#FCEAEF",
                border: "2px dashed",
                borderColor: "primary.light",
                borderRadius: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Baloo 2", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: "1.6rem", sm: "2rem" },
                  color: "primary.dark",
                }}
              >
                {String(value).padStart(
                  2,
                  "0"
                )}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
              >
                {label}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
