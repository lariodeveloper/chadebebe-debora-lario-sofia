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
    <Box sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="primary.dark"
        >
          Estamos contando os dias ❤️
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, 1fr)",
            gap: 2,
            mt: 3,
          }}
        >
          {items.map(([label, value]) => (
            <Paper
              key={label}
              elevation={0}
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor:
                  "primary.light",
              }}
            >
              <Typography
                variant="h4"
                color="primary.dark"
                fontWeight={600}
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
