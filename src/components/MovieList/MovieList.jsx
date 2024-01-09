import React from 'react'
import styles from "./MovieList.module.css"
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
const MovieList = ({movietype}) => {
    const movies = useSelector(store => store.movie.nowplayingmovies)
  return (
    <div className={styles.div}>
        <h1>{movietype}</h1>
        <div>
            {
                movies?.map(movie => <MovieCard />)
            }
        </div>
    </div>
  )
}

export default MovieList