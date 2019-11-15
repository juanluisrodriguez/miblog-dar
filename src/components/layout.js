import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
          <Link
            to={`/`}
          >
            <h1>
            Mi-Blog:~ juanluis$
            </h1>
          </Link>
      )
    } else {
      header = (
        <Link
          to={`/`}
        >
            Mi-Blog:~ juanluis$
        </Link>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Construido con
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          por Juan Luis
        </footer>
      </div>
    )
  }
}

export default Layout
