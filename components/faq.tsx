"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Es realmente gratis?",
      answer:
        "Sí, completamente gratis. No necesitas tarjeta de crédito ni crear cuenta. Acceso total a todas las empresas y análisis.",
    },
    {
      question: "¿Necesito experiencia invirtiendo?",
      answer: "No. Crezca está diseñado para personas que están aprendiendo. Explicamos todo en términos simples.",
    },
    {
      question: "¿De dónde vienen los datos?",
      answer:
        "De fuentes públicas como la Bolsa de Valores de Colombia (BVC) y reportes financieros oficiales de las empresas.",
    },
    {
      question: "¿El análisis IA es confiable?",
      answer:
        "El análisis es informativo y educativo, no es asesoría financiera personalizada. Siempre debes hacer tu propia investigación y considerar consultar un profesional antes de invertir.",
    },
    {
      question: "¿Cómo monetizan si es gratis?",
      answer:
        "Actualmente Crezca es gratis como herramienta educativa. En el futuro podríamos ofrecer funciones premium opcionales, pero el acceso básico siempre será gratuito.",
    },
    {
      question: "¿Funciona en celular?",
      answer: "Sí, Crezca funciona perfectamente en cualquier dispositivo: celular, tablet o computador.",
    },
    {
      question: "¿Puedo comprar acciones desde Crezca?",
      answer:
        "No. Crezca es una herramienta educativa para analizar y aprender sobre empresas. Para comprar acciones necesitas una comisionista de bolsa.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">Preguntas frecuentes</h2>
        <p className="text-center text-slate-400 mb-12">Lo que necesitas saber sobre Crezca</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-emerald-500/20 rounded-lg overflow-hidden bg-slate-800/50 hover:border-emerald-500/40 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-emerald-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-emerald-500/20 bg-slate-900/50">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
