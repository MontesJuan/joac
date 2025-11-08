
import React, { useState } from 'react';
import { DocumentIcon } from './icons/DocumentIcon';
import { XMarkIcon } from './icons/XMarkIcon';

interface FileUploadProps {
  onAnalyze: () => void;
  isLoading: boolean;
}

const FileInput: React.FC<{ id: string; label: string; file: File | null; onFileChange: (id: string, file: File | null) => void }> = ({ id, label, file, onFileChange }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onFileChange(id, e.target.files[0]);
        }
    };

    const handleRemoveFile = () => {
        onFileChange(id, null);
    };

    return (
        <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-6 text-center transition-all hover:border-indigo-500 hover:bg-gray-700">
            {!file ? (
                <>
                    <label htmlFor={id} className="cursor-pointer">
                        <DocumentIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-white">{label}</h3>
                        <p className="mt-1 text-xs text-gray-500">.doc o .xml</p>
                    </label>
                    <input id={id} name={id} type="file" className="sr-only" onChange={handleFileChange} accept=".doc,.docx,.xml" />
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                     <DocumentIcon className="mx-auto h-10 w-10 text-indigo-400" />
                    <p className="text-xs text-gray-300 mt-2 break-all">{file.name}</p>
                    <button onClick={handleRemoveFile} className="mt-2 text-red-400 hover:text-red-300">
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                </div>
            )}
        </div>
    );
};


const FileUpload: React.FC<FileUploadProps> = ({ onAnalyze, isLoading }) => {
    const [files, setFiles] = useState<Record<string, File | null>>({
        file1: null,
        file2: null,
        file3: null,
        file4: null,
    });

    const handleFileChange = (id: string, file: File | null) => {
        setFiles(prev => ({ ...prev, [id]: file }));
    };

    const allFilesUploaded = Object.values(files).every(file => file !== null);

    return (
        <div className="bg-gray-800/50 rounded-xl p-8 shadow-2xl border border-gray-700">
            <h2 className="text-xl font-semibold text-center mb-2">Analizar Archivos de Proyecto</h2>
            <p className="text-center text-gray-400 mb-8">Cargue los 4 documentos requeridos para generar el informe de estado.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <FileInput id="file1" label="Progreso Tareas (.xml)" file={files.file1} onFileChange={handleFileChange} />
                <FileInput id="file2" label="Costos Incurridos (.xml)" file={files.file2} onFileChange={handleFileChange} />
                <FileInput id="file3" label="Registro de Hitos (.doc)" file={files.file3} onFileChange={handleFileChange} />
                <FileInput id="file4" label="Informe de Riesgos (.doc)" file={files.file4} onFileChange={handleFileChange} />
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={onAnalyze}
                    disabled={!allFilesUploaded || isLoading}
                    className="w-full sm:w-auto px-12 py-3 bg-indigo-600 text-white font-bold rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-indigo-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Analizando...
                        </div>
                    ) : 'Generar Reporte'}
                </button>
            </div>
        </div>
    );
};

export default FileUpload;
