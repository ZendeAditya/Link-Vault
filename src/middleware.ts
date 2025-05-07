export { auth } from '../auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/dashboard']
const publicAuthRoutes = ['/sign-in', '/']

export function middleware(request: NextRequest) {
    const token = request.cookies.get('authjs.session-token')?.value

    const isLoggedIn = !!token
    const { pathname } = request.nextUrl
    if (protectedRoutes.includes(pathname) && !isLoggedIn) {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
    if (publicAuthRoutes.includes(pathname) && isLoggedIn) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
}
