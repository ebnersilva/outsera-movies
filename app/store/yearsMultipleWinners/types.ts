import { IColumn } from "~/app/components/Table";

export type YearWinnerCount = {
    year: number;
    winnerCount: number;
}

export interface IYearWithMultipleWinner {
    years: YearWinnerCount[]
}

export interface IYearsMultipleWinnersSlice {
    yearsMultipleWinners: {
        yearsMultipleWinners: YearWinnerCount[]
        yearsMultipleWinnersColumns: IColumn<YearWinnerCount>[]
        isLoading: boolean;
        actionSetYearsMultipleWinners: (years: YearWinnerCount[]) => void
        actionSetIsLoading: (isLoading: boolean) => void
        fetchYearsMultipleWinnersApi: () => Promise<void>
    }
}