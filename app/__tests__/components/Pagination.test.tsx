import {render, screen, fireEvent} from '@testing-library/react';
import {Pagination} from '~/app/components/Pagination';
import {describe, expect, it, vi} from 'vitest';
import { INITIAL_PAGE } from '~/app/utils/constants';

describe('Pagination Component', () => {
	it('renders the correct number of page buttons', () => {
		const totalPages = 5;
		const currentPage = INITIAL_PAGE;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const pageButtons = screen.getAllByRole('button', {name: /^\d+$/});
		expect(pageButtons).toHaveLength(totalPages);
	});

	it('calls onPageChange with correct page number when page button is clicked', () => {
		const totalPages = 5;
		const currentPage = INITIAL_PAGE;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const page3Button = screen.getByRole('button', {name: '3'});
		fireEvent.click(page3Button);

		expect(onPageChange).toHaveBeenCalledWith(2);
	});

	it('disables previous buttons on the first page', () => {
		const totalPages = 5;
		const currentPage = INITIAL_PAGE;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const firstButton = screen.getByRole('button', {name: '<<'});
		const prevButton = screen.getByRole('button', {name: '<'});

		expect(firstButton).toBeDisabled();
		expect(prevButton).toBeDisabled();
	});

	it('disables next buttons on the last page', () => {
		const totalPages = 5;
		const currentPage = totalPages - 1;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const nextButton = screen.getByRole('button', {name: '>'});
		const lastButton = screen.getByRole('button', {name: '>>'});

		expect(nextButton).toBeDisabled();
		expect(lastButton).toBeDisabled();
	});

	it('navigates to the first page when the first button is clicked', () => {
		const totalPages = 5;
		const currentPage = 3;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const firstButton = screen.getByRole('button', {name: '<<'});
		fireEvent.click(firstButton);

		expect(onPageChange).toHaveBeenCalledWith(INITIAL_PAGE);
	});

	it('navigates to the last page when the last button is clicked', () => {
		const totalPages = 5;
		const currentPage = 2;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const lastButton = screen.getByRole('button', {name: '>>'});
		fireEvent.click(lastButton);

		expect(onPageChange).toHaveBeenCalledWith(totalPages - 1);
	});

	it('navigates to the next page when the next button is clicked', () => {
		const totalPages = 5;
		const currentPage = 2;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const nextButton = screen.getByRole('button', {name: '>'});
		fireEvent.click(nextButton);

		expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
	});

	it('navigates to the previous page when the previous button is clicked', () => {
		const totalPages = 5;
		const currentPage = 3;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const prevButton = screen.getByRole('button', {name: '<'});
		fireEvent.click(prevButton);

		expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);
	});

	it('highlights the active page button', () => {
		const totalPages = 5;
		const currentPage = 3;
		const onPageChange = vi.fn();

		render(
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		const activePageButton = screen.getByRole('button', {
			name: currentPage.toString(),
		});
		expect(activePageButton).toHaveClass('px-3 py-1 mx-1 bg-slate-800 text-white rounded-md');
	});
});
