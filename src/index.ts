import { SourceLanguage, Translate, TranslateLanguage } from './type';

const Translate: (
    text: string,
    sourceLanguage: SourceLanguage,
    translateLanguage: TranslateLanguage
) => Promise<Translate> = async (
    text: string,
    sourceLanguage: SourceLanguage,
    translateLanguage: TranslateLanguage
) => {
    const result: Translate = {
        text,
        result: '',
        sourceLanguage: sourceLanguage,
        translateLanguage: translateLanguage,
    };
    try {
        const res = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${translateLanguage}&dt=t&q=${text}`,
            {
                method: 'GET',
                redirect: 'follow',
            }
        );
        if (res.ok) {
            const data = await res.json();
            result.result = data?.[0]?.[0]?.[0] || '';
        }
        return result;
    } catch (error: any) {
        result.errors = {
            message: 'Error: ' + error?.message,
            code: -1,
        };
        return result;
    }
};
export { Translate };
