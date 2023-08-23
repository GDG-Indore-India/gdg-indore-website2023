import React from 'react';
function Hero() {
  return (
    <div className="hero pt-20 bg-primary" style={{ backgroundImage: 'url("/Tensorbanner.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero-content full-width flex-col lg:flex-row-reverse text-center justify-center h-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold p-20 font-googlesans text-gray-700 text-primary">
            TensorFlow for Developers Indore
          </h1>
          <p className="py-6 text-gray-500">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
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
  );
}

export default Hero;
