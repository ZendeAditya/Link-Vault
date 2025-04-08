import Link from 'next/link'
import React from 'react'
type NavItem = {
    name: string
    link: string
}

const navRoutes: {
    public: NavItem[]
} = {
    public: [
        { name: 'Home', link: '/' },
        { name: 'Features', link: '/#features' },
        { name: 'Demo', link: '/demo' },
        { name: 'Login', link: '/sign-in' },
    ],
}

const Navbar = () => {
    return (
        <div className="absolute  top-4 lg:top-16 left-1/2 transform -translate-x-1/2">
            <nav className="flex justify-between gap-2 font-bold md:text-xl text-lg items-center p-4 border-2 border-blue-400/40  shadow-lg hover:shadow-md rounded-full w-auto lg:w-[40rem] md:mx-5">
                {navRoutes.public.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className="text-gray-700 hover:text-blue-500 mx-2"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Navbar
