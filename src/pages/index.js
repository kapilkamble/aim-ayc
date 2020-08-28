import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Ambedkar International Mission - Australia" />
    <h1>Jai Bhim</h1>
    <h2>Ask your community</h2>
    <p>How can we help you?</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Contact />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
