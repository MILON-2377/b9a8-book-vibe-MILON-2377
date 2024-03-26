import { useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";
import ReadListBook from "./ReadListBook";


const ReadBook = () => {
   
    const {listBooks} = useContext(listedBooksToWishList);
    console.log(listBooks);

    return (
        <div className="flex flex-col p-4 gap-5">
            {/* <div className="h-[80px] w-full flex items-center justify-center bg-gray-200 rounded-lg">
                <h1 className="text-2xl font-bold">Books</h1>
            </div>
            <div className="flex items-center justify-center">
                <select className=" px-3 py-3 rounded-lg text-white font-bold text-xl outline-none border-none bg-green-600">
                    <option className="text-white font-medium" value="Sort By">Sort By</option>
                    <option value="Rating">Rating</option>
                    <option value="Number of pages">Number of pages</option>
                    <option value="Publisher year">Publisher year</option>
                </select>
            </div> */}
            <div className="flex flex-col items-center justify-center gap-5">
            {
                listBooks.map(listbook => <ReadListBook key={listbook.bookName} listbook ={listbook}></ReadListBook>)
            }
            </div>
        </div>
    );
};

export default ReadBook;