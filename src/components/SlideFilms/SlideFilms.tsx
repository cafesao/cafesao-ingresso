import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IDataFilms } from '../../interface/data'

export default function SlideFilms({ data }: any) {
  const [max, setMax] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setMax(data.length)
  }, [data])
  return (
    <div className="carousel w-full cursor-pointer">
      {data.map((film: IDataFilms) => (
        <div
          key={`slide${film.id}`}
          id={`slide${film.id}`}
          className="carousel-item relative w-full"
        >
          <img
            src={film.image}
            className="w-full"
            onClick={() => navigate(`/film`, { state: { id: film.id } })}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${film.id - 1}`}
              className="btn btn-circle btn-xs md:btn-lg"
            >
              {'<'}
            </a>
            <a
              href={`#slide${film.id === max ? data[0].id : film.id + 1}`}
              className="btn btn-circle btn-xs md:btn-lg"
            >
              {'>'}
            </a>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 text-center">
            <h5
              className="btn btn-xs glass text-xs text-white md:btn-md md:text-2xl"
              onClick={() =>
                navigate('/film', {
                  state: {
                    id: film.id,
                  },
                })
              }
            >
              {film.name}
            </h5>
          </div>
        </div>
      ))}
    </div>
  )
}
