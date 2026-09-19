import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B83A4B",
      dark: "#8F2638",
      light: "#FCECEF",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#FFF9F8",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#3D292C",
      secondary: "#725E62",
    },
  },

  typography: {
    fontFamily: '"Poppins", sans-serif',

    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },

    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },

    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 20,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;