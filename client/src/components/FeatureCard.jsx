import { motion } from "framer-motion";

function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950/30 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
        >

            {/* Icon */}
            <div className="mb-7 w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
                {title}
            </h3>

            <p className="text-gray-400 leading-7">
                {desc}
            </p>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

        </motion.div>
    );
}

export default FeatureCard;
