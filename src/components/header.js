import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const scrollTo = selector => {
    document.querySelector(selector).scrollIntoView({ behavior: "smooth" })
  }
  return (
    <header>
      <h1>
        <Link
          to="/"
          style={{
            color: `#DBA0A5`,
            textDecoration: `none`,
          }}
        >
          <Img
            alt={data.site.siteMetadata.title}
            fixed={data.file.childImageSharp.fixed}
          />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <a onClick={() => scrollTo("#home")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#blog")}>Blog</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#contact")}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
