function Footer() {
    return (
        <footer className="relative bg-black border-t border-zinc-800 text-white overflow-hidden">

            <div className="absolute left-1/2 -bottom-40 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-8 py-16">

                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            JobTrack <span className="text-purple-500">AI</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-sm leading-7">
                            Your AI-powered career companion for finding jobs,
                            improving your resume and preparing for interviews.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Product
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-400">
                            <a href="#features" className="hover:text-white transition">
                                Features
                            </a>

                            <a href="#" className="hover:text-white transition">
                                Dashboard
                            </a>

                            <a href="#" className="hover:text-white transition">
                                Resume Review
                            </a>
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Connect
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 hover:text-purple-400 transition"
                            >
                                GH
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 hover:text-purple-400 transition"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 hover:text-purple-400 transition"
                            >
                                @
                            </a>

                        </div>
                    </div>

                </div>

                <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">

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

