import useCanvasDraw  from "../hooks/useCanvasDraw";

const ThreeCanvas = () => {

  return <canvas ref={useCanvasDraw()} />
}

export default ThreeCanvas;