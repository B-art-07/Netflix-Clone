import { useEffect, useState } from "react";
import axios from "../../api/axios";
import styles from "./Row.module.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  if (!movies.length) return null;

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.posters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
