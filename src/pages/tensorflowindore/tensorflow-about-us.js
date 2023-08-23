import InnerPageContainer from "@/components/common/InnerPageContainer";
import Layout from '@/containers/Layout'

export default function Page() {
    return (
    <Layout title={'Tensorflow User Group Indore'} about={'/tensorflowindore/tensorflow-about-us'}>
      <InnerPageContainer title="About Us">
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
    <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue">About Tensorflow Indore</h2>
        <p >Hey,
Hope you're doing great!
 
We're excited to announce the inception of the TensorFlow User Groups community Indore - an engaging and inclusive community tailored for data scientists, machine learning enthusiasts, and tech aficionados like yourself! 🚀 

Are you looking for a community dedicated to data science or Machine Learning in Indore?
Are you interested to learn about the upcoming tech advancements?
Get ready! Here's your local go-to community to keep you updated on TensorFlow, data science or ML advancements. 

💡 What is TFUG Indore all about? 💡

🤝 TFUG Indore is a platform that brings together like-minded individuals from diverse backgrounds to collaborate, learn, and innovate in the field of data science and machine learning using TensorFlow.

📚 Whether you're an experienced practitioner or a beginner, TFUG Indore welcomes everyone interested in harnessing the power of TensorFlow and staying ahead in this rapidly evolving tech landscape. 💪

TFUG Indore is all set to host a series of engaging meetups, workshops, and hands-on sessions. Get ready to delve into exciting use cases, share knowledge, and foster innovation alongside passionate individuals. 🚀

 🔍 Stay Tuned for Upcoming Events! 🔍 
        </p>
        <p className="text-lg text-gray-700 mt-4">
            To learn more about the TensorFlow program, visit{' '}
            <a
                href="https://bit.ly/tensorflow-indore-register"
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
  
