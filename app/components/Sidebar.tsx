'use client';

import { HamburgerMenuIcon, HomeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname === path
	};

	
	return (
		<nav aria-label="Sidebar" className="flex flex-col w-50 bg-slate-400 p-10 gap-4">
			<Link href="/dashboard" className={`flex flex-row items-center gap-2 p-2 rounded-lg transition duration-200 
				${isActive('/dashboard') ? 'bg-slate-700 text-white' : 'hover:bg-slate-500 hover:text-white'}`}>
				<HomeIcon height={20} width={20} />
				<span>Dashboard</span>
			</Link>

			<Link href="/movies" className={`flex flex-row items-center gap-2 p-2 rounded-lg transition duration-200 
				${isActive('/movies') ? 'bg-slate-700 text-white' : 'hover:bg-slate-500 hover:text-white'}`}>
				<HamburgerMenuIcon height={20} width={20} />
				<span>List</span>
			</Link>
		</nav>
	);
};
