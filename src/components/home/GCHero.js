function GCHero() {
    return (
      <div>
        <div className="hero pt-20 bg-base-100 bg-primary pt-52  gdc-background">
          <div className="hero-content full-width flex-col lg:flex-row-reverse text-center justify-center">
            {/* <img src="/Cloud-indore.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold font-googlesans text-gray-700 text-primary">
                Google Developers Group Cloud Indore
              </h1>
              <p className="py-6 px-5 text-gray-500">
              GDG Cloud Indore hosts diverse technical events, including meetups, workshops, challenges, and hackathons. We welcome tech enthusiasts of all levels, from beginners to experts. Join our inclusive community to learn, network, and grow your skills.
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
  
  
  export default GCHero;
  