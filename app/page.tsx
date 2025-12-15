import Header from "@/components/header"
import Hero from "@/components/hero"
import ProblemSolution from "@/components/problem-solution"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
