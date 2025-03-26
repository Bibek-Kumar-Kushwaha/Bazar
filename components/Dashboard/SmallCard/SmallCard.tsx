import React from "react";

interface SmallCardProps {
    icon: React.ReactNode;
    period: string;
    number: number;
    classname: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ icon, period, number, classname }) => {
    return (
        <div
            className={`p-4 rounded-xl shadow-lg ${classname} text-white transition-all hover:scale-[1.02] hover:shadow-xl flex items-center gap-4`}
        >
            {/* Icon (Left Side) */}
            <div className="rounded-full bg-white/40 flex items-center justify-center w-14 h-14">
                {icon}
            </div>

            {/* Text Content (Right Side) */}
            <div className="flex flex-col">
                <h3 className="text-sm font-medium">{period}</h3>
                <p className="text-sm font-bold">{number}</p>
            </div>
        </div>
    );
};

export default SmallCard;
