import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import MobileMenu from './MobileMenu'

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const floatAnimation = {
  y: [0, -5, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-10 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            animate={floatAnimation}
          >
            <Link 
              to="/" 
              className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors relative"
            >
              <motion.span
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgb(79, 70, 229, 0.3)"
                }}
              >
                Sumanth Krishna
              </motion.span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors text-gray-600 hover:text-indigo-600",
                      "after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-indigo-600",
                      "after:transition-all after:duration-300 hover:after:w-full"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/documents/SumanthKrishnaFinal_Resume.pdf"
                  download
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </div>

          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 