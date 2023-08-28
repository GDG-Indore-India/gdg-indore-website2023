import InnerPageContainer from "@/components/common/InnerPageContainer";
import Layout from '@/containers/Layout'

export default function Page() {
    return (
    <Layout title={'Women Techmakers Indore'} about={'/about-us'}>
      <InnerPageContainer title="About Us">
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
    <div className="max-w-3xl text-center">
        
        <p className="text-lg text-gray-700">
        The Women Techmakers Indore program assists women in the tech field who aim to make a difference and contribute to their communities. Additionally, participants will have the opportunity to be involved in community engagement through various leadership activities every meet-up events regards to GDG,GDG cloud, TensorFlow, Women In tech, Women Who Code and many more community events.
        </p>
        
    </div>
</div>    
      </InnerPageContainer>
      </Layout>
    )
  }
  
