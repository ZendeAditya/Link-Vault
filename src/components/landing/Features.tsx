'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import Privacy from './../../../public/assets/Features/Privacy.png'
import Cloud from './../../../public/assets/Features/cloud.png'
import SmartTags from './../../../public/assets/Features/tagImage.jpg'
import QuickSave from './../../../public/assets/Features/saveLink.png'

type FeaturesType = {
    title: string
    description: string
    image: string | StaticImageData
}

const featuresList: FeaturesType[] = [
    {
        title: 'Quick Save',
        description:
            'Save any link in just one click. Organize it instantly into folders or tag it for later — no extra steps needed.',
        image: QuickSave,
    },
    {
        title: 'Smart Tags',
        description:
            'Automatically suggest and apply relevant tags to your bookmarks so you can find them effortlessly later.',
        image: SmartTags,
    },
    {
        title: 'Cloud Access',
        description:
            'All your saved links are synced and accessible across all devices — wherever you are, whenever you need them.',
        image: Cloud,
    },
    {
        title: 'Privacy First',
        description:
            'Your data stays yours. Bookmarks are private by default with secure storage and zero third-party tracking.',
        image: Privacy,
    },
]

const Features = () => {
    const refs = useRef<(HTMLDivElement | null)[]>([])
    const [activeIndex, setActiveIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (section) sectionObserver.observe(section)

        return () => {
            if (section) sectionObserver.unobserve(section)
        }
    }, [])

    useEffect(() => {
        const intersectionMap = new Map<number, boolean>()

        const observers = refs.current.map((ref, index) => {
            if (!ref) return null

            const observer = new IntersectionObserver(
                ([entry]) => {
                    intersectionMap.set(index, entry.isIntersecting)

                    if (entry.isIntersecting) {
                        let highestVisibleIndex = index
                        let highestRatio = entry.intersectionRatio

                        intersectionMap.forEach((isIntersecting, idx) => {
                            if (isIntersecting && refs.current[idx]) {
                                const ratio =
                                    refs.current[idx]?.getBoundingClientRect()
                                        .top || 0
                                if (ratio < highestRatio) {
                                    highestVisibleIndex = idx
                                    highestRatio = ratio
                                }
                            }
                        })

                        setActiveIndex(highestVisibleIndex)
                    }
                },
                {
                    threshold: [
                        0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
                    ],
                    rootMargin: '0px 0px -50% 0px',
                }
            )

            observer.observe(ref)
            return observer
        })

        return () => {
            observers.forEach((observer, i) => {
                if (observer && refs.current[i])
                    observer.unobserve(refs.current[i]!)
            })
        }
    }, [])

    return (
        <>
            {/* Mobile section */}
            <div className="md:hidden">
                <div className="flex flex-col items-center justify-center mt-10 text-center mb-20">
                    <h2 className="text-4xl text-blue-400 font-bold">
                        Why LinkVault?
                    </h2>
                    <p className="text-2xl py-3 text-gray-400 italic">
                        Everything you need to manage your bookmarks like a pro.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center px-4 gap-8 mb-20">
                    {featuresList.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-full"
                        >
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-auto rounded-lg border-2 shadow-md hover:shadow-xl border-gray-400"
                            />
                            <h3 className="text-2xl font-semibold mt-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-center text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop section */}
            <div className="md:relative md:h-[210vh]" ref={sectionRef}>
                <div className="hidden md:block sticky top-0 bg-white z-10 h-screen">
                    <div className="text-center py-20">
                        <h2 className="text-6xl text-blue-400 font-bold">
                            Why LinkVault?
                        </h2>
                        <p className="text-2xl text-gray-400 italic mt-3">
                            Everything you need to manage your bookmarks like a
                            pro.
                        </p>
                    </div>

                    <div className="flex">
                        {/* Sticky image */}
                        <div className="w-1/2 flex items-center justify-center">
                            <Image
                                src={featuresList[activeIndex].image}
                                alt={featuresList[activeIndex].title}
                                className={`w-[26rem] h-[26rem] object-contain rounded-lg border-2 border-black shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>

                        {/* Scrollable features */}
                        <div className="w-1/2 flex flex-col">
                            {featuresList.map((feature, i) => (
                                <div
                                    key={i}
                                    ref={(el) => {
                                        refs.current[i] = el
                                    }}
                                    className="min-h-[20vh] flex items-center justify-center px-10"
                                >
                                    <div
                                        className={`text-center p-6 rounded-xl transition-all duration-500 ${
                                            activeIndex === i
                                                ? 'bg-white scale-105 opacity-100 shadow-md'
                                                : 'bg-blue-50 text-blue-300 opacity-50'
                                        }`}
                                    >
                                        <h3 className="text-4xl font-bold">
                                            {feature.title}
                                        </h3>
                                        <p className="text-lg mt-3 italic font-medium max-w-md">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
