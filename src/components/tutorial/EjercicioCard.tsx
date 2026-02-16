import { Link } from "react-router-dom";
const EjercicioCard = ({ title, path }: { title: string; path: string
}) => {
 return (
 <div className="p-4 border rounded-lg shadow-md bg-gray-100">
 <h3 className="text-xl font-semibold">{title}</h3>
 <Link to={path} className="mt-2 inline-block bg-blue-500 textwhite px-4 py-2 rounded">
 Ver Ejercicio
 </Link>
 </div>
 );
};
export default EjercicioCard;