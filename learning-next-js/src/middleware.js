import { NextResponse } from "next/server";

export const middleware = (request) => {
    // return NextResponse.redirect(new URL('/profile', request.url));
    return NextResponse.rewrite(new URL('/profile', request.url));
};

export const config = {
    // matcher: '/user-profile'
    matcher: ['/user-profile', '/profile']
};