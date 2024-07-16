import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Rect
      width={10.562}
      height={10.562}
      x={3.896}
      y={3.896}
      stroke="#fff"
      strokeWidth={2.125}
      rx={5.281}
    />
    <Rect
      width={10.562}
      height={10.562}
      x={3.896}
      y={19.543}
      stroke="#fff"
      strokeWidth={2.125}
      rx={5.281}
    />
    <Rect
      width={10.562}
      height={10.562}
      x={19.543}
      y={3.896}
      stroke="#fff"
      strokeWidth={2.125}
      rx={5.281}
    />
    <Rect
      width={10.562}
      height={10.562}
      x={19.543}
      y={19.543}
      stroke="#fff"
      strokeWidth={2.125}
      rx={5.281}
    />
  </Svg>
)
export default SvgComponent