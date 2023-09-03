import Layout from '@/containers/Layout'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import WTMHero from '@/components/home/WTMHero'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import Technologies from '@/components/home/technologies'
import SocialLinks from '@/components/home/SocialLinks'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout url={'wtmindore'} title={'Women Techmakers Indore'} about={'/wtmindore/about-us'} logo={'/wtm-indore.png'}>
        <WTMHero />
        <Features url={'Women Techmakers Indore'}/>
        {/* <Technologies /> */}
        {/* <SocialLinks /> */}
        {/* <Testimonials /> */}
    </Layout>
  )
}
