import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";


const Wish = ({ bookset }) => {
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
  } = bookset;
  return (
    <div className="card w-full h-[650px] flex lg:flex-row flex-col lg:h-[250px] lg:w-[80%] card-side border lg:p-4 bg-base-100 shadow-xl">
      <div className="w-[98%] p-3">
        <img className="lg:w-[400px] lg:h-full rounded-lg w-full" src={image} />
      </div>

      <div className="card-body p-3 pl-5">
        <h2 className="text-xl font-bold text-black">{bookName}</h2>
        <p className="text-[18px] text-slate-700">By: {author}</p>
        <div className="flex w-[58%] ">
          <p className="text-[18px] font-bold hidden lg:block  text-black">Tag</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-5">
              <p className="lg:px-3 btn lg:py-1 rounded-2xl bg-gray-100 text-green-600">
                #{tags[0]}
              </p>
              <p className="lg:px-3 btn lg:py-1 rounded-2xl bg-gray-100 text-green-600">
                #{tags[1]}
              </p>
            </div>
            <div className="lg:flex items-center hidden gap-1">
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

        <div className="flex items-center justify-between lg:gap-4">
          <button className="bg-blue-400 lg:px-3 btn text-[14px] lg:py-1 text-blue-600 rounded-2xl">
           <span className="hidden lg:block">Category: </span>{category}
          </button>
          <button className="text-yellow-600 btn text-[14px] lg:px-3 lg:py-1 bg-yellow-100 rounded-2xl">
            <span className="">Rating: </span>{rating}
          </button>
          <button className="lg:px-3 btn text-[14px] lg:py-1 rounded-2xl bg-green-700 text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wish;
