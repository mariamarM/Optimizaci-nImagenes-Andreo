const FigmaComponent = () => {
 return (
 <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
 <h2 className="text-2xl font-bold">Diseño Exportado de
Figma</h2>
 <p className="text-gray-600">Este componente fue diseñado en
Figma y convertido en React.</p>
 <button className="mt-4 bg-blue-500 text-white px-6 py-2
rounded-lg shadow-md hover:bg-blue-700">
 ¡Haz clic aquí!
 </button>
 <img src="/figma-exported-image.png" alt="Exportado de Figma"
className="mt-4 mx-auto w-40" />
 </div>
 );
};
export default FigmaComponent;