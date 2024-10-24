import React from "react";
import { Gallery } from "../../../components/Gallery";

const images = [
  "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
  "https://www.ripplesnigeria.com/wp-content/uploads/2024/08/images-23-1.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3wcmPATKyfJuapccpoU1UlCE4yiwhb1aYD-_Rqd4d7Ltulc6rVbb9_cx7hNVTgw409o&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6J3csgYqTDkZIRx6QWXSFSRhJrWYrcnXp-IlOZ01cllD72a9skbfwX5prn1gZU_9Jjg&usqp=CAU",

  // Add more image URLs
];

function Gallery2024() {
  return (
    <div>
      <h1 className="text-5xl text-blue-300 bg-black font-bold  text-center">GALLERY 2024</h1>
      <Gallery images={images} />
    </div>
  );
}

export default Gallery2024;