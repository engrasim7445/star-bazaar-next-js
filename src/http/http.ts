import { StrgGet, StrgSet } from "@/core/storage";

export const baseURL: string = 'https://dev-app.starbazaar.pk/api/v1';
export function HttpGET_Strg(param: Param) {
  // param.ep +=1
  param.method = 'GET'
  let result = StrgGet(param.ep)
  if(result) {
    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  }
  return MyFetch(param).then(res => {
    if(res.isSuccess) {
      let {data} = res
      if(data){
        data = JSON.stringify(data)
        StrgSet(param.ep, data)
      }
      return res.data
    } else return {}
  })
}
export function HttpGETs_Strg(param: Param){
  return HttpGET_Strg(param).then(res => {
    if(!res?.length) return [];
    else return res;
  })
}

export function HttpGET(param: Param) {
  param.method = 'GET'
  return MyFetch(param)
}
export function HttpPOST(param: Param) {
  param.method = 'POST'
  return MyFetch(param)
}
export function HttpPUT(param: Param) {
  param.method = 'PUT'
  return MyFetch(param)
}
export function HttpDELETE(param: Param) {
  param.method = 'DELETE'
  return MyFetch(param)
}

function MyFetch(param: Param) {
  return fetch(QueryToURL(param),
    {
      method: param.method,
      body: JSON.stringify(param.body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then((res => res.json()))

}

function QueryToURL(param: Partial<Param>) {
  let result: string = `${param.url || baseURL}`
  if (param.ep) result = `${result}/${param.ep}`
  if (param.res) result = `${result}/${param.res}`
  if (param.param) result = `${result}?${param.param}`
  const queryResult = objToURLQuery(param?.query)
  if (param.query && !param.param) result = `${result}?${queryResult}`
  if (param.query && param.param) result = `${result}${queryResult}`
  return result;
}

function objToURLQuery(query: any) {
  // For Simple Object Only
  let result = '';
  if (query) {
    const obj = query;
    Object.keys(obj).forEach((key) => {
      if (obj[key] != null && obj[key] != '' && obj[key] != undefined) {
        result += '&' + key + '=' + obj[key];
      }
    });
    if (result) result = result.substring(1, result.length);
    return result;
  } else return '';

}

export interface Param {
  ep: string; // end point
  url?: string;
  res?: string | number;
  query?: any;
  param?: string;
  body?: any;
  method?: 'POST' | 'PUT' | 'DELETE' | 'GET' | 'PATCH';
}


// HttpPOST({
//   ep: EP.SIGN_IN,
//   body: {
//     ...data,
//     type:'email',
//     loginField:data.email
//   }
// }).then((res) => {
//   // const {token, user } = data
//   if (res.isSuccess) {
//   }
// })