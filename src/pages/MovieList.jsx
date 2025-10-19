
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { Card } from '../components'
import { useEffect, useState } from 'react'

export const MovieList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/gimi_bappa_nasiru.json')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  console.log(movies);

  return (
    <main><section className='max-w-7xl mx-auto p-7'>
      <div className='flex justify-start flex-wrap'>



        {
          movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))
        }



      </div>
    </section>
    </main>
  )
}
