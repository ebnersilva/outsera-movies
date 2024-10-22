import {ImmerStateCreator} from '~/app/store';

import {ITopThreeStudiosSlice, IStudioWithWinCount, StudioWithWinCount} from './types';
import { api } from '~/app/services/api';
import { AxiosResponse } from 'axios';
import { showErrorToast } from '~/app/utils/showToast';

export const createTopThreeStudiosSlice: ImmerStateCreator<
ITopThreeStudiosSlice
> = set => ({
	topThreeStudiosWithWinCount: {
        studiosWithWinCount: [],
        studiosWithWinCountColumns: [
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
        ],
        isLoading: true,
        actionSetStudiosWinCount: (studios: StudioWithWinCount[]) => {
            set(state => {
                state.topThreeStudiosWithWinCount.studiosWithWinCount = studios
            })
        },

        actionSetIsLoading: (isLoading: boolean) => {
            set(state => {
                state.topThreeStudiosWithWinCount.isLoading = isLoading
            })
        },

        fetchStudiosWinCountApi: async () => {
            set(state => {
                state.topThreeStudiosWithWinCount.isLoading = true
            })

            try {
                const res: AxiosResponse<IStudioWithWinCount> = await api.get('/movies', {
                    params: {
                        projection: 'studios-with-win-count'
                    }
                });


                set(state => {
                    state.topThreeStudiosWithWinCount.studiosWithWinCount = res.data.studios.slice(-3)
                })
            } catch (err) {
                showErrorToast('Erro ao carregar top 3 studios!');
            } finally {
                set(state => {
                    state.topThreeStudiosWithWinCount.isLoading = false
                })
            }
        }
    }
});
