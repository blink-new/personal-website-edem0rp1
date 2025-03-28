
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="flex items-center space-x-8">
            <a href="#home" className="text-lg font-semibold hover:text-primary/80">Home</a>
            <a href="#about" className="text-lg font-semibold hover:text-primary/80">About</a>
            <a href="#timeline" className="text-lg font-semibold hover:text-primary/80">Timeline</a>
            <a href="#contact" className="text-lg font-semibold hover:text-primary/80">Contact</a>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </motion.header>
  )
}