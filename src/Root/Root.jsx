import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import React, { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const bookDetailsContext = React.createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const listedBooksToWishList = React.createContext();
const Root = () => {
    const [bookDetails, setBookDetails] = useState();
    const [listBooks, setListBooks] = useState([]);
    // console.log(bookDetails)
    return (
        <div>
            <Nav></Nav>
            <listedBooksToWishList.Provider value={{setListBooks, listBooks}}>
                <bookDetailsContext.Provider value={{setBookDetails, bookDetails}}>
                    <Outlet></Outlet>
                </bookDetailsContext.Provider>
            </listedBooksToWishList.Provider>
        </div>
    );
};

export default Root;

{/* <listedBooksToWishList.Provider value={{setListBooks, listBooks}}>
                   
                   </listedBooksToWishList.Provider> */}