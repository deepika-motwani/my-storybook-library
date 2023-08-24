import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    textColor: { control: "color" },
    onClick: { action: "clicked" },
    backgroundColor: { control: "color" }
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    size: "large",
    type: "primary",
    buttonStyle: "base"
  },
};

export const BrandedPrimary: Story = {
  args: {
    label: "Branded-primary",
    size: "large",
    type: "branded-primary",
    buttonStyle: "base"
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: "secondary",
    label: "Secondary",
    buttonStyle: "base"
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    type: "tertiary",
    label: "Tertiary",
    buttonStyle: "base"
  },
};