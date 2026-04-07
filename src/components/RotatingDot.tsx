import { motion } from "motion/react";

export default function RotatingDot() {
	return (
		<motion.div
			className="mb-6 h-10 w-10 rounded-lg bg-cyan-400"
			animate={{ rotate: 360 }}
			transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
		/>
	);
}
