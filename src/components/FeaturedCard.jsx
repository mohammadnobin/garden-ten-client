// import React from "react";

// const FeaturedCard = ({ profile }) => {
//   const { name, age, experiences, gender,status ,totalSharedTips, image } = profile;
//   return (
//     <div className="bg-white p-5 rounded-lg border-green border-6 border-double text-green">
//       <div className="bgcolor border-2 rounded-xl border-green py-5">
//         <img
//           className="md:size-[200px] size-[150px] mx-auto rounded-full"
//           src={image}
//           alt=""
//         />
//       </div>
//       <h2 className="md:pt-3 pt-2 font-bold lg:text-3xl text-2xl text-center">
//         {name}
//       </h2><div className="flex items-center justify-between">
//         <h4 className="font-medium lg:text-xl text-base">{}</h4>
//         <h4 className="font-medium lg:text-xl text-base">{}</h4>
//       </div>
//       <div className="flex items-center md:py-3 py-2 justify-between">
//         <h4 className="font-bold lg:text-xl text-base">
//           <span className="font-medium">Status:</span> {}👍
//         </h4>
//         <h4 className="font-bold lg:text-xl text-base">
//           <span className="font-medium">Location:</span> {}
//         </h4>
//       </div>
      
//     </div>
//   );
// };

// export default FeaturedCard;


import React from "react";

const FeaturedCard = ({ profile }) => {
  const { name, age, experiences, gender, status, totalSharedTips, image } = profile;

  return (
    <div className="bg-white p-5 rounded-lg border-green border-6 border-double text-green shadow-lg">
      <div className="bgcolor border-2 rounded-xl border-green py-5">
        <img
          className="md:size-[200px] size-[150px] mx-auto rounded-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <h2 className="md:pt-3 pt-2 font-bold lg:text-3xl text-2xl text-center">
        {name}
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-3 gap-2">
        <h4 className="font-medium lg:text-xl text-base">
          Age: <span className="font-bold">{age} years</span>
        </h4>
        <h4 className="font-medium lg:text-xl text-base">
          Gender: <span className="font-bold">{gender}</span>
        </h4>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between md:py-3 py-2 gap-2">
        <h4 className="font-bold lg:text-xl text-base">
          <span className="font-medium">Status:</span> {status} 👍
        </h4>
        <h4 className="font-bold lg:text-xl text-base">
          <span className="font-medium">Total Tips:</span> {totalSharedTips}
        </h4>
      </div>

      <div className="mt-3">
        <h4 className="font-medium lg:text-xl text-base">
          <span className="font-bold">Experiences:</span>
          {experiences}
        </h4>
      </div>
    </div>
  );
};

export default FeaturedCard;

