import React from "react";
import Image from "next/image";

const BlogCard = (props) => {
  return (
    <div className="w-[270px] rounded-lg shadow-xl">
      <div className="w-full h-[150px] rounded-tr-lg rounded-tl-lg">
        <Image
          src={props.cover}
          className="h-[150px] rounded-tr-lg rounded-tl-lg"
          alt="blog-cover"
          width={270}
          height={150}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xs uppercase text-gray-500 mb-1 tracking-wide">
          {props.topic}
        </h3>
        <h1 className="font-semibold text-lg tracking-wide">{props.title}</h1>
        <p className="text-gray-600 text-[0.825rem] tracking-wider text-justify">
          {props.desc}
        </p>
      </div>
      <div className="flex justify-between items-center bg-white py-2 px-4 gap-2 border-t rounded-br-lg rounded-bl-lg">
        <div className="flex items-center justify-between w-[50%]">
          <Image
            src={props.authorImg}
            className="rounded-full p-[0.2rem] border-2"
            width={30}
            height={30}
            alt="author-image"
          />
          <h3 className="text-[0.85rem] text-primary-black font-medium">
            {props.author}
          </h3>
        </div>
        <div className="">
          <p className="text-xs text-gray-400">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
