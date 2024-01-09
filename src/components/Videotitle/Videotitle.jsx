import React from 'react'
import styles from "./Videotitle.module.css"
const Videotitle = ({title, overview}) => {
  return (
    <div className={styles.div}>
      <h1>{title}</h1>
      <h3>{overview}</h3>
      <div className={styles.buttoncont}>
        <button>▶️Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default Videotitle