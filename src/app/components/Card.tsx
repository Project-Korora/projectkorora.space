import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`bg-black/80 backdrop-blur-lg border border-white/10 rounded-lg transition-all duration-300 hover:border-white/20 hover:scale-[1.01] hover:shadow-lg hover:bg-black/70 p-6 ${className}`}
        >
            {children}
        </div>
    );
}
