"use client"

import { useRef, useEffect, useState } from "react"
import { 
  FaFileExcel, 
  FaFileWord, 
  FaFilePowerpoint, 
  FaDatabase,
  FaCalculator,
  FaAdobe
} from "react-icons/fa"
import { 
  SiCanva, 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobeaftereffects 
} from "react-icons/si"
import { TbReportMoney } from "react-icons/tb"
import { MdAccountBalance } from "react-icons/md"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skills = [
    { name: "Microsoft Excel", icon: <FaFileExcel className="text-[#217346]" size={36} /> },
    { name: "Microsoft Word", icon: <FaFileWord className="text-[#2B579A]" size={36} /> },
    { name: "Microsoft PowerPoint", icon: <FaFilePowerpoint className="text-[#D24726]" size={36} /> },
    { name: "Microsoft Access", icon: <FaDatabase className="text-[#A4373A]" size={36} /> },
  ]

  const accountingSoftware = [
    { name: "MYOB", icon: <MdAccountBalance className="text-[#E11C2A]" size={24} /> },
    { name: "Atlas Audit", icon: <TbReportMoney className="text-[#3366CC]" size={24} /> },
    { name: "Accurate", icon: <FaCalculator className="text-[#FFA500]" size={24} /> },
  ]

  const editingSoftware = [
    { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" size={24} /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" size={24} /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" size={24} /> },
    { name: "After Effects", icon: <SiAdobeaftereffects className="text-[#9999FF]" size={24} /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I have some skills that i develop in
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Microsoft Office Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">Microsoft</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="font-medium text-center">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Accounting Software */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center">Accounting Software</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
              {accountingSoftware.map((software) => (
                <div
                  key={software.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">{software.icon}</div>
                  <h4 className="font-medium text-center">{software.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Editing Software */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center">Editing Software</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {editingSoftware.map((software) => (
                <div
                  key={software.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">{software.icon}</div>
                  <h4 className="font-medium text-center">{software.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}