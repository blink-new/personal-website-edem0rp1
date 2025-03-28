
import { motion } from 'framer-motion'
import { Code2, Palette, Globe2, Cpu } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building beautiful user interfaces with React, TypeScript, and modern CSS",
  },
  {
    icon: Cpu,
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications with Node.js and databases",
  },
  {
    icon: Globe2,
    title: "Web Performance",
    description: "Optimizing applications for speed, accessibility, and SEO",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <section id="about" className="bg-accent/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a full-stack developer passionate about creating innovative digital solutions. 
            With expertise in modern web technologies, I focus on building scalable and user-friendly applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}