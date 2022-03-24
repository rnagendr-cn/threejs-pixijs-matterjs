import React from "react"
import withStyles from "react-jss"
import { Link } from "react-router-dom"
import routes from "./routes"
import fonts from "./assets/fonts"
import globalStyles from "./data/globalStyles"

const styles = {
  ...fonts,
  ...globalStyles,
  app: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
    padding: "3rem 2rem",
    textAlign: "left",
    boxSizing: "border-box",
  },
}

const App = ({ classes }) => {
  return (
    <main className={classes.app}>
      <nav>
        {Object.values(routes.slice(1, routes.length)).map((d, i) => (
          <>
            <Link key={i} to={d.path}>
              <h2>{d.name}</h2>
            </Link>
            <p>{d.description}</p>
          </>
        ))}
      </nav>
    </main>
  )
}

export default withStyles(styles)(App)
