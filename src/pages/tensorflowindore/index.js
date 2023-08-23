import Layout from '@/containers/Layout'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
// import Testimonials from '@/components/home/Testimonials'
import Technologies from '@/components/home/technologies'
import SocialLinks from '@/components/home/SocialLinks'
import TensorflowHero from './tensorflow-Hero'
// import TensorFlowCommunity from './tensorflow-communities'
// import TensorFlowNavbar from './tensorflow-navbar'
// import TensorFlowOrganizer from './tensorflow-organizers'
import TensorFlowFeatures from './tensorflow-feature'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout url={'tensorflowindore'} title={'Tensorflow User Group Indore'} about={'/tensorflowindore/tensorflow-about-us'}>
      
      {/* <TensorFlowNavbar/> */}
        <TensorflowHero />
        {/* <TensorFlowCommunity/> */}
        {/* <TensorFlowOrganizer/> */}
        <TensorFlowFeatures/>
        <Technologies />
        <SocialLinks />
        {/* <Testimonials /> */}
    </Layout>
  )
}
