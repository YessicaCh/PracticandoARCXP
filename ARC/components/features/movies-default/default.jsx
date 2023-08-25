import React from 'react'
import { useAppContext } from 'fusion:context'
import { useContent } from 'fusion:content'

const MovieDetail = (props) => {
  const { globalContent } = useAppContext()

  const response = useContent({
    source: 'movie-find',
    query: {
      movieTitle: 'deadpool',
    },
  })
//   const data = {};

  return (
    <div>
        {/* <h1>{response?.Title}</h1>
        <h5>{response?.Year}</h5> */}
        {/* <p>{data?.Year}</p> */}
      {/* <h1>{globalContent?.name}</h1> */}
      <h1>Hola super Heroe</h1>
    </div>
  )
};

MovieDetail.label = {
  en: 'Movie Detail',
  es: 'Los detalles de la pelicula',
};

export default MovieDetail;



