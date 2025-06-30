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
        <div className={`min-h-screen p-3 ${className}`}>
            <div className="max-w-5xl mx-auto">{children}</div>
        </div>
    );
}
