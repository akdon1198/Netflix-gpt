import React from 'react'
import styles from "./Header.module.css"
import netfliximg from "../../images/Netflix_Logo.png"
const Header = () => {
  return (
    <div className = {styles.div}>
        <img src={netfliximg} alt="" />
    </div>
  )
}

export default Header