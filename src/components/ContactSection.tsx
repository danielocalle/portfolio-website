import { motion } from "motion/react";
import { profile } from "../data/portfolio";

export default function ContactSection() {
	return (
		<motion.footer
			id="contact"
			className="border-t border-slate-800 bg-slate-950/90"
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.4 }}
		>
			<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<h3 className="text-lg font-semibold text-white">Contact</h3>
					<p className="mt-2 text-sm text-slate-400">Always open to new opportunities!</p>
					<p className="mt-2 text-sm text-slate-300">{profile.email}</p>
				</div>
				<div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
					<a className="transition hover:text-white" href={profile.github}>
						GitHub
					</a>
					<a className="transition hover:text-white" href={profile.linkedin}>
						LinkedIn
					</a>
					<a className="transition hover:text-white" href={`mailto:${profile.email}`}>
						Email
					</a>
				</div>
			</div>
			<p className="mx-auto max-w-5xl px-6 pb-8 text-xs text-slate-500">
				Designed and built for fun whenever I have time!
			</p>
		</motion.footer>
	);
}
