import * as React from "react";
import * as styles from "../styles/components/Entry.module.css";
import { useStaticQuery, graphql } from "gatsby";
import IconGit from '../images/icon-git.svg';
import IconIn from '../images/icon-in.svg';
import downloadResume from '../static/Daniil_Koziura_Resume_Full_Stack.pdf'; 

export default function Entry() {
  const data = useStaticQuery(graphql`
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
  `);

  const { descriptions, entry, fullName, roles, socialLinks } = data.allEntrySectionJson.edges[0].node;

  const [currentDisplayIndex, setCurrentDisplayIndex] = React.useState(0);
  const [isAnimate, setIsAnimate] = React.useState(true);

  // Update role on each interval tick
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimate(false);

      setTimeout(() => {
        setIsAnimate(true);
      }, 15);

      setCurrentDisplayIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const currentDisplayRole = roles[currentDisplayIndex];

  return (
    <div className={styles.entryContainer}>
      <h3 className={styles.helloEntry}>{entry}</h3>
      <h1 className={styles.fullName}>{fullName}</h1>
      <div className={styles.roleContainer}>
        <span className={styles.roleTitle}>A</span>
        <span
          className={`${styles.roleTitleAnimated} ${
            isAnimate ? styles.roleAnimation : ''
          }`}
        >
          {currentDisplayRole}
        </span>
      </div>
      <article>
        {descriptions.map((description, i) => (
          <p className={styles.articleParagraph} key={i}>
            {description}
          </p>
        ))}
      </article>
      <div className={styles.entryLinkContainer}>
        <a
          className={styles.downloadLink}
          href={downloadResume}
          rel="noreferrer"
          target="_blank"
        >
          Download CV
        </a>
        <a
          className={styles.githubLink}
          href={socialLinks.github}
          rel="noreferrer"
          target="_blank"
          aria-label="github-label"
        >
          <IconGit className={styles.iconStyle} />
        </a>
        <a
          className={styles.linkedinLink}
          href={socialLinks.linkedin}
          rel="noreferrer"
          target="_blank"
          aria-label="linkedin-label"
        >
          <IconIn className={styles.iconStyle} />
        </a>
      </div>
    </div>
  );
}