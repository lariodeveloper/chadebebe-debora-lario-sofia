import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { supabase } from "../supabase";
import { Heart } from "./decorations";

export default function ConfirmationForm() {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] =
    useState<string>("1");

  const [loading, setLoading] =
    useState<boolean>(false);

  const [confirmed, setConfirmed] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase
      .from("confirmacoes")
      .insert({
        nome: name.trim(),
        acompanhantes: Number(guests),
      });

    setLoading(false);

    if (error) {
      console.error(error);

      setError(
        "Não foi possível confirmar sua presença. Tente novamente."
      );

      return;
    }

    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <Paper
        elevation={0}
        sx={{
          maxWidth: 480,
          mx: "auto",
          mt: { xs: 3, sm: 4 },
          p: { xs: 3, sm: 4 },
          textAlign: "center",
          backgroundColor: "#FCEAEF",
          border: "2px dashed",
          borderColor: "primary.main",
          borderRadius: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <Heart size={18} />
          <Heart size={22} />
          <Heart size={18} />
        </Box>

        <Typography
          sx={{
            fontFamily: '"Baloo 2", sans-serif',
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "primary.dark",
          }}
        >
          Presença confirmada!
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            lineHeight: 1.7,
            color: "text.primary",
          }}
        >
          Obrigado, {name}!
          <br />
          Estamos muito felizes em saber
          que você estará conosco para
          celebrar a chegada da Sofia.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 480,
        mx: "auto",
        mt: { xs: 3, sm: 4 },
        p: {
          xs: 3,
          sm: 4,
        },
        backgroundColor: "#FCEAEF",
        border: "2px dashed",
        borderColor: "primary.main",
        borderRadius: "32px",
      }}
    >
      <Typography
        align="center"
        sx={{
          fontFamily: '"Baloo 2", sans-serif',
          fontWeight: 600,
          fontSize: "1.4rem",
          color: "primary.dark",
        }}
      >
        Confirme sua presença
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{
          mt: 0.5,
          mb: 2.5,
          fontSize: "0.9rem",
        }}
      >
        Será muito especial ter você
        conosco!
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <TextField
          label="Seu nome"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          required
          fullWidth
        />

        <TextField
          select
          label="Quantidade de pessoas"
          value={guests}
          onChange={(event) =>
            setGuests(event.target.value)
          }
          fullWidth
        >
          <MenuItem value="1">
            Somente eu
          </MenuItem>

          <MenuItem value="2">
            Eu + 1 acompanhante
          </MenuItem>

          <MenuItem value="3">
            Eu + 2 acompanhantes
          </MenuItem>

          <MenuItem value="4">
            Eu + 3 acompanhantes
          </MenuItem>
        </TextField>

        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={
            loading || !name.trim()
          }
          sx={{ mt: 2 }}
        >
          {loading
            ? "Confirmando..."
            : "Confirmar presença ❤️"}
        </Button>
      </Box>
    </Paper>
  );
}
