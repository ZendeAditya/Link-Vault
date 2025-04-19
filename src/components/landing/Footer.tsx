import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="h-16 py-5 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl ">
                Made with ❤️ by{' '}
                <Link
                    target="_blank"
                    href="https://github.com/ZendeAditya"
                    className="font-bold underline"
                >
                    Aditya Zende
                </Link>
            </h2>
        </div>
    )
}

export default Footer
