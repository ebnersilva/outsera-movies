import {useEffect, useState} from 'react';
import {useDebounce} from 'use-debounce';
import {Pagination} from './Pagination';

type SelectOption = {
	id: number;
	title: string;
	value: string;
	disabled?: boolean;
};

export interface IColumn<T> {
	id: number;
	title: string;
	property: keyof T;

	filter?: {
		type: 'text' | 'select';
		selectOptions?: SelectOption[];
	};
}

export interface IPaginationTable {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

interface ITableContainer<T> {
	columns: IColumn<T>[];
	data: T[];
	isLoading?: boolean;
	pagination?: IPaginationTable;
	onChangeFilterText?: (text: string, columnName: keyof T) => void;
	onChangeFilterSelect?: (value: string, columnName: keyof T) => void;
}

export const Table = <T,>({
	columns,
	data,
	isLoading,
	pagination,
	onChangeFilterText,
	onChangeFilterSelect,
}: ITableContainer<T>) => {
	const [textFilter, setTextFilter] = useState('');
	const [columnName, setColumnName] = useState<keyof T | null>(null);
	const [debouncedText] = useDebounce(textFilter, 1000);

	useEffect(() => {
		if (!columnName || !onChangeFilterText) return;

		onChangeFilterText(debouncedText, columnName);
	}, [debouncedText, onChangeFilterText, columnName]);

	return (
		<>
			<table className="table-fixed w-full bg-slate-50 border border-slate-200 rounded-lg">
				<thead>
					<tr className="bg-slate-100 border-b">
						{columns.map(column => (
							<th
								key={column.id}
								className="px-6 py-3 text-left text-sm font-medium text-slate-700"
							>
								<div className="flex flex-col">
									{column.title}

									{column.filter?.type === 'text' && (
										<input
											type="text"
											placeholder={`Filter by ${column.title}`}
											onChange={e => {
												setTextFilter(e.target.value);
												setColumnName(column.property);
											}}
										/>
									)}

									{column.filter?.type === 'select' &&
										column.filter?.selectOptions && (
											<select
												name="select-filter"
												id="select-filter"
												onChange={({target}) => {
													if (!onChangeFilterSelect) return;

													onChangeFilterSelect(target.value, column.property);
												}}
											>
												{column.filter.selectOptions.map(option => (
													<option
														key={option.id}
														disabled={option.disabled}
														value={option.value}
													>
														{option.title}
													</option>
												))}
											</select>
										)}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowIndex} className="border-b hover:bg-slate-50">
							{columns.map(column => (
								<td
									key={column.id}
									className="px-6 py-4 text-sm text-slate-900"
								>
									{String(row[column.property])}
								</td>
							))}
						</tr>
					))}
				</tbody>
				<tfoot>
					{isLoading && (
						<tr className="bg-slate-100 border-b">
							<td className="px-6 text-slate-500 " colSpan={columns.length}>
								<div className="text-slate-500 text-center">Carregando...</div>
							</td>
						</tr>
					)}
					{!isLoading && (
						<tr className="bg-slate-100 border-b">
							<td className="px-6 text-slate-500 " colSpan={columns.length}>
								<div className="text-slate-500 text-center">
									{data.length} registro(s)
								</div>
							</td>
						</tr>
					)}
				</tfoot>
			</table>
			{pagination && pagination.totalPages > 0 && (
				<div className="flex justify-center bg-slate-50 p-4 rounded-md">
					<Pagination
						currentPage={pagination.currentPage}
						totalPages={pagination.totalPages}
						onPageChange={page => pagination.onPageChange(page)}
					/>
				</div>
			)}
		</>
	);
};
