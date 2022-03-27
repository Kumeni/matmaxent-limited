import React from 'react';
import ProjectSingle from './ProjectSingle';
import styles from './Project.module.css';

function Project(props) {
  return (
    <div className = {styles.container}>
        <h2>Service name</h2>
        <ProjectSingle />
    </div>
  )
}

export default Project