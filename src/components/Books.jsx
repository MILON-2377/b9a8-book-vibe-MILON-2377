import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";


const Books = ({ bookSingle }) => {
//   console.log(book);
    const {setBookDetails} = useContext(listedBooksToWishList);
    const {bookId, tags, image, bookName, rating, author, category } = bookSingle;

  return (
    <Link onClick={() => setBookDetails(bookSingle)} to={`/${bookId}`}>
      <div className="h-[580px] rounded-xl p-4 bg-base-100 flex flex-col gap-5 shadow-xl">
        <div className="rounded-xl h-[300px]">
          <img className="rounded-xl h-full w-full"
            src={image}
          />
        </div>
        <div className="flex items-center gap-5">
            <p className="px-4 py-2 text-green-400 bg-gray-50  rounded-2xl">{tags[0]}</p>
            <p className="px-4 py-2 text-green-400 bg-gray-50  rounded-2xl">{tags[1]}</p>
            <p className="px-4 py-2 text-green-400 bg-gray-50  rounded-2xl">{tags[2]}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className=" text-2xl font-bold text-black ">{bookName}</h2>
          <p className="text-[18px] font-medium text-black">By: {author}</p>
          <hr className="border border-dashed" />
          <div className="flex justify-between">
            <p className="text-[16px] font-medium">{category}</p>
            <div className="card-actions items-center justify-end">
                <p>{rating}</p>
                <FaStar></FaStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
