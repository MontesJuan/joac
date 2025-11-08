
import type { MilestoneStatus, RiskStatus } from './types';

export const STATUS_COLORS: Record<MilestoneStatus, string> = {
  COMPLETO: 'bg-green-500 text-white',
  INICIADA: 'bg-yellow-500 text-black',
  PENDIENTE: 'bg-blue-500 text-white',
};

export const RISK_STATUS_COLORS: Record<RiskStatus, string> = {
  ACTIVO: 'bg-red-600 text-white',
  SUPERADO: 'bg-green-600 text-white',
  '-': 'bg-gray-600 text-gray-300',
};

export const STEPPER_COLORS: Record<MilestoneStatus, string> = {
    COMPLETO: 'bg-green-500',
    INICIADA: 'bg-yellow-500',
    PENDIENTE: 'bg-blue-500'
};

export const CHART_COLORS = {
    tasks: ['#10B981', '#3B82F6', '#F59E0B'], // green, blue, yellow
    completed: ['#10B981', '#60A5FA'], // green, light-blue
    spent: ['#10B981', '#60A5FA'], // green, light-blue
};
