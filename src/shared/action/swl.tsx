// 'use client'
// import ReactDOM from 'react-dom/client'
// import { useState } from 'react'
import Swal from 'sweetalert2';

export interface SwalParam {
  title?: string;
  message?: any;
  icon?: 'success' | 'warning' | 'error';
}

export function wentWrong(error: any = {}): any {
  return error({ message: 'Problem with service please try later' });
}

export function success(swalParam: Partial<SwalParam> | string) {
  if (typeof swalParam == 'string') {
    return dialog({ message: swalParam, icon: 'success', title: 'Success' });
  } else {
    swalParam.icon = 'success';
    swalParam.title = swalParam.title || 'Success';
    return dialog(swalParam);
  }
}

export function warn(swalParam: Partial<SwalParam> | string) {
  if (typeof swalParam == 'string') {
    return dialog({
      message: swalParam,
      icon: 'warning',
      title: 'Are you Sure',
    });
  } else {
    swalParam.icon = 'warning';
    swalParam.title = swalParam.title ?? 'Are you Sure';
    return dialog(swalParam);
  }
}

export function error(swalParam: Partial<SwalParam> | string) {
  if (typeof swalParam == 'string') {
    return dialog({ message: swalParam, icon: 'error', title: 'Error' });
  } else {
    swalParam.icon = 'error';
    swalParam.title = swalParam.title || 'Error';
    return dialog(swalParam);
  }
}

function dialog(swalParam: SwalParam) {
  return Swal.fire({
    title: swalParam.title,
    text: swalParam.message,
    icon: swalParam.icon,
  });
}
