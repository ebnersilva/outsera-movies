import { IColumn } from "~/app/components/Table";

export type StudioWithWinCount = {
    name: number;
    winCount: number;
}

export interface IStudioWithWinCount {
    studios: StudioWithWinCount[]
}

export interface ITopThreeStudiosSlice {
    topThreeStudiosWithWinCount: {
        studiosWithWinCount: StudioWithWinCount[]
        studiosWithWinCountColumns: IColumn<StudioWithWinCount>[]
        isLoading: boolean;
        actionSetStudiosWinCount: (years: StudioWithWinCount[]) => void
        actionSetIsLoading: (isLoading: boolean) => void
        fetchStudiosWinCountApi: () => Promise<void>
    }
}