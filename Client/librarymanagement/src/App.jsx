import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Booklist from './Components/Booklist';
import Bookform from './Components/Bookform';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3000/api/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
 

  return (
    <>
    <div className="App">
      <h1>Library Management System</h1>
      <Bookform fetchBooks={fetchBooks} />
      
      <Booklist books={books} fetchBooks={fetchBooks} />
    </div>
      
        
    </>
  )
}

export default App
