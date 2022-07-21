import { useNavigate } from 'react-router-dom'

export default function Films() {
  const navigate = useNavigate()
  return (
    <div className="carousel w-full cursor-pointer">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/top-gun-maverick/6f11c2a0-f605-409c-99d1-3d9caee557c9.jpg"
          className="w-full"
          onClick={() => navigate('/film?name=top gun: maverick')}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            {'<'}
          </a>
          <a href="#slide2" className="btn btn-circle">
            {'>'}
          </a>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/2 bottom-0">
          <h5
            className="text-4xl text-white"
            onClick={() => navigate('/film?name=top gun: maverick')}
          >
            Top Gun: Maverick
          </h5>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/lightyear/bebfb2df-e284-4a04-8e91-27ff41c858b4.jpg"
          className="w-full"
          onClick={() => navigate('/film?name=lightyear')}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            {'<'}
          </a>
          <a href="#slide3" className="btn btn-circle">
            {'>'}
          </a>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/2 bottom-0">
          <h5
            className="text-4xl text-white"
            onClick={() => navigate('/film?name=lightyear')}
          >
            Lightyear
          </h5>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/elvis/33d45b3d-2c29-46b0-9e82-6603a7fcc4a9.jpg"
          className="w-full"
          onClick={() => navigate('/film?name=elvis')}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            {'<'}
          </a>
          <a href="#slide4" className="btn btn-circle">
            {'>'}
          </a>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/2 bottom-0">
          <h5
            className="text-4xl text-white "
            onClick={() => navigate('/film?name=elvis')}
          >
            Elvis
          </h5>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://ingresso-a.akamaihd.net/prd/img/movie/tudo-em-todo-o-lugar-ao-mesmo-tempo/fb56940e-e565-413e-a9de-04e9e0c7aad6.jpg"
          className="w-full"
          onClick={() =>
            navigate('/film?name=tudo em todo o lugar ao mesmo tempo')
          }
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            {'<'}
          </a>
          <a href="#slide1" className="btn btn-circle">
            {'>'}
          </a>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-1/2 bottom-0">
          <h5
            className="text-4xl text-white "
            onClick={() =>
              navigate('/film?name=tudo em todo o lugar ao mesmo tempo')
            }
          >
            Tudo Em Todo O Lugar Ao Mesmo Tempo
          </h5>
        </div>
      </div>
    </div>
  )
}
