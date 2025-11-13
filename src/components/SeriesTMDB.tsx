
import React, { useEffect, useState } from "react";
import { getPopularSeries, searchSeries } from "../api/tmdb";

interface Serie {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
}

const SeriesTMDB: React.FC = () => {
  const [series, setSeries] = useState<Serie[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPopular = async () => {
    setLoading(true);
    const data = await getPopularSeries();
    setSeries(data);
    setLoading(false);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return fetchPopular();
    setLoading(true);
    const data = await searchSeries(query);
    setSeries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Buscar pelis o series..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-1-1g px-4 py-2 w-80 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700"
        >
          Buscar
        </button>
      </form>

      {loading ? (
        <p className="text-gray-500">Cargando...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {series.slice(0, 8).map((serie) => (
  <div
    key={serie.id}
    className="relative group overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 border-0 outline-none ring-0"
  >
    <img
      src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
      alt={serie.name}
      className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-60"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-black/30">
      <h3 className="text-white text-lg font-semibold bg-black/60 px-4 py-2 rounded-lg">
        {serie.name}
      </h3>
      <p className="text-yellow-400 mt-2 font-medium  bg-black/60 px-4 py-2 rounded-lg">
        ⭐ {serie.vote_average.toFixed(1)}
      </p>
    </div>
  </div>
))}
        </div>
      )}
    </div>
  );
};

export default SeriesTMDB;
