// import { useLoaderData } from "react-router-dom";
// import { useContext } from "react";
import Books from "./Books";
// import { booksDataContext } from "../Root/Root";

import { useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";


const Home = () => {
    // const booksList = useLoaderData();
    // console.log(books);

    // const {booksList} = useContext(booksDataContext);

    // console.log(booksList)

    const {booksList} = useContext(listedBooksToWishList);
    // console.log(booksList)


    return (
        <div className="grid grid-cols-3 gap-5">
            {
                booksList.map(book => <Books key={book.bookName} book={book}></Books>)
            }
        </div>
    );
};

export default Home;