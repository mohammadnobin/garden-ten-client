import React, {  use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Myitps = () => {
  const { user } =use(AuthContext);
  const [tips, setTips] = useState([]);
  console.log(tips)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3000/mytips?email=${user.email}`)
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
    return <p>Loading your tips...</p>;
  }

  if (!tips.length) {
    return <p>You have not posted any tips yet.</p>;
  }

  return (
    <div>
      <h2>Your Tips</h2>
      <ul>
        {tips.map((tip) => (
          <li className="bg-white my-3" key={tip._id}>
            <h3>{tip.title}</h3>
            <h3>{tip.email}</h3>
            <p>Plant Type: {tip.plantType}</p>
            <p>Difficulty: {tip.difficulty}</p>
            <p>{tip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Myitps;
