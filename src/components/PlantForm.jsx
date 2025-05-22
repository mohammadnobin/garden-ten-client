import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

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
    fetch("https://garden-server-beige.vercel.app/tips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTips),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success you can do it",
            text: "You clicked the button!",
            icon: "success",
          });
          form.reset();
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="xl:w-5/12 space-y-2 bg-black/20 text-white  lg:w-7/12  md:w-10/12 md:mx-auto  backdrop-blur-[5px] border-2  border-white rounded-2xl lg:py-8 py-4 lg:px-8 px-4"
    >
      <h2 className="text-2xl font-bold mb-4">Submit a Plant Post</h2>

      <label className="font-semibold text-xl block pb-2">Title</label>
      <input
        type="text"
        name="title"
        className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
        placeholder="How I Grow Tomatoes Indoors"
        required
      />

      <label className="font-semibold text-xl block pb-2">
        Plant Type / Topic
      </label>
      <input
        type="text"
        name="plantType"
        className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
        placeholder="Tomato"
        required
      />
      <label className="font-semibold text-xl block pb-2">
        Difficulty Level
      </label>
      <select
        name="difficulty"
        required
        className="px-5 py-4 w-full bg-transparent  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
      >
        <option className="text-black">Easy</option>
        <option className="text-black">Medium</option>
        <option className="text-black">Hard</option>
      </select>
      <label className="font-semibold text-xl block pb-2">Description</label>
      <textarea
        name="description"
        className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
        rows={4}
        placeholder="Write your experience or tips here..."
        required
      />

      <div>
        <label className="font-semibold text-xl block pb-2">Image URL</label>
        <input
          type="url"
          name="imageUrl"
          required
          className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <label className="font-semibold text-xl block pb-2">Category</label>
        <select
          name="category"
          required
          className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
        >
          <option className="text-black">Composting</option>
          <option className="text-black">Plant Care</option>
          <option className="text-black">Vertical Gardening</option>
          <option className="text-black">Indoor Plants</option>
        </select>
      </div>

      <div>
        <label className="font-semibold text-xl block pb-2">Availability</label>
        <select
          name="availability"
          required
          className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
        >
          <option className="text-black">Public</option>
          <option className="text-black">Hidden</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold text-xl block pb-2">User Name</label>
          <input
            type="text"
            defaultValue={displayName}
            readOnly
            name="name"
            className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0  cursor-not-allowed "
          />
        </div>
        <div>
          <label className="font-semibold text-xl block pb-2">User Email</label>
          <input
            type="email"
            defaultValue={email}
            readOnly
            name="email"
            className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0  cursor-not-allowed "
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-white text-green font-bold text-xl mt-4 cursor-pointer py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default PlantForm;
