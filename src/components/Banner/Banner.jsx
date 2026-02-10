import { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import styles from "./Banner.module.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <header
      className={styles.banner}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className={styles.content}>
        <h1>{movie.name || movie.title}</h1>
        <p>
  {movie.overview?.length > 150
    ? movie.overview.slice(0, 150) + "..."
    : movie.overview}
</p>

      </div>
    </header>
  );
}

export default Banner;
