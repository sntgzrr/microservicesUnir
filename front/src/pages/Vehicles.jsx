import { Header } from "../components/Header";
import { VehicleCard } from "../components/VehicleCard";
import { StatBox } from "../components/StatBox";
import { useVehicles } from "../context/VehiclesContext";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

export function Vehicles() {
  const { vehicles } = useVehicles();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesFilter = 
      filter === "all" ||
      (filter === "available" && vehicle.status === "available") ||
      (filter === "rented" && vehicle.status === "rented");

    const matchesSearch =
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.licensePlate.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const availableCount = vehicles.filter((v) => v.status === "available").length;
  const rentedCount = vehicles.filter((v) => v.status === "rented").length;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-8 mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Encabezado */}
          <div className="mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚗 Gestión de Flota
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3">
              Nuestros Vehículos
            </h1>
            <p className="text-xl text-gray-600">
              Explora nuestra amplia variedad de vehículos disponibles para alquiler
            </p>
          </div>

          {/* Estadísticas mejoradas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatBox
              label="Vehículos Totales"
              value={vehicles.length}
              icon="🚗"
              color="#3B82F6"
            />
            <StatBox
              label="Disponibles"
              value={availableCount}
              icon="✅"
              color="#10B981"
            />
            <StatBox
              label="Rentados"
              value={rentedCount}
              icon="🔴"
              color="#EF4444"
            />
            <StatBox
              label="Tasa Ocupación"
              value={Math.round((rentedCount / vehicles.length) * 100) + "%"}
              icon="📊"
              color="#8B5CF6"
            />
          </div>

          {/* Búsqueda y Filtros */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Búsqueda */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por marca, modelo o placa..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>

            {/* Contador de resultados */}
              <div className="flex items-center justify-end">
                <p className="text-gray-600">
                  <span className="font-bold text-blue-600">{filteredVehicles.length}</span> vehículos encontrados
                </p>
              </div>
            </div>

            {/* Botones de filtro */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-gray-600 font-semibold">
                <Filter size={18} />
                Filtrar por:
              </div>
              
                <button
                onClick={() => setFilter("all")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  filter === "all"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Todos ({vehicles.length})
              </button>

              <button
                onClick={() => setFilter("available")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  filter === "available"
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                ✅ Disponibles ({availableCount})
              </button>

              <button
                onClick={() => setFilter("rented")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  filter === "rented"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                🔴 Rentados ({rentedCount})
              </button>
            </div>
          </div>

          {/* Grid de vehículos */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredVehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No se encontraron vehículos
              </h3>
              <p className="text-gray-600 mb-6">
                Intenta con una búsqueda diferente o selecciona otro filtro
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilter("all");
                }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Info adicional */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">¿No encuentras lo que buscas?</h2>
            <p className="text-blue-100 mb-6">
              Contacta con nuestro equipo para conocer sobre vehículos especiales o personalizados
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all">
              Contactar Soporte
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
