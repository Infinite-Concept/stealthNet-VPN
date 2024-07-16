import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFC107"
      d="M18.171 8.368h-.67v-.035H10v3.334h4.709A4.998 4.998 0 0 1 5 10a5 5 0 0 1 5-5c1.275 0 2.434.48 3.317 1.266l2.357-2.357A8.295 8.295 0 0 0 10 1.667a8.334 8.334 0 1 0 8.171 6.7Z"
    />
    <Path
      fill="#FF3D00"
      d="M2.628 6.121 5.365 8.13A4.998 4.998 0 0 1 10 5c1.275 0 2.434.48 3.317 1.266l2.357-2.357A8.295 8.295 0 0 0 10 1.667 8.329 8.329 0 0 0 2.628 6.12Z"
    />
    <Path
      fill="#4CAF50"
      d="M10 18.333a8.294 8.294 0 0 0 5.587-2.163l-2.579-2.183A4.962 4.962 0 0 1 10 15 4.998 4.998 0 0 1 5.3 11.69L2.58 13.782a8.327 8.327 0 0 0 7.42 4.55Z"
    />
    <Path
      fill="#1976D2"
      d="M18.171 8.368h-.67v-.035H10v3.334h4.709a5.016 5.016 0 0 1-1.703 2.32h.001l2.58 2.183c-.183.166 2.745-2.003 2.745-6.17 0-.559-.057-1.104-.162-1.632Z"
    />
  </Svg>
)
export default SvgComponent