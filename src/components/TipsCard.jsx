import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const TipsCard = ({ tip }) => {
  const { user } = useContext(AuthContext);
  const {id} = useParams()
  const [likes, setLikes] = useState(tip.likeCount || 0);
  const [hasLiked, setHasLiked] = useState(
    tip.likedUsers?.includes(user.email) || false
  );
  if (id !== tip._id) {
    return <p className="py-10 font-bold text-8xl text-center">no Product match </p>
  }

  const handleLike = () => {
    if (hasLiked) return;

    fetch(`https://garden-server-beige.vercel.app/tips/${tip._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setLikes((prev) => prev + 1);
          setHasLiked(true);
          Swal.fire({
            title: "wow You Like this Tips",
            text: "You clicked the button!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "You already liked this tip",
            text: "You clicked the button!",
            icon: "success",
          });
          setHasLiked(true);
        }
      });
  };

  return (
    <div className="w-full dark:bg-black dark:text-white dark:border-white lg:max-w-5xl mx-auto bg-white md:rounded-tl-[150px] p-4 md:p-8 md:rounded-br-[150px] rounded-3xl border-4 border-green flex flex-col items-center md:flex-row my-6">
      <div className="md:w-1/2  w-full">
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full md:h-auto rounded-3xl h-[300px] md:rounded-br-[150px] md:rounded-tl-[150px]"
        />
      </div>

      <div className="md:w-1/2 w-full p-6 dark:text-white text-green space-y-3">
        <h2 className="text-2xl lg:text-3xl font-bold">
          <span className="">Title: </span>
          {tip.title}
        </h2>
        <p className="text-sm lg:text-lg mb-6 font-semibold text-gray-600 dark:text-white">
          <span className="text-green dark:text-white lg:text-2xl">Description: </span>
          {tip.description}
        </p>

        <div className="grid lg:grid-cols-2 gap-x-2 gap-y-4 text-sm">
          <p>
            <span className="font-semibold">Category:</span> {tip.category}
          </p>
          <p>
            <span className="font-semibold">Difficulty:</span> {tip.difficulty}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            {tip.availability}
          </p>
          <p>
            <span className="font-semibold">Plant Type:</span> {tip.plantType}
          </p>
          <p>
            <span className="font-semibold">Posted By:</span> {tip.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {tip.email}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={handleLike}
            className={`px-5 py-2 rounded-full font-semibold dark:text-white text-green ${
              hasLiked
                ? "bg-blue-600 text-white cursor-not-allowed  border-2 border-blue-600 "
                : "border-2 cursor-pointer border-green dark:border-white"
            }`}
            disabled={hasLiked}
          >
            👍 Like ({likes})
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
