import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function MovieDetail() {
    const [movie, setMovie] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();


    const getMovieData = () => {
        window.scrollTo(0, 0)
        axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((response) => 
        setMovie(response.data))
        .catch((err) => console.log(err))
        
    }

    useEffect(() => {
      getMovieData()  
    },)

  return (
    <>
        <div className="search-bar bg-hero info-section pt-20">
        </div>
        <div className="details-page text-fourth text-left px-20 pl-60">
            <div className="text-6xl">{movie.title}</div>
            <div className="flex space-x-5 items-center py-5">
                <div className="text-2xl text-third">{movie.original_title_romanised}</div>
                <div className="text-2xl text-third">- {movie.original_title}</div>
            </div>
            <div className="flex py-5 items-center">
                <img src={movie.image} alt="" className="rounded-3xl w-1/6" />
                <div className="w-2/3 px-10 text-xl flex flex-col space-y-4 relative">
                    <div className="text-third">Description</div>
                    <div className=" text-normal">{movie.description}</div>
                    <div className="flex space-x-4">
                        <div className="text-base text-third">Director :  <span className="text-fourth">{movie.director}</span></div>
                        <div className="text-base text-third">Rating :  <span className="text-fourth">{movie.rt_score}</span></div>
                        <div className="text-base text-third">Release date :  <span className="text-fourth">{movie.release_date}</span></div>
                    </div>
                    <button onClick={()=>navigate("/")} className="absolute -bottom-40 right-20 text-second p-3 bg-third transition-all duration-200 rounded-2xl text-base w-fit hover:scale-105">Back to home page</button>
                </div>
                {/* <img src={movie.movie_banner} alt="" /> */}
            </div>
        </div>
    </>
  )
}

export default MovieDetail