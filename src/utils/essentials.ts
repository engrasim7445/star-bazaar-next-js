import { headers } from 'next/headers'
export const isServer = (typeof window === 'undefined')? false : true

export const isPublicUrl = () => {
  if(headers) {
    const headersList = headers();
    // const domain = headersList.get('host') || '';
    const fullUrl = headersList.get('referer') || '';
    return fullUrl.indexOf('/public/') != -1;
  } return false

}