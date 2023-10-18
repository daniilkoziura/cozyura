import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "../styles/components/Contact.module.css";


export default function Contact() {
    
    const data = useStaticQuery(
        graphql`
        query ContactSectionQuery {
            allContactSectionJson {
              edges {
                node {
                  title
                  subTitle
                  paragraph
                  button
                }
              }
            }
          }
        `
      );

      const {title, subTitle, paragraph, button} = data.allContactSectionJson.edges[0].node;

      return (
        <div className={styles.contactContainer}>
             <div id="Contact" className={styles.contactHeader}>
                <i className={styles.decorativeLine}></i>
                <h1 className={styles.contactTitle}>Contact</h1>
                <i className={styles.decorativeLine}></i>
            </div>
            <div className={styles.contactContent}>
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <p>{paragraph}</p>
                <a className={styles.emailBtn} href="mailto:daniilkoziura@gmail.com" target="_blank" rel="nofollow noopener noreferrer">{button}</a>
            </div>
        </div>
      )

}