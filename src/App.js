import React, { useState } from 'react';
import './App.css';
import BooksList from './components/BooksList';
import axios from 'axios';
import spinner from './assets/AnimatedBook.gif'
import Header from './components/Header'

function App() {
  const [searchfield, setSearchfield] = useState("")
  const [booksResult, setBooksResult] = useState([])
  const [loading, setLoading] = useState(false)

  const submitSearch = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchfield)}&key=${process.env.REACT_APP_API}&maxResults=10`)
      .then(data => {
        setBooksResult(data.data.items)
      });
    setLoading(false)
  }

  return (
    <div className="App">
      <Header setSearchfield={setSearchfield} submitSearch={submitSearch} />
      {loading && <img className="spinner" src={spinner} alt={"spinner"} />}
      <BooksList booksResult={booksResult} />
    </div>
  );
}

export default App;
