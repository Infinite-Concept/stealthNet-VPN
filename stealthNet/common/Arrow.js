import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({props, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 11 1 6l5-5"
    />
  </Svg>
)
export default SvgComponent
