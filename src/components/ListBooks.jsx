import {  useState, useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";
import { Link, Outlet } from "react-router-dom";


const ListBooks = () => {

    const [clickBtn, setClickBtn] = useState();

    const { listBooks } = useContext(listedBooksToWishList);


  return (
    <div>
        <div className="flex">
            <Link onClick={() => setClickBtn(1)} className={`${clickBtn === 1 ? 'border-b-0 rounded-t-md font-medium' : 'border border-t-0 border-l-0 border-r-0'} px-4 py-3 border-2`} to='readbooks'>Read Books</Link>
            <Link onClick={() => setClickBtn(2)} className={`${clickBtn === 2 ? 'border-b-0 rounded-t-md font-medium' : 'border border-t-0 border-l-0 border-r-0'} px-4 py-3 border-2`} to='wishlistbooks'>Wishlist Books</Link>
            <div className="border-2 flex-1 border-t-0 border-l-0 border-r-0"></div>
        </div>

        <Outlet>   
        </Outlet>
    </div>
  );
};

export default ListBooks;
