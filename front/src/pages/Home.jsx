import { Header } from "../components/Header"
import { VehicleCard } from "../components/VehicleCard"
import { Carousel } from "../components/Carousel"
import { FeatureCard } from "../components/FeatureCard"
import { StatBox } from "../components/StatBox"
import { useVehicles } from "../context/VehiclesContext"
import { useNavigate } from "react-router-dom"
import { ArrowRight, MapPin, Users, Award } from "lucide-react"

export function Home() {
    const navigate = useNavigate()
    const { vehicles } = useVehicles()

    const availableVehicles = vehicles.filter(v => v.status === "available")
    const rentedVehicles = vehicles.filter(v => v.status === "rented")
    const featuredVehicles = vehicles.slice(0, 3)

    // Datos para el carrusel
    const carouselItems = [
        {
            title: "Viajes sin preocupaciones",
            description: "Vehículos confiables para tus aventuras",
            emoji: "🚗",
            color1: "#3B82F6",
            color2: "#1E40AF"
        },
        {
            title: "Precios competitivos",
            description: "Las mejores tarifas del mercado",
            emoji: "💰",
            color1: "#10B981",
            color2: "#047857"
        },
        {
            title: "Atención 24/7",
            description: "Siempre disponibles para ayudarte",
            emoji: "📞",
            color1: "#F59E0B",
            color2: "#D97706"
        },
        {
            title: "Flota moderna",
            description: "Vehículos nuevos y bien mantenidos",
            emoji: "✨",
            color1: "#8B5CF6",
            color2: "#6D28D9"
        }
    ]

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
                {/* Hero Section con Carrusel */}
                <section className="pt-32 pb-20 px-4 md:px-0">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-12 text-center">
                            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                ✨ Bienvenido a nuestro servicio
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                                Tu viaje comienza <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">aquí</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Alquila el vehículo perfecto y vive una experiencia inolvidable
                            </p>
                        </div>

                        {/* Carrusel */}
                        <Carousel items={carouselItems} autoPlay={true} autoPlayInterval={6000} />

                        {/* CTA Button */}
                        <div className="text-center mt-10">
                            <button
                                onClick={() => navigate("/vehiculos")}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Explorar vehículos <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Estadísticas */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <StatBox
                                label="Vehículos Totales"
                                value={vehicles.length}
                                icon="🚗"
                                color="#3B82F6"
                            />
                            <StatBox
                                label="Disponibles Ahora"
                                value={availableVehicles.length}
                                icon="✅"
                                color="#10B981"
                            />
                            <StatBox
                                label="En Alquiler"
                                value={rentedVehicles.length}
                                icon="🔴"
                                color="#EF4444"
                            />
                            <StatBox
                                label="Clientes Felices"
                                value="500+"
                                icon="😊"
                                color="#8B5CF6"
                            />
                        </div>
                    </div>
                </section>

                {/* Características */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                ¿Por qué elegirnos?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Ofrecemos la mejor experiencia en alquiler de vehículos
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeatureCard
                                icon="⚡"
                                title="Reserva Rápida"
                                description="Completa tu reserva en menos de 5 minutos con nuestro sistema intuitivo"
                            />
                            <FeatureCard
                                icon="💳"
                                title="Pagos Seguros"
                                description="Transacciones cifradas y protegidas con las últimas tecnologías"
                            />
                            <FeatureCard
                                icon="🛡️"
                                title="Garantía Completa"
                                description="Cobertura de seguros completa en todos nuestros vehículos"
                            />
                            <FeatureCard
                                icon="🌍"
                                title="Múltiples Sucursales"
                                description="Retira y devuelve en cualquiera de nuestras ubicaciones"
                            />
                            <FeatureCard
                                icon="🚀"
                                title="Servicio Express"
                                description="Entrega rápida a hotel o domicilio sin costo adicional"
                            />
                            <FeatureCard
                                icon="⭐"
                                title="Valoraciones 5★"
                                description="Miles de clientes satisfechos con nuestro servicio"
                            />
                        </div>
                    </div>
                </section>

                {/* Procesos - Sección mejorada */}
                <section className="py-20 px-4 bg-white rounded-3xl mx-4 md:mx-0">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                3 pasos sencillos
                            </h2>
                            <p className="text-lg text-gray-600">
                                Alquila tu vehículo en minutos
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Selecciona
                                </h3>
                                <p className="text-gray-600">
                                    Elige el vehículo que mejor se adapte a tus necesidades
                                </p>
                            </div>

                            <div className="relative">
                                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Reserva
                                </h3>
                                <p className="text-gray-600">
                                    Completa tus datos y confirma tu reserva con facilidad
                                </p>
                            </div>

                            <div className="relative">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    ¡Disfruta!
                                </h3>
                                <p className="text-gray-600">
                                    Recibe tu vehículo y comienza tu aventura
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vehículos Destacados */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                                    Vehículos en Destaque
                                </h2>
                                <p className="text-gray-600">
                                    Algunos de nuestros mejores vehículos disponibles
                                </p>
                            </div>
                            <button
                                onClick={() => navigate("/vehiculos")}
                                className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-lg transition-all"
                            >
                                Ver todos <ArrowRight size={18} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredVehicles.map((vehicle) => (
                                <VehicleCard key={vehicle.id} vehicle={vehicle} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonios / CTA Final */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl shadow-2xl p-12 md:p-16 text-white text-center relative overflow-hidden">
                            {/* Background effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32" />

                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-4">
                                    ¿Listo para tu próximo viaje?
                                </h2>
                                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                    Únete a miles de clientes satisfechos y comienza tu experiencia de alquiler
                                </p>
                                <button
                                    onClick={() => navigate("/vehiculos")}
                                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Explorar ahora <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center">
                                <MapPin className="text-blue-600 mb-3" size={32} />
                                <h3 className="font-bold text-gray-900 mb-2">Ubicaciones</h3>
                                <p className="text-gray-600">30+ sucursales en todo el país</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Users className="text-blue-600 mb-3" size={32} />
                                <h3 className="font-bold text-gray-900 mb-2">Soporte</h3>
                                <p className="text-gray-600">Equipo disponible 24/7</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Award className="text-blue-600 mb-3" size={32} />
                                <h3 className="font-bold text-gray-900 mb-2">Certificado</h3>
                                <p className="text-gray-600">Años de experiencia confiable</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
