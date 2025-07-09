
export default function Skeleton({className, ...remaining}: React.ComponentProps<"div">) {
    return (
        <div
            className = {`bg-light-hover animate-pulse-slow ${className}`}
            {...remaining}
        />
    )
}