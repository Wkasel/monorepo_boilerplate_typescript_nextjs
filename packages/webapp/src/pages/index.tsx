
import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


import { Link } from "~/components";


export default function IndexPage() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cityzen Homepage
        </Typography>
        // @ts-ignore
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>

      </Box>
    </Container>
  );
}
