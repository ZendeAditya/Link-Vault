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
        { name: 'Demo', link: '/#demo' },
        { name: 'Login', link: '/sign-in' },
    ],
}

const Navbar = () => {
    return (
        <div className="absolute top-4 lg:top-16 left-1/2 transform -translate-x-1/2 z-50 w-screen px-4 md:w-auto flex flex-col items-center">
            <nav className="border-2 border-blue-400/40 shadow-lg hover:shadow-md rounded-full lg:w-[40rem] md:mx-5 px-6  bg-white">
                <ul className="flex justify-between items-center gap-x-4 font-bold text-lg md:text-xl">
                    {navRoutes.public.map((item) => (
                        <li key={item.name} className="py-2 md:py-4">
                            <Link
                                href={item.link}
                                className="relative text-gray-700 hover:text-blue-500 transition-colors duration-200 px-3 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="py-5 w-[29rem] md:w-[32rem] lg:w-[30rem] text-center">
                <p className="py-2 font-bold rounded-full text-lg border-2 border-blue-500/40 px-2">
                    Save and access your bookmarks instantly 🚀
                </p>
            </div>
        </div>
    )
}

export default Navbar
