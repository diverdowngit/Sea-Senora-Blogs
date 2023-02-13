import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/layout.module.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from '../images/heroimage.jpg'
import Hero from '../components/hero'
import Ewv from "../pages/Ewv"
const IndexPage = () => {
  return (
    <Layout>
  
     <Hero img={Img} centerText="Welcome to SV Sea Senora " location="WorldWide."font-family=" 'Luminari', sans-serif;"/>
      
       <Ewv />
    

      
     
     
      </Layout>
  )
}
export const Head = () => <Seo title="Home" />
export default IndexPage
// const IndexPage = () => (
//   <Layout>
//     <div className={styles.textCenter}>
//       <StaticImage
//         src="../images/example.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ marginBottom: `var(--space-3)` }}
//       />
//       <h1>
//         Welcome to <b>Gatsby!</b>
//       </h1>
//       <p className={styles.intro}>
        
//       </p>
//     </div>
  
//   </Layout>
// )

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="Home" />

// export default IndexPage
