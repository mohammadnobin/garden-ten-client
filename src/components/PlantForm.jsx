import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const PlantForm = () => {
  const { user } = use(AuthContext);
   if (!user) return <p>Loading...</p>;
  const { email, displayName } = user;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTips = Object.fromEntries(formData.entries());
    newTips.likeCount = 0;
    fetch("http://localhost:3000/tips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTips),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("success you can do it");
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Submit a Plant Post</h2>
      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          name="title"
          className="w-full p-2 border rounded"
          placeholder="e.g., How I Grow Tomatoes Indoors"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Plant Type / Topic</label>
        <input
          type="text"
          name="plantType"
          className="w-full p-2 border rounded"
          placeholder="e.g., Tomato"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Difficulty Level</label>
        <select
          name="difficulty"
          required
          className="w-full p-2 border rounded"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          name="description"
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Write your experience or tips here..."
          required
        />
      </div>

      <div>
        <label className="block font-medium">Image URL</label>
        <input
          type="url"
          name="imageUrl"
          required
          className="w-full p-2 border rounded"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <label className="block font-medium">Category</label>
        <select name="category" required className="w-full p-2 border rounded">
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Indoor Plants</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Availability</label>
        <select
          name="availability"
          required
          className="w-full p-2 border rounded"
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">User Name</label>
          <input
            type="text"
            defaultValue={displayName}
            readOnly
            name="name"
            className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block font-medium">User Email</label>
          <input
            type="email"
            defaultValue={email}
            readOnly
            name="email"
            className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default PlantForm;
