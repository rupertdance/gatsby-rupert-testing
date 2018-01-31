import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  children: PropTypes.func.isRequired,
}

class DefaultLayout extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: `0 auto`,
          marginTop: rhythm(1.5),
          marginBottom: rhythm(1.5),
          maxWidth: 650,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
        }}
      >
        <Link style={{ textDecoration: `none` }} to="/">
          <h3 style={{ color: `tomato`, marginBottom: rhythm(1.5) }}>
            Brap Brap Example of using Contentful as a data source for a Gatsby site
          </h3>
        </Link>
        {this.props.children()}
        <hr style={{ marginTop: rhythm(3) }} />
        <p>
          The src for this website is at
          {` `}
          <a href="https://github.com/gatsbyjs/gatsby/tree/master/examples/using-contentful">
            https://github.com/gatsbyjs/gatsby/tree/master/examples/using-contentful
          </a>
        </p>
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
