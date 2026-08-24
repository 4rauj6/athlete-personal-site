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
      <div className="overflow-hidden relative w-full max-w-4xl">
        <div
          className="flex transition ease-in-out duration-100"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => {
            return (
              <img
                alt=""
                className="w-full shrink-0"
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            );
          })}
        </div>

        <div className="absolute flex px-3 top-0 text-white h-full w-full justify-between item-center">
          <button onClick={prevSlide}>
            <FaAngleLeft />
          </button>
          <button onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </div>

        <div>
          <span>
            {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
    </>
  );
}
