import {
    Sparkles,
    Target,
    Zap,
} from "lucide-react";

import { motion } from "framer-motion";

function About() {
    const cards = [
        {
            icon: <Sparkles size={25} />,
            title: "AI Powered",
            desc: "Smart tools designed to help you improve your job search.",
        },
        {
            icon: <Target size={25} />,
            title: "Career Focused",
            desc: "Stay focused on applications, interviews and your career goals.",
        },
        {
            icon: <Zap size={25} />,
            title: "Built for Speed",
            desc: "Everything you need to manage your job hunt in one place.",
        },
    ];

    return (
        <section
            id="about"
            className="relative bg-black text-white py-28 px-6 overflow-hidden"
        >

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-purple-700/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                <div className="text-center max-w-4xl mx-auto">

                    <p className="text-purple-400 font-semibold tracking-[0.25em] text-sm mb-5">
                        ABOUT JOBTRACK AI
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold">
                        Your Career,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                            One Place.
                        </span>
                    </h2>

                    <p className="mt-7 text-lg md:text-xl text-gray-400 leading-8">
                        JobTrack AI brings job discovery, application tracking,
                        resume improvement and interview preparation together
                        into one simple platform.
                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            className="group bg-gradient-to-br from-zinc-900 to-purple-950/20 border border-zinc-800 rounded-3xl p-10 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-500/20 group-hover:scale-110 transition">
                                {card.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                {card.title}
                            </h3>

                            <p className="text-gray-400 leading-7">
                                {card.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default About;