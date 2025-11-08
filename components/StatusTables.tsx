
import React from 'react';
import type { Milestone, Risk } from '../types';
import { STATUS_COLORS, RISK_STATUS_COLORS } from '../constants';

interface StatusTablesProps {
  milestones: Milestone[];
  risks: Risk[];
}

const StatusTables: React.FC<StatusTablesProps> = ({ milestones, risks }) => {
  return (
    <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
             <div className="bg-gray-900/70 p-4">
                <h3 className="text-lg font-semibold text-gray-200">STATUS DE HITOS</h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-900/50">
                        <tr>
                            <th scope="col" className="px-4 py-3">ID</th>
                            <th scope="col" className="px-4 py-3">HITO</th>
                            <th scope="col" className="px-4 py-3 text-center">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {milestones.map((milestone) => (
                            <tr key={milestone.id} className="border-b border-gray-700 hover:bg-gray-800">
                                <td className="px-4 py-3 font-medium text-gray-300">{milestone.id}</td>
                                <td className="px-4 py-3 text-white">{milestone.name}</td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`px-2 py-1 text-xs font-bold rounded-md ${STATUS_COLORS[milestone.status]}`}>
                                        {milestone.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
            <div className="bg-gray-900/70 p-4">
                <h3 className="text-lg font-semibold text-gray-200">STATUS DE RIESGOS</h3>
            </div>
            <div className="overflow-x-auto max-h-96">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-900/50 sticky top-0">
                        <tr>
                            <th scope="col" className="px-4 py-3">ID</th>
                            <th scope="col" className="px-4 py-3">DESCRIPCION DEL RIESGO</th>
                            <th scope="col" className="px-4 py-3 text-center">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {risks.map((risk) => (
                            <tr key={risk.id} className="border-b border-gray-700 hover:bg-gray-800">
                                <td className="px-4 py-3 font-medium text-gray-300">{risk.id}</td>
                                <td className="px-4 py-3 text-white">{risk.description}</td>
                                <td className="px-4 py-3 text-center">
                                     <span className={`px-2 py-1 text-xs font-bold rounded-md ${RISK_STATUS_COLORS[risk.status]}`}>
                                        {risk.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default StatusTables;
