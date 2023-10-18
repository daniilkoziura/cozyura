import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/components/Profile.module.css";

export default function Profile() {

    const data = useStaticQuery(
        graphql`
        query ProfileSectionQuery {
            allProfileSectionJson {
              edges {
                node {
                  head
                  middle
                  bottom
                  technologiesTile
                  technologies
                }
              }
            }
          }
        `
      );

      const {head, middle, bottom, technologiesTile, technologies} = data.allProfileSectionJson.edges[0].node

    return (
        <div className={styles.profileContainer}>
            <div id="Profile" className={styles.profileHeader}>
                <h1 className={styles.profileTitle}>Profile</h1>
                <i className={styles.decorativeLine}></i>
            </div>
            <div className={styles.profileContentContainer}>
                <article className={styles.profileArticle}>
                    <p>{head}</p>
                    <p>{middle}</p>
                    <p>{bottom}</p>
                    <h4>{technologiesTile}</h4>
                    <div className={styles.techListContainer}>
                        <ul className={styles.techList}>
                            {technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                        </ul>
                    </div>
                </article>
                <StaticImage
                    className={styles.profileImage}
                    src="../images/profile.png"
                    loading="eager"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
                <i className={styles.mobileDecorativeLine}></i>
            </div>
        </div>
    )
}