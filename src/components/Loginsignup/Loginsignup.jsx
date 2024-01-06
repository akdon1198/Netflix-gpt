import React from 'react'
import styles from "./Loginsignup.module.css"
import backgroundimg from "../../images/backgroundimg.jpg"
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'
const Loginsignup = ({name}) => {
    console.log(name);
  return (
    <div className={styles.bgimg}>
        <img src={backgroundimg} alt="" />
        <div className={styles.logincont}>
            <Header/>
            <div className={styles.card}>
                <form className={styles.flowcontent}>
                    <h1>{name == "login" ? "Sign In" : "Sign Up"}</h1>
                    {name != "login" ? <input type='text' placeholder='Name'/>:""}
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Password'/>
                    <button>{name == "login" ? "Sign In" : "Sign Up"}</button>
                    {name == "login" ? 
                    <p>New to Netflix?<NavLink to = "/register">Sign up now</NavLink></p>
                    :
                    <p>Already registered<NavLink to = "/login">Sign In now</NavLink></p>
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default Loginsignup