import {create, StateCreator} from 'zustand';
import { IYearsMultipleWinnersSlice } from './yearsMultipleWinners/types';
import { immer } from 'zustand/middleware/immer';

import { createYearsMultipleWinnersSlice } from './yearsMultipleWinners';
import { ITopThreeStudiosSlice } from './topThreeStudios/types';
import { createTopThreeStudiosSlice } from './topThreeStudios';
import { IMaxMinIntervalProducersSlice } from './maxMinIntervalProducers/types';
import { createMaxMinIntervalProducersSlice } from './maxMinIntervalProducers';
import { IWinnersByYearSlice } from './winnersByYear/types';
import { createWinnersByYearSlice } from './winnersByYear';

export type IStoreState = 
	IYearsMultipleWinnersSlice & 
	ITopThreeStudiosSlice & 
	IMaxMinIntervalProducersSlice &
	IWinnersByYearSlice;
export type ImmerStateCreator<T> = StateCreator<
	IStoreState,
	[['zustand/immer', never], never],
	[],
	T
>;

export const useAppStore = create<IStoreState>()(
    immer((...a) => ({
        ...createYearsMultipleWinnersSlice(...a),
		...createTopThreeStudiosSlice(...a),
		...createMaxMinIntervalProducersSlice(...a),
		...createWinnersByYearSlice(...a)
    })),
);