
import type { ProjectData } from '../types';

// This is a mock function. In a real application, this would involve
// complex logic to parse .doc and .xml files.
export const processFiles = (): Omit<ProjectData, 'nextSteps'> => {
  // Simulating data extraction from files
  return {
    projectInfo: {
      projectName: 'APRA',
      reportDate: '7/5/2023',
      reportNumber: 4,
      bac: 168262.00,
      projectManager: 'JOAQUIN SOUSA',
      projectSponsor: 'RW',
    },
    generalStatus: ['COMPLETO', 'COMPLETO', 'INICIADA', 'PENDIENTE', 'PENDIENTE', 'PENDIENTE'],
    charts: {
        tasks: [
            { name: 'Completed', value: 29 },
            { name: 'In Progress', value: 4 },
            { name: 'Pending', value: 27 },
        ],
        completed: [
            { name: 'Completed', value: 42.07 },
            { name: 'Remaining', value: 57.93 },
        ],
        spent: [
            { name: 'Spent', value: 44.49 },
            { name: 'Budget Remaining', value: 55.51 },
        ],
    },
    evmData: [
      { name: 'ene-23', BAC: 25000, PV: 20000, EV: 18000, AC: 22000 },
      { name: 'feb-23', BAC: 50000, PV: 40000, EV: 35000, AC: 38000 },
      { name: 'mar-23', BAC: 75000, PV: 60000, EV: 55000, AC: 59000 },
      { name: 'abr-23', BAC: 100000, PV: 80000, EV: 70000, AC: 75000 },
      { name: 'may-23', BAC: 125000, PV: 100000, EV: 95000, AC: 105000 },
      { name: 'jun-23', BAC: 168262, PV: 120000, EV: 115000, AC: 122000 },
    ],
    evmMetrics: {
        ev: 62884.60,
        ac: 66500.00,
        pv: 68657.60,
        cv: -3615.40,
        sv: -5773.00,
        cpi: 0.95,
        spi: 0.92,
        eac: 177935.82,
        etc: 111435.82,
        vac: -9673.82,
        tcpi: 1.0355,
    },
    milestones: [
      { id: 'H01', name: 'Aprobación Acta Constitutiva', status: 'COMPLETO' },
      { id: 'H02', name: 'Aprobación Plan de Gestion', status: 'COMPLETO' },
      { id: 'H03', name: 'Aprobación Master Plan', status: 'INICIADA' },
      { id: 'H04', name: 'Inicio primera academia', status: 'PENDIENTE' },
      { id: 'H05', name: 'Fin de primera academia', status: 'PENDIENTE' },
      { id: 'H06', name: 'Entrega y Cierre de Proyecto', status: 'PENDIENTE' },
    ],
    risks: [
      { id: 'R001', description: 'Dificultades para encontrar personal calificado y experimentado en la enseñanza de rugby...', status: 'ACTIVO' },
      { id: 'R002', description: 'Debido a procesos inadecuados de aseguramiento y control de calidad...', status: 'ACTIVO' },
      { id: 'R003', description: 'Dificultades para encontrar personal calificado y experimentado...', status: 'SUPERADO' },
      { id: 'R004', description: 'Debido a una definición incompleta o ambigua en el SOW de adquisiciones...', status: 'SUPERADO' },
      { id: 'R005', description: 'Demoras en la adquisición de elementos necesarios para los entrenamientos...', status: 'SUPERADO' },
      { id: 'R009', description: 'El personal contratado para llevar adelante la academia no tiene incorporado una figura de renombre', status: 'ACTIVO'},
      { id: 'R010', description: 'Debido a problemas de fabrica, la indumentaria entregada no fue la solicitada', status: '-'},
    ],
  };
};
