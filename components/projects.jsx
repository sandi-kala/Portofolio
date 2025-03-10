"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Junior Auditor Intern | KAP Dr.Karsam CPA",
      description:
        "I was actively involved in auditing and financial reporting processes. I was responsible for organizing and archiving audit documents to ensure proper record-keeping. I also utilized the ATLAS software to compile audit reports, contributing to a more effective auditing workflow. My role also included preparing financial reports for a manufacturing company, ensuring compliance with accounting standards. Moreover, I completed a project involving the preparation of financial statements for a foundation. This experience allowed me to develop strong skills in auditing, financial analysis, and accounting software.",
      image: "/ate1.jpg?height=300&width=600",
      tags: ["Auditing", "Accounting", "Financial Report", "ATLAS", "Microsoft Excel", "Financial Audits", "Teamwork"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Secretary Division | Bappenda Kota Cimahi",
      description:
        "I gained hands-on experience in administrative and tax-related processes. I learned to input taxpayer data accurately and reviewed tax reclamation amounts to ensure compliance and precision. Additionally, I familiarized myself with government websites used for administrative tasks, enhancing my understanding of digital tools in public sector operations. I also developed skills in data archiving and letter numbering, contributing to efficient documentation and record-keeping. Beyond technical tasks, I assisted taxpayers in meeting their needs, providing support and improving my communication and problem-solving abilities. This experience strengthened my attention to detail, organizational skills, and adaptability in a professional government setting.",
      image: "/ate2.jpg?height=300&width=600",
      tags: ["Tax", "Achives Management", "Microsoft Excel", "Goverment Software", "Business Ethics"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Art Division HMAK | Politeknik Negeri Bandung",
      description:
        "An enthusiastic Accounting student passionate about blending creativity with analytical skills. Actively involved in organizing impactful events, including the Dies Natalis celebration, post-graduation events for graduates, and art-inspired activities for association members. Skilled in managing event logistics, managing ticketing and fostering teamwork to enhance student engagement. Dedicated to balancing a love for the arts with a strong foundation in accounting principles.",
      image: "/ate3.jpg?height=300&width=600",
      tags: ["Event Planning", "Event Management", "Teamwork", "Project Coordination", "Problem Solving"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Bramastha | LKMM-TD 2022",
      description:
        "Bramastha is a work program under the LKMM-TD initiative. The term 'BRAMASTHA' originates from Sanskrit, meaning 'knowledge'. Bramastha is a teaching-focused program that emphasizes the importance of preparing oneself effectively for learning, aiming to maximize the strengths of education in Indonesia through the use of technology as a delivery method. The primary target of this program is the students of Pondok Pesantren Integritas Qur’ani. This work program was established due to the lack of understanding and preparation among students regarding their future education. Therefore, it is hoped that through the implementation of Bramastha, the students of Pondok Pesantren Integritas Qur’ani will be better equipped to pursue higher levels of education.",
      image: "/ate4.jpg?height=300&width=600",
      tags: ["Event Planning", "Event Management", "Teamwork", "Organizational Leadership", "Financial Reporting", "Treasurer"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            I have gained experience that has better prepared me for the world of work.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
          </a>
        </motion.div>
      </div>
    </section>
  )
}

