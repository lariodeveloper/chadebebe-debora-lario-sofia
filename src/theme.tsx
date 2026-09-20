import { createTheme } from "@mui/material/styles";

// Palette lifted from the family's printed invitation card (convite.png):
// blush pinks, warm cream paper, chocolate-brown ink, sage botanical green.
const theme = createTheme({
  palette: {
    primary: {
      main: "#E85D8A",
      dark: "#C93E6B",
      light: "#FBD8E1",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#90A378",
      dark: "#748962",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#FDF5F2",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#5B3A2A",
      secondary: "#8A6152",
    },
  },

  typography: {
    fontFamily: '"Baloo 2", sans-serif',

    h1: { fontFamily: '"Baloo 2", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Baloo 2", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Baloo 2", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Baloo 2", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Baloo 2", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Baloo 2", sans-serif', fontWeight: 600 },
  },

  shape: {
    borderRadius: 24,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 700,
          fontFamily: '"Baloo 2", sans-serif',
          boxShadow: "none",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});

export default theme;
