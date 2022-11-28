// import logo from "./logo.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import logoGhibli from "./image/pngegg.png";
import { React } from "react";
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
          className="w-80 cursor-pointer absolute"
          onClick={() => navigate("/")}
        />
        <div className="text-5xl m-auto">Ghibli's Library</div>
        <div className="m-10 flex space-x-6"></div>
      </header>
      <Routes>
        <Route path="/" element={<ListOfMovies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
