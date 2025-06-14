
import React, { useState } from "react";

export const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
      <img
        src={images[idx]}
        alt={`Product ${idx}`}
        className="object-cover w-full h-full transition duration-300"
      />
      <div className="absolute left-0 bottom-0 right-0 flex justify-center gap-2 pb-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition ${idx === i ? "bg-primary" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};
