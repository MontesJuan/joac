
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, Doughnut } from 'recharts';
import type { ChartData } from '../types';
import { CHART_COLORS } from '../constants';

interface SummaryChartsProps {
  chartData: ChartData;
}

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">{title}</h3>
        <div className="flex-grow w-full h-64">
             {children}
        </div>
    </div>
);

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-900/80 p-2 border border-gray-600 rounded-md shadow-lg">
                <p className="text-white text-sm">{`${payload[0].name}: ${payload[0].value.toFixed(2)}`}</p>
            </div>
        );
    }
    return null;
};


const SummaryCharts: React.FC<SummaryChartsProps> = ({ chartData }) => {
  return (
    <>
      <ChartCard title="TAREAS">
        <ResponsiveContainer>
            <PieChart>
                 <Tooltip content={<CustomTooltip />} />
                 <Pie data={chartData.tasks} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5}>
                    {chartData.tasks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS.tasks[index % CHART_COLORS.tasks.length]} />
                    ))}
                 </Pie>
                 <Legend iconType="circle" />
            </PieChart>
        </ResponsiveContainer>
      </ChartCard>
      
      <ChartCard title="% COMPLETADO">
        <ResponsiveContainer>
            <PieChart>
                 <Tooltip content={<CustomTooltip />} />
                 <Pie data={chartData.completed} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={({ name, percent }) => `${(percent * 100).toFixed(2)}%`}>
                    {chartData.completed.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS.completed[index % CHART_COLORS.completed.length]} />
                    ))}
                 </Pie>
            </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="% GASTADO">
        <ResponsiveContainer>
            <PieChart>
                 <Tooltip content={<CustomTooltip />} />
                 <Pie data={chartData.spent} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={({ name, percent }) => `${(percent * 100).toFixed(2)}%`}>
                    {chartData.spent.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS.spent[index % CHART_COLORS.spent.length]} />
                    ))}
                 </Pie>
            </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </>
  );
};

export default SummaryCharts;
