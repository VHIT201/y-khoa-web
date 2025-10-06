import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  borderColor: string;
  textColor: string;
  icon?: LucideIcon;
  showDot?: boolean;
  dotColor?: string;
}

export default function StatsCard({
  title,
  value,
  description,
  borderColor,
  textColor,
  icon: Icon,
  showDot = false,
  dotColor = 'bg-gray-500'
}: StatsCardProps) {
  return (
    <Card className={`group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 ${borderColor}`}>
      {/* Background overlay for hover effect */}
      <div className="absolute inset-0 bg-white transition-colors duration-300 group-hover:bg-gray-50"></div>

      {/* Content */}
      <div className="relative">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          {Icon ? (
            <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          ) : showDot ? (
            <div className={`h-4 w-4 ${dotColor} rounded-full group-hover:scale-110 transition-transform duration-300`}></div>
          ) : null}
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${textColor} group-hover:scale-105 transition-all duration-300`}>
            {value}
          </div>
          <p className="text-xs text-muted-foreground group-hover:text-gray-600 transition-colors duration-300">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
}
