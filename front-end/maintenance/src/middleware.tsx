import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest){
  const token = request.cookies.get('maintenance.token')?.value
  const signInURL = new URL('/', request.url)
  if(!token){    
    if(request.nextUrl.pathname === '/'){
      return NextResponse.next();
    }
    return NextResponse.redirect(signInURL);
  }
}

export const config = {
  matcher:[ '/', '/in/:path*' ]
}