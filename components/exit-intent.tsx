"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExitIntent() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle")

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("crezca_exit_shown")) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true)
        sessionStorage.setItem("crezca_exit_shown", "true")
        document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    // Delay adding listener to avoid triggering immediately
    const timeout = setTimeout(() => {
      document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timeout)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

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
          utm_source: params.get("utm_source") || "exit_intent",
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

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShow(false)} />

      {/* Modal */}
      <div className="relative bg-slate-900 border border-emerald-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">Antes de irte...</h3>
        <p className="text-slate-300 mb-6">
          Dejanos tu email y te avisamos cuando lancemos. Analiza 40+ empresas colombianas con IA, gratis.
        </p>

        {status === "success" || status === "duplicate" ? (
          <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <Check size={20} className="text-emerald-400" />
            <span className="text-emerald-300">
              {status === "success" ? "Te avisaremos cuando lancemos!" : "Ya estas en la lista!"}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 py-3"
            >
              {status === "loading" ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Avisame del lanzamiento
                  <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">Hubo un error. Intenta de nuevo.</p>
        )}
      </div>
    </div>
  )
}
