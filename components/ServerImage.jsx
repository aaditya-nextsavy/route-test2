import Image from 'next/image';

export default function ServerImage({ src, alt, width, height, quality = 90 }) {

  let imageSrc;
  
  if (typeof src === 'string') {
    // External URLs (http/https) - use as-is
    if (src.startsWith('http')) {
      imageSrc = src;
    } 
    // Local paths - ensure they start with /
    else {
      imageSrc = src.startsWith('/') ? src : `/${src}`;
    }
  } 
  // Imported image objects
  else {
    imageSrc = src.src || src;
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
    />
  );
}