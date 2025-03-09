"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * OptimizedImage component with lazy loading and blur-up effect
 *
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @param {boolean} props.priority - Whether to prioritize loading this image
 * @param {string} props.placeholder - Placeholder type ('blur' or 'empty')
 * @param {string} props.blurDataURL - Base64 encoded blur image data
 * @returns {JSX.Element} - Optimized image component
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  priority = false,
  placeholder = "blur",
  blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAI8QfmZPgAAAABJRU5ErkJggg==",
  ...rest
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Set up intersection observer to detect when image is in viewport
    if (!priority && typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: "200px" }
      );

      const currentId = `image-${Math.random().toString(36).substr(2, 9)}`;
      const element = document.getElementById(currentId);

      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
        observer.disconnect();
      };
    } else {
      setIsInView(true);
    }
  }, [priority]);

  return (
    <div
      id={`image-${Math.random().toString(36).substr(2, 9)}`}
      className={`relative overflow-hidden ${className}`}
      style={{ ...style }}
    >
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...rest}
        />
      )}
    </div>
  );
}
