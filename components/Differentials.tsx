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
    <section className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName];
            return (
              <div key={index} className="pt-8 md:pt-0 md:px-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-800 text-amber-500 mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 serif-font">{benefit.title}</h3>
                <p className="text-stone-400 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;