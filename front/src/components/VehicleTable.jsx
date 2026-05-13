import { Edit2, Trash2, AlertCircle } from "lucide-react"

export function VehicleTable({ vehicles, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Vehículo</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Placa</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Año</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Precio/Día</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Km</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Estado</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {vehicles.map((vehicle) => (
            <tr
              key={vehicle.id}
              className="hover:bg-blue-50 transition-colors duration-200"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{vehicle.image}</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {vehicle.brand} {vehicle.model}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="font-mono text-sm font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded">
                  {vehicle.licensePlate}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-700 font-medium">{vehicle.year}</td>
              <td className="px-6 py-4">
                <span className="text-green-600 font-bold">${vehicle.pricePerDay}</span>
              </td>
              <td className="px-6 py-4 text-gray-700">{vehicle.mileage} km</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    vehicle.status === true
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {vehicle.status === true ? "✅ Disponible" : "🔴 Rentado"}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(vehicle)}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-lg transition-colors font-semibold text-sm"
                  >
                    <Edit2 size={16} />
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      if (vehicle.status === true) {
                        alert("No puedes eliminar un vehículo que está rentado")
                        return
                      }
                      if (window.confirm(`¿Eliminar ${vehicle.brand} ${vehicle.model}?`)) {
                        onDelete(vehicle.id)
                      }
                    }}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg transition-colors font-semibold text-sm disabled:opacity-50"
                    disabled={vehicle.status === true}
                  >
                    <Trash2 size={16} />
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {vehicles.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle size={48} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-600 text-lg">No hay vehículos registrados</p>
        </div>
      )}
    </div>
  )
}
