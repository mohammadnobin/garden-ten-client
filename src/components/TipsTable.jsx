import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const TipsTable = ({ tips }) => {
  return (
    <div className="bg-white md:w-10/12 mx-auto text-green border-6 border-double border-green rounded-xl">
      <table className="w-full shadow-sm rounded-lg">
        <thead className=" text-left md:text-2xl lg:text-3xl text-sm font-semibold">
          <tr>
            <th className="px-4 py-4 border-b-2 ">Image</th>
            <th className="px-4 py-4 border-b-2 ">Title</th>
            <th className="px-4 py-4 border-b-2 ">Category</th>
            <th className="px-4 py-4 border-b-2 text-center">Details</th>
          </tr>
        </thead>
        <tbody className="text-sm md:text-xl font-medium lg:text-2xl">
          {tips.map((item) => (
            <tr key={item._id} className="">
              <td className="px-4 py-2 border-t-2">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="size-[80px] rounded-full"
                />
              </td>
              <td className="px-4 py-2 border-t-2 ">{item.title}</td>
              <td className="px-4 py-2 border-t-2  ">
                {item.category}
              </td>
              <td className="px-4 py-2 border-t-2 text-center">
                <Link to={`/tips-details/${item._id}`}>
                <button className="cursor-pointer">
                  <FaEye size={30} />
                  <span className="sr-only">See More</span>
                </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TipsTable;
