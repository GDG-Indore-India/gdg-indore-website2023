import Layout from '@/containers/Layout'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import Technologies from '@/components/home/technologies'
import SocialLinks from '@/components/home/SocialLinks'
import GDGHero from '@/components/home/GDGHero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout url={'gdgindore'} title={'Google Developers Group Indore'} about={'/gdgindore/about-us'} logo={'/gdg-indore-logo.svg'}>
        <GDGHero />
        <Features url={'Google Developers Group Indore'}/>
        <Technologies />
        <SocialLinks />
        {/* <Testimonials /> */}
    </Layout>
  )
}
