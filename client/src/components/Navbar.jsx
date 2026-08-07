function Navbar() {
    return (
        <nav className="flex items-center justify-between px-10 py-6">
            <h1 className="text-2xl font-bold text-white">
                JobTrack AI
            </h1>

            <div className="flex gap-8 text-white">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">About</a>
            </div>
        </nav>
    );
}

export default Navbar;