import {useState} from 'react';
import { INITIAL_PAGE } from '../utils/constants';

interface IPaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

export const Pagination = ({
	totalPages,
	currentPage,
	onPageChange,
}: IPaginationProps) => {
	const [activePage, setActivePage] = useState(currentPage);

	const handlePageChange = (page: number) => {
		setActivePage(page);
		onPageChange(page);
	};

	const renderPageNumbers = () => {
		const pages = [];

		for (let i = 1; i <= totalPages; i++) {
			pages.push(
				<button
					key={i}
					onClick={() => handlePageChange(i - 1)}
					className={`px-3 py-1 mx-1 ${
						activePage === i - 1
							? 'bg-blue-500 text-white'
							: 'bg-slate-800 text-white'
					} rounded-md`}
				>
					{i}
				</button>,
			);
		}

		return pages;
	};

	return (
		<div className="flex flex-wrap items-center justify-center space-x-2 mt-4 gap-1">
			<button
				onClick={() => handlePageChange(INITIAL_PAGE)}
				className="px-2 py-1 bg-slate-800 text-white rounded-md"
				disabled={activePage === INITIAL_PAGE}
			>
				{'<<'}
			</button>
			<button
				onClick={() => handlePageChange(activePage - 1)}
				className="px-2 py-1 bg-slate-800 text-white rounded-md"
				disabled={activePage === INITIAL_PAGE}
			>
				{'<'}
			</button>

			{renderPageNumbers()}

			<button
				onClick={() => handlePageChange(activePage + 1)}
				className="px-2 py-1 bg-slate-800 text-white rounded-md"
				disabled={activePage === totalPages - 1}
			>
				{'>'}
			</button>
			<button
				onClick={() => handlePageChange(totalPages - 1)}
				className="px-2 py-1 bg-slate-800 text-white rounded-md"
				disabled={activePage === totalPages - 1}
			>
				{'>>'}
			</button>
		</div>
	);
};
