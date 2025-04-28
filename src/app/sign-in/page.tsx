import React from 'react'
import { Metadata } from 'next'
import SignIn from './_components/SignIn'

export const metadata: Metadata = {
    title: 'Sign In - Link Vault',
    description: 'Sign in to your account',
}

const SignInPage = () => {
    return <SignIn />
}

export default SignInPage
