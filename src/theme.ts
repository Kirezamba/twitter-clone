import { fontFamily } from "./constants";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
export const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
  },
  palette: {
    primary: {
      main: "rgb(29, 161, 242)",
      dark: "rgb(26, 145, 218)",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgb(26, 145, 218)",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: "none",
          fontSize: 14,
          height: 35,
          fontWeight: 700,
        },
        textPrimary: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        outlinedPrimary: {
          borderColor: "rgb(29, 161, 243)",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          "&:after": {
            borderBottomWidth: "2px",
          },
          "&:before": {
            borderCOlor: "#000",
            borderBottomWidth: "2px",
          },
          input: {
            backgroundColor: "rgb(245, 248, 250)",
          },
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "40px",
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          marginBottom: 8,
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgb(204, 248, 250)",
          marginBottom: 10,
          padding: "10px 15px",
          "& h2": {
            display: "flex",
            alignItems: "center",
            fontWeght: 800,
          },
          "& button": {
            padding: 8,
            marginRight: 20,
          },
        },
      },
    },
  },
});
