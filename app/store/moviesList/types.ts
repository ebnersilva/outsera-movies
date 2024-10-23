import { IColumn } from "~/app/components/Table";

export type Movie = {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean
};

export interface IMoviesList {
    content: Movie[]
    pageable: {
        offset: number;
        pageSize: number;
        pageNumber: number;
    },
    totalPages: number;
    totalElements: number;
}

export interface IMoviesListParams {
    page: number;
    size: number;
    year?: number;
    winner?: boolean;
}

export interface IMoviesListSlice {
    moviesList: {
        data: IMoviesList;
        moviesListColumns: IColumn<Movie>[]
        isLoading: boolean;
        actionSetIsLoading: (isLoading: boolean) => void
        fetchMoviesListApi: (params: IMoviesListParams) => Promise<void>
    }
}