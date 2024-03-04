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
        description: event.target.bookDescription.value
    }
props.addBook (obj)
    console.log(obj)

    event.target.bookName.value = ""
}

    return (
        <div>
            <button onClick={switchAddForm}>Add Book</button>
            {showForm && <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="label">Name</label>
                <input type="text" name="bookName" />
                </div>
                <div>
                <label htmlFor="label">Description</label>
                <input type="text" name="bookDescription" />
                </div>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>}
            {props.books.map((book, index) => {
                return(
                <div key={index}>
                    {book.name}
                </div>
                )
            })}
        </div>
    )

}

export default BookShelf;