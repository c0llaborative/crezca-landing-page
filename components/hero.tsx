"use client"

import { useState } from "react"
import { ArrowRight, Zap, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus("loading")
    try {
      // Capture UTM params from URL
      const params = new URLSearchParams(window.location.search)
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          referral_code: params.get("ref"),
        }),
      })
      const data = await res.json()

      if (data.status === "already_registered") {
        setStatus("duplicate")
      } else if (data.status === "success") {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
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
          Aprende e invierte en la bolsa colombiana con confianza. Analisis de empresas con IA que explica cada metrica
          en terminos simples.
        </p>

        {status === "success" || status === "duplicate" ? (
          <div className="flex flex-col items-center gap-3 mb-12 max-w-md mx-auto">
            <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 w-full justify-center">
              <Check size={20} className="text-emerald-400" />
              <span className="text-emerald-300">
                {status === "success" ? "Te avisaremos cuando lancemos!" : "Ya estas en la lista!"}
              </span>
            </div>
            {status === "success" && (
              <button
                onClick={() => {
                  const refCode = email.trim().toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 8)
                  const shareUrl = `${window.location.origin}?ref=${refCode}`
                  navigator.clipboard.writeText(shareUrl)
                }}
                className="text-sm text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Comparte con un amigo y copia tu link de referido
              </button>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-12 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 px-8 py-3 text-base"
            >
              {status === "loading" ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Acceder gratis
                  <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm mb-4">Hubo un error. Intenta de nuevo.</p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>40+ empresas colombianas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Analisis con IA</span>
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
