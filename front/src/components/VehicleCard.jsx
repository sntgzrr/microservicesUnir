import { useState } from "react"
import { Gauge } from "lucide-react"
import { RentalModal } from "./RentalModal"

export function VehicleCard({ vehicle }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [ isAvailable, setIsAvailable ] = useState(vehicle.status)
  const statusBadgeColor = isAvailable ? "bg-green-500" : "bg-red-500"
  const statusText = isAvailable ? "Disponible" : "Rentado"

  return (
    <>
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Top color bar */}
        <div
          className={`h-1 w-full ${
            isAvailable ? "bg-gradient-to-r from-green-400 to-green-600" : "bg-gradient-to-r from-red-400 to-red-600"
          }`}
        />

        <div className="p-6 relative z-10">
          {/* Header con icon y estado */}
          <div className="flex justify-between items-start mb-4">
            <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
              {vehicle.image}
            </div>
            <div className={`${statusBadgeColor} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md`}>
              {statusText}
            </div>
          </div>

          {/* Nombre del vehículo */}
          <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {vehicle.brand} <span className="text-gray-500">{vehicle.model}</span>
          </h3>

          {/* Año */}
          <p className="text-sm text-gray-500 mb-4">
            Año: <span className="font-semibold text-gray-700">{vehicle.year}</span>
          </p>

          {/* Divisor */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />

          {/* Grid de información */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Placa */}
            <div className="bg-gradient-to-br from-blue-50 to-transparent p-3 rounded-lg">
              <p className="text-xs text-gray-600 font-semibold mb-1">PLACA</p>
              <p className="font-bold text-gray-900">{vehicle.licensePlate}</p>
            </div>

            {/* Precio por día */}
            <div className="bg-gradient-to-br from-green-50 to-transparent p-3 rounded-lg">
              <p className="text-xs text-gray-600 font-semibold mb-1">PRECIO/DÍA</p>
              <p className="font-bold text-green-600">${vehicle.pricePerDay}</p>
            </div>

            {/* Kilometraje */}
            <div className="col-span-2 bg-gradient-to-br from-gray-50 to-transparent p-3 rounded-lg flex items-center gap-2">
              <Gauge size={16} className="text-gray-500" />
              <div>
                <p className="text-xs text-gray-600 font-semibold">KILOMETRAJE</p>
                <p className="font-bold text-gray-900">{vehicle.mileage} km</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            {isAvailable ? (
              <button
                onClick={() => setIsAvailable(false)}
                className="flex-1 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                🚗 Rentar Ahora
              </button>
            ) : (
              <button
                onClick={() => setIsAvailable(true)}
                className="flex-1 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                ↩️ Devolver
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal de alquiler */}
      <RentalModal
        isOpen={isModalOpen}
        vehicle={vehicle}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

