"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus("loading")
    try {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Empieza a entender la bolsa hoy</h2>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Unete a inversionistas colombianos que ya estan aprendiendo con Crezca
          </p>

          {status === "success" || status === "duplicate" ? (
            <div className="flex items-center justify-center gap-2 mb-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 max-w-md mx-auto">
              <Check size={20} className="text-emerald-400" />
              <span className="text-emerald-300">
                {status === "success" ? "Te avisaremos cuando lancemos!" : "Ya estas en la lista!"}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-8 max-w-lg mx-auto">
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
                    Comenzar gratis
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mb-4">Hubo un error. Intenta de nuevo.</p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">&#10003;</span>
              <span>Sin tarjeta de credito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">&#10003;</span>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">&#10003;</span>
              <span>Siempre gratis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
