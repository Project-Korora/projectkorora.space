import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

export default function PageContainer({
    children,
    className = "",
}: PageContainerProps) {
    return (
        <div className={`min-h-screen p-6 ${className}`}>
            <div className="max-w-7xl mx-auto">{children}</div>
        </div>
    );
}
