'use client'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { IColumn, Table } from '../components/Table';


// List Year Multiple Winners Table
interface IListYearMultipleWinnersData {
  year: number;
  winCount: number;
}

const listYearMultipleWinnersColumns: IColumn<IListYearMultipleWinnersData>[] = [
  {
    id: 1,
    title: 'Year',
    property: 'year'
  },
  {
    id: 2,
    title: 'Win count',
    property: 'winCount'
  },
]

const listYearMultipleWinnersData: IListYearMultipleWinnersData[] = [
  {
    year: 2022,
    winCount: 1
  },
  {
    year: 2021,
    winCount: 2
  },
  {
    year: 2020,
    winCount: 2
  },
]


// Top Three Studios Table
interface ITopThreeStudiosData {
  name: string;
  winCount: number;
}

const topThreeStudiosColumns: IColumn<ITopThreeStudiosData>[] = [
  {
    id: 1,
    title: 'Name',
    property: 'name'
  },
  {
    id: 2,
    title: 'Win count',
    property: 'winCount'
  },
]

const topThreeStudiosData: ITopThreeStudiosData[] = [
  {
    name: 'Columbia Pictures',
    winCount: 6
  },
  {
    name: 'Paramount Pictures',
    winCount: 6
  },
  {
    name: 'Warner Bros.',
    winCount: 5
  },
]

// Producer With Longest and Shortest Interval Between wins table
interface IProducerIntervalWinsData {
  producer: string;
  interval: number;
  previousYear: number;
  followingYear: number;
}

const producerIntervalWinsColumns: IColumn<IProducerIntervalWinsData>[] = [
  {
    id: 1,
    title: 'Producer',
    property: 'producer'
  },
  {
    id: 2,
    title: 'Interval',
    property: 'interval'
  },
  {
    id: 3,
    title: 'Previous year',
    property: 'previousYear'
  },
  {
    id: 4,
    title: 'Following year',
    property: 'followingYear'
  }
]

const producerMaximumIntervalWinsData: IProducerIntervalWinsData[] = [
  {
    producer: 'Matthew Vaughn',
    interval: 13,
    previousYear: 2002,
    followingYear: 2015
  }
]

const producerMinimumIntervalWinsData: IProducerIntervalWinsData[] = [
  {
    producer: 'Joel SIlver',
    interval: 1,
    previousYear: 1990,
    followingYear: 1991
  }
]

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

  return (
    <div className="flex flex-1 flex-col h-screen p-20 gap-10 bg-slate-700">
      <h1>Dashboard</h1>

      {/* First Line */}
      <div className="flex flex-row rounded-md gap-10">

        <div className="flex flex-1 flex-col px-4 py-4 bg-slate-500 rounded-md">
          <strong>List years multiple winners</strong>
          
          <Table<IListYearMultipleWinnersData>
            columns={listYearMultipleWinnersColumns}
            data={listYearMultipleWinnersData}
          />
        </div>

        <div className="flex flex-1 flex-col px-4 py-4 overflow-x-auto bg-slate-500 rounded-md">
          <strong>Top 3 studios with winners</strong>

          <Table<ITopThreeStudiosData>
            columns={topThreeStudiosColumns}
            data={topThreeStudiosData}
          />
        </div>

      </div>

      {/* Second Line */}
      <div className="flex flex-row gap-10">
          <div className="flex flex-col flex-1 bg-slate-500 gap-4 px-4 py-4 rounded-md">
            <strong>Producers with longest and shortest interval between wins</strong>

            <div>
              <h1>Maximum</h1>
              <Table<IProducerIntervalWinsData>
                columns={producerIntervalWinsColumns}
                data={producerMaximumIntervalWinsData}
              />
            </div>

            <div>
              <h1>Minimum</h1>
              <Table<IProducerIntervalWinsData>
                columns={producerIntervalWinsColumns}
                data={producerMinimumIntervalWinsData}
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
