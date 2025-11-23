import React, { useEffect, useState } from "react";
import { getPopularSeries, searchSeries } from "../api/tmdb";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSearch} className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Buscar pelis o series..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-l-lg px-4 py-2 w-80 focus:outline-none"
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
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {series.slice(0, 8).map((serie) => (
            <motion.div
              key={serie.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
              whileHover={{
                scale: 1.06,
                y: -6,
                transition: { type: "spring", stiffness: 180 },
              }}
              className="relative group overflow-hidden rounded-xl shadow-lg border-0 cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-60"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <h3 className="text-white text-lg font-semibold bg-black/60 px-4 py-2 rounded-lg">
                  {serie.name}
                </h3>
                <p className="text-yellow-400 mt-2 font-medium bg-black/60 px-4 py-2 rounded-lg">
                  ⭐ {serie.vote_average.toFixed(1)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SeriesTMDB;
