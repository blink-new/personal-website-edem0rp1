
import { motion } from 'framer-motion'
import { Calendar, Briefcase, GraduationCap } from 'lucide-react'

const timelineData = [
  {
    icon: Briefcase,
    date: "2023 - Present",
    title: "Senior Developer",
    company: "Tech Company",
    description: "Leading development of innovative web applications and mentoring junior developers.",
  },
  {
    icon: Briefcase,
    date: "2020 - 2023",
    title: "Full Stack Developer",
    company: "Digital Agency",
    description: "Built and maintained multiple client projects using modern web technologies.",
  },
  {
    icon: GraduationCap,
    date: "2016 - 2020",
    title: "Computer Science Degree",
    company: "University",
    description: "Studied software engineering and computer science fundamentals.",
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and education
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12"
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 md:w-1/2" />
                <div className="mx-4 md:mx-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1 md:w-1/2">
                  <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <div className="text-muted-foreground mb-2">{item.company}</div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}