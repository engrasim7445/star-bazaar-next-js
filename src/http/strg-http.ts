'use client'
import { HttpGET_Strg, HttpGETs_Strg } from "./http"

export function HttpStrgTestimonial(): Promise<any> {
  return HttpGETs_Strg({
    ep: 'testimonial',
    query: {
      ['filter[isActive]']: '[eq]|[true]'
    }
  })
}
export function HttpStrgBrands(): Promise<any> {
  return HttpGETs_Strg({
    ep: 'brands-payment-security',
    query: {
      ['filter[isActive]']: '[eq]|[true]'
    }
  })
}
export function HttpStrgHome(): Promise<any> {
  return HttpGET_Strg({
    ep: 'home'
  })
}
