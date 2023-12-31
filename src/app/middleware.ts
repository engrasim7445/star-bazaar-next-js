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
// ADDING HEADERS TO REQUEST
// export function middleware(request: Request) {
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('x-url', request.url);

//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     }
//   });
// }
// // UTILIZING HEADERS IN SERVER COMPONENT
// import { headers } from 'next/headers';
// export default function RootLayout() {
//   const headersList = headers();
//   // read the custom x-url header
//   const header_url = headersList.get('x-url') || "";
// }