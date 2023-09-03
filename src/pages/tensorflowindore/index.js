import Layout from '@/containers/Layout'
import { Inter } from '@next/font/google'
import Technologies from '@/components/home/technologies'
import SocialLinks from '@/components/home/SocialLinks'
import TensorflowHero from './tensorflow-Hero'
import TensorFlowFeatures from './tensorflow-feature'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout url={'tensorflowindore'} title={'Tensorflow User Group Indore'} about={'/tensorflowindore/about-us'} logo={'/tensorflow-indore.svg'}>
      
        <TensorflowHero />
        {/* <TensorFlowCommunity/> */}
        <TensorFlowFeatures/>
        <Technologies />
        <SocialLinks />
        {/* <Testimonials /> */}
    </Layout>
  )
}
