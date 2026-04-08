import { motion } from "motion/react";
import { featuredWork } from "../data/portfolio";

const reveal = {
	initial: { opacity: 0, y: 18 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.3 },
	transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }
};

export default function FeaturedWorkSection() {
	return (
		<motion.section id="work" className="scroll-mt-28" {...reveal}>
			<div className="mb-6">
				<h3 className="text-2xl font-semibold text-white">Featured Work</h3>
				<p className="mt-2 text-slate-400">A few selected recent projects of mine.</p>
			</div>
			<div className="grid gap-4 md:grid-cols-3">
				{featuredWork.map((item, index) => (
					<motion.article
						key={item.title}
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.35, delay: index * 0.08 }}
						whileHover={{ y: -4 }}
						className="rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-lg shadow-black/20"
					>
						<h4 className="text-lg font-semibold text-slate-100">{item.title}</h4>
						<p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
						<div className="mt-4 flex flex-wrap gap-2">
							{item.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300"
								>
									{tag}
								</span>
							))}
						</div>
					</motion.article>
				))}
			</div>
		</motion.section>
	);
}
