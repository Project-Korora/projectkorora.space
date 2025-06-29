import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`glass-card glass-card-hover p-6 ${className}`}>
            {children}
        </div>
    );
}
