import useSmoothScroll from './hooks/useSmoothScroll.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Stats from './components/Stats.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Blog from './components/Blog.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Stats />
        <Testimonials />
        <Faq />
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
