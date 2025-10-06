import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  percentageColor: string;
  description: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  percentage,
  percentageColor,
  description,
  icon: Icon
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden cursor-pointer rounded-lg bg-white shadow-lg hover:shadow-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs text-gray-500 group-hover:text-primary/70 transition-colors duration-300">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{value}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className={`text-sm font-medium group-hover:scale-110 transition-transform duration-300 ${percentageColor}`}>{percentage}</span>
            <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{description}</span>
          </div>
        </div>
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-tr from-primary to-primary-600 shadow-md text-white group-hover:shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
          <Icon className="w-6 h-6 opacity-95 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* <div className="mt-3 relative flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      </div> */}
    </div>
  );
}
