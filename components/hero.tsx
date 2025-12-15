"use client"

import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
          <Zap size={16} className="text-emerald-400" />
          <span className="text-sm text-emerald-300">Impulsado por Inteligencia Artificial</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Crezca invirtiendo
          <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            inteligente
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Aprende e invierte en la bolsa colombiana con confianza. Análisis de empresas con IA que explica cada métrica
          en términos simples.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 px-8 py-6 text-lg">
            Empezar gratis
            <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-6 text-lg bg-transparent"
          >
            Ver demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>40+ empresas colombianas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Análisis con IA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>100% gratis</span>
          </div>
        </div>
      </div>
    </section>
  )
}
