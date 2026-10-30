import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from './components/Layout'
import { Analytics } from './components/Analytics'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Healthcare } from './pages/Healthcare'
import { Careers } from './pages/Careers'
import { Blog, BlogPost } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Privacy, Terms, Security, Credits } from './pages/Legal'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="healthcare" element={<Healthcare />} />
            <Route path="careers" element={<Careers />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="security" element={<Security />} />
            <Route path="credits" element={<Credits />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
