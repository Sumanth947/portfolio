"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, ChevronRight } from 'lucide-react'

const experiences = [
  {
    type: 'education',
    title: 'Bachelor of Engineering in Computer Science',
    institution: 'Mangalore Institute of Technology & Engineering',
    duration: '2021 - Present',
    details: [
      'CGPA: 7.8'
    ]
  },
  {
    type: 'education',
    title: 'Senior Secondary (12th)',
    institution: 'Indraprastha PU College',
    duration: '2019 - 2021',
    details: [
      'Percentage: 76%',
      'Physics, Chemistry, Mathematics and Computer Science'
    ]
  },
  {
    type: 'internship',
    title: 'E-commerce Website Development',
    institution: 'Saara IT Soln',
    duration: 'October 2023 - November 2023',
    details: [
      'Developed a fully responsive e-commerce website with admin and client functionalities',
      'Contributed to both frontend and backend development using MERN stack',
      'Integrated Cloudinary for image management'
    ]
  },
  {
    type: 'internship',
    title: 'Space Encyclopedia Website',
    institution: 'Mangalore Institute of Technology & Engineering',
    duration: 'October 2022 - November 2022',
    details: [
      'Built a responsive space news website using WordPress',
      'Collaborated in team environment',
      'Created content about space phenomena and latest updates',
      'Implemented responsive design principles'
    ]
  }
]

const ExperienceCard = ({ experience, index, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: type === 'education' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div 
        className="absolute top-0 left-0 w-2 h-full bg-indigo-600 rounded-l-xl"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      />
      <div className="ml-2">
        <div className="flex items-center mb-4">
          {experience.type === 'education' ? (
            <div className="p-2 bg-indigo-100 rounded-lg">
              <GraduationCap className="text-indigo-600" size={24} />
            </div>
          ) : (
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Briefcase className="text-indigo-600" size={24} />
            </div>
          )}
          <div className="ml-4">
            <motion.h3 
              className="text-xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.2 }}
            >
              {experience.title}
            </motion.h3>
            <motion.p 
              className="text-indigo-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {experience.institution}
            </motion.p>
          </div>
        </div>
        <motion.p 
          className="text-sm text-gray-500 mb-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.4 }}
        >
          {experience.duration}
        </motion.p>
        <motion.ul 
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
        >
          {experience.details.map((detail, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.6 + (idx * 0.1) }}
            >
              <ChevronRight className="text-indigo-600 mr-2 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700">{detail}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  )
}

function About() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          About Me
        </motion.h1>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-32 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-8 flex items-center border-b-2 border-indigo-100 pb-4">
            <GraduationCap className="mr-3 h-8 w-8" />
            Education
          </h2>
          <div className="border-l-4 border-indigo-200 pl-8">
            {experiences
              .filter(exp => exp.type === 'education')
              .map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} type="education" />
              ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-indigo-600 mb-8 flex items-center border-b-2 border-indigo-100 pb-4">
            <Briefcase className="mr-3 h-8 w-8" />
            Experience
          </h2>
          <div className="border-l-4 border-indigo-300 pl-8">
            {experiences
              .filter(exp => exp.type === 'internship')
              .map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} type="internship" />
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 