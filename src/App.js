import React, { useState } from 'react';
import './App.css';
import BooksList from './components/BooksList';
import SearchBox from './components/SearchBox';
import axios from 'axios';

function App() {
  const [searchfield, setSearchfield] = useState("")
  const [booksResult, setBooksResult] = useState([])
  const [loading, setLoading] = useState(false)
  const submitSearch = (e) => {
    e.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchfield)}&key=${process.env.REACT_APP_API}&maxResults=10`)
      .then(data => {
        setLoading(true)
        setBooksResult(data.data.items)
        setLoading(false)
      });
  }

  return (
    <div className="App">
      <SearchBox setSearchfield={setSearchfield} submitSearch={submitSearch} />
      {loading && <iframe src="https://giphy.com/embed/xT77Y1T0zY1gR5qe5O" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>}
      <BooksList booksResult={booksResult} />
    </div>
  );
}

export default App;
