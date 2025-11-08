
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { EvmDataPoint, EvmMetrics } from '../types';

interface EvmChartProps {
  evmData: EvmDataPoint[];
  evmMetrics: EvmMetrics;
}

const formatCurrency = (value: number) => `$ ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const MetricCard: React.FC<{ label: string; value: string | number; isNegative?: boolean }> = ({ label, value, isNegative }) => (
    <div className="flex justify-between p-2">
        <span className="text-sm text-gray-400">{label}</span>
        <span className={`text-sm font-bold ${isNegative ? 'text-red-400' : 'text-white'}`}>{value}</span>
    </div>
);

const EvmChart: React.FC<EvmChartProps> = ({ evmData, evmMetrics }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">SALUD DEL PROYECTO (EVM)</h3>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <LineChart data={evmData} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
            <XAxis dataKey="name" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" tickFormatter={(value) => `$${Number(value)/1000}k`} />
            <Tooltip
                contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', border: '1px solid #4A5568', color: '#FFF' }}
                formatter={(value: number) => formatCurrency(value)}
            />
            <Legend />
            <Line type="monotone" dataKey="BAC" stroke="#4C51BF" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="PV" stroke="#F59E0B" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="EV" stroke="#E5E7EB" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="AC" stroke="#10B981" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-2 border-t border-gray-700 pt-4">
        <MetricCard label="EV" value={formatCurrency(evmMetrics.ev)} />
        <MetricCard label="AC" value={formatCurrency(evmMetrics.ac)} />
        <MetricCard label="PV" value={formatCurrency(evmMetrics.pv)} />
        <MetricCard label="CPI" value={evmMetrics.cpi.toFixed(2)} isNegative={evmMetrics.cpi < 1}/>
        <MetricCard label="SPI" value={evmMetrics.spi.toFixed(2)} isNegative={evmMetrics.spi < 1}/>
        <MetricCard label="CV" value={formatCurrency(evmMetrics.cv)} isNegative={evmMetrics.cv < 0}/>
        <MetricCard label="SV" value={formatCurrency(evmMetrics.sv)} isNegative={evmMetrics.sv < 0}/>
        <MetricCard label="EAC" value={formatCurrency(evmMetrics.eac)} />
        <MetricCard label="ETC" value={formatCurrency(evmMetrics.etc)} />
        <MetricCard label="VAC" value={formatCurrency(evmMetrics.vac)} isNegative={evmMetrics.vac < 0}/>
      </div>
      <div className="mt-4 border-t border-gray-700 pt-4">
        <h4 className="text-md font-semibold text-gray-300">PROYECCIONES DEL PROYECTO</h4>
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
           <MetricCard label="TCPI" value={`${(evmMetrics.tcpi * 100).toFixed(2)}%`} isNegative={evmMetrics.tcpi > 1}/>
        </div>
      </div>
    </div>
  );
};

export default EvmChart;
