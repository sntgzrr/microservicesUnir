import { useState } from "react"
import { X } from "lucide-react"

export function RentalModal({ isOpen, vehicle, onClose, onConfirm }) {
  const [customerName, setCustomerName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  if (!isOpen || !vehicle) return null

  const today = new Date()
  const formattedDate = today.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!customerName.trim()) {
      setError("Por favor ingresa tu nombre")
      return
    }

    setLoading(true)
    setTimeout(() => {
      onConfirm(customerName)
      setCustomerName("")
      setError("")
      setLoading(false)
    }, 500)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Confirmar Alquiler</h2>
              <p className="text-blue-100 text-sm mt-1">Completa los datos para rentar el vehículo</p>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-blue-700 p-1 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-gradient-to-br from-blue-50 to-transparent rounded-lg p-4 mb-6 border border-blue-100">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{vehicle.image}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {vehicle.brand} {vehicle.model}
                </h3>
                <p className="text-sm text-gray-600">{vehicle.year}</p>
                <p className="text-sm font-semibold text-blue-600 mt-1">
                  ${vehicle.pricePerDay}/día
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
            <p className="text-xs text-gray-600 font-semibold uppercase mb-1">Fecha de Alquiler</p>
            <p className="text-lg font-bold text-gray-900 capitalize">{formattedDate}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Tu Nombre
              </label>
              <input
                id="name"
                type="text"
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value)
                  setError("")
                }}
                placeholder="Ingresa tu nombre completo"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                disabled={loading}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  ⚠️ {error}
                </p>
              )}
            </div>

            <div className="flex gap-3">
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
                    Procesando...
                  </>
                ) : (
                  <>
                    🚗 Confirmar Alquiler
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            Al confirmar, aceptas nuestros términos y condiciones de alquiler
          </p>
        </div>
      </div>
    </div>
  )
}
