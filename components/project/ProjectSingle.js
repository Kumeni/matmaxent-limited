import React from "react";
import styles from "./ProjectSingle.module.css";
import Slides from '../slides/Slides'

function ProjectSingle() {
  return (
    <div className = {styles.container}>
        <h3>Project title: Title</h3>
        <p>Date: Jan 01, 0001</p>
        <Slides 
          data = {{images:[]}}
          imageType={"MULTIPLE"}
        />
    </div>
  )
}

export default ProjectSingle