import { useEffect } from "react"
import { Table } from "~/app/components/Table"
import { useAppStore } from "~/app/store"
import { StudioWithWinCount } from "~/app/store/topThreeStudios/types"

export const TopThreeStudiosWithWinners = () => {
    const { 
        studiosWithWinCount, 
        studiosWithWinCountColumns,
        isLoading: isTopThreeStudiosWithCountLoading, 
        fetchStudiosWinCountApi
    } = useAppStore(state => state.topThreeStudiosWithWinCount)


    useEffect(() => {
        fetchStudiosWinCountApi();
    }, [])
    
    return (
        <div className="flex flex-1 flex-col px-4 py-4 overflow-x-auto bg-slate-500 rounded-md">
          <strong>Top 3 studios with winners</strong>

          <Table<StudioWithWinCount>
            columns={studiosWithWinCountColumns}
            data={studiosWithWinCount}
            isLoading={isTopThreeStudiosWithCountLoading}
          />
        </div>
    )
}