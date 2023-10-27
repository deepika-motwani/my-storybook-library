import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
// import withDesign from '@storybook/addon-designs/';
import  BtnArrowBlack  from "../icons/BtnArrowBlack";
import  BtnArrowBlue  from "../icons/BtnArrowBlue";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  // decorators: [withDesign],
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    icon: { table: { disable: true } },
    isFullWidth: { control: 'boolean' },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    padding: "large",
    variant: "primary",
    isFullWidth: false
  },
  // parameters: {
  //   design: {
  //     type: "figma",
  //     url: "https://www.figma.com/file/iaY00iIUJ9y5Vc57T1Ah4Y/UI-%F0%9F%8C%9E-Low-Density?type=design&node-id=205-12674&mode=dev",
  //   },
  // },
};

export const BrandedPrimary: Story = {
  args: {
    label: "Branded-primary",
    padding: "medium",
    variant: "branded-primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    label: "Secondary",
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    variant: "tertiary",
    label: "Tertiary",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    ...Secondary.args,
    label: "Button-With-Icon",
    iconPosition: 'left',
    icon: <BtnArrowBlack color={''}/>
  },
};

// export const IconButton: Story = {
//   args: {
//     ...Primary.args,
//     label: "",
//     icon: <BtnArrowBlue color={''}/>
//   },
// };
