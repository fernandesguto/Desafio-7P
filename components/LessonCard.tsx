import React from 'react';
import { motion } from 'framer-motion';
import { Brain, HeartHandshake, Sparkles, Radio, Gavel, Sprout, Zap, Infinity, Users, LucideIcon } from 'lucide-react';
import { Lesson } from '../types';

// Map string names to components
const iconMap: Record<string, LucideIcon> = {
  Brain,
  HeartHandshake,
  Sparkles,
  Radio,
  Gavel,
  Sprout,
  Zap,
  Infinity,
  Users
};

interface LessonCardProps {
  lesson: Lesson;
  index: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, index }) => {
  const Icon = iconMap[lesson.iconName] || Sparkles;
  
  let borderClass = 'border-slate-100 bg-white';
  let badgeClass = 'bg-slate-100 text-slate-600';
  let iconBgClass = 'bg-slate-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300';
  let highlightColor = 'text-slate-700';
  let dotColor = 'bg-green-500';

  if (lesson.day === "Bônus") {
    borderClass = 'border-amber-300 bg-gradient-to-br from-amber-50 to-white';
    badgeClass = 'bg-amber-500 text-white';
    iconBgClass = 'bg-amber-100 text-amber-600';
    highlightColor = 'text-amber-600';
    dotColor = 'bg-amber-500';
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative p-6 rounded-2xl border ${borderClass} hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-slate-100`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${badgeClass}`}>
          {lesson.day}
        </span>
        <div className={`p-2 rounded-lg shadow-sm ${iconBgClass}`}>
          <Icon size={24} />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 serif-font leading-tight">
        {lesson.title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed mb-4">
        {lesson.description}
      </p>

      <div className="pt-4 border-t border-slate-100">
        <p className={`text-xs font-semibold flex items-center gap-2 ${highlightColor}`}>
          <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
          {lesson.highlight}
        </p>
      </div>
    </motion.div>
  );
};

export default LessonCard;