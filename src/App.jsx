import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BookShelf from "./BookShelf";
import Modal from "./Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";

function App() {

  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [alpfilter, setAlpfilter] = useState(null);
  const [modal, setModal] = useState(false);

  const addBook = (bookObj) => {
    setBooks((previousState) => {
      return [...previousState, bookObj];
    });
  };

  const removeBook = (index, id) => {
    books.splice(index, 1);
    setBooks([...books]);
    if (filtered.length > 0) {
      setFiltered((prev) => {
        return prev.filter((d) => d.id !== id);
      });
    }
  };

  const onSearch = (event) => {
    const filteredBook = books.filter((book, index) => {
      return book.name.includes(event.target.value);
    });
    setFiltered([...filteredBook]);
  };

  const onSelectAlpfilter = (selectedAlp) => {
    if (selectedAlp === "All") {
      setAlpfilter(null);
      setFiltered([]);
      return;
    }
    setAlpfilter(selectedAlp);
    let filteredByAlp = books.filter((book, index) => {
      return book.name.charAt(0).toLowerCase() === selectedAlp.toLowerCase();
    });
    console.log(filteredByAlp);
    setFiltered(filteredByAlp);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              <div className="nav-bar">
                tahanaushad
                <button className="logout-btn">Logout</button>
              </div>
              <div className="heading">
                <h1>Book Shelf</h1>
                <h4>{books.length} Books Available</h4>
              </div>

              <div className="wrap">
                <div className="search">
                  <input
                    onChange={onSearch}
                    type="text"
                    className="searchTerm"
                    placeholder="Search Book.."
                  />
                  <button type="submit" className="searchButton">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              <BookShelf
                addBook={addBook}
                books={books}
                filtered={filtered}
                removeBook={removeBook}
                alpfilter={alpfilter}
                onSelectAlpfilter={onSelectAlpfilter}
              />
            </div>
          }
        />
        <Route path="/DetailPage" element={<DetailPage />} />
        <Route path="*" element={<div>wrong route</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
