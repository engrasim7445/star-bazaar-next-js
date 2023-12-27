'use client';
import { Txt, Radioz, Iconz, BtnSuccess, LinkWrap } from '@/shared';
import { useState } from 'react';
export function StandardOrderStop1() {
  const [orderFor, setOrderFor] = useState('forMe');
  return (
    <>
      <h2
        className="p-3 bg-white1 text-xl flex items-center mb-3 text-black"
        style={{ borderBottom: '1px solid yellow' }}
      >
        Who do this video for <Iconz icon="emoji_objects"></Iconz>
      </h2>
      <div className="px-4">
        <div className="flex">
          <Radioz
            // name="orderFor"
            id="forMe"
            val={orderFor}
            setVal={setOrderFor}
            lbl="For Me"
          />
          <Radioz
            // name="orderFor"
            id="forElse"
            val={orderFor}
            setVal={setOrderFor}
            lbl="For Someone Else"
          />
        </div>
        {orderFor == 'forMe' ? <ForMe /> : <ForSomeoneElse />}
        <h3 className="text-lg mt-5 mb-3">Select Shoutout Video Language</h3>
        <div className="flex">
          <Radioz name="language" id="english" lbl="Shoutout in English" />
          <Radioz name="language" id="urdu" lbl="Shoutout in Urdu" />
        </div>
        <LinkWrap isRelative="true" url="message">
          <BtnSuccess clz={`w-full py-2 mt-5`}>Continue</BtnSuccess>
        </LinkWrap>
      </div>
    </>
  );
}

export function ForMe() {
  return (
    <div className="flex items-center mt-5">
      <div className="w-3/5">
        <Txt name="fullName" lbl="Enter Your Name" />
      </div>
      <div className="flex px-3 mt-5 ms-5">
        <Radioz name="meGender" id="meMale" lbl="Male" />
        <Radioz name="meGender" id="meFemale" lbl="Female" />
      </div>
    </div>
  );
}

export function ForSomeoneElse() {
  return (
    <>
      <div className="flex items-center mt-5">
        <div className="w-3/5">
          <Txt name="wishesFor" lbl="Wishes For" />
        </div>
        <div className="flex px-3 mt-5 ms-5">
          <Radioz name="forGender" id="forMale" lbl="Male" />
          <Radioz name="forGender" id="forFemale" lbl="Female" />
        </div>
      </div>
      <div className="flex items-center mt-5">
        <div className="w-3/5">
          <Txt name="wishesFrom" lbl="Wishes From" />
        </div>
        <div className="flex px-3 mt-5 ms-5">
          <Radioz name="fromGender" id="fromMale" lbl="Male" />
          <Radioz name="fromGender" id="fromFemale" lbl="Female" />
        </div>
      </div>
    </>
  );
}
