'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { googleSignIn } from '@/app/actions/GoogleSignIn'
interface SignInData {
    email: string
    password: string
}

interface SignUpData {
    username: string
    email: string
    password: string
}

const SignIn = () => {
    const [isSignIn, setIsSignIn] = useState<boolean>(true)

    const [signInData, setSignInData] = useState<SignInData>({
        email: '',
        password: '',
    })

    const [signUpData, setSignUpData] = useState<SignUpData>({
        username: '',
        email: '',
        password: '',
    })

    const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSignInData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSignUpData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSignInSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Sign In Data:', signInData)
    }

    const handleSignUpSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Sign Up Data:', signUpData)
    }

    const SignInForm = (
        <section className="w-screen h-screen flex items-center justify-center">
            <div className="border-2 border-gray-600/40 rounded-lg p-4 w-[28rem] h-[34rem] flex flex-col gap-4 shadow-2xl shadow-gray-400">
                <div className="py-5">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-center text-2xl font-bold">
                            Welcome Back!
                        </h2>
                        <p className="text-center text-gray-500">
                            Please sign in to your account
                        </p>
                    </div>
                    <form onSubmit={handleSignInSubmit}>
                        <div className="flex flex-col gap-2 mt-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="border-2 border-gray-300 rounded-lg p-2"
                                value={signInData.email}
                                onChange={handleSignInChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="border-2 border-gray-300 rounded-lg p-2"
                                value={signInData.password}
                                onChange={handleSignInChange}
                                required
                            />
                        </div>
                        <Link
                            href={'/forgot-password'}
                            className="text-end text-blue-400 block py-2 px-2"
                        >
                            Forgot Password?
                        </Link>
                        <Button
                            type="submit"
                            className="bg-blue-500 text-white rounded-lg p-2 mt-4 hover:bg-blue-600 w-52 h-12 cursor-pointer text-xl"
                        >
                            Sign In
                        </Button>
                        <div className="py-5 flex flex-col gap-4">
                            <p className="text-center text-gray-500">
                                {"Don't"} have an account?{' '}
                                <Link
                                    href={'#'}
                                    onClick={() => setIsSignIn(false)}
                                    className="text-blue-400"
                                >
                                    Sign Up
                                </Link>
                            </p>
                            <hr />
                        </div>
                    </form>
                    <div>
                        <Button
                            onClick={googleSignIn}
                            className="bg-white text-gray-700 border-2 border-gray-300 rounded-lg p-4 mt-4 hover:bg-gray-100 w-full h-12 cursor-pointer flex items-center justify-center gap-2 font-bold text-xl"
                        >
                            Sign In With Google
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )

    const SignUpForm = (
        <section className="w-screen h-screen flex items-center justify-center">
            <div className="border-2 border-gray-600/40 rounded-lg p-4 w-[28rem] h-[34rem] flex flex-col gap-4 shadow-2xl shadow-gray-400">
                <div className="py-5">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-center text-2xl font-bold">
                            Create an Account
                        </h2>
                        <p className="text-center text-gray-500">
                            Please fill in the details to sign up
                        </p>
                    </div>
                    <form onSubmit={handleSignUpSubmit}>
                        <div className="flex flex-col gap-2 mt-4">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                className="border-2 border-gray-300 rounded-lg p-2"
                                value={signUpData.username}
                                onChange={handleSignUpChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="border-2 border-gray-300 rounded-lg p-2"
                                value={signUpData.email}
                                onChange={handleSignUpChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="border-2 border-gray-300 rounded-lg p-2"
                                value={signUpData.password}
                                onChange={handleSignUpChange}
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="bg-blue-500 text-white rounded-lg p-2 mt-4 hover:bg-blue-600 w-52 h-12 cursor-pointer text-xl"
                        >
                            Sign Up
                        </Button>
                        <div className="py-5 flex flex-col gap-4">
                            <p className="text-center text-gray-500">
                                {'Already'} have an account?{' '}
                                <Link
                                    href={'#'}
                                    onClick={() => setIsSignIn(true)}
                                    className="text-blue-400"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
    return isSignIn ? SignInForm : SignUpForm
}

export default SignIn
