import { motion } from "motion/react";
import { profile } from "../data/portfolio";

const reveal = {
	initial: { opacity: 0, y: 18 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.3 },
	transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }
};

export default function HeroSection() {
	return (
		<motion.section className="scroll-mt-28" {...reveal}>
			<p className="mb-4 text-sm uppercase tracking-[0.18em] text-cyan-300">Portfolio</p>
			<h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Hi, I'm {profile.name}!
			</h1>
			<h2 className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">{profile.role}</h2>
			<p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">{profile.blurb}</p>
		</motion.section>
	);
}
