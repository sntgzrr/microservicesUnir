import './App.css'
import { PageRoutes } from './routes/PageRoutes.jsx'
import { VehiclesProvider } from './context/VehiclesContext'

function App() {
  return (
    <VehiclesProvider>
      <PageRoutes />
    </VehiclesProvider>
  )
}

export default App
