import React from "react";
import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";

export const Card = ({image}) => {
  return (
    <main>
      <div className="  max-w-[300px] rounded-lg border-2 border-red-600 m-1 bg-white flex flex-wrap ">
        <a href={image.webformatURL}><img src={image.webformatURL}  alt="image"className="w-full h-full border-4 border-green-400 rounded"/></a>
        <div className="p-5">
        <h2 className="text-xl font-bold mb-2 ">Photo By {image.user}</h2>
          <div className="flex items-center gap-3">
            <FaEye className="text-2xl text-purple-500" />
            <h3 className="text-xl font-semibold">{image.views}</h3>
          </div>

          <div  className="flex items-center gap-3">
            <a href={image.previewURL}><IoMdDownload className="text-2xl text-green-500 cursor-pointer" /></a>
            <h3 className="text-xl font-semibold">{image.downloads}</h3>
          </div>

          <div  className="flex items-center gap-3">
            <FaHeart className="text-2xl text-red-500" />
            <h3 className="text-xl font-semibold">{image.likes}</h3>
          </div>
          </div>
          </div>
    </main>
  );
};
