import React from 'react';

const technicalSkills = [
  { name: "Python", level: 95 },
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "MySQL", level: 85 },
  { name: "Django", level: 80 },
  { name: "React", level: 75 },
  { name: "PHP", level: 85 }
];

const certifications = [
  { id: 1, name: "Python for Data Science", provider: "NPTEL", year: "2021" },
  { id: 2, name: "Advanced Database Management Systems", provider: "NPTEL", year: "2020" },
  { id: 3, name: "Web Application Development Workshop", provider: "ICT Academy", year: "2019" },
  { id: 4, name: "Machine Learning Fundamentals", provider: "Coursera", year: "2020" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical expertise and professional certifications that qualify me for various projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-700">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-700">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <div className="text-lg font-medium text-gray-800">{cert.name}</div>
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">{cert.provider}</span>
                    <span>{cert.year}</span>
                  </div>
