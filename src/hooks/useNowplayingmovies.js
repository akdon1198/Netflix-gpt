import { useDispatch } from "react-redux"
import { MOVIE_API_KEY } from "../Constant"
import { addmovies } from "../redux/movieSlice"
import { useEffect } from "react"
import axios from "axios"

const useNowplayingmovies = ()=>{
    const dispatch = useDispatch()
    async function getmovie(){
      const moviedata = await axios.get(MOVIE_API_KEY)
      dispatch(addmovies(moviedata.data.results))
    }
    useEffect(()=>{
      getmovie()
    },[])
  
}

export default useNowplayingmovies