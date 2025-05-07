import React from 'react'
import { Metadata } from 'next'
import SignIn from './_components/SignIn'
import Navbar from '@/components/landing/Navbar'

export const metadata: Metadata = {
    title: 'Sign In - Link Vault',
    description: 'Sign in to your account',
}

const SignInPage = () => {
    return (
        <div className="relative">
            <Navbar />
            <SignIn />
        </div>
    )
}

export default SignInPage
