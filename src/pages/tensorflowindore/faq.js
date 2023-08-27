import React, { useState } from 'react';

const FaqPage = () => {
  const faqData = [
    {
      question: "what is google for developer group?",
      answer: "As of my last update, there is no recognized entity called a Google for Developer Group.Google primarily supports developer engagement through programs like Google Developer Groups (GDGs) and Google Developer Experts (GDEs), which provide platforms for developers to learn, collaborate, and connect around Google's technologies and tools. If such a group has been introduced since September 2021, I recommend referring to official Google resources for accurate information.",
    },
    {
      question: "How can i become a member of google for developer Indore?",
      answer: "To become a member of a Google Developer Group (GDG) in Indore, you can start by finding a local GDG chapter through the Google Developer Groups website. Attend their meetups, workshops, and events to engage with the community and learn about Google technologies. Participate actively, volunteer, or even give talks to contribute and stand out in the community. Stay connected through forums and social media, and check for any specific requirements or processes set by the local GDG chapter.",
    },
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
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <ul className="w-full max-w-md">
        {faqData.map((item, index) => (
          <li key={index} className="mb-4 border rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
            <button
              className="hover:underline focus:outline-none font-semibold text-lg"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </button>
            {activeIndex === index && <p className="mt-2 text-gray-600">{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqPage;
