import InnerPageContainer from "@/components/common/InnerPageContainer";
import Layout from '@/containers/Layout'

export default function Page() {
    return (
    <Layout title={'Google Developers Group Cloud Indore'} about={'/about-us'}>
      <InnerPageContainer title="About Us">
      <div className="bg-gray-100 max-h-screen flex flex-col justify-center items-center p-8">
    <div className="max-w-3xl text-center">
        
        <p>
        Google Developers Group(GDG) Cloud Indore meetup event includes talks on a wide range of technical topics where you can learn new skills through meetups, hands-on workshops, online challenges and hackathon. The community prides itself on being an inclusive environment where everyone and anyone interested in tech - from beginner developers to experienced professionals - all are welcome to join.

Disclaimer: GDG Cloud Indore is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation. 
        </p>
        <p className="text-lg text-gray-700 mt-4">
        To learn more about the GDG program, visit{' '}
            <a
                href="https://developers.google.com/community/gdg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
            >
                here
            </a>
            .
        </p>
    </div>
</div>
      </InnerPageContainer>
      </Layout>
    )
  }
  
