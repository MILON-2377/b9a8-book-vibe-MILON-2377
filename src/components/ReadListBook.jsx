import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import PropTypes from 'prop-types';

const ReadListBook = ({ listbook }) => {
  // console.log(listbook);
  const {
    author,
    bookName,
    category,
    image,
   
    rating,
    
    tags,
    totalPages
  } = listbook;
  return (
    <div className="card lg:h-[250px] lg:w-[80%] lg:card-side border lg:p-4 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[400px]"
          src={image}
        />
      </figure>

      <div className="card-body p-3 pl-5">
        <h2 className="text-xl font-bold text-black">{bookName}</h2>
        <p className="text-[18px] text-slate-700">By: {author}</p>
        <div className="flex w-[58%] ">
            <p className="text-[18px] hidden lg:block font-bold  text-black">Tag</p>
            <div className="flex gap-4">
                <div className="flex items-center gap-5">
                    <p className="lg:px-3 lg:py-1 text-[18px] btn rounded-2xl bg-gray-100 text-green-600">#{tags[0]}</p>
                    <p className="lg:px-3 btn lg:py-1 text-[18px] rounded-2xl bg-gray-100 text-green-600">#{tags[1]}</p>
                </div>
                <div className="lg:flex hidden items-center gap-1">
                    <CiLocationOn></CiLocationOn>
                    <p className="text-slate-500">Year of Publishing: </p>
                </div>
            </div>
        </div>
        {/* pulisher naem pages */}
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
                <FaUserFriends></FaUserFriends>
                <p>Publisher: </p>
            </div>
            <div className="flex items-center gap-2">
            <MdOutlineContactPage></MdOutlineContactPage>
                <p>page: {totalPages}</p>
            </div>
        </div>

       <hr className="border w-full" />

        <div className="flex items-center gap-4">
            <button className="bg-blue-400 lg:px-3 btn lg:py-1 text-white rounded-2xl"><span className="hidden lg:block">Category:</span> {category}</button>
            <button className="text-yellow-600 lg:px-3 btn lg:py-1 bg-yellow-100 rounded-2xl">Rating: {rating}</button>
            <button className="lg:px-3 btn lg:py-1 rounded-2xl bg-green-700 text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

ReadListBook.propTypes = {
  listbook: PropTypes.array.isRequired
}
export default ReadListBook;
