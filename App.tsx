
import React, { useState, useCallback } from 'react';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard';
import { processFiles } from './services/dataProcessor';
import { generateNextSteps } from './services/geminiService';
import type { ProjectData } from './types';

const App: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileAnalysis = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Step 1: Mock file processing
      const processedData = processFiles();
      
      // Step 2: Use Gemini to generate next steps based on processed data
      const nextSteps = await generateNextSteps(processedData);
      
      // Step 3: Combine data and update state
      setProjectData({ ...processedData, nextSteps });

    } catch (err) {
      console.error(err);
      setError('Failed to analyze project data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleReset = () => {
    setProjectData(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">REPORTE DE ESTADO</h1>
            <p className="text-gray-400">Panel de control de salud del proyecto generado por IA</p>
          </div>
          {projectData && (
             <button
                onClick={handleReset}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
                Analizar Nuevo Proyecto
            </button>
          )}
        </header>
        
        <main>
          {!projectData ? (
            <FileUpload onAnalyze={handleFileAnalysis} isLoading={isLoading} />
          ) : (
            <Dashboard data={projectData} />
          )}

          {error && (
            <div className="mt-4 bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
