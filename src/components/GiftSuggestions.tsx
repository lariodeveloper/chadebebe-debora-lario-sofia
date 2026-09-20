import { Box, Container, Typography } from "@mui/material";

import { Heart } from "./decorations";

const ITEMS = ["Fralda P, M ou G", "Roupinha M", "Itens de higiene"];

export default function GiftSuggestions() {
  return (
    <Box sx={{ py: { xs: 7, sm: 9 } }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            borderRadius: "48px",
            background:
              "radial-gradient(circle at 30% 20%, #FBD8E1 0%, #FCE9EF 60%, #FCE9EF 100%)",
            px: { xs: 3, sm: 6 },
            py: { xs: 5, sm: 6 },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            <Heart size={16} />
            <Typography
              sx={{
                fontFamily: '"Baloo 2", sans-serif',
                fontWeight: 600,
                fontSize: "1.4rem",
                color: "primary.dark",
              }}
            >
              Sugestão de presente
            </Typography>
            <Heart size={16} />
          </Box>

          <Box sx={{ mt: 2.5 }}>
            {ITEMS.map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  lineHeight: 2,
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
