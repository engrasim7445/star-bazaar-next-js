
export const baseURL: string = 'https://dev-app.starbazaar.pk/api/v1';

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
  const queryResult = objToURLQuery(param.query)
  if (param.query && !param.param) result = `${result}?${queryResult}`
  if (param.query && param.param) result = `${result}${queryResult}`
  return result;
}

function objToURLQuery(param: Partial<Param>) {
  // For Simple Object Only
  let result = '';
  const obj = param.query;
  Object.keys(obj).forEach((key) => {
    if (obj[key] != null && obj[key] != '' && obj[key] != undefined) {
      result += '&' + key + '=' + obj[key];
    }
  });
  if (result) result = result.substring(1, result.length);
  return result;
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