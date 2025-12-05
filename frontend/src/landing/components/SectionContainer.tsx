import { Box } from "@mui/material";

export default function SectionContainer({ children, id }: any) {
  return (
    <Box
      id={id}
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 10 }
      }}
    >
      {children}
    </Box>
  );
}
