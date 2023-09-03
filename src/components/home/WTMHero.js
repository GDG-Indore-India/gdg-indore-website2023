function WTMHero() {
    return (
      <div>
        <div className="hero pt-20 bg-base-100 bg-primary wtm-background pt-56">
          <div className="hero-content full-width flex-col lg:flex-row-reverse text-center justify-center">
            {/* <img src="/about.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold font-googlesans text-gray-700 text-primary">
                Women Techmakers Indore
              </h1>
              <p className="py-6 text-gray-500">
              The Women Techmakers Indore program assists women in the tech field who aim to make a difference and contribute to their communities. Additionally, participants will have the opportunity to be involved in community engagement through various leadership activities every meet-up events regards to GDG,GDG cloud, TensorFlow, Women In tech, Women Who Code and many more community events.
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
  
  
  export default WTMHero;
  
