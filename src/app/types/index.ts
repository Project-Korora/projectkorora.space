import { ReactNode } from 'react';

// Team member interface
export interface TeamMember {
    lead: string;
    team: string;
    bio: string;
}

// Navigation item interface
export interface NavigationItem {
    name: string;
    href: string;
}

// Card component props
export interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'solid';
    size?: 'sm' | 'md' | 'lg';
    hover?: boolean;
}

// Page header props
export interface PageHeaderProps {
    title: string;
    description: string;
    className?: string;
}

// Page container props
export interface PageContainerProps {
    children: ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
    padding?: 'sm' | 'md' | 'lg';
    className?: string;
}

// Grid props
export interface GridProps {
    children: ReactNode;
    cols?: {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    gap?: 'sm' | 'md' | 'lg';
    className?: string;
} 