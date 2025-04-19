import Hero from '@/components/landing/Hero'
import Navbar from '@/components/landing/Navbar'
import Features from '../components/landing/Features'
import Preview from '@/components/landing/Preview'
import Footer from '@/components/landing/Footer'

export default function Home() {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <Features />
            <Preview />
            <Footer />
        </div>
    )
}
