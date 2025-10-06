import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  textColor: string;
  dotColor?: string;
}

export default function StatsCard({
  title,
  value,
  description,
  textColor,
  dotColor,
}: StatsCardProps) {
  return (
    <div className="group relative overflow-hidden cursor-pointer rounded-lg bg-white shadow-lg hover:shadow-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className={`${textColor} text-xs transition-colors duration-300`}>{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900 transition-colors duration-300">{value}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-500 transition-colors duration-300">{description}</span>
          </div>
        </div>
        <div className={`h-3 w-3 rounded-full ${dotColor} mt-1`}></div>
      </div>
    </div>
  );
}