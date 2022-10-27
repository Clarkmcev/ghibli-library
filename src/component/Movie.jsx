import React, { useState} from 'react'
import { CiTimer } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import MovieDetail from './MovieDetail';

function Movie({movie}) {
  const [openDetail, setOpenDetail] = useState(false)
  const navigate = useNavigate();


  const showDetail = () => {
    navigate(`/movie/${movie.id}`)
  }

  return (
    <>
    <div className="p-5 m-5">
      <div className="">
        <div className="p-2 font-bold text-xl ">{movie.title}</div>
        <div className=" text-third">{movie.original_title}</div>
        <img src={movie.image} alt="" className="w-52 mt-4 mb-8 rounded-2xl card m-auto" onClick={showDetail}/>
        <div className="info m-auto"> 
          <div className="flex space-x-6">
            <p>Rating score</p>
            <p>{movie.rt_score}</p>
          </div>
          <div className="flex space-x-6">
            <p>Running time</p>
            <p>{movie.running_time} min</p>
          </div>
          <div className="flex space-x-6">
            <p>Release date</p>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Movie