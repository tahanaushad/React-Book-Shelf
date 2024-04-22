import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BookShelf from './BookShelf';



function App() {

  const [books, setBooks] = useState([])
  const [filtered, setFiltered] = useState([])

  const addBook = (bookObj) => {
    setBooks((previousState) => {
      return [
        ...previousState,
        bookObj
      ]
    })
  }


  const removeBook = (index) => {
    let booksObj = books;
    booksObj.splice(index, 1);
    setBooks([...booksObj])
  }

  const onSearch = (event) => {
    const filteredBook = books.filter((book, index) => {
      return book.name.includes(event.target.value);
    })
    setFiltered([...filteredBook])
  }


  return (
    <div className='main'>

      <div className='heading'>
        <h1>Book Shelf</h1>
        <h4>{books.length} Books Available</h4>
      </div>

      <div className="wrap">
        <div className="search">
          <input onChange={onSearch} type="text" className="searchTerm" placeholder="Search Book.." />
          <button type="submit" className="searchButton">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>



      <BookShelf addBook={addBook} books={books} filtered={filtered} removeBook={removeBook} />


    </div>
  );




};




export default App;
