import React from 'react';
import { BENEFITS } from '../constants';
import { Microscope, CheckCircle, Fingerprint, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Microscope,
  CheckCircle,
  Fingerprint
};

const Differentials: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName];
            return (
              <div key={index} className="pt-8 md:pt-0 md:px-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-white text-amber-600 mb-6 border border-amber-100 shadow-lg shadow-amber-100/50">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 serif-font text-slate-900">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;