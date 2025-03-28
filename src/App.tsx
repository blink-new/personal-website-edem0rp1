
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Timeline } from './components/Timeline'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
      </main>
    </div>
  )
}

export default App