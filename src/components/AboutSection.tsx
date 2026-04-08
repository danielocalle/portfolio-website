import { motion } from "motion/react";
import { highlights, profile } from "../data/portfolio";

const reveal = {
	initial: { opacity: 0, y: 18 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.3 },
	transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }
};

export default function AboutSection() {
	return (
		<motion.section id="about" className="scroll-mt-28" {...reveal}>
			<h3 className="text-2xl font-semibold text-white">About</h3>
			<p className="mt-3 max-w-3xl text-slate-400">{profile.about}</p>
			<div className="mt-6 grid gap-3 sm:grid-cols-3">
				{highlights.map((item) => (
					<div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
						<p className="text-lg font-semibold text-slate-100">{item.value}</p>
						<p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
					</div>
				))}
			</div>
		</motion.section>
	);
}
