import React from 'react'
import styles from "./Header.module.css"
import netfliximg from "../../images/Netflix_Logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const user = useSelector(store => store.user)
  function handleclick(){
    dispatch(removeUser())
    history("/login")
  }
  return (
    <div className = {styles.div}>
        <img src={netfliximg} alt="" />
        {
          user && <h1 onClick={handleclick}>sign out</h1>
        }
    </div>
  )
}

export default Header