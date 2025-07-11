import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownContentProps {
    file: string;
    className?: string;
}

// Memoized components object to prevent recreation on each render
const markdownComponents: Components = {
    h1: ({ children }) => (
        <h1 className="text-4xl font-bold text-primary mb-6 leading-tight">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
            {children}
        </h3>
    ),
    p: ({ children }) => (
        <p className="text-gray-200 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => <ul className="space-y-4 mb-6">{children}</ul>,
    li: ({ children }) => (
        <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded mt-2 flex-shrink-0"></div>
            <span className="text-gray-200 leading-relaxed">{children}</span>
        </li>
    ),
    strong: ({ children }) => (
        <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="text-gray-300 italic">{children}</em>,
    hr: () => <hr className="border-gray-600 my-8" />,
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-300 my-6">
            {children}
        </blockquote>
    ),
    code: ({ children }) => (
        <code className="bg-gray-800 text-primary px-2 py-1 rounded text-sm">
            {children}
        </code>
    ),
    pre: ({ children }) => (
        <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-6">
            {children}
        </pre>
    ),
};

/**
 * A component for loading and rendering markdown files from the content directory.
 *
 * This component reads markdown files from `src/app/content/` and renders them
 * with custom styling that matches the project's design system. It includes
 * support for GitHub Flavored Markdown features.
 *
 * @param file - The filename of the markdown file to load (e.g., "about.md")
 * @param className - Additional CSS classes to apply to the container
 * @returns The rendered markdown content with custom styling
 *
 * @example
 * ```tsx
 * <MarkdownContent file="about.md" />
 * <MarkdownContent file="privacy.md" className="mt-8" />
 * ```
 */
export default async function MarkdownContent({
    file,
    className = "",
}: MarkdownContentProps) {
    let content: string;

    try {
        const contentPath = path.join(process.cwd(), "src/app/content", file);
        content = await fs.readFile(contentPath, "utf8");
    } catch (error) {
        console.error(`Failed to load markdown file "${file}":`, error);
        content = `# Content Not Found\n\nThe requested content file \`${file}\` could not be loaded.\n\nPlease check that the file exists in the \`src/app/content/\` directory.`;
    }

    return (
        <div className={`prose prose-lg max-w-none ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
