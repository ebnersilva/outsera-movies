import { describe, it, expect } from 'vitest';
import { useAppStore } from '~/app/store';

describe('Store: moviesList', () => {
    it('should initialize with default values', () => {
        const { moviesList: {
            isLoading,
            data,
            moviesListColumns
        } } = useAppStore.getState();

        expect(isLoading).toBe(true)
        expect(data).toEqual({
            content: [],
            pageable: {
                offset: 0,
                pageSize: 50,
                pageNumber: 1
            },
            totalPages: 1,
            totalElements: 0,
        })
        expect(moviesListColumns).toEqual([
            {
                id: 1,
                title: 'ID',
                property: 'id',
            },
            {
                id: 2,
                title: 'Year',
                property: 'year',
                filter: {
                    type: "text"
                }
            },
            {
                id: 3,
                title: 'Title',
                property: 'title',
            },
            {
                id: 4,
                title: 'Winner',
                property: 'winner',
                filter: {
                    type: 'select',
                    selectOptions: [
                        {
                            id: 1,
                            title: '-- Yes / No --',
                            value: '',
                            disabled: true
                        },
                        {
                            id: 2,
                            title: 'Yes',
                            value: 'yes',
                            disabled: false
                        },
                        {
                            id: 3,
                            title: 'No',
                            value: 'no',
                            disabled: false
                        }
                    ]
                }
            }
        ])
    })
})
