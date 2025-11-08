
import React from 'react';

interface NextStepsProps {
  steps: string[];
}

const NextSteps: React.FC<NextStepsProps> = ({ steps }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">PROXIMOS PASOS (Generado por IA)</h3>
      <ul className="list-disc list-inside space-y-2">
        {steps.map((step, index) => (
          <li key={index} className="text-gray-300">{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default NextSteps;
