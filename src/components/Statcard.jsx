import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

/**
 * StatCard Component
 * Displays a single metric/KPI
 * Props: 
 *   - label (string): Card title
 *   - value (string): Main metric value
 *   - change (string): Change indicator
 *   - trend (string): 'up' or 'down'
 *   - icon (React Component): Icon from lucide-react
 *   - color (string): Color key - 'blue', 'red', 'green', 'purple'
 */
const StatCard = ({ 
  label, 
  value, 
  change, 
  trend = 'up', 
  icon: Icon, 
  color = 'blue' 
}) => {
  const colorMap = {
    blue: { bg: '#DBEAFE', text: '#1E40AF', icon: '#3B82F6' },
    red: { bg: '#FEE2E2', text: '#991B1B', icon: '#EF4444' },
    green: { bg: '#DCFCE7', text: '#166534', icon: '#10B981' },
    purple: { bg: '#F3E8FF', text: '#6B21A8', icon: '#8B5CF6' }
  };

  const colors = colorMap[color];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between">
        {/* Left: Label & Value */}
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>

        {/* Right: Icon */}
        {Icon && (
          <div className="p-3 rounded-lg" style={{ backgroundColor: colors.bg }}>
            <Icon className="w-6 h-6" style={{ color: colors.icon }} />
          </div>
        )}
      </div>

      {/* Bottom: Trend */}
      <div className="flex items-center gap-2 mt-4 text-sm">
        {trend === 'up' ? (
          <TrendingUp className="w-4 h-4 text-red-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-green-500" />
        )}
        <span className={trend === 'up' ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold'}>
          {change}
        </span>
        <span className="text-gray-600">this month</span>
      </div>
    </div>
  );
};

export default StatCard;