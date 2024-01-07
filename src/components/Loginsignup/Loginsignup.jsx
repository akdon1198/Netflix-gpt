import React, { useRef, useState } from 'react'
import styles from "./Loginsignup.module.css"
import backgroundimg from "../../images/backgroundimg.jpg"
import Header from '../Header/Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { checkvalidatedata } from '../../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/userSlice'
const Loginsignup = ({name}) => {
    const email = useRef(null)
    const password = useRef(null)
    const fullname = useRef(null)
    const history = useNavigate()
    const dispatch = useDispatch()
    const[error, seterror] = useState("")
    function handleform(e){
        e.preventDefault()
        const errormessage = checkvalidatedata(email.current.value, password.current.value)
        if(errormessage){
            seterror("Email or Password Invalid")
            return
        } 
        seterror("")
        if(name == "login"){
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                dispatch(addUser({email : email.current.value}))
                history("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterror("user not found")
            });
        }else{
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                dispatch({name : fullname.current.value, email : email.current.value})
                history("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                seterror("some error occured")
            });
        }
    }
  return (
    <div className={styles.bgimg}>
        <img src={backgroundimg} alt="" />
        <div className={styles.logincont}>
            <Header/>
            <div className={styles.card}>
                <form className={styles.flowcontent}>
                    <h1>{name == "login" ? "Sign In" : "Sign Up"}</h1>
                    {name != "login" ? <input type='text' placeholder='Name' ref={fullname}/>:""}
                    <input type="text" placeholder='Email'ref={email}/>
                    <input type="text" placeholder='Password'ref={password}/>
                    <p>{error}</p>
                    <button onClick={(e) => handleform(e)}>{name == "login" ? "Sign In" : "Sign Up"}</button>
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