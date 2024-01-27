
export function StrgGetUser(key: string) {
  return JSON.parse(localStorage.getItem(StrgKey.USER) || '')
}

export function StrgGetToken() {
  return localStorage.getItem(StrgKey.TOKEN)
}





export function StrgSet(key: string, value: any) {
  const result = typeof(value) == 'string' ? value : JSON.stringify(value)
  localStorage.setItem(key, result)
}
export function StrgGet(key: string) {
  return JSON.parse(localStorage.getItem(key) || '')
}

export const StrgKey = {
  IS_INTERNATIONAL: 'isInternationalClient',
  USER: 'user',
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
  PROFESSION: 'professions',
  FIRE_TOKEN: 'firebase_token',
  path: 'path',
  NOTIFIED: 'showNotified',
}