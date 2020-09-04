import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/ambedkar-mission.jpeg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        
      }}
    >
      <img src={logo} alt="AIM Australia - AYC" width="75" height="75" align="left" style={{marginRight: 1.45 + 'em'}}></img>
      <h1 style={{ margin: 0 }}>
      
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          
          {siteTitle}
          
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
