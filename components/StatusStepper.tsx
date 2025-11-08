
import React from 'react';
import { STEPPER_COLORS } from '../constants';
import type { MilestoneStatus } from '../types';

interface StatusStepperProps {
  statuses: MilestoneStatus[];
}

const StatusStepper: React.FC<StatusStepperProps> = ({ statuses }) => {
  return (
    <div className="flex items-center w-full">
      {statuses.map((status, index) => {
        const colorClass = STEPPER_COLORS[status];
        const isLast = index === statuses.length - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`w-24 h-10 flex items-center justify-center text-sm font-bold ${colorClass} text-white relative`}>
                <div className="z-10">{`H-${index + 1}`}</div>
                {!isLast && (
                   <div className={`absolute right-0 top-0 h-full w-5 ${colorClass}`} style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                )}
                 {index !== 0 && (
                   <div className={`absolute left-0 top-0 h-full w-5 bg-gray-800/50`} style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}></div>
                )}
              </div>
            </div>
             {!isLast && (
              <div className="flex-1 h-0.5 bg-gray-600"></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StatusStepper;
