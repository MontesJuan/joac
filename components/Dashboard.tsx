
import React from 'react';
import type { ProjectData } from '../types';
import ProjectInfo from './ProjectInfo';
import StatusStepper from './StatusStepper';
import SummaryCharts from './SummaryCharts';
import EvmChart from './EvmChart';
import StatusTables from './StatusTables';
import NextSteps from './NextSteps';

interface DashboardProps {
  data: ProjectData;
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <ProjectInfo info={data.projectInfo} />
        </div>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
        <h2 className="text-lg font-semibold mb-4 text-gray-200">ESTADO GENERAL DEL PROYECTO</h2>
        <StatusStepper statuses={data.generalStatus} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <SummaryCharts chartData={data.charts} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
            <EvmChart evmData={data.evmData} evmMetrics={data.evmMetrics} />
        </div>
        <div className="xl:col-span-1">
            <StatusTables milestones={data.milestones} risks={data.risks} />
        </div>
      </div>
      
       <div className="grid grid-cols-1">
        <NextSteps steps={data.nextSteps} />
       </div>

    </div>
  );
};

export default Dashboard;
