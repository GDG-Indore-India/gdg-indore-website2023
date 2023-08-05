import Layout from '@/containers/Layout'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import Technologies from '@/components/home/technologies'
import SocialLinks from '@/components/home/SocialLinks'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title={'Google Developers Group Cloud Indore'}>
        <Hero />
        <Features />
        <Technologies />
        {/* <SocialLinks /> */}
        {/* <Testimonials /> */}
    </Layout>
  )
}
