import React, { useState, useEffect } from 'react'
import {movies, genres} from './moviedata'
import styles from './App.module.css'

const App = () => {
  const [genre, setGenre] = useState(0)
  const [genreMovies, setGenreMovies] = useState([])

  useEffect(() => {
    const newGenreMovies = movies.filter(movie => movie.genre === genre)
    setGenreMovies([...newGenreMovies])
  },[genre])

  function changeGenre(id) {
    setGenre(id)
  }
  return (
    <div>
      <h2>movies are amazing</h2>
      <p>Here are some of them...</p>
      <div className={styles.genrelist}>{genres.map((genre, index) => <button key={index} onClick={() => changeGenre(index)} className={styles.genre_btn}>{genre}</button>) }
      </div>
      {
        genreMovies.map(movie => 
        <div key={movie.id} className={styles.movie}>
          <h4>{movie.name}</h4>
          <p className={styles.movie_desc}>{movie.desc}</p>
          <span className={styles.span}>{movie.rating}/10</span>
        </div>)
      }

    </div>
  );
}

export default App;
