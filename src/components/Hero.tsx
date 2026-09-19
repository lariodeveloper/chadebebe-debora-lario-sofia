import {
  Box,
  Chip,
  Container,
  Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        background:
          "radial-gradient(circle at top, #FCECEF 0%, #FFF9F8 55%)",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            letterSpacing: 3,
            fontWeight: 600,
          }}
        >
          UM MOMENTO MUITO ESPECIAL
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "4rem",
              sm: "6rem",
            },
            color: "primary.dark",
            mt: 2,
          }}
        >
          Sofia
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 400,
          }}
        >
          Chá de Bebê
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: "text.secondary",
            lineHeight: 1.8,
          }}
        >
          Uma nova vida está chegando para encher
          nossos dias de amor, carinho e muitos
          sorrisos.
        </Typography>

        <Chip
          icon={<FavoriteIcon />}
          label="Você é nosso convidado especial"
          color="primary"
          sx={{ mt: 4 }}
        />
      </Container>
    </Box>
  );
}
