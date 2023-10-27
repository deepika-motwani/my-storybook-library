import * as React from "react";

interface SvgBtnArrowBlackProps {
  color: string;
}

const SvgBtnArrowBlack: React.FC<SvgBtnArrowBlackProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#01151C"
      d="m12 19.615-1.07-1.053 5.813-5.812H4.384v-1.5h12.357l-5.811-5.812L12 4.385 19.615 12 12 19.615Z"
    />
  </svg>
);
export default SvgBtnArrowBlack;
