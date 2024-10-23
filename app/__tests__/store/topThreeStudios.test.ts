import { describe, it, expect } from 'vitest';
import { useAppStore } from '~/app/store';

describe('Store: topThreeStudios', () => {
    it('should initialize with default values', () => {
        const { topThreeStudiosWithWinCount: {
            isLoading,
            studiosWithWinCount,
            studiosWithWinCountColumns
        } } = useAppStore.getState();

        expect(isLoading).toBe(true)
        expect(studiosWithWinCount).toEqual([])
        expect(studiosWithWinCountColumns).toEqual([
            {
                id: 1,
                title: 'Name',
                property: 'name'
            },
            {
                id: 2,
                title: 'Win count',
                property: 'winCount'
            },
        ])
    })
})
