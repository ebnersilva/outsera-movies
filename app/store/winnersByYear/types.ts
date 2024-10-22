import { IColumn } from "~/app/components/Table";

export type WinnerByYear = {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean;
  }

export interface IWinnersByYearSlice {
    winnersByYear: {
        winnersByYear: WinnerByYear[];
        winnersByYearColumns: IColumn<WinnerByYear>[]
        isLoading: boolean;
        actionSetIsLoading: (isLoading: boolean) => void
        fetchWinnersByYearApi: (year?: number) => Promise<void>
    }
}