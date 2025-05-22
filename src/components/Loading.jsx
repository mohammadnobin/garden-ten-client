// import React from 'react';

// const Loading = () => {
//     return (
//         <div className="w-full h-lvh flex items-center justify-center z-50">
//         <span className="loading loading-infinity text-white  w-[300px] "></span>
//       </div>
//     );
// };

// export default Loading;


import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./Animation.json"; // লোকেশন অনুসারে path adjust করো

const Loading = () => {
  return (
    <div className="w-full h-lvh flex items-center justify-center bg-green/80 backdrop-blur-[5px] z-50">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-[500px] h-[500px]"
      />
    </div>
  );
};

export default Loading;
