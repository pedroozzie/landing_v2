import React, { useEffect, useState } from "react";

interface Favorito {
  id: number;
  titulo: string;
  imagen: string;
  tipo: string;
}

const Favoritas: React.FC = () => {
  const [favoritas, setFavoritas] = useState<Favorito[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavoritas = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const listId = "8570849-favoritos";

        const res = await fetch(
          `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}&language=es-ES`
        );
        const data = await res.json();

        if (data.items) {
          const mapped = data.items.map((item: any) => ({
            id: item.id,
            titulo: item.title || item.name,
            imagen: item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "https://via.placeholder.com/500x750?text=Sin+imagen",
            tipo: item.media_type === "movie" ? "Película" : "Serie",
          }));
          setFavoritas(mapped);
        }
      } catch (error) {
        console.error("Error al cargar las favoritas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoritas();
  }, []);

  if (loading) return <p className="text-center mt-8">Cargando tus favoritas...</p>;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-indigo-700">
        Mis favoritas 🎞️
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {favoritas.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden bg-gray-800 text-white shadow-lg group"
          >
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full h-80 object-cover bg-black transition-opacity duration-300 group-hover:opacity-60"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <h3 className="text-white text-lg font-semibold bg-black/60 px-4 py-2 rounded-lg">
                {item.titulo}
              </h3>
              <p className="text-sm text-gray-200">{item.tipo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritas;
