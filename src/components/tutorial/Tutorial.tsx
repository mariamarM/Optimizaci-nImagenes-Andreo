import EjercicioCard from "./EjercicioCard";
import MarkdownEditor from "./MarkdownEditor";
import Test from "./Test";

const ejercicios = [
  { id: 1, title: "Optimización de Imágenes", path: "/ejercicio1", description: "Conversión entre formatos JPEG, PNG, WebP y AVIF" },
  { id: 2, title: "Lazy Loading", path: "/ejercicio2", description: "Carga diferida de imágenes para mejorar rendimiento" },
  { id: 3, title: "Manipulación con Canvas", path: "/ejercicio3", description: "Filtros y efectos en tiempo real" },
  { id: 4, title: "Figma a React", path: "/ejercicio4", description: "Integración de diseños de Figma a componentes" },
];

const Tutorial = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Tutorial Interactivo
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
       Ejercicios documentados segun los ejercicios previos ya realizados.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {ejercicios.map((ejercicio) => (
          <EjercicioCard 
            key={ejercicio.id} 
            title={ejercicio.title} 
            path={ejercicio.path}
          />
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          📝 Documentación del Estudiante
        </h2>
        <MarkdownEditor />
      </div>

      {/* Test final */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
           Test 
        </h2>
        <Test />
      </div>
    </div>
  );
};

export default Tutorial;