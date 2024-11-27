import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";  // Import getServerSession from next-auth

export const middleware = async (request) => {
    const cookieStore = await cookies(); // Get the cookies from the request
    const token = cookieStore.get('next-auth.session-token');

    console.log('Token:', token);  // Log the token for debugging

    // If there's no token, redirect to the signin page
    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }

    // Get the session using NextAuth's getServerSession (use it for server-side validation)
    // const session = await getServerSession(request);
    // console.log('Session: '+session);

    // If no valid session is found or token doesn't match, redirect to signin
    // if (!session || session?.user?.email !== token.email) {
    //     console.log('Token mismatch or no session found');
    //     return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    // }

    // Proceed if the session is valid and token matches
    return NextResponse.next();
};

export const config = {
    matcher: ['/dashboard'],  // Match the dashboard route
};
