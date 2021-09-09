import React from 'react'
import './Book.css'
const Book = ({ title, description, image }) => {
    const maxChar = 50
    if (description && description?.length > maxChar) {
        description = description.substring(0, maxChar)
        description = description.substring(0,
            Math.min(description.length, description.lastIndexOf(" "))) + " . . ."
    }
    else {
        description = "Null"
    }
    return (
        <div className="book-root">
            <img src={image} alt={"Book Cover"} className="book-cover" />
            <div className="book-title">{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default Book
