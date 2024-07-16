import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M7.5 7.5a1.416 1.416 0 0 1 2.005 0L17 14.997l7.496-7.499A1.417 1.417 0 1 1 26.5 9.505L19.003 17l7.498 7.496a1.418 1.418 0 1 1-2.005 2.005L17 19.003l-7.495 7.498a1.417 1.417 0 0 1-2.421-1.003 1.419 1.419 0 0 1 .415-1.002L14.998 17 7.499 9.505a1.416 1.416 0 0 1 0-2.006Z"
    />
  </Svg>
)
export default SvgComponent
