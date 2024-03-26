// import { useContext } from "react";
// import { listedBooksToWishList } from "../Root/Root";
// import ReadListBook from "./ReadListBook";


const ReadBook = () => {
    // const { listBooks } = useContext(listedBooksToWishList);
    // const {listBooks} = useContext(listedBooksToWishList);
    // console.log(listBooks)
    return (
        <div>
            <h1>hello from readbooks container</h1>
            {
                // listBooks.map(listbook => <ReadListBook key={listbook.bookName} listbook ={listbook}></ReadListBook>)
            }
        </div>
    );
};

export default ReadBook;