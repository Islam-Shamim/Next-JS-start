import { NextResponse } from "next/server"
// const user = false
// const user = true
export const middleware = (request) => {
    // return NextResponse.redirect(new URL("/blogs/1", request.url)) //directly goes to new url by clicking matcher api
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.rewrite(new URL("/blogs", request.url)) //same as redirect by it can't show hosting path  
    // }
    const cookies = request.cookies.get('token')
    if (!cookies) {
        return NextResponse.redirect(new URL('/signIn', request.url))
    }
    return NextResponse.next() 
}

export const config = {
    matcher: ["/blogs", '/contact']
}