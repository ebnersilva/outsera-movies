import { describe, it, expect } from 'vitest';
import { useAppStore } from '~/app/store';

describe('Store: winnersByYear', () => {
    it('should initialize with default values', () => {
        const { winnersByYear: {
            isLoading,
            winnersByYear,
            winnersByYearColumns
        } } = useAppStore.getState();

        expect(isLoading).toBe(true)
        expect(winnersByYear).toEqual([])
        expect(winnersByYearColumns).toEqual([
            {
                id: 1,
                title: 'Id',
                property: 'id'
            },
            {
                id: 2,
                title: 'Year',
                property: 'year'
            },
            {
                id: 3,
                title: 'Title',
                property: 'title'
            }
        ])
    })
})
