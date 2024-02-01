import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import btnImg from "../../../public/btn_img.svg";
import ButtonImage from "./ButtonImage"

const meta: Meta<typeof ButtonImage> = {
    title: 'Components/ButtonImage',
    component: ButtonImage,
  } as Meta;

  export default meta;

  type Story = StoryObj<typeof ButtonImage>;

  const image = {
    src: btnImg,
    alt: "btn-image"
  }

  export const WithImage: Story = {
    render: () => <img src={image.src} alt={image.alt}/>
  }









