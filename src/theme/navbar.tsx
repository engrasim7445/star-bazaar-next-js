'use client';
// import BtnLink from "@/shared/button/btn-link";
// import BtnRoute from "@/shared/button/btn-route";

import { Imgz, LinkNav, LinkWrap } from '@/shared';
import { ContainerXL } from '.';
import { isPublicUrl } from '@/core/essentials';
import {
  DialogRevealing,
  DialogSketch,
  DialogUnfolding,
} from '@/shared/dialogs';
import { useState } from 'react';
import { NavCreatorLogin, NavCustomerLogin } from './navbar-action';
import {
  ArrowDropDown,
  FolderSpecial,
  Notifications,
  SavedSearch,
} from '@mui/icons-material';

export function NavBar() {
  // const isPublic = isPublicUrl() ? 'hidden' : '';
  const isPublic = '';
  return (
    <ContainerXL
      className={`bg-nav1 sticky top-0 z-10 ${isPublic}`}
      clz2=" py-1 "
    >
      <div className="col-span-2 md:col-span-1 md:order-1 flex justify-center md:justify-end items-center">
        <LinkNav lbl="Notification">
          <Notifications className="flex place-self-center" />
        </LinkNav>
        {/* <NavCreatorLogin /> */}
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
        <LinkNav lbl="Profile" url="/profile/customer">
          <FolderSpecial className="flex place-self-center" />
        </LinkNav>
        {/* <NavCustomerLogin /> */}
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
              <SavedSearch />
              Search
            </button>
          </LinkWrap>
        </div>
      </div>
      <div className="col-span-2 md:col-span-2 flex items-center cursor-pointer">
        Sort By: <ArrowDropDown />
      </div>
    </ContainerXL>
  );
}
