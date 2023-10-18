import * as React from "react";
import Menu from '../images/menu.svg';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "../styles/components/Header.module.css"

export default function Header() {

    const data = useStaticQuery(
        graphql`
          query NavBarQuery {
            allNavBarJson {
                edges {
                    node {
                        link
                        value
                    }
                }
            }
          }
        `
      );

      let [isMenuActive, setIsMenuActive] = React.useState(false)

    return (
        <header>
            <StaticImage
                    className={styles.logoHeader}
                    src="../images/Logo.png"
                    loading="eager"
                    width={48}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
            <nav className={styles.navigationHeader}>
                {data.allNavBarJson.edges.map((n) => (
                    <Link  
                    className={styles.navLink}
                    key={n.node.value} 
                    to={n.node.link}>{n.node.value}</Link>
                ))}
            </nav>
            <button className={styles.menuLink} onClick={() => setIsMenuActive(!isMenuActive)}><Menu/></button>
            {isMenuActive && (<div className={styles.navigationMenu}>
                {data.allNavBarJson.edges.map((n) => (
                    <Link className={styles.navMobileLink} key={n.node.value} to={n.node.link}>{n.node.value}</Link>
                ))}
            </div>)}
        </header>
    )
}