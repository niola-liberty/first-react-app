import {useEffect} from 'react';
import searchIcon from './search.svg';
import './App.css';

// 
const API_URL = "http://www.omdbapi.com?apikey=baa6eab2";

function App() {
  const searchMovies = async (title) => {
    const response =await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);  
  }
 useEffect(() => {
    searchMovies('Superman')
 }, []);
  return (
    <div className="app">
      <h1>NetPlay </h1>
      <div className = "search">
        <input placeholder='Search for movies' value="Superman" ></input>
        <img src={searchIcon} onClick></img>
      </div>
      <div className ="container">
         
      </div>
    </div>
  );
}

export default App;
