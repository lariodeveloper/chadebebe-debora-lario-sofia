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
          maxWidth: 600,
          mx: "auto",
          my: 8,
          p: 5,
          textAlign: "center",
          backgroundColor:
            "primary.light",
        }}
      >
        <Typography
          variant="h3"
          color="primary.dark"
        >
          Presença confirmada! ❤️
        </Typography>

        <Typography
          sx={{
            mt: 2,
            lineHeight: 1.8,
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
        maxWidth: 600,
        mx: "auto",
        my: 8,
        p: {
          xs: 3,
          sm: 5,
        },
        border:
          "1px solid #F3DDE1",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        color="primary.dark"
      >
        Confirme sua presença
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{
          mt: 1,
          mb: 4,
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
          gap: 2,
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
