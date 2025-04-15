import Hero from '@/components/landing/Hero'
import Navbar from '@/components/landing/Navbar'
import Features from '../components/landing/Features'

export default function Home() {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <Features />
        </div>
    )
}
