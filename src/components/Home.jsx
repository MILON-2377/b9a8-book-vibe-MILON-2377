
import Books from "./Books";
import { useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";
import { NavLink } from "react-router-dom";


const Home = () => {

    const {booksList} = useContext(listedBooksToWishList);


    return (
        <div className="flex flex-col w-full gap-7">
            <div className="hero mx-auto w-full lg:h-[400px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="w-[400px] rounded-lg"
                    src="https://img.freepik.com/premium-vector/creative-corporate-book-cover-design_412264-3587.jpg?w=900"
    
                />
                <div>
                    <h1 className="lg:text-5xl text-center text-2xl font-bold">Fresh Your Mind to reads the books </h1>
                    <p className="py-6 text-center lg:w-[50%]">
                        To ready your mind for reading, break routines, find calm activities, set clear intentions, create a focused environment, explore genres, and practice mindfulness.
                    </p>
                    <NavLink className="btn bg-[#23BE0A] lg:mx-0 text-white" to='/listedbooks'>View the list</NavLink>
                </div>
                </div>
            </div>
            
            <div className="grid lg:grid-cols-3 lg:w-[90%] mx-auto px-4 gap-5">
                {
                    booksList.map(bookSingle => <Books key={bookSingle.bookName} bookSingle={bookSingle}></Books>)
                }
            </div>
        </div>
    );
};

export default Home;