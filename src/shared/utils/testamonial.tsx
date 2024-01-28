'use client';
import { Imgz } from '.';
// import Sli from "../../../node_modules/react-slick/dist/react-slick.js";
import Slider from 'react-slick';
import { useScreenSize } from '@/core';
import { NavigateBefore, NavigateNext, Star } from '@mui/icons-material';
import { HttpStrgTestimonial } from '@/http/strg-http';
import { useEffect, useState } from 'react';

export function Testamonial() {
  let slider: any;
  const [data, setData] = useState([]);
  useEffect(() => {
    HttpStrgTestimonial().then(d => {
      setData(d)
    })
  }, []) 
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
          {
            data.map((x: any) => <InternalSlide key={x._id} data={x}/>)
          }
        </Slider>
      </div>
    </>
  );
}

export function InternalSlide({data}: any) {
  const ratings = [1,2,3,4,5]
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
          <div style={{width: '70px', height: '70px', borderRadius: '50px', overflow: 'hidden'}}>
          <Imgz fill src={data.image} />
          </div>
          
          <h2 className="mt-3 ms-2 text-xl ">{data.name || ''}</h2>
        </div>

        <div>
          <div className="my-2">
          
            {
              ratings.map((x: any, i: any) => (
              i <= data.rating ? <Star 
                fill='true' 
                key={'star-fill-'+i} 
                style={{color: 'yellow'}}
              /> : <Star 
                key={'star-none-'+i} 
                fill='false'
                style={{color: 'gray'}}
              />
              ))
            }
          </div>
          <p className="text-sm">
            <i>{data.comment || ''}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
