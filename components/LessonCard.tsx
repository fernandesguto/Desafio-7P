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
      className={`relative p-6 rounded-2xl border ${isBonus ? 'border-amber-400 bg-amber-50/50' : 'border-stone-200 bg-white'} shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${isBonus ? 'bg-amber-500 text-white' : 'bg-stone-900 text-white'}`}>
          {lesson.day}
        </span>
        <div className={`p-2 rounded-lg ${isBonus ? 'bg-amber-100 text-amber-600' : 'bg-stone-100 text-stone-600'}`}>
          <Icon size={24} />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-stone-900 mb-3 serif-font leading-tight">
        {lesson.title}
      </h3>
      
      <p className="text-stone-600 text-sm leading-relaxed mb-4">
        {lesson.description}
      </p>

      <div className="pt-4 border-t border-stone-100">
        <p className="text-xs font-semibold text-amber-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          {lesson.highlight}
        </p>
      </div>
    </motion.div>
  );
};

export default LessonCard;