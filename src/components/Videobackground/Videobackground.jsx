import React from "react";
import useMovietrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import styles from "./Videobackground.module.css";
const Videobackground = ({ movieid }) => {
  useMovietrailer(movieid);
  const trailer = useSelector((store) => store.movie.videotrailer);
  // src=
  return (
    <div className={styles.div}>
      <iframe
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
        frameborder="0"
        scrolling="no"
        allow="accelerometer; autoplay; clipboard-write; gyroscope;"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Videobackground;
