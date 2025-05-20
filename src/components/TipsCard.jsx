// import React, { useState } from "react";

// const TipsCard = ({ tip }) => {
//     console.log(tip)
//   const [likes, setLikes] = useState(tip.likeCount || 0);

//   const handleLike = () => {
//     fetch(`http://localhost:3000/tips/${tip._id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({ likeCount: likes + 1 }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           setLikes(likes + 1);
//         }
//       });
//   };

//   return (
//     <div className="border p-4 rounded shadow">
//       <h3 className="text-lg font-bold">{tip.title}</h3>
//       <p>{tip.description}</p>
//       <button
//         onClick={handleLike}
//         className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
//       >
//         ❤️ Like ({likes})
//       </button>
//     </div>
//   );
// };

// export default TipsCard;



import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TipsCard = ({ tip }) => {
  const { user } = useContext(AuthContext);
  const [likes, setLikes] = useState(tip.likeCount || 0);
  const [hasLiked, setHasLiked] = useState(
    tip.likedUsers?.includes(user.email) || false
  );

  const handleLike = () => {
    if (hasLiked) return; // আগেই লাইক করলে ফেরত চলে যাক

    fetch(`http://localhost:3000/tips/${tip._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email }), // শুধু ইমেইল পাঠাও
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setLikes(likes + 1);
          setHasLiked(true); // লাইক হয়ে গেলে disable করো
        } else {
          alert("You already liked this tip.");
          setHasLiked(true);
        }
      });
  };

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{tip.title}</h3>
      <p>{tip.description}</p>
      <button
        onClick={handleLike}
        className={`mt-2 px-4 py-1 rounded ${
          hasLiked ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
        } text-white`}
        disabled={hasLiked}
      >
        ❤️ Like ({likes})
      </button>
    </div>
  );
};

export default TipsCard;
