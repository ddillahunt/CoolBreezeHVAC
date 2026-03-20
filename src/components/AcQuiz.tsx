import { useState } from 'react'
import { ChevronRight, AlertTriangle, CheckCircle, Clock, Phone } from 'lucide-react'
import { FadeUp } from './AnimateIn'
import { SectionTitle } from './SectionTitle'
import { motion, AnimatePresence } from 'framer-motion'

interface Question {
  id: string
  question: string
  options: { label: string; score: number }[]
}

const questions: Question[] = [
  {
    id: 'age',
    question: 'How old is your current HVAC system?',
    options: [
      { label: 'Less than 5 years', score: 0 },
      { label: '5–10 years', score: 1 },
      { label: '10–15 years', score: 2 },
      { label: 'Over 15 years', score: 3 },
      { label: "I don't know", score: 2 },
    ],
  },
  {
    id: 'performance',
    question: 'How well is your system performing?',
    options: [
      { label: 'Runs great, no issues', score: 0 },
      { label: 'Works but not as cold/hot as before', score: 1 },
      { label: 'Some rooms are uncomfortable', score: 2 },
      { label: 'Makes strange noises or cycles a lot', score: 3 },
    ],
  },
  {
    id: 'maintenance',
    question: 'When was your last professional service?',
    options: [
      { label: 'Within the last 6 months', score: 0 },
      { label: 'Within the last year', score: 1 },
      { label: 'Over a year ago', score: 2 },
      { label: "I've never had it serviced", score: 3 },
    ],
  },
  {
    id: 'bills',
    question: 'Have your energy bills been increasing?',
    options: [
      { label: "No, they've been stable", score: 0 },
      { label: 'Slightly higher than usual', score: 1 },
      { label: 'Noticeably higher', score: 2 },
      { label: 'Significantly higher', score: 3 },
    ],
  },
]

function getResult(score: number) {
  if (score <= 3) {
    return {
      icon: CheckCircle,
      color: 'text-green-500',
      bg: 'bg-green-50',
      title: 'Your System Looks Good!',
      description: 'Your HVAC system appears to be in good shape. We recommend scheduling an annual tune-up to keep it running at peak efficiency.',
      cta: 'Schedule a Tune-Up',
    }
  }
  if (score <= 7) {
    return {
      icon: Clock,
      color: 'text-warm-amber',
      bg: 'bg-orange-50',
      title: 'Time for a Check-Up',
      description: "Your system could use some attention. A professional inspection can catch small issues before they become expensive repairs and improve your comfort.",
      cta: 'Book an Inspection',
    }
  }
  return {
    icon: AlertTriangle,
    color: 'text-red-500',
    bg: 'bg-red-50',
    title: 'Your System Needs Attention',
    description: "Based on your answers, your HVAC system may be overdue for service or approaching the end of its lifespan. Let's take a look before a breakdown happens.",
    cta: 'Get a Free Assessment',
  }
}

export function AcQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setShowResult(true)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
    setShowResult(false)
  }

  const totalScore = answers.reduce((a, b) => a + b, 0)
  const result = getResult(totalScore)
  const ResultIcon = result.icon

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Free Assessment"
          title="Is Your AC Ready for Summer?"
          subtitle="Answer 4 quick questions to find out if your system needs attention."
        />

        <FadeUp delay={0.1}>
          <div className="bg-light-gray rounded-2xl p-8 lg:p-10 border border-medium-gray">
            {!showResult && (
              <>
                {/* Progress */}
                <div className="flex items-center gap-3 mb-8">
                  {questions.map((_, i) => (
                    <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-medium-gray">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          i < step ? 'bg-navy w-full' : i === step ? 'bg-cool-blue w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  ))}
                  <span className="text-gray-400 text-sm font-medium shrink-0">
                    {step + 1}/{questions.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-xl font-bold text-navy mb-6">
                      {questions[step].question}
                    </h3>
                    <div className="space-y-3">
                      {questions[step].options.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => handleAnswer(opt.score)}
                          className="w-full text-left px-5 py-4 bg-white rounded-xl border border-medium-gray hover:border-navy hover:shadow-md transition-all flex items-center justify-between group"
                        >
                          <span className="text-navy font-medium">{opt.label}</span>
                          <ChevronRight size={16} className="text-gray-300 group-hover:text-navy transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            )}

            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${result.bg} rounded-full flex items-center justify-center mx-auto mb-5`}>
                  <ResultIcon size={32} className={result.color} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">{result.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto">
                  {result.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:7042253659"
                    className="flex items-center justify-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    <Phone size={16} />
                    {result.cta}
                  </a>
                  <button
                    onClick={reset}
                    className="text-gray-400 hover:text-navy font-medium text-sm transition-colors py-3"
                  >
                    Take quiz again
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
