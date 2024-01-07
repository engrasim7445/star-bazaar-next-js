'use client'

import { ContentCopyOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export function TxtBase({
  id,
  name,
  lbl,
  className,
  children,
}: any) {
  return (
    <div className="w-full">
      <label htmlFor={id || name} className="text-lg">
        {lbl}
      </label>
      <div
        style={{ height: '40px', border: '1px solid white' }}
        className={`rounded-full px-4 control ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
export function Txt({ id, name, lbl, setVal, className, clz2 }: any) {
  return (
    <TxtBase lbl={lbl} className={className}>
      <input
        type="text"
        name={name}
        id={id || name}
        className={`w-full h-full bg-transparent ${clz2}`}
      />
    </TxtBase>
  );
}
export function TxtPassword({ id, name, lbl, setVal, val, className, clz2, onClick }: any) {
  const [toggleType, setToggleType ] = useState('password');
  return (
    <TxtBase lbl={lbl} className={`flex justify-between items-center  ${className}`}>
      <input
        type={toggleType}
        name={name}
        value={val}
        id={id || name}
        className={`w-full h-full bg-transparent ${clz2}`}
        // disabled={true}
      />
      {
        toggleType == 'password' ? 
        <VisibilityOff className='cursor-pointer ms-1'   onClick={() => setToggleType('text')} />
        :
        <Visibility className='cursor-pointer ms-1' onClick={() => setToggleType('password')} />
      }
    </TxtBase>
  );
}
export function TxtCopy({ id, name, lbl, setVal, val, className, clz2, onClick }: any) {
  return (
    <TxtBase lbl={lbl} className={`flex justify-between items-center bg-gray-500 ${className}`}>
      <input
        type="text"
        name={name}
        value={val}
        id={id || name}
        className={`w-full h-full bg-transparent ${clz2}`}
        disabled={true}
      />
      <ContentCopyOutlined className='cursor-pointer ms-1' onClick={onClick} />
    </TxtBase>
  );
}
