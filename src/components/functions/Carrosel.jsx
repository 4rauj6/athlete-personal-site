import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function CarroselLogic({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  }

  function nextSlide() {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <>
      <div className="overflow-hidden relative w-full max-w-3xl">
        <div
          className="flex transition ease-in-out duration-100"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => {
            return (
              <img
                className="w-full shrink-0"
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            );
          })}
        </div>

        <div className="absolute flex px-3 top-0 h-full w-full justify-between items-center">
          <button
            onClick={prevSlide}
            className="text-white cursor-pointer text-2xl p-0.5 hover:bg-blue-500 rounded duration-500 ease-in-out"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-white cursor-pointer text-2xl p-0.5 hover:bg-blue-500 rounded duration-500 ease-in-out"
          >
            <FaAngleRight />
          </button>
        </div>

        <div className="flex justify-center items-center mt-2">
          <span className="text-white bg-blue-500  p-2 w-20 text-center">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </>
  );
}
