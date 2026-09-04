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
      <div className="overflow-hidden relative max-w-5xl object-contain">
        <div className="text-end text-white mt-5">
          <span>
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
        <div
          className="flex relative transition ease-in-out duration-100"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full shrink-0 relative">
              <img
                className="w-full shrink-0 rounded object-cover"
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute flex px-3 top-0 z-10 h-full w-full  text-3xl justify-between gap-10 items-center">
          <button
            onClick={prevSlide}
            className="text-red-500 cursor-pointer transiton ease-in-out duration-100 hover:text-black-700 hover:bg-red-500 rounded hover:text-white hover:scale-110"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-red-500 cursor-pointer transiton ease-in-out duration-100 hover:text-black-700 hover:bg-red-500 rounded hover:text-white hover:scale-110"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  );
}
