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
          TensorFlow User Group Indore is a platform that brings together like-minded individuals from diverse backgrounds to collaborate, learn, and innovate in the field of data science and machine learning using TensorFlow. Whether you're an experienced practitioner or a beginner, TFUG Indore welcomes everyone interested in harnessing the power of TensorFlow and staying ahead in this rapidly evolving tech landscape.

          </p>
          <button className="btn bg-primary-blue border-none outline-none hover:bg-primary-blue">
            <a
              className="font-medium tracking-wider"
              href="https://bit.ly/tensorflow-indore-register"
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
