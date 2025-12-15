"use client"

import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function ProblemSolution() {
  const problems = [
    {
      title: "Demasiada complejidad",
      description: "Estados financieros llenos de términos técnicos que nadie te explica en lenguaje simple",
    },
    {
      title: "Falta de confianza",
      description: "Sin entender las métricas, es difícil tomar decisiones de inversión con seguridad",
    },
    {
      title: "Sin educación accesible",
      description: "No hay herramientas que te enseñen de forma clara y práctica sobre la bolsa",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          ¿Por qué la mayoría de colombianos no invierte en la bolsa?
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Las métricas financieras parecen complicadas, los términos técnicos confunden, y no hay quien te explique de
          forma clara.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-2">
              <AlertCircle size={28} />
              El Problema
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-300 mb-1">{problem.title}</p>
                    <p className="text-slate-400 text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
              <CheckCircle2 size={28} />
              La Solución
            </h3>
            <div className="p-6 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">Crezca te ayuda a entender</h4>
              <p className="text-slate-300">
                Análisis generados por IA que explican cada métrica financiera como si fueras principiante. Aprende
                mientras exploras empresas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
