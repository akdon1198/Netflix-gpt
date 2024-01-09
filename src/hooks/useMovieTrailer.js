import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { moviefirstpart, moviesecondpart } from "../Constant";
import { addvideotrailer } from "../redux/movieSlice";

const useMovietrailer = (movieid) =>{
    const dispatch = useDispatch()
    const getmovievideos = async () => {
      const moviedata = await axios.get(moviefirstpart + movieid + moviesecondpart);
      const trailermoviearr = moviedata.data.results;
      const trailer = trailermoviearr.filter((trailerobj) => trailerobj.type == "Trailer");
      dispatch(addvideotrailer(trailer[0]))
    };
    useEffect(() => {
      getmovievideos();
    }, []);
}

export default useMovietrailer