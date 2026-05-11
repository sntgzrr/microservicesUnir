import React, { createContext, useReducer, useCallback } from 'react'
import { vehiclesData as initialVehiclesData } from '../data/vehiclesData'

// eslint-disable-next-line react-refresh/only-export-components
export const VehiclesContext = createContext()

const vehiclesReducer = (state, action) => {
  switch (action.type) {
    case 'RENT_VEHICLE':
      return state.map(vehicle =>
        vehicle.id === action.payload.vehicleId
          ? {
              ...vehicle,
              status: 'rented',
              rentedBy: action.payload.customerName,
              rentalDate: action.payload.rentalDate
            }
          : vehicle
      )
    case 'RETURN_VEHICLE':
      return state.map(vehicle =>
        vehicle.id === action.payload.vehicleId
          ? {
              ...vehicle,
              status: 'available',
              rentedBy: undefined,
              rentalDate: undefined
            }
          : vehicle
      )
    case 'ADD_VEHICLE':
      { const newVehicle = {
        ...action.payload,
        id: Math.max(...state.map(v => v.id), 0) + 1,
        status: 'available'
      }
      return [...state, newVehicle] }
    case 'UPDATE_VEHICLE':
      return state.map(vehicle =>
        vehicle.id === action.payload.id
          ? { ...vehicle, ...action.payload.updates }
          : vehicle
      )
    case 'DELETE_VEHICLE':
      return state.filter(vehicle => vehicle.id !== action.payload.vehicleId)
    default:
      return state
  }
}

export function VehiclesProvider({ children }) {
  const [vehicles, dispatch] = useReducer(vehiclesReducer, initialVehiclesData)

  const rentVehicle = useCallback((vehicleId, customerName) => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]

    dispatch({
      type: 'RENT_VEHICLE',
      payload: {
        vehicleId,
        customerName,
        rentalDate: formattedDate
      }
    })
  }, [])

  const returnVehicle = useCallback((vehicleId) => {
    dispatch({
      type: 'RETURN_VEHICLE',
      payload: { vehicleId }
    })
  }, [])

  const addVehicle = useCallback((vehicleData) => {
    dispatch({
      type: 'ADD_VEHICLE',
      payload: vehicleData
    })
  }, [])

  const updateVehicle = useCallback((vehicleId, updates) => {
    dispatch({
      type: 'UPDATE_VEHICLE',
      payload: { id: vehicleId, updates }
    })
  }, [])

  const deleteVehicle = useCallback((vehicleId) => {
    dispatch({
      type: 'DELETE_VEHICLE',
      payload: { vehicleId }
    })
  }, [])

  return (
    <VehiclesContext.Provider value={{ vehicles, rentVehicle, returnVehicle, addVehicle, updateVehicle, deleteVehicle }}>
      {children}
    </VehiclesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVehicles() {
  const context = React.useContext(VehiclesContext)
  if (!context) {
    throw new Error('useVehicles debe ser usado dentro de VehiclesProvider')
  }
  return context
}
