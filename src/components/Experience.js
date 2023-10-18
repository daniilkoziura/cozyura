import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "../styles/components/Experience.module.css";

export default function Experience() {

    const data = useStaticQuery(
        graphql`
        query ExperienceSectionQuery {
            allExperienceSectionJson {
              edges {
                node {
                  id
                  workTitle
                  role
                  tag
                  years
                  link
                  duties {
                    achievements
                    description
                  }
                  
                }
              }
            }
          }
        `
      );
    
      const experience = data.allExperienceSectionJson.edges

      const tablist = experience.map(data => { 
        return {
            key: data.node.id,
            value: data.node.workTitle,
            active: false
        }
      })

      let [activeTabKey, setActiveTabKey] = React.useState(tablist[0].key)

      let [currentExperience, setCurrentExperience] = React.useState(experience[0].node)

      const activateTab = (e, clickedKey) => {
        e.preventDefault()

        if(activeTabKey !== clickedKey) {
            setActiveTabKey(clickedKey)

            const newExperienceData = experience.filter(data => data.node.id === clickedKey)

            if (newExperienceData && newExperienceData[0] && newExperienceData[0].node) {
                setCurrentExperience(newExperienceData[0].node)
            }
        }
      }

    return (
        <div className={styles.experienceContainer}>
            <div id="Experience" className={styles.experienceHeader}>
                <h1 className={styles.experienceTitle}>Experience</h1>
                <i className={styles.decorativeLine}></i>
            </div>
            <div className={styles.experienceContentContainer}>
                <div className={styles.experienceTablist}>
                    <ul>
                        {tablist.map((data) => (
                            <li 
                            className={`${data.key === activeTabKey ? styles.active : ''}`} 
                            key={data.key}
                            onClick={(e) => activateTab(e, data.key)}
                            onKeyDown={(e) => activateTab(e, data.key)}
                            >{data.value}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.experienceInner}>
                    <div className={styles.experienceTitleContainer}>
                        <h1 className={styles.experienceRoleTitle}>{currentExperience.role}</h1>
                        <a 
                            className={styles.experienceTitleLink} 
                            key={currentExperience.tag} 
                            href={currentExperience.link} 
                            rel="noreferrer" 
                            target="_blank">{currentExperience.tag}</a>
                    </div>
                    <span>{currentExperience.years}</span>
                    <ul>
                        {currentExperience.duties.map((data, i) => (
                            <li key={i}>
                                <h3 className={styles.experienceDescription}>{data.description}</h3>
                                <ul>
                                    {data.achievements.map((achievement, i) => (
                                        <li className={styles.achievmentsDescription} key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}