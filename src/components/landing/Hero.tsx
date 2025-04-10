import Image from 'next/image'
import React from 'react'
import Icon from '../../../public/assets/LinkVaultIcon.png'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="flex items-center lg:justify-between px-4  flex-wrap justify-center gap-x-4 gap-y-5 bg-gradient-to-br from-pink-300/40 to-blue-300/40 w-screen h-screen md:px-20 py-10">
            <div className="w-full md:w-[60%] lg:w-[50%] text-center">
                <h1 className="text-4xl md:text-7xl font-bold text-center">
                    Save and Organize Your <br className="hidden lg:block" />{' '}
                    Links in One Place
                </h1>
                <h3 className="text-xl font-medium text-gray-500 py-5 md:text-3xl md:font-bold">
                    <span>Minimal. </span>
                    <span>Fast. </span>
                    <span>Private. </span>
                </h3>
                <div id="buttons" className="py-3 flex gap-x-4 justify-center ">
                    <Link href={'/auth/login'}>
                        <Button className="py-2 w-52 lg:w-60 lg:h-20 cursor-pointer h-14 rounded-md  border-2 bg-green-400 hover:shadow-2xl hover:bg-transparent hover:text-black hover:border-blue-500 text-lg lg:text-xl">
                            Get Started
                        </Button>
                    </Link>
                    <Link href={'/auth/login'}>
                        <Button className="py-2 w-52 cursor-pointer lg:w-60 lg:h-20 h-14 rounded-md  border-2 bg-white hover:shadow-2xl  text-black text-lg hover:text-white lg:text-xl hover:transition-all hover:border-white hover:duration-300 hover:ease-in-out">
                            View Demo
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-4 -z-10 rounded-full bg-blue-400 opacity-30 blur-3xl" />
                <Image
                    src={Icon}
                    alt="hero"
                    width={500}
                    height={500}
                    className="rounded-lg"
                />
            </div>
        </section>
    )
}

export default Hero
