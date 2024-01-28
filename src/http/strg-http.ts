'use client'
import { StrgGet, StrgSet } from "@/core/storage"
import { HttpGET } from "./http"

export function HttpStrgTestimonial(): Promise<any> {
  const result = StrgGet('testimonial')
  if (result) {
    return new Promise((resolve, reject) => {
      resolve(result)
    })
  } else {
    return HttpGET({
      ep: 'testimonial',
      query: {
        ['filter[isActive]']: '[eq]|[true]'
      }
    }).then(res => {
      res.data.forEach((x: any) => {
        // x.ratings[(x.rating ? x.rating -1 : 0)] = 'selected'
        // x.ratingsNone = []
        // x.ratingsNone[(4 - (x.rating || 0))] = 'not-selected'
      })
      StrgSet('testimonial', res.data)
      return res.data
    })
  }
}
export function HttpStrgBrands(): Promise<any> {
  const result = StrgGet('brands-payment-security')
  if (result) {
    return new Promise((resolve, reject) => {
      resolve(result)
    })
  } else {
    return HttpGET({
      ep: 'brands-payment-security',
      query: {
        ['filter[isActive]']: '[eq]|[true]'
      }
    }).then(res => {
      StrgSet('brands-payment-security', res.data)
      return res.data
    })
  }

}
export function HttpStrgHome(): Promise<any> {
  // const result = StrgGet('home')
  // if (result) {
  //   return new Promise((resolve, reject) => {
  //     resolve(result)
  //   })
  // } else {
    return HttpGET({
      ep: 'home',
      // query: {
      //   ['filter[isActive]']: '[eq]|[true]'
      // }
    }).then(res => {
      // StrgSet('home', res.data)
      console.log(res.data)
      return res.data
    })
  // }

}
