

import { NextResponse } from "next/server"

export const middleware =(request)=>{
    const cookie = request.cookies.get('token')
    console.log(cookie)
    if(!cookie){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher : '/dashboard'
}