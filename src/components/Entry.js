import * as React from "react";
import * as styles from "../styles/components/Entry.module.css";
import { useStaticQuery, graphql } from "gatsby";
import IconGit from '../images/icon-git.svg';
import IconIn from '../images/icon-in.svg';
import downloadResume from '../static/Daniil_Koziura_cv.pdf'; 

export default function Entry() {

    const data = useStaticQuery(
        graphql`
        query EntrySectionQuery {
            allEntrySectionJson {
              edges {
                node {
                  fullName
                  entry
                  descriptions
                  roles
                  socialLinks {
                    linkedin
                    github
                  }
                }
              }
            }
          }
        `
      );

      const {descriptions, entry, fullName, roles, socialLinks} = data.allEntrySectionJson.edges[0].node

      let [currentDisplayIndex, setCurrentDisplayIndex] = React.useState(0);
      let [currentDisplayRole, setCurrentDisplayRole] = React.useState(roles[currentDisplayIndex]);
      let [isAnimate, setIsAnimate] = React.useState(true);

      React.useEffect(() => {
        const interval = setInterval(() => {
                setIsAnimate(false);
                setTimeout(() => {
                    setIsAnimate(true);
                }, 15);
            
                if (currentDisplayIndex === (roles.length - 1)) {
                    setCurrentDisplayIndex(0)
                    setCurrentDisplayRole(roles[0])
                } else {
                    const key = currentDisplayIndex === (roles.length - 1) ? currentDisplayIndex : ++currentDisplayIndex
                    setCurrentDisplayIndex(key)
                    setCurrentDisplayRole(roles[key])
                }
        }, 3000);

        return () => clearInterval(interval);
      }, [currentDisplayIndex, currentDisplayRole, roles, isAnimate])

    return (
        <div className={styles.entryContainer}>
            <h3 className={styles.helloEntry}>{entry}</h3>
            <h1 className={styles.fullName}>{fullName}</h1>
            <div className={styles.roleContainer}>
                <span className={`${styles.roleTitle}`}>A</span>
                <span className={`${styles.roleTitleAnimated} ${isAnimate ? styles.roleAnimation : ''}`}>{currentDisplayRole}</span>
            </div>
            <article>
                {descriptions.map((description, i) => (
                    <p  className={styles.articleParagraph} key={i}>{description}</p>
                ))}
            </article>
            <div className={styles.entryLinkContainer}>
                <a className={styles.downloadLink} key='download-cv' href={downloadResume} rel="noreferrer" target="_blank">Download CV</a>
                <a className={styles.githubLink} key='github-link' href={socialLinks.github} rel="noreferrer" target="_blank" aria-label="github-label"><IconGit className={styles.iconStyle}/></a>
                <a className={styles.linkedinLink} key='github-linkedin' href={socialLinks.linkedin} rel="noreferrer" target="_blank" aria-label="linkedin-label"><IconIn className={styles.iconStyle}/></a>
            </div>
        </div>
    )
}