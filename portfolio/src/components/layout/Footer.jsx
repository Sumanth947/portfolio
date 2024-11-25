import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sumanth947",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sumanth-krishna-7b78ba205",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:sumanths947@gmail.com",
      label: "Email"
    }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand and Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Sumanth Krishna P. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center text-sm text-gray-600"
          >
            Made with <Heart className="h-4 w-4 mx-1 text-indigo-600" /> by Sumanth Krishna P
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 