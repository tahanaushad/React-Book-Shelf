import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BookShelf from './BookShelf';
import Modal from './Modal';



function App() {

  const [books, setBooks] = useState([])

  const addBook = (bookObj) => {
    setBooks((previousState) => {
      return [
        ...previousState,
        bookObj
      ]
    })
  }


  

  return (
    <div className='main'>

      <div className='heading'>
        <h1>Book Shelf</h1>
        <h4>96 Books Available</h4>
      </div>

      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Search Book.." />
          <button type="submit" className="searchButton">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>




      <BookShelf addBook={addBook} books={books} />


    </div>
  );




};




export default App;
