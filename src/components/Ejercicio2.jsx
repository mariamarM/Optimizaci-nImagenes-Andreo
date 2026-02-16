import LazyImage from "./LazyImage";
const Ejercicio2 = () => {
 const images = [
 "https://via.placeholder.com/600.webp",
 "https://via.placeholder.com/600.png",
 "https://via.placeholder.com/600.jpg",
 ];
 return (
 <div className="p-6">
 <h1 className="text-3xl font-bold mb-4">Ejercicio 2: Lazy
Loading en Imágenes</h1>
 <p className="mb-4">
 Las siguientes imágenes solo se cargarán cuando sean visibles
en la pantalla.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 {images.map((src, index) => (
 <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`}
/>
 ))}
 </div>
 </div>
 );
};
export default Ejercicio2;