function GDGHero() {
  return (
    <div>
      <div className="hero pt-20 bg-base-100 bg-primary pt-32 background ">
        <div className="hero-content full-width flex-col lg:flex-row-reverse text-center justify-center">
          {/* <img src="/about.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold font-googlesans text-gray-700 text-primary">
              Google Developers Group Indore
            </h1>
            <p className="py-6 text-gray-500">
            Google Developers Group Indore, is a technical-community based in Indore, India. We organize frequent meetup events which include talks on a wide range of technical topics where you can learn new skills through hands-on workshops, online challenges, interaction with the community, and hackathons.
            </p>
            <button className="btn bg-primary-blue border-none outline-none hover:bg-primary-blue">
              <a
                className="font-medium tracking-wider"
                href="https://ggd.community.dev/gdg-indore"
                target="_blank"
                rel="noreferrer"
              >
                Join our Community
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default GDGHero;
