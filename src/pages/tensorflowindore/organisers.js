import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/router';

function TensorFlowOrganizer() {
  const router = useRouter();
  const OrganizerData = [
    { image:'/Karan.jpeg',
      title: "Karan Mittal",
      instaUrl:'https://www.instagram.com/karansmittal/',
      twitUrl:'https://twitter.com/KaranSMittal',
      linkUrl:'https://www.linkedin.com/in/karansmittal/'
      
    },
    { image:'/Anurag.JPG',
      title: "Anurag Mishra",
      instaUrl:'',
      twitUrl:'https://twitter.com/anurag_ayu',
      linkUrl:'https://www.linkedin.com/in/-anuragmishra/'

    },
    { image:'/darshan.jpeg',
      title: "Darshan Kusumakar",
      instaUrl:'https://instagram.com/_.darshan_.__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
      twitUrl:'https://twitter.com/xyresic_darshan?t=-mdAAD0SdyW5yOOpk_z7ig&s=09',
      linkUrl:'https://www.linkedin.com/in/xyresic-darshan'
    },
  ];

  const handleIconClick = (destination) => {
    router.push(destination);
  };

  return (
    
    <div className="grid place-items-center w-full">
      <div className="max-w-5xl p-5 content-center justify-center">
        <h1 className="text-4xl text-center font-bold">Organizer</h1>
        <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
          {OrganizerData.map((i, k) => {
            return (
              <div key={k} className="card  bg-base-100 shadow-xl hover:shadow-2xl border-2 border-solid">
                <div className="card-body mt-4 items-center text-center">
                  <img src={i.image} alt="Card Image" className="mx-auto mb-4" />
                  <h2 className="card-title">{i.title}</h2>
                  <div className="icon-container flex flex-row">
                    <FaInstagram onClick={() => handleIconClick(i.instaUrl)} className="social-icon" />
                    <FaTwitter onClick={() => handleIconClick('https://twitter.com')} className="social-icon" />
                    <FaLinkedin onClick={() => handleIconClick('https://www.linkedin.com')} className="social-icon" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default TensorFlowOrganizer;
