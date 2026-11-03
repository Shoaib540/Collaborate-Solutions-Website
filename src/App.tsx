import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './i18n'
import { Layout } from './components/Layout'
import { Analytics } from './components/Analytics'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Healthcare } from './pages/Healthcare'
import { Markets } from './pages/Markets'
import { Contact } from './pages/Contact'
import { Privacy, Terms, Security, Credits } from './pages/Legal'

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Analytics />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="ehr" element={<Healthcare />} />
              <Route path="markets" element={<Markets />} />
              <Route path="healthcare" element={<Navigate to="/ehr" replace />} />
              <Route path="services" element={<Navigate to="/ehr" replace />} />
              <Route path="services/*" element={<Navigate to="/ehr" replace />} />
              <Route path="careers" element={<Navigate to="/about" replace />} />
              <Route path="blog" element={<Navigate to="/" replace />} />
              <Route path="blog/*" element={<Navigate to="/" replace />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="security" element={<Security />} />
              <Route path="credits" element={<Credits />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  )
}
