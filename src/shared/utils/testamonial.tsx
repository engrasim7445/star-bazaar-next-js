'use client';
import { ContainerXL } from '@/theme';
import { Imgz } from '.';
// import Sli from "../../../node_modules/react-slick/dist/react-slick.js";
import Slider from 'react-slick';
import Head from 'next/head';
import { useScreenSize } from '@/core';
import { useState } from 'react';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

export function Testamonial() {
  let slider: any;
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  data = [...data, ...data, ...data];
  const screenSize = useScreenSize();
  // let [slidesToShow, setSlidesToShow] = useState()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToScroll: screenSize.,
    slidesToShow: 3,
  };

  return (
    <>
      {/* <Head> </Head> */}
      <div className="col-span-12 flex justify-between items-center my-2">
        <h4 className="text-2xl col-span-12">Testamonial</h4>
        <div className="col-span-12 flex justify-end mb-2">
          <NavigateBefore  className="material-icons rounded-full bg-blue-950  !text-5xl mx-2 cursor-pointer"
            onClick={() => slider.slickPrev()} />
          <NavigateNext
            className="material-icons rounded-full bg-blue-950  !text-5xl mx-2 cursor-pointer"
            onClick={() => slider.slickNext()}
           />
        </div>
      </div>

      <div className="col-span-12 overflow-hidden" style={{ height: '180px' }}>
        <Slider
          {...settings}
          ref={(c) => (slider = c)}
          slidesToShow={screenSize.screen}
        >
          <InternalSlide />
          <InternalSlide />
          <InternalSlide />
          <InternalSlide />
          <InternalSlide />
          <InternalSlide />
          <InternalSlide />
        </Slider>
      </div>
    </>
  );
}

export function InternalSlide() {
  return (
    <div>
      <div
        className="mx-1 rounded-lg p-3"
        style={{
          height: '180px',
          background: 'linear-gradient(to top,#0A0476,#851BC0)',
        }}
      >
        <div className="flex">
          <Imgz width="50" height="50" />
          <h2 className="mt-3 ms-2 text-xl ">Name Goes Here</h2>
        </div>

        <div>
          <div className="my-2">
            <span
              className="material-icons text-yellow-200 "
              style={{ textShadow: '0px 0px 8px yellow ' }}
            >
              star
            </span>
            <span className="material-icons text-yellow-200">star</span>
            <span className="material-icons text-yellow-200">star</span>
            <span className="material-icons text-yellow-200">star</span>
            <span className="material-icons text-gray-700">star</span>
          </div>

          <p className="text-sm">
            <i>Here goes my some text that needs to be displayed</i>
          </p>
        </div>
      </div>
    </div>
  );
}
