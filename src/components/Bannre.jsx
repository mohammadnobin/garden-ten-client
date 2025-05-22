import React from "react";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] right-[19px] z-40 text-green p-5 bg-white rounded-full text-2xl cursor-pointer "
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] left-[20px] z-40 text-green p-5 cursor-pointer bg-white rounded-full text-2xl  "
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
}

const Bannre = () => {
  var settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="w-full text-center lg:py-52 py-10  bg-[url(/bannerbg3.webp)] bg-no-repeat bg-center bg-cover">
          <div className=" text-white md:px-0 px-3">
            <h2 className="md:text-4xl lg:text-[82px] text-2xl font-bold">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[
                  "Balcony Gardening Meetup",
                  "Hydroponic DIY Class",
                  "Community Compost Workshop",
                ]}
              />
            </h2>
            <h3 className="md:text-3xl text-xl md:py-4 py-2 font-medium">
              <span className="font-bold">Location :</span> Botanical Garden,
              Dhaka
            </h3>
            <h3 className="md:text-3xl text-xl font-medium">
              <span className="font-bold">Date :</span> July 5, 2025
            </h3>
            <button className="bg-white cursor-pointer text-green py-3 px-10 md:text-3xl text-xl font-bold rounded-tl-full rounded-br-full border-4 border-green bg-white md:mt-4 mt-2 ">
              Reserve Spot
            </button>
          </div>
        </div>
        <div className="w-full text-center lg:py-52 py-10  bg-[url(/bannerbg2.webp)] bg-no-repeat bg-center bg-cover">
          <div className="   text-white md:px-0 px-3">
            <h2 className="md:text-4xl lg:text-[82px] text-2xl font-bold">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[
                  "Community Compost Workshop",
                  "Balcony Gardening Meetup",
                  "Hydroponic DIY Class",
                ]}
              />
            </h2>
            <h3 className="md:text-3xl text-xl md:py-4 py-2 font-medium">
              <span className="font-bold">Location :</span> Botanical Garden,
              Dhaka
            </h3>
            <h3 className="md:text-3xl text-xl font-medium">
              <span className="font-bold">Date :</span> June 10, 2025
            </h3>
            <button className="bg-white cursor-pointer text-green py-3 px-10 md:text-3xl text-xl font-bold rounded-tl-full rounded-br-full border-4 border-green bg-white md:mt-4 mt-2 ">
              Join Now
            </button>
          </div>
        </div>
        <div className="w-full text-center lg:py-52 py-10  bg-[url(/bannerbg1.jpg)] bg-no-repeat bg-center bg-cover">
          <div className=" text-white md:px-0 px-3">
            <h2 className="md:text-4xl lg:text-[82px] text-2xl font-bold">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[
                  "Hydroponic DIY Class",
                  "Community Compost Workshop",
                  "Balcony Gardening Meetup",
                ]}
              />
            </h2>
            <h3 className="md:text-3xl text-xl md:py-4 py-2 font-medium">
              <span className="font-bold">Location :</span> GreenTech Lab,
              Banani
            </h3>
            <h3 className="md:text-3xl text-xl font-medium">
              <span className="font-bold">Date :</span>August 15, 2025
            </h3>
            <button className="bg-white cursor-pointer text-green py-3 px-10 md:text-3xl text-xl font-bold rounded-tl-full rounded-br-full border-4 border-green bg-white md:mt-4 mt-2 ">
              Register
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Bannre;
