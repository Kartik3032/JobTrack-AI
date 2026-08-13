import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center pt-24"
        >

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute top-20 left-[-200px] w-[500px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full" />

                <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-fuchsia-700/15 blur-[140px] rounded-full" />

                <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full" />

            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8"
                >
                    <Sparkles size={16} />
                    AI CAREER PLATFORM
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
                >
                    Land Your Dream Job
                    <br />

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400">
                        Faster with AI
                    </span>

                    <Sparkles
                        className="inline-block ml-4 text-purple-400"
                        size={55}
                    />
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-400 leading-8"
                >
                    JobTrack AI helps students discover jobs, track applications,
                    prepare for interviews, improve resumes and stay organized —
                    all in one place.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
                >

                    <a
                        href="#features"
                        className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl shadow-purple-500/20 hover:scale-105 transition-transform"
                    >
                        Get Started
                        <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition"
                        />
                    </a>

                    <a
                        href="#about"
                        className="flex items-center justify-center px-8 py-4 rounded-xl border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/5 font-semibold text-lg transition"
                    >
                        Learn More
                    </a>

                </motion.div>

            </div>
        </section>
    );
}

export default Hero;