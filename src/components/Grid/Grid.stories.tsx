import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Grid from "./Grid";
import GridRuler from "../GridRuler/GridRuler";
import Box from "../Box/Box";


const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
};

export default meta;

export const Basic: StoryFn = (args) => (
  <div style={{ position: "relative" }}>
    <Grid
      container
      spacing="sm"
      alignItems="center"
      style={{ height: "100%" }}
      {...args}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
);

export const WithRuler: StoryFn = (args) => (
  <div style={{ position: "relative" }}>
    <GridRuler spacing="sm"></GridRuler>

    <Grid
      container
      spacing="sm"
      alignItems="center"
      style={{ height: "100%" }}
      {...args}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 1</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 2</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 3</Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
);

export const Interactive: StoryFn = (args) => (
  <div style={{ position: "relative", height: "100vh" }}>
    <Grid
      container
      spacing="sm"
      alignItems="center"
      style={{ height: "100%" }}
      {...args}
    >
      <Grid item xs={2}>
        <Box>Box 1</Box>
      </Grid>

      <Grid item xs={2}>
        <Box>Box 2</Box>
      </Grid>

      <Grid item xs={2}>
        <Box>Box 3</Box>
      </Grid>

      <Grid item xs={2}>
        <Box>Box 4</Box>
      </Grid>
    </Grid>
  </div>
);