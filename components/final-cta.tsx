"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Empieza a entender la bolsa hoy</h2>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Únete a inversionistas colombianos que ya están aprendiendo con Crezca
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 px-8 py-6 text-lg">
              Comenzar gratis
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Siempre gratis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
