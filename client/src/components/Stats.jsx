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
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[140px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-purple-400 font-semibold tracking-widest uppercase text-sm mb-4">
                        Our Impact
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Built for Your Career
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Everything you need to stay organized, prepared and ahead
                        in your job search.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-8">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                            className="group relative text-center"
                        >

                            {/* Purple Top Glow */}
                            <div className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950/20 backdrop-blur-xl border border-zinc-800 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-purple-500/60 hover:shadow-[0_0_45px_rgba(168,85,247,0.18)]">

                                {/* Number */}
                                <h3 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </h3>

                                {/* Label */}
                                <p className="mt-5 text-gray-400 text-lg">
                                    {stat.label}
                                </p>

                                {/* Bottom Glow */}
                                <div className="mx-auto mt-7 w-12 h-1 rounded-full bg-purple-500/40 group-hover:w-20 group-hover:bg-purple-500 transition-all duration-300" />

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Stats;