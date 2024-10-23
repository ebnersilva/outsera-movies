import { describe, it, expect } from 'vitest';
import { useAppStore } from '~/app/store';

describe('Store: maxMinIntervalProducers', () => {
    it('should initialize with default values', () => {
        const { maxMinIntervalProducers: {
            isLoading,
            intervalMax,
            intervalMin,
            maxMinIntervalProducersColumns
        } } = useAppStore.getState();

        expect(isLoading).toBe(true)
        expect(intervalMax).toEqual([])
        expect(intervalMin).toEqual([])
        expect(maxMinIntervalProducersColumns).toEqual([
            {
                id: 1,
                title: 'Producer',
                property: 'producer'
            },
            {
                id: 2,
                title: 'Interval',
                property: 'interval'
            },
            {
                id: 3,
                title: 'Previous year',
                property: 'previousWin'
            },
            {
                id: 4,
                title: 'Following year',
                property: 'followingWin'
            }
        ])
    })
})
