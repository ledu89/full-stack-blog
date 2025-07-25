import { Image } from "@imagekit/react";

const ImageComponent = ({ src, className = "", w, h, alt = "" }) => {
  return (
    <Image
      urlEndpoint="https://ik.imagekit.io/ledu"
      src={src} // ✅ use `src`, not `path`
      className={className}
      loading="lazy"
      width={w}
      height={h}
      alt={alt}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default ImageComponent;
