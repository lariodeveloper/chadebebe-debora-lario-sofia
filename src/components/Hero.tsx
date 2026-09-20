import { Box, Container, Typography } from "@mui/material";

import { BearPeek, Heart, RibbonBow } from "./decorations";
import ConfirmationForm from "./ConfirmationForm";

const CONFETTI: Array<{
  top: string;
  left: string;
  size: number;
  color: string;
  opacity: number;
}> = [
  { top: "6%", left: "8%", size: 16, color: "#E85D8A", opacity: 0.5 },
  { top: "10%", left: "88%", size: 12, color: "#90A378", opacity: 0.6 },
  { top: "40%", left: "4%", size: 14, color: "#90A378", opacity: 0.5 },
  { top: "38%", left: "93%", size: 10, color: "#E85D8A", opacity: 0.5 },
];

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        pt: { xs: 6, sm: 8 },
        pb: { xs: 5, sm: 7 },
        background: `
          radial-gradient(circle at 15% 10%, #FBD8E1 0%, transparent 45%),
          radial-gradient(circle at 85% 15%, #FCE4EA 0%, transparent 40%),
          radial-gradient(circle at 50% 100%, #FBD8E1 0%, transparent 60%),
          #FDF5F2
        `,
      }}
    >
      {CONFETTI.map((heart, index) => (
        <Heart
          key={index}
          size={heart.size}
          color={heart.color}
          sx={{
            position: "absolute",
            top: heart.top,
            left: heart.left,
            opacity: heart.opacity,
            display: { xs: "none", sm: "block" },
          }}
        />
      ))}

      <RibbonBow
        size={64}
        sx={{
          position: "absolute",
          top: { xs: 8, sm: 20 },
          left: { xs: 4, sm: 24 },
          transform: "rotate(-12deg)",
        }}
      />

      <BearPeek
        size={92}
        sx={{
          position: "absolute",
          top: { xs: -6, sm: 0 },
          right: { xs: -6, sm: 16 },
        }}
      />

      <Container maxWidth="sm">
        <Typography
          sx={{
            fontFamily: '"Baloo 2", sans-serif',
            fontWeight: 600,
            fontSize: { xs: "1.25rem", sm: "1.6rem" },
            color: "text.primary",
          }}
        >
          Chá de bebê da
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Leckerli One", cursive',
            fontWeight: 400,
            fontSize: { xs: "3.6rem", sm: "5.2rem" },
            lineHeight: 1,
            color: "primary.main",
            mt: 0.5,
          }}
        >
          Sofia
        </Typography>

        <Typography
          sx={{
            maxWidth: 420,
            mx: "auto",
            mt: 2,
            color: "text.secondary",
            lineHeight: 1.7,
            fontSize: "1rem",
          }}
        >
          Estou quase chegando! Papai e mamãe estão muito felizes. Venha
          comemorar conosco.
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            fontWeight: 600,
            fontSize: "0.95rem",
            color: "primary.dark",
          }}
        >
          27 de setembro de 2026 · Vila Isabel
        </Typography>

        <ConfirmationForm />
      </Container>
    </Box>
  );
}
