import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Movie from '../component/Movie';
import axios from "axios";
import { BsFilterLeft } from 'react-icons/bs';
import OutsideClickHandler from 'react-outside-click-handler';

function ListOfMovies() {
    const [inputText, setInputText] = useState("");
    const [movies, setMovies] = useState([]);
    const [showFilter, setShowFilter] = useState(false);

    const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => console.log(err));
  };

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        <div className="search-bar bg-hero py-20 flex flex-row items-center justify-center space-x-2">
            <TextField
            onChange={inputHandler}
            id="outlined-basic"
            variant="outlined"
            label="Search"
            className="w-2/6 bg-fourth rounded-2xl"
            />
            <OutsideClickHandler       onOutsideClick={() => setShowFilter(!showFilter)}>
            <div className="bg-fourth p-1 rounded-xl cursor-pointer hover:border-first border-none">

              <button className="relative" onClick={()=>setShowFilter(!showFilter)}>
                <BsFilterLeft size={"32px"}/>
              </button>
              {showFilter &&
              <div id="absolute" className="absolute flex flex-col text-left bg-fourth p-2 rounded-lg text-sm">
                <a href="/" className="p-2 hover:bg-third rounded-lg">By rankings</a>
                <a href="/" className="p-2 hover:bg-third rounded-lg">By year</a>
                <a href="/" className="p-2 hover:bg-third rounded-lg">By running time</a>
              </div>
              }
            </div>   
            </OutsideClickHandler>
            
        </div>
        <div className="main">
            <div className="flex flex-wrap space-x-2 px-20 bg-second text-fourth justify-center">
            {movies
                .filter((elem) => elem.title.toLowerCase().includes(inputText))
                .map((movie) => (
                <Movie movie={movie} key={movie.id} />
                ))}
            </div>
      </div></>
  )
}

export default ListOfMovies