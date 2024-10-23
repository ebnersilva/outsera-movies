import { describe, it, expect } from 'vitest';
import { useAppStore } from '~/app/store';


describe('Store: yearsMultipleWinners', () => {
    it('should initialize with default values', () => {
        const { yearsMultipleWinners: {
            isLoading,
            yearsMultipleWinners,
            yearsMultipleWinnersColumns,
        } } = useAppStore.getState();

        expect(isLoading).toBe(true)
        expect(yearsMultipleWinners).toEqual([])
        expect(yearsMultipleWinnersColumns).toEqual([
            {
                id: 1,
                title: 'Year',
                property: 'year',
            },
            {
                id: 2,
                title: 'Win count',
                property: 'winnerCount',
            }
        ])
    })
})