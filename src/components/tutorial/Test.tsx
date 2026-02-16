import { useState} from "react";

// Definir el tipo de las preguntas
interface Question {
  question: string;
  options: string[];
  answer: string;
  category: string;
}

const questionBank: Question[] = [
  {
    question: "¿Qué formato de imagen soporta transparencia?",
    options: ["JPEG", "PNG", "GIF", "WebP"],
    answer: "PNG",
    category: "Formatos de imagen"
  },
  {
    question: "¿Cuál es el formato más eficiente para imágenes en la web actualmente?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "AVIF",
    category: "Optimización"
  },
  {
    question: "¿Qué herramienta online permite convertir y comparar formatos de imagen?",
    options: ["Photoshop", "Squoosh", "Figma", "VSCode"],
    answer: "Squoosh",
    category: "Herramientas"
  },
  {
    question: "¿Qué técnica retrasa la carga de imágenes hasta que sean visibles?",
    options: ["Caching", "Lazy Loading", "Preloading", "Eager Loading"],
    answer: "Lazy Loading",
    category: "Lazy Loading"
  },
  {
    question: "¿Qué API de JavaScript se usa para implementar Lazy Loading?",
    options: ["Fetch API", "Intersection Observer", "Canvas API", "Web Storage"],
    answer: "Intersection Observer",
    category: "Lazy Loading"
  },
  {
    question: "¿Qué API de JavaScript permite manipular imágenes píxel por píxel?",
    options: ["WebGL", "Canvas API", "SVG API", "CSS API"],
    answer: "Canvas API",
    category: "Canvas"
  },
  {
    question: "¿Qué método se usa para obtener los datos de píxeles de un canvas?",
    options: ["getPixels()", "getImageData()", "getContext()", "getData()"],
    answer: "getImageData()",
    category: "Canvas"
  },
  {
    question: "¿Qué formato es ideal para exportar iconos desde Figma?",
    options: ["JPEG", "PNG", "SVG", "BMP"],
    answer: "SVG",
    category: "Figma"
  },
  {
    question: "¿Qué plugin de Figma permite exportar código React?",
    options: ["Tailwind CSS for Figma", "Anima for Figma", "SVG Export", "Figma to React"],
    answer: "Anima for Figma",
    category: "Figma"
  },
  {
    question: "¿Qué debes incluir siempre al usar imágenes de terceros?",
    options: ["La URL", "La licencia", "El formato", "El tamaño"],
    answer: "La licencia",
    category: "Legal"
  }
];

const Test = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

    const shuffleQuestions = () => {
    // Mezclar y tomar 5 preguntas aleatorias
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5); // Corregido: Math.random() - 0.5
    const selected = shuffled.slice(0, 5);
    setQuestions(selected);
    setSelectedAnswers(Array(selected.length).fill(""));
    setShowResults(false);
  };

//   useEffect(() => {
//     shuffleQuestions();
//   }, []);

  const handleSelect = (index: number, option: string) => {
    if (showResults) return; // No permitir cambios después de ver resultados
    
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correct = selectedAnswers.filter((ans, i) => 
      ans === questions[i]?.answer // Añadido optional chaining por seguridad
    ).length;
    setScore(correct);
    setShowResults(true);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Test de Conocimientos
        </h2>
        <button
          onClick={shuffleQuestions}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors"
        >
          Reiniciar preguntas
        </button>
      </div>

      {questions.map((q, i) => (
        <div key={i} className="mb-6 p-4 border rounded dark:border-gray-600">
          <p className="font-semibold mb-2 text-gray-900 dark:text-white">
            {i + 1}. {q.question}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Categoría: {q.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {q.options.map((opt: string) => {
              // Determinar el estilo del botón
              let buttonClass = "px-4 py-2 rounded transition-colors ";
              
              if (showResults) {
                if (opt === q.answer) {
                  buttonClass += "bg-green-500 text-white"; // Correcta
                } else if (selectedAnswers[i] === opt && opt !== q.answer) {
                  buttonClass += "bg-red-500 text-white"; // Incorrecta seleccionada
                } else {
                  buttonClass += "bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300";
                }
              } else {
                buttonClass += selectedAnswers[i] === opt 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-400";
              }
              
              return (
                <button
                  key={opt}
                  className={buttonClass}
                  onClick={() => handleSelect(i, opt)}
                  disabled={showResults}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!showResults ? (
        <button
          onClick={checkAnswers}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors"
          disabled={selectedAnswers.includes("")}
        >
          Verificar respuestas
        </button>
      ) : (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            Resultado: {score} de {questions.length} correctas (
            {Math.round((score / questions.length) * 100)}%)
          </p>
          {score === questions.length && (
            <p className="text-green-600 dark:text-green-400 mt-2">
              🎉 ¡Perfecto! Dominas todos los conceptos.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Test;