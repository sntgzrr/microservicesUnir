import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function VehicleForm({ isOpen, onClose, onSubmit, vehicle = null }) {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: new Date().getFullYear(),
    licensePlate: "",
    pricePerDay: 0,
    mileage: 0,
    image: "🚗"
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (vehicle) {
      setFormData({
        brand: vehicle.brand,
        model: vehicle.model,
        year: vehicle.year,
        licensePlate: vehicle.licensePlate,
        pricePerDay: vehicle.pricePerDay,
        mileage: vehicle.mileage,
        image: vehicle.image
      })
    } else {
      setFormData({
        brand: "",
        model: "",
        year: new Date().getFullYear(),
        licensePlate: "",
        pricePerDay: 0,
        mileage: 0,
        image: "🚗"
      })
    }
    setError("")
  }, [vehicle, isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === "pricePerDay" || name === "mileage" || name === "year" 
        ? parseInt(value) || 0 
        : value
    }))
  }

  const handleImageChange = (emoji) => {
    setFormData(prev => ({ ...prev, image: emoji }))
  }

  const validateForm = () => {
    if (!formData.brand.trim()) {
      setError("La marca es requerida")
      return false
    }
    if (!formData.model.trim()) {
      setError("El modelo es requerido")
      return false
    }
    if (!formData.licensePlate.trim()) {
      setError("La placa es requerida")
      return false
    }
    if (formData.pricePerDay <= 0) {
      setError("El precio debe ser mayor a 0")
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    setTimeout(() => {
      onSubmit(formData)
      setLoading(false)
      onClose()
    }, 300)
  }

  if (!isOpen) return null

  const emojis = ["🚗", "🚙", "🚕", "🚌", "🚎", "🏎️"]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {vehicle ? "Editar Vehículo" : "Agregar Nuevo Vehículo"}
            </h2>
            <button
              onClick={onClose}
              className="hover:bg-blue-700 p-1 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Selecciona un ícono
              </label>
              <div className="flex gap-2">
                {emojis.map(emoji => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => handleImageChange(emoji)}
                    className={`text-3xl p-2 rounded-lg transition-all ${
                      formData.image === emoji
                        ? "bg-blue-500 scale-110"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="brand" className="block text-sm font-semibold text-gray-700 mb-1">
                  Marca
                </label>
                <input
                  id="brand"
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="Ej: Toyota"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="model" className="block text-sm font-semibold text-gray-700 mb-1">
                  Modelo
                </label>
                <input
                  id="model"
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Ej: Corolla"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="year" className="block text-sm font-semibold text-gray-700 mb-1">
                  Año
                </label>
                <input
                  id="year"
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="licensePlate" className="block text-sm font-semibold text-gray-700 mb-1">
                  Placa
                </label>
                <input
                  id="licensePlate"
                  type="text"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleChange}
                  placeholder="Ej: ABC-123"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="pricePerDay" className="block text-sm font-semibold text-gray-700 mb-1">
                  Precio/Día ($)
                </label>
                <input
                  id="pricePerDay"
                  type="number"
                  name="pricePerDay"
                  value={formData.pricePerDay}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="mileage" className="block text-sm font-semibold text-gray-700 mb-1">
                  Kilometraje (km)
                </label>
                <input
                  id="mileage"
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  disabled={loading}
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                <p className="text-red-700 text-sm">⚠️ {error}</p>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Guardando...
                  </>
                ) : (
                  <>
                    {vehicle ? "✏️ Actualizar" : "➕ Crear Vehículo"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
