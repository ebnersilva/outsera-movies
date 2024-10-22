import { IColumn } from "~/app/components/Table";

export type ProducerInterval = {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
}

export interface IProducerInterval {
    min: ProducerInterval[]
    max: ProducerInterval[]
}

export interface IMaxMinIntervalProducersSlice {
    maxMinIntervalProducers: {
        intervalMin: ProducerInterval[];
        intervalMax: ProducerInterval[];
        maxMinIntervalProducersColumns: IColumn<ProducerInterval>[]
        isLoading: boolean;
        actionSetIsLoading: (isLoading: boolean) => void
        fetchMaxMinIntervalProducersApi: () => Promise<void>
    }
}