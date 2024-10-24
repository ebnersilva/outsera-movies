import Link from 'next/link';

export const Sidebar = () => {
	return (
		<nav aria-label="Sidebar" className="flex flex-col w-40 bg-slate-400 p-10">
			<Link href="/dashboard">
				<span className="hover:underline">Dashboard</span>
			</Link>

			<Link href="/movies">
				<span className="hover:underline">List</span>
			</Link>
		</nav>
	);
};
