/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ArrowNext, ArrowPrev } from "../assets/arrows";
import { Link } from "react-router-dom";

const Slider = ({ slides }) => {
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);

  const prevSlide = () => {
    setCurrentIndexSlide((index) => {
      if (index === 0) return slides.length - 1;
      return index - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndexSlide((index) => {
      if (index === slides.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (currentIndexSlide < 0) {
      setCurrentIndexSlide(lastIndex);
    }
    if (currentIndexSlide > lastIndex) {
      setCurrentIndexSlide(0);
    }
  }, [currentIndexSlide, slides.length]);

  useEffect(() => {
    let idInterval = setInterval(() => {
      setCurrentIndexSlide(currentIndexSlide + 1);
    }, 6000);
    return () => {
      clearInterval(idInterval);
    };
  }, [currentIndexSlide]);

  return (
    <div className=" w-full h-96 bg-black relative overflow-hidden ">
      <button
        className=" absolute top-2/4 left-5 -translate-y-1/2 text-white  z-[2]"
        onClick={prevSlide}
      >
        <ArrowPrev
          prop={
            "w-12 h-12 transition ease-in-out duration-300 hover:text-buttonBgc hover:-translate-x-1"
          }
        />
      </button>

      <div className=" w-full h-96  flex flex-row ">
        {slides.map((slide, i) => {
          const { img, heading, text, txtBtn, url } = slide;
          return (
            <div
              key={i}
              className="transition-[translate] ease-in-out duration-300  w-full h-full shrink-0 grow-0 relative"
              style={{ translate: `${-100 * currentIndexSlide}%` }}
            >
              <img src={img} className="w-full h-full block object-cover  " />
              <div
                className={`transition-opacity duration-700 delay-150 absolute top-[50%] -translate-y-1/2 t left-36 bg-black/[.4]  w-[50%] z-20 p-4  rounded-xl text-neutral-50 
              ${currentIndexSlide === i ? "opacity-1" : "opacity-0"}`}
              >
                <h2 className=" text-3xl mb-3">{heading}</h2>
                <p className=" mb-4">{text}</p>
                <Link to={url}>
                  <button className=" transition-colors text-l tracking-wider uppercase bg-amber-400 py-2 px-4 rounded hover:bg-amber-500">
                    {txtBtn}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className=" absolute top-2/4 right-5 -translate-y-1/2 text-white "
        onClick={nextSlide}
      >
        <ArrowNext
          prop={
            "w-12 h-12 transition ease-in-out duration-300 hover:text-buttonBgc hover:translate-x-1"
          }
        />
      </button>
      <div className="  absolute bottom-1 left-2/4 -translate-x-1/2 flex gap-[10px]">
        {slides.map((_, index) => {
          return (
            <button
              key={index}
              className="transition ease-in-out p-2 hover:scale-125"
              onClick={() => setCurrentIndexSlide(index)}
            >
              <span
                className={`w-3 h-3 block rounded-xl ${
                  currentIndexSlide === index ? "bg-buttonBgc" : " bg-white"
                }`}
              ></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
