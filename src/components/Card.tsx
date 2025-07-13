import React from "react";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md ${className}`}>
      {icon && <div className="text-primary text-2xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
