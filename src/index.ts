import { SourceLanguage, TranslateLanguage, TranslateResult } from './type';

/**
 * Translates text from a source language to a target language using Google Translate API.
 *
 * @param text - The text to be translated
 * @param sourceLanguage - The language code of the original text (e.g., 'en', 'vi')
 * @param translateLanguage - The language code to translate the text into (e.g., 'en', 'vi')
 * @returns A promise resolving to the translation result, including the translated text,
 * the detected source language, and optional error information
 */
async function Translate(
    text: string,
    sourceLanguage: SourceLanguage,
    translateLanguage: TranslateLanguage
): Promise<TranslateResult> {
    const result: TranslateResult = {
        text,
        result: '',
        source_language: sourceLanguage,
        translate_language: translateLanguage,
    };

    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${translateLanguage}&dt=t&q=${encodeURIComponent(
            text
        )}`;
        const res = await fetch(url, { method: 'GET', redirect: 'follow' });

        if (res.ok) {
            const data = await res.json();
            result.result = data?.[0]?.[0]?.[0] || '';
            result.source_language = data?.[2] || sourceLanguage;
        }

        return result;
    } catch (error: any) {
        result.errors = {
            message: 'Error: ' + error?.message,
            code: -1,
        };
        return result;
    }
}

export { Translate };
