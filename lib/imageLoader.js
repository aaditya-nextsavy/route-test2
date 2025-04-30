// lib/imageLoader.js
export default function imageLoader({ src, width, quality }) {
    // Handle external images
    if (src.startsWith('http')) {
      return src;
    }
    
    // Handle local images - ensure they're served from root
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    
    return `/_next/image?url=${encodeURIComponent(normalizedSrc)}&w=${width}&q=${quality || 75}`;
  }