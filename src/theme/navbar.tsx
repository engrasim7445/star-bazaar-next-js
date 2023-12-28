// import BtnLink from "@/shared/button/btn-link";
// import BtnRoute from "@/shared/button/btn-route";

import { Iconz, Imgz, LinkNav, LinkWrap } from '@/shared';
import { Container } from '.';

export function NavBar() {
  return (
    <Container className="bg-nav1 sticky top-0 z-10" clz2=" py-1 ">
      <div
        className="col-span-2 md:col-span-1 md:order-1
      flex justify-center md:justify-end items-center"
      >
        <LinkNav lbl="Notification" icon="link" />
      </div>
      <div className="col-span-8 md:col-span-2 flex justify-center  md:justify-start  ">
        <LinkWrap url="\home">
          <Imgz
            // width="50"
            height="50"
            className="mx-3"
            src="/icon/favicon-white.png"
          />
        </LinkWrap>
      </div>
      <div className="col-span-2 md:col-span-1 flex justify-center items-center md:order-3 ">
        <LinkNav lbl="Profile" icon="link" />
      </div>
      <div className="col-span-10 md:col-span-6 flex justify-center items-center ">
        <div
          className="w-11/12 rounded-full flex justify-between items-center"
          style={{ padding: '2px', height: '40px', border: '1px solid white' }}
        >
          <input
            type="text"
            style={{ height: '100%', width: '100%' }}
            className="bg-transparent text-white border-transparent w-full h-full mx-2 rounded-tl-full rounded-bl-full"
            placeholder="Search your favorite creators"
          />
          <LinkWrap url="\search">
            <button
              type="button"
              style={{ height: '100%' }}
              className="flex items-center bg-[#06b22e] rounded-tr-full rounded-br-full ps-2 pe-4"
            >
              <Iconz icon="saved_search" className="pe-2" />
              Search
            </button>
          </LinkWrap>
        </div>
      </div>
      <div className="col-span-2 md:col-span-2 flex items-center cursor-pointer">
        Sort By: <Iconz icon="arrow_drop_down" />
      </div>
      {/* <div className="h-100 md:col-span-2 hidden md:flex bg-yellow-500 ">
            Creator Login
          </div>
          <div className="h-100 md:col-span-2 hidden md:flex bg-green-500 ">
            Customer Login
          </div> */}
    </Container>
  );
}
