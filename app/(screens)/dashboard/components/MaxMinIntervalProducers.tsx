import { useEffect } from "react"
import { Table } from "~/app/components/Table"
import { useAppStore } from "~/app/store"
import { ProducerInterval } from "~/app/store/maxMinIntervalProducers/types"

export const MaxMinIntervalProducers = () => {
    const { 
        intervalMax,
        intervalMin, 
        maxMinIntervalProducersColumns,
        isLoading: isMaxMinIntervalProducersLoading, 
        fetchMaxMinIntervalProducersApi
    } = useAppStore(state => state.maxMinIntervalProducers)

    useEffect(() => {
    fetchMaxMinIntervalProducersApi();
    }, []);
      
    return (
        <div className="flex flex-col flex-1 bg-slate-500 gap-4 px-4 py-4 rounded-md">
            <strong>Producers with longest and shortest interval between wins</strong>

            <div>
              <h1>Maximum</h1>
              <Table<ProducerInterval>
                columns={maxMinIntervalProducersColumns}
                data={intervalMax}
                isLoading={isMaxMinIntervalProducersLoading}
              />
            </div>

            <div>
              <h1>Minimum</h1>
              <Table<ProducerInterval>
                columns={maxMinIntervalProducersColumns}
                data={intervalMin}
                isLoading={isMaxMinIntervalProducersLoading}
              />
            </div>
        </div>
    )
}