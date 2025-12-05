import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        background: "#1976d2",
        color: "white",
        mt: 5,
        textAlign: "center"
      }}
    >
      <Typography fontWeight={600}>
        © {new Date().getFullYear()} SMK Letris 2 Indonesia — All Rights Reserved.
      </Typography>
    </Box>
  );
}
