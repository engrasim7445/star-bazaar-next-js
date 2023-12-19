import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about-us')) {
    return NextResponse.rewrite(new URL('/public/about-us', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/contact-us')) {
    return NextResponse.rewrite(new URL('/public/contact-us', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/faqs')) {
    return NextResponse.rewrite(new URL('/public/faqs', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/privacy-policy')) {
    return NextResponse.rewrite(new URL('/public/privacy-policy', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/terms-and-condition')) {
    return NextResponse.rewrite(new URL('/public/terms-and-condition', request.url))
  }
}