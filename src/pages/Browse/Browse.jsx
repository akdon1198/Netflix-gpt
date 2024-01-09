import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import useNowplayingmovies from '../../hooks/useNowplayingmovies'
import styles from "./Browse.module.css"
import Videotitle from '../../components/Videotitle/Videotitle'
import Videobackground from '../../components/Videobackground/Videobackground'
import { useSelector } from 'react-redux'
import MovieList from '../../components/MovieList/MovieList'
const Browse = () => {
  useNowplayingmovies()
  const movies = useSelector(store => store.movie.nowplayingmovies)
  if(!movies) return;
  const mainmovie = movies[10]
  const{title, overview, id} = mainmovie
  return (
    <div>
      <Header/>
      <div className={styles.maincont}>
        <div className={styles.firstcont}>
          <Videotitle title = {title} overview = {overview}/>
          <Videobackground movieid = {id}/>
        </div>
        <div className={styles.secondcont}>
          <MovieList movietype = "NowPlaying"/>
          <MovieList movietype = "Popular"/>
          <MovieList movietype = "Trending"/>
          <MovieList movietype = "Upcoming"/>
        </div>
      </div>
    </div>
  )
}

export default Browse