import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Movie from '../component/Movie';
import axios from "axios";

function ListOfMovies() {
    const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);

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
        <div className="search-bar bg-hero info-section py-20">
            <TextField
            onChange={inputHandler}
            id="outlined-basic"
            variant="outlined"
            label="Search"
            className="w-2/6 bg-fourth"
            />
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