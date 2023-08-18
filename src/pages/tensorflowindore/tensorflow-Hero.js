import { useState, useEffect } from 'react';



function TensorflowHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://blog.roboflow.com/content/images/2022/06/Blog-Image-Template--Fall-2021---1-.webp',
    'https://miro.medium.com/v2/resize:fit:1068/1*Te7ykyBZsZ8ZZkpP5BuZug.png',
    'https://cdn.activestate.com/wp-content/uploads/2021/08/What-is-tensorflow.jpg',
    'https://uploads-ssl.webflow.com/5fdc17d51dc102ed1cf87c05/637d2a1f9cd55405a3456dbf_T08tcL3i0inMMln-yx10j2KXZqhpIbctSepp2ShAqPZM4YKOI5arjou3FjBqeODkeXsa96XM-D4z7iXkyPapkS1ZD0nBsZtK4QRbfhqhYeTbJoUTzmQeue2fW8_TsMvY9pIIwC7QfXLoHuGSoy52eqgKRLYReDDMYEz7LPVxdr3J__ZzDv7YDrxDQUvhEQ.png'
    
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearTimeout(timer);
  }, [currentImage, images.length]);

  return (
    <div>
      <div className="w-full h-[600px] bg-white opacity-80 rounded-lg relative cursor-pointer">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 rounded-full mx-1 ${
                index === currentImage ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
      <div className="hero pt-20 bg-base-100 bg-primary">
        
      </div>
      
    </div>
  );
}

export default TensorflowHero;
