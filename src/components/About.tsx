import React from 'react';
import { motion } from 'motion/react';
import { 
  User, GraduationCap, Target, Sparkles, 
  MapPin, Calendar, BookOpen, Award, CheckCircle2 
} from 'lucide-react';

export default function About() {
  const softSkills = ["Problem Solving", "Team Collaboration", "Quick Learner", "Communication"];

  const education = [
    {
      institution: "CMR Engineering College",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2024 — 2027",
      result: "CGPA: 8.98",
      location: "Hyderabad",
      icon: <GraduationCap className="text-cyan-600 dark:text-cyan-400" size={20} />
    },
    {
      institution: "Government Polytechnic Korutla",
      degree: "Diploma in Civil Engineering",
      duration: "2021 — 2024",
      result: "CGPA: 9.77 / 10",
      location: "Korutla",
      icon: <Award className="text-indigo-600 dark:text-indigo-400" size={20} />
    },
    {
      institution: "Telangana State Model School & Junior College",
      degree: "SSC",
      duration: "2020 — 2021",
      result: "GPA: 10",
      location: "Telangana",
      icon: <BookOpen className="text-teal-600 dark:text-teal-400" size={20} />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950/20 transition-colors duration-300 relative" id="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Me</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider">
            Discover my professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Summary & Objective */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-900 bg-white dark:bg-zinc-900/10 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/10">
                  <User size={20} />
                </div>
                <h3 className="font-display font-extrabold text-xl text-zinc-900 dark:text-zinc-50">Professional Summary</h3>
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                I am a passionate <span className="text-zinc-900 dark:text-zinc-100 font-bold italic text-cyan-600 dark:text-cyan-400">Bandla Harika</span>, a Computer Science Engineering student with strong problem-solving skills and a deep interest in Full Stack Development, Java Programming, Artificial Intelligence, Machine Learning, and Cloud Computing.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
                I enjoy building scalable web applications and continuously improving my technical knowledge through projects, certifications, and coding practice.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-900 bg-white dark:bg-zinc-900/10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10">
                  <Target size={20} />
                </div>
                <h3 className="font-display font-extrabold text-xl text-zinc-900 dark:text-zinc-50">Career Objective</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm italic">
                "To obtain a software development role where I can apply my programming skills, contribute to innovative projects, learn modern technologies, and grow as a software engineer while creating impactful solutions."
              </p>
            </motion.div>

            {/* Soft Skills Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-900/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-amber-500" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">Soft Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="flex items-center gap-2 font-display font-extrabold text-xl text-zinc-900 dark:text-zinc-50 ml-2">
              <GraduationCap className="text-cyan-600" />
              Education History
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-5 md:p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-900 bg-white dark:bg-zinc-900/40 hover:border-cyan-500/30 transition-all relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="p-3 h-fit rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 shadow-sm">
                        {edu.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display font-extrabold text-base sm:text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {edu.institution}
                        </h4>
                        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                          {edu.degree}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                            <Calendar size={12} />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                            <MapPin size={12} />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/10 font-mono text-xs font-bold self-start sm:self-center">
                      <CheckCircle2 size={12} />
                      {edu.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Badge */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg leading-tight">Currently Pursuing B.Tech</h4>
                  <p className="text-white/80 text-sm font-mono mt-0.5">CMR Engineering College, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}