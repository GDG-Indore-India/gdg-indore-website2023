import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/router';

function TensorFlowOrganizer() {
  const router = useRouter();
  const OrganizerData = [
    {title : "Karan Mittal"},
    {title : "Workshops"},
    {title : "Networking"}
]


  const handleIconClick = (destination) => {
    router.push(destination);
  };

  return (


      <div className="grid place-items-center w-full">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Organizer</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    OrganizerData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl border-2 border-solid">
                                <div className="card-body mt-4 items-center text-center">
                                <img src="/TensorOrganizer.jpeg" alt="Card Image" className="mx-auto mb-4" />
                                    <h2 className="card-title">{i.title}</h2>
                                    <div className="icon-container flex flex-row">
        <FaInstagram onClick={() => handleIconClick('https://www.instagram.com')} className="social-icon" />
        <FaTwitter onClick={() => handleIconClick('https://twitter.com')} className="social-icon" />
        <FaLinkedin onClick={() => handleIconClick('https://www.linkedin.com')} className="social-icon" />
      </div>
                                    
                                </div>
                                
                                </div>
                        )
                    })
                }
                
            </div>
            </div>
        </div>

           
        
      
  
  );
}

export default TensorFlowOrganizer;
