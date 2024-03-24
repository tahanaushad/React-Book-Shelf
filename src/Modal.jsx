import React from "react";



const Modal = ({showModal}) => {

    return (
        <div>
            {/* {showForm && <form onSubmit={handleSubmit}> */}
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
            {/* </form>} */}
            {/* {props.books.map((book, index) => {
                return (
                    <div key={index}>
                        {book.name}
                        {book.description}
                    </div>
                )
            })} */}
        </div>
    )
}

export default Modal