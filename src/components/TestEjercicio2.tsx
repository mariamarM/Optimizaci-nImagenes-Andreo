import { useState } from "react";
const questions = [
  {
    question: "¿Qué hace Lazy Loading?",
    options: [
      "Carga todas las imágenes de inmediato",
      "Carga imágenes solo cuando son visibles",
      "Reduce la calidad de las imágenes",
    ],
    answer: "Carga imágenes solo cuando son visibles",
  },
  {
    question: "¿Qué API de JavaScript se usa para Lazy Loading?",
    options: ["Fetch API", "Intersection Observer", "Canvas API"],
    answer: "Intersection Observer",
  },
];
const TestEjercicio2 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(questions.length).fill(""),
  );
  const handleSelect = (index: number, option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };
  const checkAnswers = () => {
    const correct = selectedAnswers.filter(
      (ans, i) => ans === questions[i].answer,
    ).length;
    alert(`Has respondido correctamente ${correct} de
${questions.length}`);
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Test de Lazy Loading</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`mr-2 px-4 py-2 mt-2 rounded ${
                selectedAnswers[i] === opt
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => handleSelect(i, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}
      <button
        onClick={checkAnswers}
        className="bg-green-500 textwhite px-6 py-2 mt-4 rounded"
      >
        Verificar respuestas
      </button>
    </div>
  );
};
export default TestEjercicio2;
