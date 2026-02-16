import { useEffect, useRef, useState } from "react";
const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
 const imgRef = useRef<HTMLImageElement>(null);
 const [isVisible, setIsVisible] = useState(false);
 useEffect(() => {
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 }
 });
 },
 { threshold: 0.1 }
 );
 if (imgRef.current) observer.observe(imgRef.current);
 return () => {
 if (imgRef.current) observer.unobserve(imgRef.current);
 };
 }, []);
 return (
 <img
 ref={imgRef}
 src={isVisible ? src : ""}
 data-src={src}
 alt={alt}
 className="w-full h-auto rounded-lg shadow-md transition-opacity
duration-500"
 />
 );
};
export default LazyImage;