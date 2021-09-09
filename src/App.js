import React, { useState } from 'react';
import './App.css';
import BooksList from './components/BooksList';
import SearchBox from './components/SearchBox';
import axios from 'axios';

// process.env.REACT_APP_API
function App() {
  const [searchfield, setSearchfield] = useState("")
  const [booksResult, setBooksResult] = useState([])

  const submitSearch = (e) => {
    e.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchfield)}&key=AIzaSyBqzYuCxoU0-3_i6qfhxS1sS4GgdTZUnrI&maxResults=10`)
      .then(data => setBooksResult(data.data.items));
  }

  return (
    <div className="App">
      <SearchBox setSearchfield={setSearchfield} submitSearch={submitSearch} />
      <BooksList booksResult={booksResult} />
    </div>
  );
}

export default App;
