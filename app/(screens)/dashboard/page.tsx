'use client'
import { ListYearMultipleWinners } from './components/ListYearMultipleWinners';
import { TopThreeStudiosWithWinners } from './components/TopThreeStudiosWithWinners';
import { MaxMinIntervalProducers } from './components/MaxMinIntervalProducers';
import { ListMovieWinnerByYear } from './components/ListMovieWinnerByYear';

export default function Dashboard() {

  return (
    <div className="flex flex-1 flex-col p-20 gap-10 bg-slate-700">
      <h1>Dashboard</h1>

      {/* First Line */}
      <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row rounded-md gap-10">
        <ListYearMultipleWinners />

        <TopThreeStudiosWithWinners />
      </div>

      {/* Second Line */}
      <div className="flex flex-row gap-10 flex-wrap">
          <MaxMinIntervalProducers />

          <ListMovieWinnerByYear />
      </div>
    </div>
  );
}
