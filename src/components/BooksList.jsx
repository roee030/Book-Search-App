import React from 'react'
import Book from './Book'
import './BooksList.css'
const BooksList = ({ booksResult }) => {
    return (
        <div className='books-list-root'>
            {booksResult && booksResult.map(book =>
                <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                />)}
        </div>
    )
}

export default BooksList
