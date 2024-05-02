import { render } from "@testing-library/react";
import { useState } from "react";
import Modal from "./Modal";

let alphabets = [
  "All",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const BookShelf = (props) => {
  const [showForm, setShowForm] = useState(false);

  const switchAddForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
        id: new Date ().getTime(),
      name: event.target.bookName.value,
      author: event.target.author.value,
      publisher: event.target.publisher.value,
      description: event.target.bookDescription.value,
    };
    props.addBook(obj);

    event.target.bookName.value = "";
    event.target.author.value = "";
    event.target.publisher.value = "";
    event.target.bookDescription.value = "";
    setShowForm(false)
  };

  const renderList = (book, index) => {
    return (
      <div key={index} className="bookCard">
        <img
          src="https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.389"
          alt="Book Image"
        />
        <p className="name"> {book.name} </p>
        <h4> Author: {book.author} </h4>
        <h5> Publisher: {book.publisher}</h5>
        <h5>{book.description}</h5>
        <button onClick={() => props.removeBook(index, book.id)}>Remove Book</button>
      </div>
    );
  };

  return (
    <div>
      <button onClick={switchAddForm} className="addbook">
        Add Book
      </button>
      <Modal isOpen={showForm} children={
      <form onSubmit={handleSubmit}>
      <div className="">
      <button className="cancelBtn" type="submit">
            x
          </button>
        <div className="myInputs">
          <label htmlFor="label">Book Name</label>
          <input type="text" className="inputF" name="bookName" />
        </div>
        <div className="myInputs">
          <label htmlFor="label">Author</label>
          <input type="text" className="inputF" name="author" />
        </div>
        <div className="myInputs">
          <label htmlFor="label">Publisher</label>
          <input type="text" className="inputF" name="publisher" />
        </div>
        <div className="myInputs">
          <label htmlFor="label">Description</label>
          <input type="text" className="inputF" name="bookDescription" />
        </div>
        <div>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
      }/>
      {alphabets.map((alphabet, index) => {
        return (
          
          <span
            key={alphabet}
            onClick={() => props.onSelectAlpfilter(alphabet)}
            className={`alphabet ${alphabet === props.alpfilter ? "selected" : ""}`}
          >
            {alphabet}
          </span>
        );
      })}
      <div className="book-list">

      {props.filtered.length > 0 || props.alpfilter
        ? props.filtered.map((book, index) => {
            return renderList(book, index);
          })
        : props.books.map((book, index) => {
            return renderList(book, index);
          })}
      </div>
    </div>
  );
};
BookShelf.defaultProps = {
  addBook: () => {},
  books: [],
  filtered: [],
  removeBook: () => {},
  alpfilter: null,
};
export default BookShelf;
