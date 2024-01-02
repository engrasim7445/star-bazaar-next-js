'use client';

import { Iconz } from "..";

export function Btnz({ onClick, className, children }: any) {
  return (
    <button
      type="button"
      className={`rounded-full flex justify-center items-center text-md w-28 h-10 btn-animate ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export function BtnDefault({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-white1 ${className}`}>
      {children}
    </Btnz>
  );
}
export function BtnSuccess({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-green1 ${className}`}>
      {children}
    </Btnz>
  );
}
export function BtnWarn({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-orange1 ${className}`}>
      {children}
    </Btnz>
  );
}
export function BtnPrimary({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-purple1 ${className}`}>
      {children}
    </Btnz>
  );
}
export function BtnDanger({ onClick, className, children }: any) {
  return (
    <Btnz onClick={onClick} className={`bg-red-500 ${className}`}>
      {children}
    </Btnz>
  );
}
import easyPaisa from './../../../public/svg/easypaisa.svg'
import jazzCash from './../../../public/svg/jazzcash.svg'
export function PaymentMethodButtons({icon, lbl, onClick, isActive, className}: any) {
  const bgColor = isActive ? 'bg-orange1' : 'bg-white1' 
  return (
    <BtnDefault className={`rounded-sm w-3/12 flex-col py-1 px-0 ${bgColor} ${className}`} onClick={onClick}>
      <span className="h-5">
        <Iconz icon={icon}/>
      </span>
      <span>{lbl}</span>
    </BtnDefault>
  );
}
