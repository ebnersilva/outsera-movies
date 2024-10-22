'use client'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { IColumn, Table } from '../../components/Table';
import { useEffect } from 'react';
import { YearWinnerCount } from '~/app/store/yearsMultipleWinners/types';
import { useAppStore } from '~/app/store';
import { StudioWithWinCount } from '~/app/store/topThreeStudios/types';
import { ProducerInterval } from '~/app/store/maxMinIntervalProducers/types';


// List Movie winners by year table
interface IListMovieWinnersByYearData {
  id: number;
  year: number;
  title: string;
}

const listMovieWinnersByYearColumns: IColumn<IListMovieWinnersByYearData>[] = [
  {
    id: 1,
    title: 'Id',
    property: 'id'
  },
  {
    id: 2,
    title: 'Year',
    property: 'year'
  },
  {
    id: 3,
    title: 'Title',
    property: 'title'
  }
]

const listMovieWinnersByYearData: IListMovieWinnersByYearData[] = [
  {
    id: 1,
    year: 2022,
    title: 'Harry Potter and the Goblet of Fire'
  },
  {
    id: 2,
    year: 2021,
    title: 'Harry Potter and the Chamber of Secrets'
  },
  {
    id: 3,
    year: 2020,
    title: 'Harry Potter and the Prisoner of Azkaban'
  },
]

export default function Dashboard() {
  const { 
    yearsMultipleWinners, 
    yearsMultipleWinnersColumns,
    isLoading: isYearsMultipleWinnersLoading, 
    fetchYearsMultipleWinnersApi,
  } = useAppStore(state => state.yearsMultipleWinners);
  
  const { 
    studiosWithWinCount, 
    studiosWithWinCountColumns,
    isLoading: isTopThreeStudiosWithCountLoading, 
    fetchStudiosWinCountApi
  } = useAppStore(state => state.topThreeStudiosWithWinCount)

  const { 
    intervalMax,
    intervalMin, 
    maxMinIntervalProducersColumns,
    isLoading: isMaxMinIntervalProducersLoading, 
    fetchMaxMinIntervalProducersApi
  } = useAppStore(state => state.maxMinIntervalProducers)

  useEffect(() => {
    fetchYearsMultipleWinnersApi();
    fetchStudiosWinCountApi()
    fetchMaxMinIntervalProducersApi()
  }, [
    fetchYearsMultipleWinnersApi, 
    fetchStudiosWinCountApi,
    fetchMaxMinIntervalProducersApi,
  ]);

  return (
    <div className="flex flex-1 flex-col p-20 gap-10 bg-slate-700">
      <h1>Dashboard</h1>

      {/* First Line */}
      <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row rounded-md gap-10">

        <div className="flex flex-1 flex-col px-4 py-4 bg-slate-500 rounded-md">
          <strong>List years multiple winners</strong>
          
          <Table<YearWinnerCount>
            columns={yearsMultipleWinnersColumns}
            data={yearsMultipleWinners}
            isLoading={isYearsMultipleWinnersLoading}
          />
          
        </div>

        <div className="flex flex-1 flex-col px-4 py-4 overflow-x-auto bg-slate-500 rounded-md">
          <strong>Top 3 studios with winners</strong>

          <Table<StudioWithWinCount>
            columns={studiosWithWinCountColumns}
            data={studiosWithWinCount}
            isLoading={isTopThreeStudiosWithCountLoading}
          />
        </div>

      </div>

      {/* Second Line */}
      <div className="flex flex-row gap-10 flex-wrap">
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

          <div className="flex flex-col flex-1 bg-slate-500 px-4 py-4 rounded-md gap-4">
            <strong>List movie winners by year</strong>

              <div className="flex flex-row w-full gap-2">
                <input className="flex w-full rounded-sm h-8 p-2 border-none text-slate-900" type="number" placeholder="Search by year" />
                <button className="flex items-center justify-center bg-slate-900 rounded-sm h-8 w-8" type="button">
                  <MagnifyingGlassIcon />
                </button>
              </div>

              <Table<IListMovieWinnersByYearData>
                columns={listMovieWinnersByYearColumns}
                data={listMovieWinnersByYearData}
              />
          </div>

      </div>
    </div>
  );
}
