import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pagenotfound/PageNotFound"; // Correct the import path
import MovieDetail from "./components/moviedetail/MovieDetail"; // Correct the import path
import "./App.scss";
import SearchResults from './components/search/SearchResults';


const App = () => {


  return (
    <div>
      <Router>
        <Header></Header>
        <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
         
        </Routes>
        <Footer></Footer>
        </div>
      </Router>
    </div>
  );
};

export default App;
