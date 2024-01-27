export function Error(p: string) {
  let param = {msg: p} as any 
  param.title = param.title || 'Error';
  param.msg = param.msg || param || 'Something Went Wrong!';
  param.icon = 'error'
  return alertz(param)
}

export function Success(p: string) {
  let param = {msg: p} as any 
  param.title = param.title || 'Success';
  param.msg = param.msg || 'Submitted Successfully!';
  param.icon = 'success'
  return alertz(param)
}

export function Warn(p: string) {
  let param = {msg: p} as any 
  param.title = param.title || 'Warning';
  param.msg = param.msg || 'Are you Sure!';
  param.icon = 'warn'
  return alertz(param)
}

export function Info(p: string) {
  let param = {msg: p} as any 
  param.title = param.title || 'Info';
  param.msg = param.msg || 'Are you Sure!';
  param.icon = 'info'
  return alert(param)
}

export function alertz(param: AlertMessage): Promise<AlertMessage> {
  return Promise.reject(param)
}
export interface AlertMessage {
  title?: string;
  msg?: string;
  icon?: 'error' | 'warn' | 'success' | 'info';
}