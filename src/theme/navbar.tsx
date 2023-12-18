// import BtnLink from "@/shared/button/btn-link";
// import BtnRoute from "@/shared/button/btn-route";

import { Imgz, LinkNav } from '@/shared';
import { Contentz } from '.';

export function NavBar() {
  return (
    <Contentz bgColor="bg-blue2" >
      <div className="col-span-2 md:col-span-1 md:order-1 bg-pink-500
      flex justify-center md:justify-end items-center
      ">
        <LinkNav lbl='Notification' icon='link' />
      </div>
      <div className="col-span-8 md:col-span-2 flex justify-center  md:justify-start bg-blue-500 ">
        <Imgz
          // width="50"
          height="50"
          clz="mx-3"
          src='/icon/favicon-white.png'
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex justify-center items-center md:order-3 bg-purple-500">
        <LinkNav lbl='Profile' icon='link' />
      </div>
      <div className="col-span-8 md:col-span-6  bg-gray-500">
        Search
      </div>
      <div className="col-span-4 md:col-span-2 bg-red-500">
        Sort By 
        <span className='mater'></span>
      </div>
      {/* <div className="h-100 md:col-span-2 hidden md:flex bg-yellow-500 ">
            Creator Login
          </div>
          <div className="h-100 md:col-span-2 hidden md:flex bg-green-500 ">
            Customer Login
          </div> */}
    </Contentz>
  );
}
