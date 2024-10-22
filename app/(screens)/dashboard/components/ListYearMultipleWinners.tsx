import { useEffect } from "react";
import { Table } from "~/app/components/Table";
import { useAppStore } from "~/app/store";
import { YearWinnerCount } from "~/app/store/yearsMultipleWinners/types";

export const ListYearMultipleWinners = () => {
  const {
    yearsMultipleWinners,
    yearsMultipleWinnersColumns,
    isLoading: isYearsMultipleWinnersLoading,
    fetchYearsMultipleWinnersApi,
  } = useAppStore((state) => state.yearsMultipleWinners);

  useEffect(() => {
    fetchYearsMultipleWinnersApi();
  }, [fetchYearsMultipleWinnersApi]);

  return (
    <div className="flex flex-1 flex-col px-4 py-4 bg-slate-500 rounded-md">
      <strong>List years multiple winners</strong>

      <Table<YearWinnerCount>
        columns={yearsMultipleWinnersColumns}
        data={yearsMultipleWinners}
        isLoading={isYearsMultipleWinnersLoading}
      />
    </div>
  );
};
