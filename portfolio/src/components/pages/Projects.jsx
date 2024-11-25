import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Flytsocial: Redefining Social Connections",
    description: "A feature-rich social media application showcasing expertise in App-development with instant notifications for constant engagement.",
    tech: ["Flutter", "Dart", "Provider"],
    type: "Team Project",
    duration: "May 2024 - July 2024",
    image: "/images/projects/soc.jpeg",
    github: "#",
    live: "#"
  },
  {
    title: "Real Estate Website",
    description: "Created a responsive real estate website with ReactJS, utilizing React hooks and modern CSS. Added dynamic sliders using Swiper.js for enhanced functionality.",
    tech: ["React.js", "Tailwind CSS", "Swiper.js"],
    type: "Solo Project",
    duration: "September 2023",
    image: "/images/projects/est.png",
    github: "https://github.com/Sumanth947/real-estate-website",
    live: "https://realestskp.netlify.app/"
  },
  {
    title: "E-commerce Website",
    description: "Developed a fully responsive e-commerce platform with admin and client functionalities. Contributed to both frontend and backend development using MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux"],
    type: "Internship Project",
    duration: "November 2023 - December 2023",
    image: "/images/projects/buybox.png",
    github: "https://github.com/Sumanth947/mern-ecommerce-internship",
    live: "https://buy-box.netlify.app/auth"
  }
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative group">
        <div className="aspect-video bg-gray-200 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full text-gray-900 hover:text-indigo-600"
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full text-gray-900 hover:text-indigo-600"
          >
            <ExternalLink className="h-6 w-6" />
          </motion.a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="text-sm text-indigo-600 font-medium">{project.type}</span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 italic">{project.duration}</p>
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 