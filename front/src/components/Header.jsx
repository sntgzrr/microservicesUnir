import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vehLogo from "../assets/vehLogo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md border-b border-blue-500/20 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img 
                onClick={() => navigate('/')} 
                src={vehLogo} 
                alt="Logo Vehículos" 
                className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-300" 
              />
              <span className="text-white font-bold text-lg hidden sm:inline bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                RentaCar
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <button 
                onClick={() => navigate('/')} 
                className="text-gray-300 hover:text-blue-400 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-500/10"
              >
                Inicio
              </button>
              <button 
                onClick={() => navigate('/vehiculos')} 
                className="text-gray-300 hover:text-blue-400 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-500/10 flex items-center space-x-1"
              >
                <span>🚗 Vehículos</span>
              </button>
              <button 
                onClick={() => navigate('/gestion-vehiculos')} 
                className="text-gray-300 hover:text-blue-400 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-500/10 flex items-center space-x-1"
              >
                <span>⚙️ Gestión</span>
              </button>
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-blue-400 p-2 hover:bg-blue-500/10 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 border-t border-blue-500/20 pt-4">
              <button
                onClick={() => {
                  navigate('/')
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all rounded-lg"
              >
                Inicio
              </button>
              <button
                onClick={() => {
                  navigate('/vehiculos')
                  setIsMenuOpen(false)
                }}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all rounded-lg"
              >
                <span>🚗 Vehículos</span>
              </button>
              <button
                onClick={() => {
                  navigate('/gestion-vehiculos')
                  setIsMenuOpen(false)
                }}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all rounded-lg"
              >
                <span>⚙️ Gestión</span>
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
