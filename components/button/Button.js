import React from 'react';
import styles from "./Button.module.css";

function Button(props) {

  const type = () =>{
    if(props.type === "success"){
      return styles.success;
    }
	return ""
  }
  return (
    <button className={styles.button + " " + (type())}>
        Contact us
    </button>
  )
}

export default Button