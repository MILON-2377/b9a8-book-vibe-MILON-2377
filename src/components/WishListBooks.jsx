import { listedBooksToWishList } from "../Root/Root";
import { useContext } from "react";
import Wish from "./Wish";



const WishListBooks = () => {
    const {listBooks} = useContext(listedBooksToWishList);
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            {
                listBooks.map(book => <Wish key={book.id} book={book}></Wish>)
            }
        </div>
    );
};

export default WishListBooks;