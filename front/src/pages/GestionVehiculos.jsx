import { useState } from "react"
import { Header } from "../components/Header"
import { VehicleForm } from "../components/VehicleForm"
import { VehicleTable } from "../components/VehicleTable"
import { useVehicles } from "../context/VehiclesContext"
import { Plus, Filter } from "lucide-react"

export function GestionVehiculos() {
  const { vehicles, addVehicle, updateVehicle, deleteVehicle } = useVehicles()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState(null)
  const [filter, setFilter] = useState("all")
  const [successMessage, setSuccessMessage] = useState("")

  const filteredVehicles = vehicles.filter(vehicle => {
    if (filter === "available") return vehicle.status === "available"
    if (filter === "rented") return vehicle.status === "rented"
    return true
  })

  const handleAddClick = () => {
    setEditingVehicle(null)
    setIsFormOpen(true)
  }

  const handleEditClick = (vehicle) => {
    setEditingVehicle(vehicle)
    setIsFormOpen(true)
  }

  const handleFormSubmit = (formData) => {
    if (editingVehicle) {
      updateVehicle(editingVehicle.id, formData)
      showSuccess("Vehículo actualizado correctamente")
    } else {
      addVehicle(formData)
      showSuccess("Vehículo agregado correctamente")
    }
  }

  const handleDeleteVehicle = (vehicleId) => {
    deleteVehicle(vehicleId)
    showSuccess("Vehículo eliminado correctamente")
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingVehicle(null)
  }

  const showSuccess = (message) => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  const availableCount = vehicles.filter(v => v.status === "available").length
  const rentedCount = vehicles.filter(v => v.status === "rented").length

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-8 mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Encabezado */}
          <div className="mb-8">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚙️ Administración
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Gestión de Vehículos
            </h1>
            <p className="text-xl text-gray-600">
              Crea, edita y elimina vehículos de tu flota
            </p>
          </div>

          {/* Mensaje de éxito */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg flex items-center gap-2">
              <span>✅</span>
              <span>{successMessage}</span>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <p className="text-gray-600 text-sm font-semibold mb-2">Total Vehículos</p>
              <p className="text-4xl font-bold text-blue-600">{vehicles.length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <p className="text-gray-600 text-sm font-semibold mb-2">Disponibles</p>
              <p className="text-4xl font-bold text-green-600">{availableCount}</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <p className="text-gray-600 text-sm font-semibold mb-2">En Alquiler</p>
              <p className="text-4xl font-bold text-red-600">{rentedCount}</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <button
              onClick={handleAddClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              <Plus size={20} />
              Agregar Vehículo
            </button>

            {/* Filtros */}
            <div className="flex gap-2">
              <div className="flex items-center gap-2 text-gray-600 font-semibold">
                <Filter size={18} />
                <span>Filtrar:</span>
              </div>
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  filter === "all"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-500"
                }`}
              >
                Todos ({vehicles.length})
              </button>
              <button
                onClick={() => setFilter("available")}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  filter === "available"
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-white text-gray-800 border-2 border-gray-200 hover:border-green-500"
                }`}
              >
                Disponibles ({availableCount})
              </button>
              <button
                onClick={() => setFilter("rented")}
                className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                  filter === "rented"
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white text-gray-800 border-2 border-gray-200 hover:border-red-500"
                }`}
              >
                Rentados ({rentedCount})
              </button>
            </div>
          </div>

          {/* Tabla de vehículos */}
          <VehicleTable
            vehicles={filteredVehicles}
            onEdit={handleEditClick}
            onDelete={handleDeleteVehicle}
          />

          {/* Info adicional */}
          <div className="mt-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">💡 Consejos de Gestión</h3>
            <ul className="space-y-2 text-purple-100">
              <li>✓ No puedes eliminar un vehículo que está en alquiler</li>
              <li>✓ Todos los vehículos nuevos comienzan como disponibles</li>
              <li>✓ Puedes editar los datos incluso si el vehículo está rentado</li>
              <li>✓ El kilometraje se actualiza manualmente</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <VehicleForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        vehicle={editingVehicle}
      />
    </>
  )
}
