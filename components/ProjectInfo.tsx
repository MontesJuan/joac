
import React from 'react';
import type { ProjectInfo as ProjectInfoType } from '../types';

interface ProjectInfoProps {
  info: ProjectInfoType;
}

const InfoRow: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 px-4 border-b border-gray-700 last:border-b-0">
    <span className="text-sm font-medium text-gray-400">{label}</span>
    <span className="text-sm font-semibold text-white">{value}</span>
  </div>
);

const ProjectInfo: React.FC<ProjectInfoProps> = ({ info }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
      <div className="bg-gray-900/70 p-4">
        <h2 className="text-lg font-semibold text-gray-200">INFORMACION DEL PROYECTO</h2>
      </div>
      <div className="divide-y divide-gray-700">
        <InfoRow label="NOMBRE DEL PROYECTO" value={info.projectName} />
        <InfoRow label="FECHA DEL REPORTE" value={info.reportDate} />
        <InfoRow label="REPORTE N°" value={info.reportNumber} />
        <InfoRow label="BAC" value={`$ ${info.bac.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
        <InfoRow label="PROJECT MANAGER" value={info.projectManager} />
        <InfoRow label="PROJECT SPONSOR" value={info.projectSponsor} />
      </div>
    </div>
  );
};

export default ProjectInfo;
