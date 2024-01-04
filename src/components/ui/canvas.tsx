import { ReactPropTypes, useState } from "react";
import useCanvasDraw  from "../../hooks/useCanvasDraw";

const ThreeCanvas = () => {
  const initialColor: number = 0X8515C7;
  const [color, setColor] = useState(initialColor)

  return <canvas ref={useCanvasDraw(color)} />
}

interface props {
  colors: number;
}

export default ThreeCanvas;