import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";

const MarkdownEditor = () => {
  const [text, setText] = useState<string>(() => {
    // Cargar desde localStorage al iniciar
    const saved = localStorage.getItem("tutorialContent");
    return saved || "## Notas del ejercicio\n\nEscribe aquí tu documentación sobre los ejercicios:\n\n- **Ejercicio 1:** \n- **Ejercicio 2:** \n- **Ejercicio 3:** \n- **Ejercicio 4:** ";
  });

  // Guardar en localStorage cada vez que cambia el texto
  useEffect(() => {
    localStorage.setItem("tutorialContent", text);
  }, [text]);

  // Función para exportar a PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Dividir el texto en líneas para que quepa en el PDF
    const splitText = doc.splitTextToSize(text, 180);
    
    doc.text(splitText, 10, 10);
    doc.save("Tutorial_Notas.pdf");
  };

  // Función para subir imágenes
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setText((prev) => prev + `\n\n![Imagen subida](${reader.result})`);
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para limpiar todo
  const clearNotes = () => {
    if (window.confirm("¿Estás seguro de borrar todas las notas?")) {
      setText("## Notas del ejercicio\n\nEmpieza a escribir aquí...");
    }
  };

  return (
    <div className="mt-4">
      {/* Barra de herramientas */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="px-4 py-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={exportToPDF}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
        >
          Exportar a PDF
        </button>
        <button
          onClick={clearNotes}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
        >
        Borrar 
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Editor Markdown:
          </label>
          <textarea
            className="w-full h-96 p-4 border rounded font-mono bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe aquí en formato Markdown..."
          />
        </div>

        {/* Vista previa */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Vista Previa:
          </label>
          <div className="w-full h-96 p-4 border rounded overflow-auto bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Caracteres: {text.length} | Palabras: {text.split(/\s+/).filter(Boolean).length}
      </div>
    </div>
  );
};

export default MarkdownEditor;