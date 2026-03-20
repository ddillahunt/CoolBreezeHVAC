import { useState } from 'react'
import { Calculator, DollarSign, TrendingDown, Leaf } from 'lucide-react'
import { FadeUp } from './AnimateIn'
import { motion } from 'framer-motion'

export function SavingsCalculator() {
  const [systemAge, setSystemAge] = useState(10)
  const [sqft, setSqft] = useState(2000)
  const [monthlyBill, setMonthlyBill] = useState(200)
  const [showResults, setShowResults] = useState(false)

  // Estimated savings logic
  const efficiencyLoss = Math.min(systemAge * 2, 35) // up to 35% loss
  const annualSpend = monthlyBill * 12
  const estimatedWaste = Math.round(annualSpend * (efficiencyLoss / 100))
  const maintenanceSavings = Math.round(annualSpend * 0.15)
  const upgradeSavings = Math.round(annualSpend * (efficiencyLoss / 100) * 0.7)
  const sqftFactor = sqft > 2500 ? 1.15 : sqft > 1500 ? 1.0 : 0.85
  const adjustedUpgrade = Math.round(upgradeSavings * sqftFactor)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cool-blue rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-warm-amber rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
              Savings Calculator
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
              How Much Could You Save?
            </h2>
            <p className="text-white/50 text-lg">
              See how much a tune-up or upgrade could save you each year.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleCalculate}>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    System Age (years)
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={25}
                    value={systemAge}
                    onChange={(e) => { setSystemAge(Number(e.target.value)); setShowResults(false) }}
                    className="w-full accent-cool-blue"
                  />
                  <div className="text-cool-blue font-bold text-2xl mt-1">{systemAge} yrs</div>
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Home Size (sq ft)
                  </label>
                  <input
                    type="range"
                    min={800}
                    max={5000}
                    step={100}
                    value={sqft}
                    onChange={(e) => { setSqft(Number(e.target.value)); setShowResults(false) }}
                    className="w-full accent-cool-blue"
                  />
                  <div className="text-cool-blue font-bold text-2xl mt-1">{sqft.toLocaleString()} ft²</div>
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Monthly Energy Bill
                  </label>
                  <input
                    type="range"
                    min={50}
                    max={500}
                    step={10}
                    value={monthlyBill}
                    onChange={(e) => { setMonthlyBill(Number(e.target.value)); setShowResults(false) }}
                    className="w-full accent-cool-blue"
                  />
                  <div className="text-cool-blue font-bold text-2xl mt-1">${monthlyBill}/mo</div>
                </div>
              </div>

              {!showResults && (
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-8 py-4 rounded-xl transition-colors mx-auto"
                >
                  <Calculator size={18} />
                  Calculate My Savings
                </button>
              )}
            </form>

            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="border-t border-white/10 pt-8 mt-2">
                  <div className="grid sm:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                      <TrendingDown size={24} className="text-red-400 mx-auto mb-2" />
                      <div className="text-red-400 font-extrabold text-2xl">
                        ~${estimatedWaste.toLocaleString()}
                      </div>
                      <div className="text-white/40 text-sm mt-1">Wasted per year</div>
                      <div className="text-white/20 text-xs mt-1">
                        ({efficiencyLoss}% efficiency loss)
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 text-center border border-cool-blue/30">
                      <DollarSign size={24} className="text-cool-blue mx-auto mb-2" />
                      <div className="text-cool-blue font-extrabold text-2xl">
                        ~${maintenanceSavings.toLocaleString()}
                      </div>
                      <div className="text-white/40 text-sm mt-1">Savings with tune-up</div>
                      <div className="text-white/20 text-xs mt-1">Annual maintenance plan</div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 text-center border border-green-500/30">
                      <Leaf size={24} className="text-green-400 mx-auto mb-2" />
                      <div className="text-green-400 font-extrabold text-2xl">
                        ~${adjustedUpgrade.toLocaleString()}
                      </div>
                      <div className="text-white/40 text-sm mt-1">Savings with upgrade</div>
                      <div className="text-white/20 text-xs mt-1">High-efficiency system</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:7042253659"
                      className="flex items-center justify-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-8 py-4 rounded-xl transition-colors"
                    >
                      Get a Free Estimate
                    </a>
                    <a
                      href="#contact"
                      className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors border border-white/20"
                    >
                      Schedule a Tune-Up
                    </a>
                  </div>

                  <p className="text-center text-white/20 text-xs mt-6">
                    *Estimates based on DOE data for HVAC efficiency loss over time. Actual savings may vary.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
