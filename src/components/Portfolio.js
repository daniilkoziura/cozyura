import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Linking from '../images/icon-linking.svg';

import * as styles from "../styles/components/Portfolio.module.css";

export default function Projects() {

    const data = useStaticQuery(
        graphql`
        query PortfolioSectionQuery {
            allPortfolioSectionJson {
              edges {
                node {
                  id
                  title
                  type
                  link
                  label
                  description
                  tools
                  avatar {
                    childImageSharp {
                      gatsbyImageData(width: 450)
                    }
                  }
                }
              }
            }
          }
        `
      );

      const storage = data.allPortfolioSectionJson.edges;
      const projectData = data.allPortfolioSectionJson.edges.slice(0, 2);

      let [activeProjects, setActiveProjects] = React.useState(projectData)
      let [isShowLessActive, setShowLessActive] = React.useState(false)
      let [isShowMoreActive, setShowMoreActive] = React.useState(true)

      const storageLength = storage.length;
      const activeProjectsLength = activeProjects.length;

      const showMore = e => {
        e.preventDefault()
        
        if(activeProjectsLength + 2 >= storageLength) {
          setActiveProjects(storage)
          setShowMoreActive(false)
        } else {
          setActiveProjects(storage.slice(0, (activeProjectsLength + 2)))
        }

        setShowLessActive(true)
      }

      const showLess = e => {
        e.preventDefault()

        if(activeProjectsLength >= 4) {
          setActiveProjects(storage.slice(0, (activeProjectsLength - 2)))

          if((activeProjectsLength - 2) < 3) {
            setShowLessActive(false)
          }
        }

        if(activeProjectsLength === 3) {
          setActiveProjects(storage.slice(0, (activeProjectsLength - 1)))

          if((activeProjectsLength - 1) < 3) {
            setShowLessActive(false)
          }
        }

        setShowMoreActive(true)
      }

    return (
        <div className={styles.portfolioContainer}>
            <div id="Portfolio" className={styles.portfolioHeader}>
                <h1 className={styles.portfolioTitle}>Portfolio</h1>
                <i className={styles.decorativeLine}></i>
            </div>
            {activeProjects.map((project, i) => (
                <div key={i}>
                    <div className={styles.portfolioCard}>
                    <a 
                    className={styles.projectLink} 
                    key={`${project.node.label}-image-key`} 
                    href={project.node.link} 
                    rel="noreferrer" 
                    target="_blank" 
                    aria-label={`${project.node.label}-image-label`}>
                            <GatsbyImage
                                className={styles.portfolioImage}
                                image={getImage(project.node.avatar)}
                                alt={project.node.label}
                            />
                        </a>
                        <article className={styles.portfolioArticle}>
                            <h4 className={styles.portfolioType}>{project.node.type}</h4>
                            <h1 className={styles.projectTitle}>{project.node.title}</h1>
                            <p className={styles.projectDescription}>{project.node.description}</p>
                            <ul className={styles.toolsList}>
                                {project.node.tools.map((tool, i) => (
                                           <li key={i} className={styles.tool}>{tool}</li>
                                ))}
                            </ul>
                        <a className={styles.iconLink} key={project.node.label} href={project.node.link} rel="noreferrer" target="_blank" aria-label={`${project.node.label}-label`}><Linking className={styles.iconStyle}/></a>
                        </article>
                    </div>
                    <i className={ i + 1 !== activeProjectsLength ? styles.lineSeparator : styles.emptySpace }></i>
                </div>  
            ))}
            {isShowMoreActive && (<button className={styles.showBtn} onClick={(e) => showMore(e)}>Show more</button>)}
            {isShowLessActive && (<button className={styles.showBtn} onClick={(e) => showLess(e)}>Show less</button>)} 
        </div>
    )
}