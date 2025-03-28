
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App