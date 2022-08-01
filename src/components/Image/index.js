import { useState } from "react";
import images from "@/assets/images";

function Image({ src, alt, className, fallback: customeFallback = images.noImage, ...props }) {
  const [fallback, setFallback] = useState("");
  const handleError = () => {
    setFallback(customeFallback);
  };
  return (
    <img className={className} alt={alt} src={src || fallback} {...props} onError={handleError} />
  );
}

export default Image;
