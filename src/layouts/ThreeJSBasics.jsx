import React, { useState } from "react"
import withStyles from "react-jss"
import { globalCanvasStyles } from "../data/globalStyles"
import { Canvas, useThree } from "@react-three/fiber"
import fonts from "../assets/fonts"
import { Mesh1, Lights } from "../components/ThreeJSBasics"

const styles = {
  ...fonts,
  ...globalCanvasStyles,
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    // padding: "3rem 2rem",
    textAlign: "left",
    boxSizing: "border-box",
    // cursor: "none",
  },
}

const Children = () => {
  const { viewport } = useThree()
  const [objs, setObjs] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const handlePointerMove = ({ point }) => {
    /* In react-three-fiber, the pointer events bubble down
    to every mesh under the pointer. stopPropagation prevents
    that and only gives the event to the top most mesh */
    // stopPropagation()
    if (isClicked) {
      setObjs((objs) => [...objs, [point.x, point.y, point.z]])
    }
  }
  return (
    <>
      {/* For pointer events */}
      <mesh
        onPointerMove={handlePointerMove}
        onPointerDown={() => setIsClicked(true)}
        onPointerUp={() => setIsClicked(false)}>
        <planeBufferGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      <Lights />
      {objs.map((pos, i) => (
        <Mesh1 key={i} position={pos} />
      ))}
      {/* <Mesh1 /> */}
    </>
  )
}

const ThreeJSBasics = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Canvas dpr={window.devicePixelRatio}>
        <Children />
      </Canvas>
    </div>
  )
}

export default withStyles(styles)(ThreeJSBasics)
