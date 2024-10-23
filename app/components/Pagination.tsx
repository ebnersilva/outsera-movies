import {useState} from 'react';

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
					onClick={() => handlePageChange(i)}
					className={`px-3 py-1 mx-1 ${
						activePage === i
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
				onClick={() => handlePageChange(1)}
				className="px-2 py-1 bg-slate-800 text-white rounded-md"
				disabled={activePage === 1}
			>
				{'<<'}
			</button>
			<button
				onClick={() => handlePageChange(activePage - 1)}
				className="px-2 py-1 bg-slate-800 text-white rounded-md"
				disabled={activePage === 1}
			>
				{'<'}
			</button>

			{renderPageNumbers()}

			<button
				onClick={() => handlePageChange(activePage + 1)}
				className="px-2 py-1 bg-slate-800 text-white rounded-md"
				disabled={activePage === totalPages}
			>
				{'>'}
			</button>
			<button
				onClick={() => handlePageChange(totalPages)}
				className="px-2 py-1 bg-slate-800 text-white rounded-md"
				disabled={activePage === totalPages}
			>
				{'>>'}
			</button>
		</div>
	);
};
