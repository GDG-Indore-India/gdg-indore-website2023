import React, { useState } from 'react';

const FaqPage = () => {
  const faqData = [
    {
      question: "what is Google Developer Group?",
      answer: "As of my last update, there is no recognized entity called a Google for Developer Group.Google primarily supports developer engagement through programs like Google Developer Groups (GDGs) and Google Developer Experts (GDEs), which provide platforms for developers to learn, collaborate, and connect around Google's technologies and tools. If such a group has been introduced since September 2021, I recommend referring to official Google resources for accurate information.",
    },
    {
      question: "What is Women Techmakers program",
      answer: "To become a member of a Google Developer Group (GWomen Techmakers is a Google-sponsored global program aimed at increasing gender diversity in the tech industry by empowering and supporting women in technology through events, scholarships, mentorship, and networking opportunities, fostering a more inclusive and equitable tech community.",
    },
    {
      question: "What is Tensorflow User groups?",
      answer: "TensorFlow User Groups (TFUGs) are community-driven organizations and local meetups dedicated to bringing together developers, researchers, and enthusiasts interested in TensorFlow, an open-source machine learning framework developed by Google. TFUGs serve as hubs for knowledge sharing, collaboration, and learning, where members can exchange ideas, discuss best practices, and explore the latest developments in machine learning and deep learning using TensorFlow. These groups aim to foster a supportive ecosystem for individuals passionate about leveraging TensorFlow for various applications and research in their respective regions.",
    }, 
    {
      question: "How can I become a member of Google Developer Group Indore? ",
      answer: "To become a member of Google Developer Group Indore, you can typically visit their official website or social media channels to find information about upcoming events and meetings. Attend one of their events or join their online community to get involved and become a member. Membership requirements may vary, but participation and engagement in their activities, such as attending meetups, workshops, and contributing to discussions, are usually the key steps to becoming an active member of the group.",
    },
    {
      question: "How can I become a member of Women Techmakers Indore? ",
      answer: "To become a member of Women Techmakers Indore, you can usually visit their official website or social media platforms to find information about their events and activities. Attend one of their events, workshops, or meetups to get involved and express your interest in becoming a member. Membership criteria may vary, but active participation in their initiatives, networking with other members, and contributing to their mission of empowering women in technology are typically essential steps toward becoming a member of Women Techmakers Indore.",
    }, {
      question: "How can I become a member of TensorFlow User Group Indore?",
      answer: "To become a member of TensorFlow User Group Indore, you can check their official website or social media channels for information about upcoming meetings and events. Attend one of their gatherings to express your interest in joining the group. Membership requirements may vary, but active participation in discussions, sharing your TensorFlow-related knowledge or projects, and engaging with the local TensorFlow community are typically the primary steps to becoming a member of the TensorFlow User Group Indore.",
    },
    {
      question: "How can I stay informed? ",
      answer: "To stay informed, you can utilize a combination of online and offline methods. Online, subscribe to news websites, blogs, and newsletters related to your interests, follow social media accounts of organizations and individuals in your field, and use news aggregator apps. Offline, attend conferences, seminars, and local meetups, and engage in conversations with experts and peers in your industry. Being proactive in seeking information from diverse sources and staying curious about your areas of interest will help you stay well-informed.",
    },
    {
      question: "What technologies might I use at a Google for Developers Indore communities?",
      answer: "At a Google for Developers Indore community, you might use a wide range of technologies and tools that align with Google's developer ecosystem, including programming languages like Python, JavaScript, and Kotlin for mobile and web development, Google Cloud Platform services for cloud computing and machine learning, TensorFlow and other AI/ML frameworks, Android Studio for Android app development, and various Google APIs and SDKs to build applications and services that leverage Google's technologies and platforms. These communities often focus on fostering innovation, collaboration, and skill development using these tools and technologies.",

    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col p-12">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <ul className="w-full max-w-xl">
        {faqData.map((item, index) => (
          <li key={index} className="mb-4 border rounded-lg p-1">
            <button
              className=" text-lg text-left"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600 text-left">
                {item.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}  

export default FaqPage;
