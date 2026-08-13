import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Button({ children = "Get Started" }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-purple-500/25"
        >
            {children}
            <ArrowRight size={18} />
        </motion.button>
    );
}

export default Button;