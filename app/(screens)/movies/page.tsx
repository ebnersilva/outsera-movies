'use client';

import {useEffect, useState} from 'react';
import {Table} from '~/app/components/Table';
import {useAppStore} from '~/app/store';
import {Movie} from '~/app/store/moviesList/types';
import { INITIAL_PAGE } from '~/app/utils/constants';
import {showErrorToast} from '~/app/utils/showToast';

export default function Movies() {
	const [yearFilter, setYearFilter] = useState('');
	const [winnerFilter, setWinnerFilter] = useState<boolean | undefined>(undefined);
	const [currentPage, setCurrentPage] = useState(0);

	const {data, isLoading, fetchMoviesListApi, moviesListColumns} = useAppStore(
		state => state.moviesList,
	);

	const handleOnChangeFilterTextChange = (value: string) => {
		// regex to check if value is a year valid
		if (/^\d{4}$/.test(value) || value === '') {
			setCurrentPage(INITIAL_PAGE);
			setYearFilter(value);
		} else {
			showErrorToast('Ano inválido');
		}
	};

	const handleOnSelectFilterChange = (value: string) => {
		if (value === 'yes') {
			setWinnerFilter(true);
		} else if (value === 'no') {
			setWinnerFilter(false);
		} else if (value === '') {
			setWinnerFilter(undefined);
		}

		setCurrentPage(INITIAL_PAGE);
	};

	useEffect(() => {
		fetchMoviesListApi({
			page: currentPage,
			size: 50,
			winner: winnerFilter,
			year: Number(yearFilter),
		});
	}, [fetchMoviesListApi, winnerFilter, yearFilter, currentPage]);

	const totalPages = Math.floor(data.totalElements / data.pageable.pageSize);

	return (
		<div className="flex flex-col p-20 gap-10 bg-slate-700 h-100">
			<h1>Lista de filmes</h1>

			<Table<Movie>
				columns={moviesListColumns}
				data={data.content}
				isLoading={isLoading}
				onChangeFilterSelect={value => handleOnSelectFilterChange(value)}
				onChangeFilterText={value => handleOnChangeFilterTextChange(value)}
				pagination={{
					currentPage,
					totalPages,
					onPageChange: page => {
						setCurrentPage(page);
					},
				}}
			/>
		</div>
	);
}
