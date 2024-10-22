import {ImmerStateCreator} from '~/app/store';

import {IYearsMultipleWinnersSlice, IYearWithMultipleWinner, YearWinnerCount} from './types';
import { api } from '~/app/services/api';
import { AxiosResponse } from 'axios';
import { showErrorToast } from '~/app/utils/showToast';

export const createYearsMultipleWinnersSlice: ImmerStateCreator<
IYearsMultipleWinnersSlice
> = set => ({
	yearsMultipleWinners: {
        yearsMultipleWinners: [],
        isLoading: false,
        yearsMultipleWinnersColumns: [
            {
                id: 1,
                title: 'Year',
                property: 'year'
            },
            {
                id: 2,
                title: 'Win count',
                property: 'winnerCount'
            }
        ],
        actionSetYearsMultipleWinners: (years: YearWinnerCount[]) => {
            set(state => {
                state.yearsMultipleWinners.yearsMultipleWinners = years
            })
        },

        actionSetIsLoading: (isLoading: boolean) => {
            set(state => {
                state.yearsMultipleWinners.isLoading = isLoading
            })
        },

        fetchYearsMultipleWinnersApi: async () => {
            set(state => {
                state.yearsMultipleWinners.isLoading = true
            })

            try {
                const res: AxiosResponse<IYearWithMultipleWinner> = await api.get('/movies', {
                    params: {
                        projection: 'years-with-multiple-winners'
                    }
                });


                set(state => {
                    state.yearsMultipleWinners.yearsMultipleWinners = res.data.years
                })
            } catch (err) {
                showErrorToast('Erro ao carregar os vencedores múltiplos por ano!');
            } finally {
                set(state => {
                    state.yearsMultipleWinners.isLoading = false
                })
            }
        }
    }
});
