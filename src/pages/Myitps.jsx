import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const Myitps = () => {
  const { user } = use(AuthContext);
  const [tips, setTips] = useState([]);
  console.log(tips);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    fetch(`https://garden-server-beige.vercel.app/mytips/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch(() => {
        setTips([]);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (!tips.length) {
    return (
      <p className="h-screen text-6xl flex items-center justify-center text-white font-bold">
        You have not posted any tips yet.
      </p>
    );
  }

  return (
    <div className="container mx-auto pt-10">
      <div className="text-green lg:w-4/12 md:w-8/12 mb-4 md:mb-8 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-lg font-bold md:text-3xl">Featured Gardeners</h2>
      </div>
      <div className="bg-white lg:w-10/12 mx-auto text-green border-6 border-double border-green rounded-xl p-4">
        <div className="grid grid-cols-4  ">
          <div className="">
            <h3>Image</h3>
          </div>
          <div className="w-1/">
            <h3>Title</h3>
          </div>
          <div className="">
            <h3>Category</h3>
          </div>
          <div className="">x u v</div>
        </div>
      </div>
    </div>
  );
};

export default Myitps;
