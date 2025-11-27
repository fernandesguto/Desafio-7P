import React from 'react';
import { motion } from 'framer-motion';
import { Brain, HeartHandshake, Sparkles, Radio, Gavel, Sprout, Zap, Infinity, LucideIcon } from 'lucide-react';
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
  Infinity
};

interface LessonCardProps {
  lesson: Lesson;
  index: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, index }) => {
  const Icon = iconMap[lesson.iconName] || Sparkles;
  const isBonus = lesson.day === "Bônus";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative p-6 rounded-2xl border ${
        isBonus 
          ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-white' 
          : 'border-slate-100 bg-white'
      } hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-slate-100`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${
          isBonus 
            ? 'bg-amber-500 text-white' 
            : 'bg-slate-100 text-slate-600'
        }`}>
          {lesson.day}
        </span>
        <div className={`p-2 rounded-lg shadow-sm ${
          isBonus 
            ? 'bg-amber-100 text-amber-600' 
            : 'bg-slate-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300'
        }`}>
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
        <p className={`text-xs font-semibold flex items-center gap-2 ${
          isBonus ? 'text-amber-600' : 'text-slate-700'
        }`}>
          <span className={`w-2 h-2 rounded-full ${isBonus ? 'bg-amber-500' : 'bg-green-500'}`}></span>
          {lesson.highlight}
        </p>
      </div>
    </motion.div>
  );
};

export default LessonCard;