import Image from 'next/image'
import React from 'react'
import Icon from '../../../public/assets/LinkVaultIcon.png'
import { Button } from '../ui/button'

const Hero = (props: Props) => {
    return (
        <section className="flex items-center lg:justify-between px-4 py-2 flex-wrap justify-center gap-x-4 gap-y-5 bg-gradient-to-br from-pink-300/40 to-blue-300/40 w-screen h-screen">
            <div className="w-[50%] text-center">
                <h1 className="text-4xl font-bold text-center">
                    Save and Organize Your Links in One Place
                </h1>
                <h3 className="text-xl font-medium text-gray-500 py-5">
                    <span>Minimal.</span>
                    <span>Fast. </span>
                    <span>Private.</span>
                </h3>
                <div id="buttons" className="py-3 flex gap-x-4 justify-center">
                    <Button className="py-2 w-52 cursor-pointer h-14 rounded-md  border-2 bg-green-400 hover:shadow-2xl hover:bg-green-500 text-lg">
                        Get Started
                    </Button>
                    <Button className="py-2 w-52 cursor-pointer h-14 rounded-md  border-2 bg-white hover:shadow-2xl  text-black text-lg">
                        Learn More
                    </Button>
                </div>
            </div>
            <div>
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
