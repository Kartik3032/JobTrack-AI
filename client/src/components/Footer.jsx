import { motion } from "framer-motion";

function Footer() {
    return (
        <footer className="relative bg-black text-white border-t border-zinc-800 overflow-hidden">

            {/* Glow */}
            <div className="absolute left-1/2 -bottom-40 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16">

                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* Brand */}
                    <div>

                        <h2 className="text-3xl font-bold tracking-tight">
                            JobTrack{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                                AI
                            </span>
                        </h2>

                        <p className="text-gray-400 mt-5 max-w-md leading-7">
                            Your AI-powered career companion for finding jobs,
                            improving your resume and preparing for interviews.
                        </p>

                    </div>

                    {/* Product */}
                    <div>

                        <h3 className="text-lg font-semibold mb-5">
                            Product
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400">

                            <a
                                href="#features"
                                className="hover:text-purple-400 transition"
                            >
                                Features
                            </a>

                            <a
                                href="#"
                                className="hover:text-purple-400 transition"
                            >
                                Dashboard
                            </a>

                            <a
                                href="#"
                                className="hover:text-purple-400 transition"
                            >
                                Resume Review
                            </a>

                        </div>

                    </div>

                    {/* Connect */}
                    <div>

                        <h3 className="text-lg font-semibold mb-5">
                            Connect
                        </h3>

                        <div className="flex gap-4">

                            <motion.a
                                href="#"
                                whileHover={{ y: -4, scale: 1.05 }}
                                className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-bold hover:border-purple-500 hover:text-purple-400 transition"
                            >
                                GH
                            </motion.a>

                            <motion.a
                                href="#"
                                whileHover={{ y: -4, scale: 1.05 }}
                                className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-bold hover:border-purple-500 hover:text-purple-400 transition"
                            >
                                in
                            </motion.a>

                            <motion.a
                                href="mailto:your@email.com"
                                whileHover={{ y: -4, scale: 1.05 }}
                                className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg hover:border-purple-500 hover:text-purple-400 transition"
                            >
                                @
                            </motion.a>

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-800 mt-14 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

                    <p>
                        © 2026 JobTrack AI. All rights reserved.
                    </p>

                    <p>
                        Built with React + Tailwind + AI
                    </p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;