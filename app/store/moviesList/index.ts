import { ImmerStateCreator } from '~/app/store';

import { IMoviesList, IMoviesListParams, IMoviesListSlice } from './types';
import { api } from '~/app/services/api';
import { AxiosResponse } from 'axios';
import { showErrorToast } from '~/app/utils/showToast';

export const createMoviesListSlice: ImmerStateCreator<
    IMoviesListSlice
> = set => ({
    moviesList: {
        data: {
            content: [],
            pageable: {
                offset: 0,
                pageSize: 50,
                pageNumber: 1
            },
            totalPages: 1,
            totalElements: 0,
        },
        isLoading: true,
        moviesListColumns: [
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
        ],

        actionSetIsLoading: (isLoading: boolean) => {
            set(state => {
                state.yearsMultipleWinners.isLoading = isLoading
            })
        },

        fetchMoviesListApi: async (params: IMoviesListParams) => {
            set(state => {
                state.moviesList.isLoading = true
            })

            let paramsData: IMoviesListParams = {
                page: params.page,
                size: params.size,
            }

            if (params) {
                if (params.winner !== undefined) {
                    paramsData = {
                        ...paramsData,
                        winner: params.winner
                    }
                }

                if (params.year) {
                    paramsData = {
                        ...paramsData,
                        year: params.year
                    }
                }
            }


            try {
                const res: AxiosResponse<IMoviesList> = await api.get('/movies', {
                    params: paramsData
                });


                set(state => {
                    state.moviesList.data = res.data
                })
            } catch {
                showErrorToast('Erro ao carregar os vencedores múltiplos por ano!');
            } finally {
                set(state => {
                    state.moviesList.isLoading = false
                })
            }
        }
    }
});
