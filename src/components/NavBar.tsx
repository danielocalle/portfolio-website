import { profile } from "../data/portfolio";

export default function NavBar() {
	return (
		<header className="sticky top-0 z-40 border-b border-slate-800/90 bg-slate-950/80 backdrop-blur">
			<nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
				<a href="#top" className="text-sm font-semibold tracking-wide text-slate-100">
					{profile.name}
				</a>
				<ul className="flex items-center gap-5 text-sm text-slate-300">
					<li>
						<a className="transition hover:text-white" href="#about">
							About
						</a>
					</li>
					<li>
						<a className="transition hover:text-white" href="#work">
							Work
						</a>
					</li>
					<li>
						<a className="transition hover:text-white" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
