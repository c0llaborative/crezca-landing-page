"use client"

import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Explora empresas colombianas",
      description: "Navega por 40+ empresas de la BVC. Cada una tiene información financiera actualizada y organizada.",
    },
    {
      number: "02",
      title: "Lee el análisis con IA",
      description:
        "Nuestra IA genera un resumen que explica la situación financiera de la empresa en lenguaje claro y directo.",
    },
    {
      number: "03",
      title: "Aprende con los tooltips",
      description:
        "¿No entiendes una métrica? Haz click en el ícono de ayuda y te explicamos qué significa en términos simples.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">Cómo funciona Crezca</h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Tres pasos para empezar a entender la bolsa
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 h-full">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 text-emerald-500/30">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
