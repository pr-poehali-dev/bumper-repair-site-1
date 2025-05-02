import React from "react";
import * as LucideIcons from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons;
  size?: number;
  color?: string;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({ name, size = 24, color, className = "", fallback = "CircleAlert", ...props }: IconProps) => {
  let IconComponent = LucideIcons[name] || LucideIcons[fallback];
  
  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      {...props}
    />
  );
};

export default Icon;
