import React, { useRef } from "react";
import { hero1, hero2, hero3, hero4 } from "../assets";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

function HeroScroll() {
  const imageArray = [hero1, hero2, hero3, hero4];

  const scroll = useRef(null);

  const scrollBox = (direction) => {
    const { current } = scroll;

    if (direction === "left") {
      current.scrollLeft -= 335;
    } else {
      current.scrollLeft += 335;
    }
  };

  return (
    <div className='bg-dark-blue p-4 rounded-lg flex-row relative max-w-[28rem]'>
      <div
        className='scroll-box inline-flex flex-row gap-x-4 w-full overflow-x-scroll'
        ref={scroll}
      >
        {imageArray.map((img, index) => (
          <div
            key={index}
            className='h-[26rem] min-w-[20rem] overflow-hidden rounded-lg'
          >
            <img src={img} alt='hero-img' className='min-w-full min-h-full' />
          </div>
        ))}
      </div>

      <div className='w-[24rem] flex items-center justify-between absolute left-1/2 bottom-6 -translate-x-1/2'>
        <div
          className='text-sky-600 text-4xl cursor-pointer bg-white rounded-md'
          onClick={() => scrollBox("left")}
        >
          <BsArrowLeftSquareFill />
        </div>
        <div
          className='text-sky-600 text-4xl cursor-pointer bg-white rounded-md'
          onClick={() => scrollBox("right")}
        >
          <BsArrowRightSquareFill />
        </div>
      </div>
    </div>
  );
}

export default HeroScroll;
