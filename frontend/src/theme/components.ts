import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: "8px 18px",
        textTransform: "none"
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: 12
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 14,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.06)"
      }
    }
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined"
    }
  }
};

export default components;
