import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const TipsEdit = () => {
  const signleTips = useLoaderData();
  const {
    _id,
    name,
    email,
    availability,
    category,
    description,
    difficulty,
    imageUrl,
    plantType,
    title,
  } = signleTips;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTips = Object.fromEntries(formData.entries());
    fetch(`https://garden-server-beige.vercel.app/tips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTips),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <div className="container mx-auto px-4 md:px-0">
            <Link to='/my-tips'>
      <button className="text-green dark:bg-black dark:text-white dark:border-white mt-2 md:mt-6 flex items-center md:ml-0 mx-auto md:mb-0 mb-2  gap-x-2 py-4 px-8 rounded-tl-full rounded-br-full border-4 border-green bg-white text-xl cursor-pointer"><FaArrowLeft size={20} /> Go Back</button>
      </Link>
      <div className="text-green dark:bg-black dark:text-white dark:border-white mt-10 w-full md:w-8/12 lg:w-5/12 mb-6 mx-auto text-center py-4 rounded-tl-full rounded-br-full border-4 border-green bg-white">
        <h2 className="text-xl font-bold md:text-3xl">Update Tip page</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="xl:w-5/12 dark:bg-black dark:text-white dark:border-white space-y-2 bg-green text-white  lg:w-7/12  md:w-10/12 md:mx-auto  backdrop-blur-[5px] border-2  border-white rounded-2xl lg:py-8 py-4 lg:px-8 px-4"
      >
        <h2 className="text-2xl font-bold mb-4">Submit a Plant Post</h2>

        <label className="font-semibold text-xl block pb-2">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={title}
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
          defaultValue={plantType}
          className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
          placeholder="Tomato"
          required
        />
        <label className="font-semibold text-xl block pb-2">
          Difficulty Level
        </label>
        <select
          name="difficulty"
          defaultValue={difficulty}
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
          defaultValue={description}
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
            defaultValue={imageUrl}
            required
            className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="font-semibold text-xl block pb-2">Category</label>
          <select
            name="category"
            defaultValue={category}
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
          <label className="font-semibold text-xl block pb-2">
            Availability
          </label>
          <select
            name="availability"
            defaultValue={availability}
            required
            className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
          >
            <option className="text-black">Public</option>
            <option className="text-black">Hidden</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold text-xl block pb-2">
              User Name
            </label>
            <input
              type="text"
              defaultValue={name}
              readOnly
              name="name"
              className="px-5 py-4 w-full  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0  cursor-not-allowed "
            />
          </div>
          <div>
            <label className="font-semibold text-xl block pb-2">
              User Email
            </label>
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
          className="w-full dark:bg-black dark:text-white dark:border-white border-2 bg-white text-green font-bold text-xl mt-4 cursor-pointer py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default TipsEdit;
