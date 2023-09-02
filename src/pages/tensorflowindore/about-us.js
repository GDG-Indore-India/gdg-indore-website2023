import InnerPageContainer from "@/components/common/InnerPageContainer";
import Layout from '@/containers/Layout'

export default function Page() {
    return (
    <Layout title={'Tensorflow User Group Indore'} about={'/about-us'}>
      <InnerPageContainer title="About Us">
      <div className="bg-gray-100 max-h-screen flex flex-col justify-center items-center p-8">
    <div className="max-w-3xl text-center">
        
        <p>
            Hey,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Hope you&apos;re doing great!&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            We&apos;re excited to announce the inception of the TensorFlow User Groups community Indore - 
            an engaging and inclusive community tailored for data scientists, machine learning enthusiasts,
             and tech aficionados like yourself! 🚀&nbsp;<br/>Are you looking for a community dedicated to data 
             science or Machine Learning in Indore?Are you interested to learn about the upcoming tech advancements?Get ready! 
             Here&apos;s your local go-to community to keep you updated on TensorFlow, data science or ML advancements.&nbsp;<br/>💡
              What is TFUG Indore all about? 💡<br/>🤝 TFUG Indore is a platform that brings together like-minded individuals 
              from diverse backgrounds to collaborate, learn, and innovate in the field of data science and machine
               learning using TensorFlow.<br/>📚 Whether you&apos;re an experienced 
               practitioner or a beginner, TFUG Indore welcomes everyone interested in 
               harnessing the power of TensorFlow and staying ahead in this rapidly evolving tech 
               landscape. 💪<br/>TFUG Indore is all set to host a series of engaging meetups, workshops, 
               and hands-on sessions. Get ready to delve into exciting use cases, share knowledge, and 
               foster innovation alongside passionate individuals. 🚀<br/>&nbsp;🔍 Stay Tuned for Upcoming Events! 
            🔍&nbsp;
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
  
