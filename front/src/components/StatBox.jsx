import { TrendingUp } from "lucide-react"

export function StatBox({ label, value, icon, color }) {
  return (
    <div
      className={`relative rounded-xl shadow-lg p-8 text-white overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300`}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wide">{label}</p>
            <p className="text-4xl font-bold mt-2">{value}</p>
          </div>
          <div className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-white/70">
          <TrendingUp size={16} />
          <span>Actualizado hoy</span>
        </div>
      </div>
    </div>
  )
}
