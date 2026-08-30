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
      current === slides.length - 1 ? 1 : current + 1,
    );
  }

  return (
    <>
      <div className="overflow-hidden relative w-full max-w-5xl">
        <div
          className="flex relative transition ease-in-out duration-100"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full shrink-0 relative">
              <img
                className="w-full shrink-0 rounded"
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="lg:absolute flex px-3 top-5 z-10 h-full w-full  text-3xl justify-between gap-10 items-center">
          <button onClick={prevSlide} className="text-white cursor-pointer">
            <FaAngleLeft />
          </button>
          <button onClick={nextSlide} className="text-white cursor-pointer">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  );
}
