import { useState } from "react";

export function UsersCard({ fullname, age, image, donutInial }) {
  const [donut, setDonut] = useState(donutInial);
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Image principale */}
      <img src={image} alt={fullname} className="w-full h-48 object-cover" />

      {/* Section avec effet de flou en arrière-plan */}
      <div className="relative p-4 bg-white bg-opacity-40 backdrop-blur-sm">
        <h1 className="text-2xl font-semibold text-gray-800">{fullname}</h1>
        <p className="text-gray-600 mt-2">Age: {age}</p>

        <button
          onClick={() => setDonut(donut + 1)}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          {donut} 🍩
        </button>
      </div>
    </div>
  );
}
