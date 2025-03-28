
import { BrowserRouter } from 'react-router-dom'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <main className="min-h-screen bg-background text-foreground">
          <Hero />
          <About />
          <Timeline />
          <Contact />
          <Footer />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App