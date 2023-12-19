import { NextRequest, NextResponse } from "next/server"

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/public/about-us')) {
//     return NextResponse.rewrite(new URL('/public/about-us', request.url))
//   }
// }


// export function middleware(request: NextRequest) {
//   if(request.nextUrl.pathname != 'about-us') {
//     return NextResponse.redirect(new URL("/public/about-us", request.url));
//   }
// }

// export const config = {
//   // matcher: "/about/:path*" // For Single Path
//   matcher: ["/public/about-us/:path*", "/about-us", "about-us"] // For Multi Path
// }