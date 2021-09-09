import React, { useState } from 'react';
import './App.css';
import BooksList from './components/BooksList';
import SearchBox from './components/SearchBox';
import axios from 'axios';

function App() {
  const [searchfield, setSearchfield] = useState("")
  const [booksResult, setBooksResult] = useState([])

  const submitSearch = (e) => {
    e.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchfield)}&key=${process.env.REACT_APP_API}&maxResults=10`)
      .then(data => setBooksResult(data.data.items));
  }
  // console.log(booksResult);
  return (
    <div className="App">
      <SearchBox setSearchfield={setSearchfield} submitSearch={submitSearch} />
      <BooksList booksResult={booksResult} />
    </div>
  );
}

export default App;
