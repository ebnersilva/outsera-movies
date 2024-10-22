import {ImmerStateCreator} from '~/app/store';

import { IWinnersByYearSlice, WinnerByYear} from './types';
import { api } from '~/app/services/api';
import { AxiosResponse } from 'axios';
import { showErrorToast } from '~/app/utils/showToast';

export const createWinnersByYearSlice: ImmerStateCreator<
IWinnersByYearSlice
> = set => ({
	winnersByYear: {
        winnersByYear: [],
        winnersByYearColumns: [
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
        ],
        isLoading: false,
        actionSetIsLoading: (isLoading: boolean) => {
            set(state => {
                state.winnersByYear.isLoading = isLoading
            })
        },

        fetchWinnersByYearApi: async (year?: number) => {
            set(state => {
                state.winnersByYear.isLoading = true
            })

            try {
                const res: AxiosResponse<WinnerByYear[]> = await api.get('/movies', {
                    params: {
                        winner: true,
                        year: year ? year : new Date().getFullYear(),
                    }
                });


                set(state => {
                    state.winnersByYear.winnersByYear = res.data;
                })
            } catch (err) {
                showErrorToast('Erro ao carregar os filmes vencedores por ano!');
            } finally {
                set(state => {
                    state.winnersByYear.isLoading = false
                })
            }
        }
    }
});
