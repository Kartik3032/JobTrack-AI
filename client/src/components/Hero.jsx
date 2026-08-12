function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full -top-20 -left-20"></div>

            <div className="absolute w-80 h-80 bg-pink-500/20 blur-3xl rounded-full bottom-0 right-0"></div>
            <div className="absolute left-20 top-40 h-96 w-96 rounded-full bg-purple-700/20 blur-[150px]" />
            <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-pink-700/20 blur-[150px]" />
            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
                Land Your Dream Job
            </h1>

            <span className="text-6xl md:text-7xl font-extrabold text-purple-500">
                Faster with AI 🚀
            </span>

            <p className="text-gray-400 mt-6 text-lg max-w-2xl">
                JobTrack AI helps students discover jobs, track applications,
                prepare for interviews, and stay organized—all in one place.
            </p>

            <div className="mt-10 flex gap-5">
                <button
                    onClick={() => {
                        document.getElementById("features")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="bg-purple-600 hover:bg-purple-500 transition px-8 py-3 rounded-xl text-white font-semibold shadow-lg shadow-purple-500/20"
                >
                    Get Started
                </button>
            </div>
        </section>
    );
}

export default Hero;