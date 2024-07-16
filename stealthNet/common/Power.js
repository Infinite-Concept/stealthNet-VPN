import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({props, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={94}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5.851}
      d="M29.375 29.916a27.416 27.416 0 1 0 35.25 0M47 15.666v27.417"
    />
  </Svg>
)
export default SvgComponent
