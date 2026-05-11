import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Vehicles } from '../pages/Vehicles'
import { GestionVehiculos } from '../pages/GestionVehiculos'

export function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/vehiculos" element={ <Vehicles /> } />
            <Route path="/gestion-vehiculos" element={ <GestionVehiculos /> } />
        </Routes>
    )
}
