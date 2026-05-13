import { X } from "lucide-react"

export function RentalModal({ isOpen, vehicle, onClose, onConfirm, isLoading }) {
  if (!isOpen || !vehicle) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Confirmar Alquiler</h2>
              <p className="text-blue-100 text-sm mt-1">El sistema procesará la renta automáticamente.</p>
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
            <p className="text-sm text-gray-600 mb-2">Confirmación</p>
            <p className="text-gray-900 font-semibold">
              No se requiere nombre ni fecha. El servidor manejará el registro automáticamente.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Procesando...
                </>
              ) : (
                <>🚗 Rentar Ahora</>
              )}
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            Se usará la fecha y el estado de la operación proporcionados por el backend.
          </p>
        </div>
      </div>
    </div>
  )
}
