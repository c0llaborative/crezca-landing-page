"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-slate-950 font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-white">Crezca</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
              Características
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
              Cómo Funciona
            </a>
            <a href="#faq" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
              Preguntas
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 bg-transparent"
            >
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600">
              Comenzar Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 hover:text-emerald-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-emerald-500/20">
            <nav className="flex flex-col gap-4 pt-4">
              <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Características
              </a>
              <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Cómo Funciona
              </a>
              <a href="#faq" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Preguntas
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  variant="outline"
                  className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 w-full bg-transparent"
                >
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 w-full">
                  Comenzar Gratis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
