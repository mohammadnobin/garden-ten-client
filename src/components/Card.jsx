// import React from "react";
// import { AiFillLike } from "react-icons/ai";
// import { FaEye } from "react-icons/fa";


// const Card = ({tip}) => {
//   return (
//     <div className="md:p-6 p-4 rounded-tl-[80px] rounded-br-[80px] bg-white text-green border-8 border-double border-green ">
//       <div className="grid gap-x-4 items-center grid-cols-5">
//         <div className="col-span-2 ">
//       <img className="w-full rounded-tr-4xl rounded-bl-4xl " src={tip.imageUrl} alt="" />

//         </div>
//         <div className="col-span-3 space-y-2">
//       <h3 className="flex items-center text-xl"><span className="font-bold">Total Like:   </span>{tip.likeCount}<AiFillLike /></h3>
//       <h2 className="text-xl font-medium"> <span className="font-bold text-2xl">Title: </span> {tip.title}</h2>
//       <p className="text-lg"> <span className="font-bold">Description:</span> {tip.description}</p>
//       <button className="py-4 px-8 bg-green text-white rounded-tl-full rounded-br-full border-4 border-white border-double mt-4 cursor-pointer font-bold">Viwe Deatils</button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from "react";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router";

const Card = ({ tip }) => {
  return (
    <div className="p-4 md:p-6 rounded-tl-[60px] md:rounded-tl-[80px] rounded-br-[60px] md:rounded-br-[80px] bg-white text-green border-4 md:border-8 border-double border-green">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-2">
          <img
            className="w-full h-[200px]  md:h-auto rounded-tr-3xl rounded-bl-3xl "
            src={tip.imageUrl}
            alt="Tip"
          />
        </div>
        <div className="md:col-span-3 space-y-2">
          <h3 className="flex items-center text-lg md:text-xl font-semibold gap-2">
            <span className="font-bold">Total Like:</span> {tip.likeCount}
            <AiFillLike />
          </h3>
          <h2 className="text-lg md:text-xl font-medium">
            <span className="font-bold text-xl md:text-2xl">Title:</span> {tip.title}
          </h2>
          <p className="text-base md:text-lg">
            <span className="font-bold">Description:</span> {tip.description}
          </p>
          <Link to={`/tips-details/${tip._id}`}>
          <button className="py-2 md:py-4 px-6 md:px-8 bg-green text-white rounded-tl-full rounded-br-full border-2 md:border-4 border-white border-double mt-3 md:mt-4 cursor-pointer font-bold">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
