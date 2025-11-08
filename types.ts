
export interface ProjectInfo {
  projectName: string;
  reportDate: string;
  reportNumber: number;
  bac: number;
  projectManager: string;
  projectSponsor: string;
}

export type MilestoneStatus = 'COMPLETO' | 'INICIADA' | 'PENDIENTE';

export interface Milestone {
  id: string;
  name: string;
  status: MilestoneStatus;
}

export type RiskStatus = 'ACTIVO' | 'SUPERADO' | '-';

export interface Risk {
  id: string;
  description: string;
  status: RiskStatus;
}

export interface EvmDataPoint {
  name: string;
  BAC: number;
  PV: number;
  EV: number;
  AC: number;
}

export interface EvmMetrics {
  ev: number;
  ac: number;
  pv: number;
  cv: number;
  sv: number;
  cpi: number;
  spi: number;
  eac: number;
  etc: number;
  vac: number;
  tcpi: number;
}

export interface ChartData {
  tasks: { name: string; value: number }[];
  completed: { name: string; value: number }[];
  spent: { name: string; value: number }[];
}

export interface ProjectData {
  projectInfo: ProjectInfo;
  milestones: Milestone[];
  risks: Risk[];
  evmData: EvmDataPoint[];
  evmMetrics: EvmMetrics;
  charts: ChartData;
  generalStatus: MilestoneStatus[];
  nextSteps: string[];
}
