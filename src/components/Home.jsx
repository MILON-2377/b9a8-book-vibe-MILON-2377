import { useLoaderData } from "react-router-dom";
import Books from "./Books";


const Home = () => {
    const booksList = useLoaderData();
    // console.log(books);
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                booksList.map(book => <Books key={book.bookName} book={book}></Books>)
            }
        </div>
    );
};

export default Home;