### BUILD IN NEXT JS

## DEV BUILD
- Add the below Code in next.config.js file
```javascript
const nextConfig = {
  output: "export",
}
```
- Below Command itself create Development Build
```bash
npm run dev 
npx serve@latest out

-
```
### NEXT CONFIG FILE
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // < Only this section is requred
  // webpack: (config, { isServer }) => { 
    //   return config;
  //   // Custom webpack configuration
  // },
  // exportPathMap: async function () { 
    //   return {
      //     '/': { page: '/' },
      //     '/about': { page: '/about' },
      //   };
    //   // Specify exportPathMap for dynamic routes (optional)
  // },
  images: {
    // Marked as Deprecated
    domains: [
      'www.cbc.ca'
    ],
  }
}

module.exports = nextConfig

```
### Parent Page 
```javascript
// 'use client';
// import { useEffect, useState } from 'react';

import BtnRoute from '@/app/shared/utils/btn-route';
import { GetProduct } from '../../core/API-Request';

// Client Components doesn't has async
// export default function Page() {
//   const [dataz, setProduct] = useState([]);
//   useEffect(() => {
//     GetProduct().then(async (x) => {
//       setProduct(x)
//     })
//   })
//   return (<div>
//     <DisplayProducts dataz={dataz} title="Client" />
//   </div>)
// }

// You have to Commnet 'use client' in Server Component
export default async function Page() {
  let dataz = await GetProduct();
  return (<div>
    <DisplayProducts dataz={dataz} title="Server" />
  </div>)
}
export function generateMetadata({ params }) {
  return {
    title: "Product List",
    description: "Product Description"
  }
}


function DisplayProducts({ dataz, title }) {
  return (
    <div>
      <h1>{title} Component Product List</h1>
      <div className='table-responsive'>
        <table className='table table-dark table-striped'>
          <caption>List of Product</caption>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Title</th>
              <th scope='col'>Price</th>
              <th scope='col'>Rating</th>
              <th scope='col'>Image</th>
            </tr>
          </thead>
          <tbody>
            {dataz.map((item) => (
              <tr key={item.id}>
                <td scope='col'>
                  <BtnRoute url={`/components/products/${item.id}`}  lbl={item.id} />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.rating}</td>
                <td>
                  <img width={50} height={50} src={item.thumbnail} alt='Image' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```
### Child Page
```javascript

import { GetProduct } from '../../../core/API-Request';

export default async function Page({ params }) {
  let item = await GetProduct(params.id);
  return (<div className='col-4'>
    <div className='table-responsive'>
      <table className='table table-dark table-striped'>
        <caption>Item of Product</caption>
        <thead>
          <tr>
            <th scope='col'>Key</th>
            <th scope='col'>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            <>
            <tr key={item.id}>
              <td>ID</td>
              <td>{item.id}</td>
            </tr>
            <tr>
              <td>Title</td>
              <td>{item.title}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{item.price}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>{item.rating}</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <img width={200} height={200} src={item.thumbnail} alt='Image' />
              </td>
            </tr>
          </>
          }

        </tbody>
      </table>
    </div>
  </div>)
}
export function generateMetadata({ params }) {
  return {
    title: "Product Item",
    description: "Product Description"
  }
}
export async function generateStaticParams(){
  let dataz = await GetProduct();

  return dataz.map(user => ({
    id: user.id.toString()
  })) 
}



```