import React, { useState } from 'react';
import axios from 'axios';

const Bookform = ({ fetchBooks }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/books', {
            title,
            author,
            genre,
            publicationYear: year,
            description,
        });
        fetchBooks();
    };


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" required />
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Publication Year" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                <button type="submit">Add Book</button>
            </form>



        </div>
    )
}

export default Bookform