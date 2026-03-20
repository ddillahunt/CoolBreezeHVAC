import './index.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { MobileCTA } from './components/MobileCTA'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'

const ServicePage = lazy(() =>
  import('./pages/ServicePage').then((m) => ({ default: m.ServicePage }))
)

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/CoolBreezeHVAC">
        <div className="min-h-screen bg-white pb-[72px] lg:pb-0">
          <ScrollToTop />
          <Navbar />
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-cool-blue border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/:slug" element={<ServicePage />} />
            </Routes>
          </Suspense>
          <Footer />
          <BackToTop />
          <MobileCTA />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
