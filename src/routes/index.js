import App from "../App"
import { ScratchIn, ScratchInOut } from "../layouts"

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
]

export default routes
