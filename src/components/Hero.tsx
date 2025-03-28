
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Hi, I'm <span className="heading-gradient">Your Name</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A passionate developer crafting beautiful digital experiences. 
              Focused on building products that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full hover:bg-accent">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:your@email.com"
                className="p-2 rounded-full hover:bg-accent">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 to-pink-600/20" />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-1 bg-foreground rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}