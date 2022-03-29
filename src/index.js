import React from "react"
import { render } from "react-dom"
import { Routes, Route, HashRouter } from "react-router-dom"
import routes from "./routes"

render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {routes.map(({ path, page }, i) => (
          <Route key={i} path={path} element={page} />
        ))}
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
