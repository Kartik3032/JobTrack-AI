function Glow({
    className = "",
}) {
    return (
        <div
            className={`absolute rounded-full bg-purple-600/10 blur-[120px] pointer-events-none ${className}`}
        />
    );
}

export default Glow;