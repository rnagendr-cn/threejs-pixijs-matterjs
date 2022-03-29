import React, { useEffect, useRef } from "react"
import withStyles from "react-jss"
import fonts from "../assets/fonts"
import globalStyles from "../data/globalStyles"
import { Engine, World } from "matter-js"
import {
  initializeMatterJS,
  createCircle,
} from "../components/TwoDCollision/utils"

const styles = {
  ...fonts,
  ...globalStyles,
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
  },
}

const TwoDCollision = ({ classes }) => {
  const scene = useRef()
  const engine = useRef(Engine.create())

  useEffect(() => {
    // const renderer =
    initializeMatterJS(scene, engine)
  }, [])

  const createShapes = ({ pageX, pageY }) => {
    const circle = createCircle(pageX, pageY)
    World.add(engine.current.world, [circle])
  }

  return (
    <section
      className={classes.container}
      ref={scene}
      onClick={createShapes}></section>
  )
}

export default withStyles(styles)(TwoDCollision)
