import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react";
import { Table } from "~/app/components/Table"
import { useAppStore } from "~/app/store";
import { WinnerByYear } from "~/app/store/winnersByYear/types";
import { showErrorToast } from "~/app/utils/showToast";

export const ListMovieWinnerByYear = () => {
    const [filteredYear, setFilteredYear] = useState('');

    const {
        winnersByYear,
        winnersByYearColumns,
        isLoading: isWinnersByYearLoading,
        fetchWinnersByYearApi,
        actionClearWinnersByYear
    } = useAppStore(state => state.winnersByYear);

    useEffect(() => {
    fetchWinnersByYearApi();
    }, [fetchWinnersByYearApi]);

    const handleOnSearch = () => {
        if (!filteredYear || !/^\d{4}$/.test(filteredYear)) {
            showErrorToast('Informe um ano válido')
            return;
        }
        
        fetchWinnersByYearApi(parseInt(filteredYear))
    }

    const handleOnClear = () => {
        setFilteredYear('');
        actionClearWinnersByYear();
    }

    return (
        <div className="flex flex-col flex-1 bg-slate-500 px-4 py-4 rounded-md gap-4">
            <strong>List movie winners by year</strong>

            <div className="flex flex-row w-full gap-2">

            <input 
                className="flex w-full rounded-sm h-8 p-2 border-none text-slate-900" 
                type="number" 
                placeholder="Search by year" 
                value={filteredYear}
                onChange={e => setFilteredYear(e.target.value)} 
            />

            <button 
                className="flex items-center justify-center bg-slate-900 rounded-sm h-8 w-8" 
                type="button"
                onClick={handleOnSearch}
            >
                <MagnifyingGlassIcon />
            </button>
        
            {filteredYear && (
                <button 
                    className="flex items-center justify-center bg-slate-900 rounded-sm h-8 w-8" 
                    type="button"
                    onClick={handleOnClear}
                >
                    <Cross1Icon />
                </button>
            )}
            

            </div>

            <Table<WinnerByYear>
                columns={winnersByYearColumns}
                data={winnersByYear}
                isLoading={isWinnersByYearLoading}
            />
        </div>
    )
}