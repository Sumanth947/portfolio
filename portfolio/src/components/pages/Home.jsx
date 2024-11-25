import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="/images/profile/krish.jpg" 
                alt="Sumanth Krishna"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold mb-2"
            >
              Sumanth Krishna P
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-600"
            >
              Computer Science & Engineering Student
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <p className="mb-8 text-gray-600">
              A motivated Computer Science & Engineering student with hands-on experience in web development and current expertise in 
              Flutter application development. Actively exploring emerging technologies and seeking a software engineering internship to 
              enhance my technical skills, contribute to innovative projects, and drive value for the organization.
            </p>

            {/* Skills Section with Dropdown */}
            <motion.div 
              className="mb-8"              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button
                onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                className="w-full bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-semibold text-indigo-600">Technical Skills</span>
                <motion.div
                  animate={{ rotate: isSkillsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isSkillsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white mt-2 p-6 rounded-xl shadow-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <p className="font-medium text-gray-700">Languages:</p>
                          <p className="text-gray-600">Java, JavaScript, ES6, C, Node JS, Dart</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="font-medium text-gray-700">Interface:</p>
                          <p className="text-gray-600">HTML, CSS</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <p className="font-medium text-gray-700">Frameworks:</p>
                          <p className="text-gray-600">Bootstrap, Tailwind CSS, React, Express, Flutter</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <p className="font-medium text-gray-700">Database:</p>
                          <p className="text-gray-600">MongoDB</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="md:col-span-2"
                        >
                          <p className="font-medium text-gray-700">Tools:</p>
                          <p className="text-gray-600">Firebase, Postman, Vercel, Netlify, Mongoose, Git, Github, Visual Studio Code, WordPress</p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-300"></span>
                  <span className="relative flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>

              <motion.a
                href="/documents/SumanthKrishnaFinal_Resume.pdf"
                download
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-indigo-600 bg-white border-2 border-indigo-600 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  Download Resume
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Home 