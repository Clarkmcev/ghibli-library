// import logo from "./logo.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import logoGhibli from "./image/pngegg.png";
import TextField from "@mui/material/TextField";
import { React, useEffect, useState } from "react";
import MovieDetail from "./component/MovieDetail";
import ListOfMovies from "./pages/ListOfMovies";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="flex  bg-fourth items-center justify-between">
        <img
          src={logoGhibli}
          alt=""
          className="w-80 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="text-5xl">Library</div>
        <div className="m-10 flex space-x-6">
          <div>Home</div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<ListOfMovies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
