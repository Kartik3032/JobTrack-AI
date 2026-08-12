import { motion } from "framer-motion";

function Stats() {
    const stats = [
        {
            value: "500+",
            label: "Students",
        },
        {
            value: "1,000+",
            label: "Applications Tracked",
        },
        {
            value: "95%",
            label: "Interview Success",
        },
    ];

    return (
        <section className="relative bg-black text-white py-28 px-8 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Built for Your Career
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group text-center bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl p-10 hover:-translate-y-2 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]"
                        >
                            <h3 className="text-5xl md:text-6xl font-extrabold text-purple-500 group-hover:text-purple-400 transition-colors">
                                {stat.value}
                            </h3>

                            <p className="mt-4 text-gray-400 text-lg">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Stats;