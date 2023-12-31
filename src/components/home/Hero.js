const testimonialsData = [
  { icon: "/gdg-indore-logo.svg", name: "Google Developers Group Indore", href:'/gdgindore' },
  {
    icon: "/gdg-cloud-indore.svg",
    name: "Google Developers Group Cloud Indore",
    href:'/gdgcloudindore'
  },
  { icon: "/wtm-indore.png", name: "Women Techmakers Indore",href:'/wtmindore'},
  { icon: "/tensorflow-indore.svg", name: "TensorFlow User Group Indore", href:'/tensorflowindore' },
];

function Hero() {
  return (
    <div>
      <div className="hero pt-20 bg-base-100 bg-primary">
        <div className="hero-content full-width flex-col lg:flex-row-reverse text-center justify-center">
          {/* <img src="/about.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold font-googlesans text-gray-700 text-primary">
              Google for Developers Indore
            </h1>
            <p className="py-6 text-gray-500">
            Google for Developers Indore, is a technical-community based in Indore, India. We organize frequent meetup events which include talks on a wide range of technical topics where you can learn new skills through hands-on workshops, online challenges, interaction with the community, and hackathons into multiple communities events such as <b> Google Developers Group Indore(GDG Indore), Google Developers Group Cloud Indore(GDG Cloud Indore), Women Techmakers Indore (WTM Indore), TensorFlow User Group Indore(TFUG Indore) </b>         </p>
            {/* <button className="btn bg-primary-blue border-none outline-none hover:bg-primary-blue">
              <a
                className="font-medium tracking-wider"
                href="https://ggd.community.dev/gdg-indore"
                target="_blank"
                rel="noreferrer"
              >
                Join our Community
              </a>
            </button> */}
          </div>
        </div>
      </div>
      <div className="grid mt-12 grid-cols-4-1 grid-cols-1 gap-8 px-20">
        {testimonialsData.map((t, k) => {
          return (
            
              <div key={k} className="card w-full bg-base-100 shadow-xl">
                <a href={t.href} target="_blank" rel="noreferrer" >
                <figure className="px-10 pt-10">
                  <img className="mask w-56 h-24" src={t.icon} />
                </figure>
                <div className="card-body items-center text-center pt-4 pb-4">
                  <p className="text-slate-800">{t.name}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default Hero;
