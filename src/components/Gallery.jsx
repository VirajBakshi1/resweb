import React, { useState } from "react";

export function Gallery({ images }) {
  const [active, setActive] = useState(images[0] || "");

  return (
    <div className="bg-black ">
    <div className="grid gap-3 p-6">
      {/* Main Image */}
      <div className="rounded-lg">
        <img
          className="h-auto w-70% mx-auto max-w-full rounded-lg border-2 object-contain object-center md:h-[480px]"
          src={active}
          alt="Active gallery image"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid mx-auto grid-cols-4 p-3 gap-4">
        {images.map((imgelink, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className={`h-40 max-w-full cursor-pointer rounded-lg object-cover object-center ${
                active === imgelink ? "ring-4 ring-blue-500" : ""
              }`}
              alt={`gallery-thumbnail-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}