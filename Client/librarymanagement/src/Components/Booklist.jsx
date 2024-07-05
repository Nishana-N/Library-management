import React from 'react'
import axios from 'axios';

const Booklist = ({ books, fetchBooks }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/api/books/${id}`);
        fetchBooks();
    };

    return (
        <div>
            <ul>
                {books.map((book) => (
                    <li key={book._id}>
                        <h3>Title: {book.title}</h3>
                        <p>Author :{book.author}</p>
                        <p>Genre: {book.genre}</p>
                        <p>Publication Year: {book.publicationYear}</p>
                        <p>Description: {book.description}</p>
                        <button onClick={() => handleDelete(book._id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Booklist