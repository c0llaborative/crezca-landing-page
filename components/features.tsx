"use client"

import { BarChart3, Bot, GraduationCap, Smartphone, Shield, MapPin } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "40+ empresas analizadas",
      description: "Empresas de la Bolsa de Valores de Colombia con datos actualizados",
    },
    {
      icon: Bot,
      title: "Análisis con IA",
      description: "Resúmenes generados automáticamente que explican la salud financiera de cada empresa",
    },
    {
      icon: GraduationCap,
      title: "Tooltips educativos",
      description: "Haz click en cualquier métrica para entender qué significa y por qué importa",
    },
    {
      icon: Smartphone,
      title: "Funciona en cualquier dispositivo",
      description: "Diseño responsive que funciona en celular, tablet o computador",
    },
    {
      icon: Shield,
      title: "Gratis, sin registro",
      description: "No necesitas crear cuenta ni dar información de pago para empezar",
    },
    {
      icon: MapPin,
      title: "Enfocado en Colombia",
      description: "Datos de la BVC y contexto relevante para el mercado colombiano",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          Herramientas para empezar a invertir informado
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Todo lo que necesitas para entender empresas de la bolsa colombiana
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
