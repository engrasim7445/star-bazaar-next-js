'use client';
import { Imgz, LinkNav, LinkWrap } from '@/shared';
import { ContainerXL } from '..';
import { NavBusinessLogin, NavCreatorLogin, NavCustomerLogin } from './navbar-action';
import {
  ArrowDropDown,
  FolderSpecial,
  Notifications,
  SavedSearch,
} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '@/core/redux/slice/user';


export function NavBar() {
  // const isPublic = isPublicUrl() ? 'hidden' : '';
  const isPublic = '';
  const user = useSelector((state: any) => state?.user?.data || {});
  console.log({user})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser({}))
  }, [])
  return (
    <ContainerXL
      className={`bg-nav1 sticky top-0 z-10 ${isPublic}`}
      clz2=" py-1"
    >
      <div className="col-span-2 md:col-span-1 md:order-1 flex justify-center md:justify-end items-center">
        <LinkNav lbl="Notification" isHide={user?.type}>
          <span>
            <Badge
              badgeContent=""
              variant="dot"
              color="success"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <Notifications className="flex place-self-center" />
            </Badge>
          </span>
        </LinkNav>
        <NavCreatorLogin isHide={!user?.type} />
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
        <LinkNav
          lbl="Profile"
          url={`/profile/${user.type}`}
          isHide={user?.type}
        >
          <FolderSpecial className="flex place-self-center" />
        </LinkNav>
        <NavCustomerLogin isHide={!user?.type} />
        {/* <NavBusinessLogin isHide={!user?.type} /> */}
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
