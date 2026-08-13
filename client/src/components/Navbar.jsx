import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Sparkles size={21} className="text-white" />
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight">
                        JobTrack{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                            AI
                        </span>
                    </h1>
                </motion.a>

                {/* Links */}
                <div className="hidden md:flex items-center gap-10 text-gray-400">

                    <a
                        href="#home"
                        className="hover:text-white transition"
                    >
                        Home
                    </a>

                    <a
                        href="#features"
                        className="hover:text-white transition"
                    >
                        Features
                    </a>

                    <a
                        href="#about"
                        className="hover:text-white transition"
                    >
                        About
                    </a>

                </div>

                {/* CTA */}
                <motion.a
                    href="#features"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-purple-500/25"
                >
                    Get Started
                    <ArrowRight size={18} />
                </motion.a>

            </div>
        </nav>
    );
}

export default Navbar;