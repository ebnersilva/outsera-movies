import {ImmerStateCreator} from '~/app/store';

import {IMaxMinIntervalProducersSlice, IProducerInterval, ProducerInterval} from './types';
import { api } from '~/app/services/api';
import { AxiosResponse } from 'axios';

export const createMaxMinIntervalProducersSlice: ImmerStateCreator<
IMaxMinIntervalProducersSlice
> = set => ({
	maxMinIntervalProducers: {
        intervalMax: [],
        intervalMin: [],
        maxMinIntervalProducersColumns: [
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
        ],
        isLoading: false,
        actionSetIsLoading: (isLoading: boolean) => {
            set(state => {
                state.maxMinIntervalProducers.isLoading = isLoading
            })
        },

        fetchMaxMinIntervalProducersApi: async () => {
            set(state => {
                state.maxMinIntervalProducers.isLoading = true
            })

            try {
                const res: AxiosResponse<IProducerInterval> = await api.get('/movies', {
                    params: {
                        projection: 'max-min-win-interval-for-producers'
                    }
                });


                set(state => {
                    state.maxMinIntervalProducers.intervalMax = res.data.max,
                    state.maxMinIntervalProducers.intervalMin = res.data.min
                })
            } catch (err) {
                console.error("Error in data fetch:", err);
            } finally {
                set(state => {
                    state.maxMinIntervalProducers.isLoading = false
                })
            }
        }
    }
});
