import {
  Runner,
  Render,
  Bodies,
  World,
  Composites,
  MouseConstraint,
} from "matter-js"

export const initializeMatterJS = (sceneRef, engineRef) => {
  const scene = sceneRef.current,
    engine = engineRef.current
  const height = window.innerHeight,
    width = window.innerWidth,
    pixelRatio = window.devicePixelRatio
  if (engine) {
    const renderer = Render.create({
      element: scene,
      engine: engine,
      options: {
        height,
        width,
        pixelRatio,
        background: "black",
        wireframes: false, // enabled by default with a mild black color
      },
    })
    Runner.run(engine)
    Render.run(renderer)

    createWalls(width, height, engine)
    createBigCircle(width, height, engine)
    createMouseClickAndDragInteractivity(scene, engine)

    const initialShapes = Composites.stack(50, 50, 15, 5, 40, 40, (x, y) =>
      createCircle(x, y)
    )
    World.add(engine.world, [initialShapes])

    return renderer
  }
}

const createWalls = (width, height, engine) => {
  // Create the ground
  const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "white",
        // visible: false,
      },
    },
    wallThickness = 100
  const ground = Bodies.rectangle(
    width / 2,
    height + wallThickness / 2,
    width + 100,
    wallThickness,
    wallOptions
  )
  const ceiling = Bodies.rectangle(
    width / 2,
    -(wallThickness / 2),
    width + 100,
    wallThickness,
    wallOptions
  )
  const leftWall = Bodies.rectangle(
    -(wallThickness / 2),
    height / 2,
    wallThickness,
    height + 100,
    wallOptions
  )
  const rightWall = Bodies.rectangle(
    width + wallThickness / 2,
    height / 2,
    wallThickness,
    height + 100,
    wallOptions
  )
  World.add(engine.world, [ground, ceiling, leftWall, rightWall])
}

const createBigCircle = (width, height, engine) => {
  // Create the big ball in the center
  const bigCircleOptions = {
    isStatic: true,
    render: {
      fillStyle: "white",
    },
  }
  const bigCircle = Bodies.circle(width / 2, height / 2, 250, bigCircleOptions)
  World.add(engine.world, [bigCircle])
}

const createMouseClickAndDragInteractivity = (scene, engine) => {
  const mouseControl = MouseConstraint.create(engine, {
    element: scene,
    constraint: {
      render: {
        visible: false,
      },
    },
  })
  World.add(engine.world, [mouseControl])
}

export const createCircle = (x, y) => {
  const options = {
    render: {
      // fillStyle: "red",
    },
  }
  return Bodies.circle(x, y, 20, options)
}
