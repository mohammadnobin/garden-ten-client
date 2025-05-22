import { useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { FaArrowLeft, FaEye } from "react-icons/fa";


const TipsPage = () => {
  const tips = useLoaderData();
  const [allTips, setAllTips] = useState(tips);
    const [loading, setLoading] = useState(false);

  const handleAll = () => {
    setAllTips(tips);
  };

  const handleDifficultyChange = (e) => {
    const selectedValue = e.target.value;
   setLoading(true);
    fetch(`https://garden-server-beige.vercel.app/tips-sort/${selectedValue}`)
      .then((res) => res.json())
      .then((data) => {
        setAllTips(data);
 setLoading(false);
      });
  };

  return (
    <div className="container mx-auto pt-10 px-2">
      <Link to="/">
        <button className="text-green dark:bg-black dark:text-white dark:border-white flex items-center md:ml-0 mx-auto md:mb-0 mb-2  gap-x-2 py-4 px-8 rounded-tl-full rounded-br-full border-4 border-green bg-white text-xl cursor-pointer">
          <FaArrowLeft size={20} /> Go Back
        </button>
      </Link>
      <div className="text-green dark:bg-black dark:text-white dark:border-white w-full md:w-8/12 lg:w-5/12 mb-6 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-xl font-bold md:text-3xl">All Gardening Tips</h2>
      </div>
      <div className="my-7 w-full dark:bg-black  bg-white mx-auto p-4 text-green md:w-7/12 lg:w-4/12 rounded-2xl ">
        <label className="font-semibold  pb-2 text-xl block">
          <button
            className="text-green dark:bg-black dark:text-white dark:border-white  py-4 w-full rounded-tl-full rounded-br-full border-4 border-green bg-white text-xl cursor-pointer"
            onClick={handleAll}
          >
            All Tips
          </button>
        </label>
        <label className="font-semibold dark:text-white pb-2 text-xl block">
          Sort by Difficulty Level
        </label>
        <select
          name="difficulty"
          required
          defaultValue=""
          onChange={handleDifficultyChange}
          className="px-4 py-3 w-full dark:text-white dark:border-white bg-transparent rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-green focus-within:outline-0"
        >
          <option value="" disabled className="text-gray-400">
            Select Difficulty
          </option>
          <option value="Easy" className="text-black">
            Easy
          </option>
          <option value="Medium" className="text-black">
            Medium
          </option>
          <option value="Hard" className="text-black">
            Hard
          </option>
        </select>
      </div>
      <div className="bg-white dark:bg-black dark:text-white dark:border-white w-full lg:w-10/12 mx-auto  text-green border-4 border-double border-green rounded-xl p-4">
        <div className="hidden md:grid grid-cols-4 gap-4 pb-2 border-b-2 border-green font-bold text-lg">
          <div>Image</div>
          <div>Title</div>
          <div>Category</div>
          <div className="text-center">CRUD</div>
        </div>
        {loading ? (
    <div className="flex flex-col items-center justify-center py-10">
      <span className="loading loading-ring loading-lg text-green scale-[2.5]"></span>
      <p className="mt-4 text-green text-xl font-semibold">Loading tips...</p>
    </div>
        ) : (allTips.map((item) => (
          <div
            key={item._id}
            className="grid dark:bg-black dark:text-white dark:border-white grid-cols-1 md:grid-cols-4 items-center gap-4 mt-4 border-2 p-4 rounded-xl border-green"
          >
            <div className="flex justify-center md:justify-start">
              <img
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <div>
              <h3 className="font-semibold text-center md:text-left">
                {item.title}
              </h3>
            </div>
            <div>
              <h3 className="text-center md:text-left">{item.category}</h3>
            </div>
            <div className="flex justify-center">
              <Link
                to={`/tips-details/${item._id}`}
                className="bg-green text-white p-2 dark:bg-black dark:text-white dark:border-white border rounded-lg transition"
              >
                <FaEye className="text-xl" />
              </Link>
            </div>
          </div>
        ))
                )}
      </div>
    </div>
  );
};

export default TipsPage;

// import { useState } from "react";
// import { useLoaderData } from "react-router";
// import { Link } from "react-router";
// import { FaArrowLeft, FaEye } from "react-icons/fa";
// import Loading from "../components/Loading";

// const TipsPage = () => {
//   const tips = useLoaderData();
//   const [allTips, setAllTips] = useState(tips);
//   const [loading, setLoading] = useState(false);

//   const handleAll = () => {
//     setLoading(true);
//     fetch("https://garden-server-beige.vercel.app/tips")
//       .then((res) => res.json())
//       .then((data) => {
//         setAllTips(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   const handleDifficultyChange = (e) => {
//     const selectedValue = e.target.value;
//     setLoading(true);

//     fetch(`https://garden-server-beige.vercel.app/tips-sort/${selectedValue}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setAllTips(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   return (
//     <div className="container mx-auto pt-10 px-2">
//       {/* Back Button */}
//       <Link to="/">
//         <button className="text-green flex items-center md:ml-0 mx-auto md:mb-0 mb-2 gap-x-2 py-4 px-8 rounded-tl-full rounded-br-full border-4 border-green bg-white text-xl cursor-pointer">
//           <FaArrowLeft size={20} /> Go Back
//         </button>
//       </Link>

//       {/* Heading */}
//       <div className="text-green w-full md:w-8/12 lg:w-5/12 mb-6 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
//         <h2 className="text-xl font-bold md:text-3xl">All Gardening Tips</h2>
//       </div>

//       {/* Filter Section */}
//       <div className="my-7 w-full bg-white mx-auto p-4 text-green md:w-7/12 lg:w-4/12 rounded-2xl">
//         <label className="font-semibold pb-2 text-xl block">
//           <button
//             className="text-green py-4 w-full rounded-tl-full rounded-br-full border-4 border-green bg-white text-xl cursor-pointer"
//             onClick={handleAll}
//           >
//             All Tips
//           </button>
//         </label>
//         <label className="font-semibold pb-2 text-xl block">
//           Sort by Difficulty Level
//         </label>
//         <select
//           name="difficulty"
//           required
//           defaultValue=""
//           onChange={handleDifficultyChange}
//           className="px-4 py-3 w-full bg-transparent rounded-md text-lg border-2 border-green"
//         >
//           <option value="" disabled className="text-gray-400">
//             Select Difficulty
//           </option>
//           <option value="Easy" className="text-black">Easy</option>
//           <option value="Medium" className="text-black">Medium</option>
//           <option value="Hard" className="text-black">Hard</option>
//         </select>
//       </div>

//       {/* Tips List */}
//       <div className="bg-white w-full lg:w-10/12 mx-auto text-green border-4 border-double border-green rounded-xl p-4">
//         <div className="hidden md:grid grid-cols-4 gap-4 pb-2 border-b-2 border-green font-bold text-lg">
//           <div>Image</div>
//           <div>Title</div>
//           <div>Category</div>
//           <div className="text-center">CRUD</div>
//         </div>

//         {loading ? (
//     <div className="flex flex-col items-center justify-center py-10">
//       <span className="loading loading-ring loading-lg text-green scale-[2.5]"></span>
//       <p className="mt-4 text-green text-xl font-semibold">Loading tips...</p>
//     </div>
//         ) : (
//           allTips.map((item) => (
//             <div
//               key={item._id}
//               className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 mt-4 border-2 p-4 rounded-xl border-green"
//             >
//               <div className="flex justify-center md:justify-start">
//                 <img
//                   className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
//                   src={item.imageUrl}
//                   alt={item.title}
//                 />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-center md:text-left">
//                   {item.title}
//                 </h3>
//               </div>
//               <div>
//                 <h3 className="text-center md:text-left">{item.category}</h3>
//               </div>
//               <div className="flex justify-center">
//                 <Link
//                   to={`/tips-details/${item._id}`}
//                   className="bg-green text-white p-2 rounded-lg transition"
//                 >
//                   <FaEye className="text-xl" />
//                 </Link>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default TipsPage;
