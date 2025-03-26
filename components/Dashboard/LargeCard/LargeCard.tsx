import React from "react";

interface LargeCardProps {
  icon: React.ReactNode;
  period: string;
  sales: number;
  classname: string;
}

const LargeCard: React.FC<LargeCardProps> = ({ icon, period, sales, classname }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg ${classname} text-white transition-all hover:scale-[1.02] hover:shadow-xl flex flex-col items-center justify-center text-center`}
    >
      {/* Icon with background circle */}
      <div className="rounded-full bg-white/40 flex items-center justify-center w-16 h-16 mb-4">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-sm font-medium mb-1">{period}</h3>
      <p className="text-2xl font-bold"> रू{sales.toLocaleString()}</p>
    </div>
  );
};

export default LargeCard;
