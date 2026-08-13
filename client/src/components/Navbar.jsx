import { motion } from "framer-motion";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">

            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

                {/* Logo */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.03 }}
                    className="text-2xl font-bold text-white"
                >
                    JobTrack <span className="text-purple-500">AI</span>
                </motion.a>

                {/* Links */}
                <div className="hidden md:flex items-center gap-10 text-gray-300">

                    <a
                        href="#home"
                        className="relative hover:text-white transition group"
                    >
                        Home
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
                    </a>

                    <a
                        href="#features"
                        className="relative hover:text-white transition group"
                    >
                        Features
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
                    </a>

                    <a
                        href="#about"
                        className="relative hover:text-white transition group"
                    >
                        About
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
                    </a>

                </div>

                {/* CTA */}
                <motion.a
                    href="#features"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(168,85,247,0.45)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="hidden md:block bg-purple-600 hover:bg-purple-500 px-5 py-2.5 rounded-xl text-white font-semibold transition"
                >
                    Get Started
                </motion.a>

            </div>
        </nav>
    );
}

export default Navbar;