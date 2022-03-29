import React from "react"
import { render } from "react-dom"
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom"
import routes from "./routes"

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, page }, i) => (
          <Route key={i} path={path} element={page} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
