import * as React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Entry from "../components/Entry"
import Profile from "../components/Profile"
import Experience from "../components/Experience"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Cozyura" />

export default function IndexPage() {
  return (
    <Layout>
        <Entry/>
        <Profile/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/> 
    </Layout>
  )
}