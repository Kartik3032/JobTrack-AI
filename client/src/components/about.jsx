import { motion } from "framer-motion";
import { Sparkles, Target, Zap } from "lucide-react";

function About() {
    const points = [
        {
            icon: <Sparkles size={24} />,
            title: "AI Powered",
            desc: "Smart tools designed to help you improve your job search.",
        },
        {
            icon: <Target size={24} />,
            title: "Career Focused",
            desc: "Stay focused on applications, interviews and your career goals.",
        },
        {
            icon: <Zap size={24} />,
            title: "Built for Speed",
            desc: "Everything you need to manage your job hunt in one place.",
        },
    ];

    return (
        <section
            id="about"
            className="relative bg-black text-white py-28 px-8 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[130px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-purple-400 font-semibold tracking-widest uppercase text-sm mb-4">
                        About JobTrack AI
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Your Career,{" "}
                        <span className="text-purple-500">
                            One Place.
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
                        JobTrack AI brings job discovery, application tracking,
                        resume improvement and interview preparation together
                        into one simple platform.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            className="group bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950/20 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)] transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                                {point.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                {point.title}
                            </h3>

                            <p className="text-gray-400 leading-7">
                                {point.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default About;