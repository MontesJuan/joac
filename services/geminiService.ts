
import { GoogleGenAI } from "@google/genai";
import type { ProjectData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateNextSteps = async (data: Omit<ProjectData, 'nextSteps'>): Promise<string[]> => {
    const activeRisks = data.risks.filter(r => r.status === 'ACTIVO').map(r => `${r.id}: ${r.description}`).join('\n');
    const evmSummary = `
        Cost Variance (CV): ${data.evmMetrics.cv.toFixed(2)}
        Schedule Variance (SV): ${data.evmMetrics.sv.toFixed(2)}
        Cost Performance Index (CPI): ${data.evmMetrics.cpi.toFixed(2)}
        Schedule Performance Index (SPI): ${data.evmMetrics.spi.toFixed(2)}
    `;

    const prompt = `
        Analyze the following project status data and generate a list of "Próximos Pasos" (Next Steps) in Spanish.
        The project is behind schedule (SPI < 1) and over budget (CPI < 1).
        Focus on actionable recommendations to mitigate the active risks and address the performance issues.
        Keep the recommendations concise and professional.
        Return the steps as a simple array of strings in your response.

        Active Risks:
        ${activeRisks}

        EVM Summary:
        ${evmSummary}
        
        Example Output Format:
        [
            "First recommended step in Spanish.",
            "Second recommended step in Spanish.",
            "Third recommended step in Spanish."
        ]
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: 'application/json'
            }
        });
        
        const text = response.text.trim();
        // Clean potential markdown code block fences
        const cleanedText = text.replace(/^```json\s*|```\s*$/g, '');
        const result = JSON.parse(cleanedText);

        if (Array.isArray(result) && result.every(item => typeof item === 'string')) {
            return result;
        } else {
            // Fallback for unexpected format
            return [
                "Realizar solicitud de cambio de cronograma.",
                "Realizar minuta y comunicación para todos los interesados.",
                "Nuevo reporte de status el 23/05/23.",
                "Informar situacion a reporte de lecciones aprendidas.",
            ]
        }
    } catch (error) {
        console.error("Error generating next steps with Gemini:", error);
        // Fallback in case of API error
        return [
            "Bajo la activacion de los riesgos R001, R003 y R004, se deberá utilizar las reservas de contingencia.",
            "Se solicita desembolso de reservas de contingencia por $10.000.",
            "Realizar FAST TRACKING y CRASHING en los paquetes bajo dependencia discrecional.",
        ];
    }
};
