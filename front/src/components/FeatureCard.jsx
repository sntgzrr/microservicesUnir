import { Sparkles } from "lucide-react"

export function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-t-4 border-blue-500 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          {title}
          <Sparkles size={18} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
