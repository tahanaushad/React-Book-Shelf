import { useState } from "react";

const BookShelf = (props) => {
    console.log(props)
    const [showForm, setShowForm] = useState(false)

    const switchAddForm = () => {
        setShowForm(!showForm)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const obj = {
            name: event.target.bookName.value,
            author: event.target.author.value,
            publisher: event.target.publisher.value,
            description: event.target.bookDescription.value
        }
        props.addBook(obj)


        event.target.bookName.value = ""
        event.target.author.value = ""
        event.target.publisher.value = ""
        event.target.bookDescription.value = ""

    }

    return (
        <div>
            <button onClick={switchAddForm} className="addbook">Add Book</button>

            {showForm && <form onSubmit={handleSubmit}>
                <div className="addBox">
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
                        <button className="submitBtn" type="submit">Submit</button>
                    </div>
                </div>
            </form>}
            {props.books.map((book, index) => {
                return (
                    <div key={index} className="bookCard">
                        <img src="https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.389" alt="Book Image" />
                        <p className="name"> {book.name} </p>
                        <h4> Author: {book.author} </h4>
                        <h5> Publisher: {book.publisher}</h5>
                        <h5>{book.description}</h5>
                    </div>
                )
            })}
        </div>
    )

}

export default BookShelf;