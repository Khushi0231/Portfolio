'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Image from 'next/image';
import { DiPython, DiJsBadge, DiDatabase, DiGit } from 'react-icons/di';
import { SiCanva, SiGooglesheets } from 'react-icons/si';

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-blue-900 to-gray-900">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Khushi Solanki</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-purple-300">
            Cybersecurity Student | OSINT Enthusiast | Growth Explorer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            A cybersecurity enthusiast blending real-world digital forensics with a passion for GenAI and ethical tech. I love creating impact-driven solutions and exploring secure, scalable innovation.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="//resume.pdf"
              className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
            >
              <FileText className="inline mr-2" /> View Resume
            </a>
            <a
              href="https://linkedin.com/in/khushi-s-909482255"
              className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              <Linkedin className="inline mr-2" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-center">About Me</motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed">
            I'm a pre-final year Cybersecurity student from AITR, Indore. I’ve explored cyber investigations, digital footprint analysis, and OSINT-based tools. With experience in internships at CSI and Cisco, I’ve built research-backed, real-world applications.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed mt-4">
            From leading EDC initiatives and managing national-level events to building cross-functional hackathon projects like “OSINT Sentinel,” I thrive on collaboration and impact. My goal? Secure tech for a smarter, ethical digital world.
          </motion.p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">Skills</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <div className="group relative">
                  <DiPython size={40} className="text-purple-400" />
                  <span className="absolute hidden group-hover:block bg-gray-900 px-2 py-1 rounded text-sm -top-10">Python</span>
                </div>
                <div className="group relative">
                  <DiDatabase size={40} className="text-blue-400" />
                  <span className="absolute hidden group-hover:block bg-gray-900 px-2 py-1 rounded text-sm -top-10">SQL</span>
                </div>
                <div className="group relative">
                  <DiJsBadge size={40} className="text-yellow-400" />
                  <span className="absolute hidden group-hover:block bg-gray-900 px-2 py-1 rounded text-sm -top-10">JavaScript</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
              <ul className="list-disc list-inside">
                <li>OSINT</li>
                <li>Digital Forensics</li>
                <li>Network Security</li>
                <li>Footprint Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-4">
                <div className="group relative">
                  <DiGit size={40} className="text-orange-400" />
                  <span className="absolute hidden group-hover:block bg-gray-900 px-2 py-1 rounded text-sm -top-10">GitHub</span>
                </div>
                <div className="group relative">
                  <SiCanva size={40} className="text-blue-400" />
                  <span className="absolute hidden group-hover:block bg-gray-900 px-2 py-1 rounded text-sm -top-10">Canva</span>
                </div>
                <div className="group relative">
                  <SiGooglesheets size={40} className="text-green-400" />
                  <span className="absolute hidden group-hover:block bg-gray-900 px-2 py-1 rounded text-sm -top-10">Google Suite</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Soft Skills</h3>
            <ul className="list-disc list-inside max-w-md mx-auto">
              <li>Communication</li>
              <li>Public Speaking</li>
              <li>Report Writing</li>
              <li>Leadership</li>
              <li>Event Strategy</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">Projects</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-700 rounded-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">OSINT Sentinel+</h3>
              <p className="text-sm text-gray-300 mb-2">GL Bajaj QUBITX 2024 (Top 5 Finalist)</p>
              <p>A tool using open-source intelligence for identifying cyber threats and patterns in real time.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-700 rounded-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">Itihaas-Hub</h3>
              <p>A multilingual cultural preservation platform with AI chatbot & AR-based virtual tours.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-700 rounded-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">Digital Footprint Analyzer</h3>
              <p>Monitors online identity leaks and suspicious activity through APIs and Python logic.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Internship & Certification Section */}
      <section className="py-20 px-4 bg-gray-800">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">Internships & Certifications</motion.h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">Cyber Secured India (Sep–Nov 2024)</h3>
              <p>Hands-on apprenticeship in cybersecurity and digital forensics.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">Cisco AICTE Virtual Internship (May–July 2024)</h3>
              <p>Courses: Introduction to Cybersecurity, Cybersecurity Essentials</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">Deloitte Forage Cyber Simulation (May 2025)</h3>
              <p>Investigated web logs, detected breach activity, and built incident reports.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold">OPSWAT Certifications</h3>
              <ul className="list-disc list-inside">
                <li>Critical Infrastructure Protection</li>
                <li>File Security Associate</li>
                <li>Data Transfer Security</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">Achievements</motion.h2>
          <ul className="list-disc list-inside space-y-2">
            <motion.li variants={itemVariants}>Qualified – Techathon 1.0 | Technology Copyright filed (Top 10)</motion.li>
            <motion.li variants={itemVariants}>Presented research at AISAS 2025</motion.li>
            <motion.li variants={itemVariants}>Poster Presentation Winner – RAMSITA Conference 2024</motion.li>
            <motion.li variants={itemVariants}>Organized – Kriyeta 3.0 (National Hackathon), ICI3 Conference</motion.li>
            <motion.li variants={itemVariants}>Promotion Head – E-Summit (filled Kamalprabha Auditorium 2025)</motion.li>
            <motion.li variants={itemVariants}>Leader – EDC Core Team (2023–Present)</motion.li>
          </ul>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">Contact</motion.h2>
          <div className="flex flex-col items-center gap-4">
            <motion.a variants={itemVariants} href="mailto:khushisolanki0231@gmail.com" className="flex items-center gap-2 text-lg">
              <Mail /> khushisolanki0231@gmail.com
            </motion.a>
            <motion.a variants={itemVariants} href="https://linkedin.com/in/khushi-s-909482255" className="flex items-center gap-2 text-lg">
              <Linkedin /> LinkedIn
            </motion.a>
            <motion.a variants={itemVariants} href="https://github.com/khushi0231" className="flex items-center gap-2 text-lg">
              <Github /> GitHub
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
