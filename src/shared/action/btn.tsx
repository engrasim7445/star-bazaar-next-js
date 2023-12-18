'use client';

import { useRouter } from "next/router";

export function BtnAlert({data}: any) {
  const showAlert = (fruitName = 'My Message') => {
    alert("Fruit Name : " + fruitName)
  }
  return (
    <button type="button" 
      className="btn btn-info btn-sm  m-3"
      onClick={() => {showAlert(data)}}>
      Click
    </button>
  )
}

export function BtnRoute({url, lbl}: any) {
  const router = useRouter();
  return (
    <button type='button' className='btn btn-info btn-sm m-1'
    onClick={() => router.push(url)}>{lbl}</button>
  )
}