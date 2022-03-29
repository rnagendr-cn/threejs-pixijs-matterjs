import App from "../App"
import {
  ScratchIn,
  ScratchInOut,
  TwoDCollision,
  ThreeJSBasics,
  ThreeJSModel,
} from "../layouts"

const routes = [
  {
    name: "Home",
    description: "",
    path: "/",
    page: <App />,
  },
  {
    name: "Scratch In",
    description: "Solid color on top, scratch to reveal pattern",
    path: "scratch-in",
    page: <ScratchIn />,
  },
  {
    name: "Scratch In + Scratch Out",
    description:
      "Two layers, 1st layer on top that scratches to a transparent scratch. 2nd layer in the background that scratches to an image / text.",
    path: "scratch-in-out",
    page: <ScratchInOut />,
  },
  {
    name: "2D Collision",
    description:
      "using Matter.js, 2D physics engine. Click to create new balls that'll collide with the world objects.",
    path: "2d-collision",
    page: <TwoDCollision />,
  },
  {
    name: "ThreeJS basics",
    description:
      "using Three.js, 3D physics engine. Click and drag mouse to create chain of rotating cones.",
    path: "three-js",
    page: <ThreeJSBasics />,
  },
  {
    name: "ThreeJS Load Models",
    description:
      "Loading external models into three.js. Click and drag the shoe to rotate it.",
    path: "poly",
    page: <ThreeJSModel />,
  },
]

export default routes
