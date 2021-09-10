import React from 'react'
import './Book.css'
const undefinedBookImage = "https://static.thenounproject.com/png/991703-200.png"

const Book = ({ title, description, image }) => {
    const maxChar = 50
    if (description && description?.length > maxChar) {
        description = description.substring(0, maxChar)
        description = description.substring(0,
            Math.min(description.length, description.lastIndexOf(" "))) + " . . ."
    }
    else {
        description = "There is no description"
    }
    return (
        <div className="book-root">
            <img src={image || undefinedBookImage} alt={"Book Cover"} className="book-cover" />
            <div className="book-title">{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default Book
