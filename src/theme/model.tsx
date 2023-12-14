'use client'
import { useState } from "react";

export function Modal({ children, onClose }: any) {
  const [isShow, setisShow] = useState(false) 
  return (
    isShow ? <>
      <div className='backdrop' onClick={onClose} />
      <dialog open className='modal'>
        {children}
      </dialog>
    </>: null
  );
}
