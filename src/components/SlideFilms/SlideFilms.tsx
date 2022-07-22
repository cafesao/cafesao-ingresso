import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SlideFilms({ data }: any) {
  const [max, setMax] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setMax(data.length)
  }, [data])
  return (
    <div className="carousel w-full cursor-pointer">
      {data.map((film: any) => (
        <div
          key={`slide${film.id}`}
          id={`slide${film.id}`}
          className="carousel-item relative w-full"
        >
          <img
            src={film.image}
            className="w-full"
            onClick={() => navigate(`/film?id=${film.id}`)}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${film.id - 1}`} className="btn btn-circle">
              {'<'}
            </a>
            <a
              href={`#slide${film.id === max ? data[0].id : film.id + 1}`}
              className="btn btn-circle"
            >
              {'>'}
            </a>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-1/2 bottom-0">
            <h5
              className="text-4xl text-white"
              onClick={() => navigate(`/film?id=${film.id}`)}
            >
              {film.name}
            </h5>
          </div>
        </div>
      ))}
    </div>
  )
}
