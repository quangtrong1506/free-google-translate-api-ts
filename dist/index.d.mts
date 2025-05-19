type Language = 'ab' | 'ace' | 'ach' | 'af' | 'sq' | 'alz' | 'am' | 'ar' | 'hy' | 'as' | 'awa' | 'ay' | 'az' | 'ban' | 'bm' | 'ba' | 'eu' | 'btx' | 'bts' | 'bbc' | 'be' | 'bem' | 'bn' | 'bew' | 'bho' | 'bik' | 'bs' | 'br' | 'bg' | 'bua' | 'yue' | 'ca' | 'ceb' | 'ny' | 'zh-CN' | 'zh-TW' | 'cv' | 'co' | 'crh' | 'hr' | 'cs' | 'da' | 'din' | 'dv' | 'doi' | 'dov' | 'nl' | 'dz' | 'en' | 'eo' | 'et' | 'ee' | 'fj' | 'fil' | 'fi' | 'fr' | 'fr-FR' | 'fr-CA' | 'fy' | 'ff' | 'gaa' | 'gl' | 'lg' | 'ka' | 'de' | 'el' | 'gn' | 'gu' | 'ht' | 'cnh' | 'ha' | 'haw' | 'iw' | 'hil' | 'hi' | 'hmn' | 'hu' | 'hrx' | 'is' | 'ig' | 'ilo' | 'id' | 'ga' | 'it' | 'ja' | 'jv' | 'kn' | 'pam' | 'kk' | 'km' | 'cgg' | 'rw' | 'ktu' | 'gom' | 'ko' | 'kri' | 'ku' | 'ckb' | 'ky' | 'lo' | 'ltg' | 'la' | 'lv' | 'lij' | 'li' | 'ln' | 'lt' | 'lmo' | 'luo' | 'lb' | 'mk' | 'mai' | 'mak' | 'mg' | 'ms' | 'ms-Arab' | 'ml' | 'mt' | 'mi' | 'mr' | 'chm' | 'mni-Mtei' | 'min' | 'lus' | 'mn' | 'my' | 'nr' | 'new' | 'ne' | 'nso' | 'no' | 'nus' | 'oc' | 'or' | 'om' | 'pag' | 'pap' | 'ps' | 'fa' | 'pl' | 'pt' | 'pt-PT' | 'pt-BR' | 'pa' | 'pa-Arab' | 'qu' | 'rom' | 'ro' | 'rn' | 'ru' | 'sm' | 'sg' | 'sa' | 'gd' | 'sr' | 'st' | 'crs' | 'shn' | 'sn' | 'scn' | 'szl' | 'sd' | 'si' | 'sk' | 'sl' | 'so' | 'es' | 'su' | 'sw' | 'ss' | 'sv' | 'tg' | 'ta' | 'tt' | 'te' | 'tet' | 'th' | 'ti' | 'ts' | 'tn' | 'tr' | 'tk' | 'ak' | 'uk' | 'ur' | 'ug' | 'uz' | 'vi' | 'cy' | 'xh' | 'yi' | 'yo' | 'yua' | 'zu';
type SourceLanguage = 'auto' | Language;
type TranslateLanguage = Language;
/**
 * Represents the result of a translation operation.
 */
type TranslateResult = {
    /**
     * The original text to be translated.
     */
    text: string;
    /**
     * The translated text result.
     */
    result: string;
    /**
     * The language code of the detected or provided source language (e.g., 'en', 'vi').
     */
    source_language: SourceLanguage;
    /**
     * The language code of the target language to translate into (e.g., 'en', 'vi').
     */
    translate_language: TranslateLanguage;
    /**
     * Optional error object, included if the translation request fails.
     */
    errors?: {
        /**
         * A descriptive error message.
         */
        message: string;
        /**
         * A custom error code. Default is -1 for unknown errors.
         */
        code: number;
    };
};

/**
 * Translates text from a source language to a target language using Google Translate API.
 *
 * @param text - The text to be translated
 * @param sourceLanguage - The language code of the original text (e.g., 'en', 'vi')
 * @param translateLanguage - The language code to translate the text into (e.g., 'en', 'vi')
 * @returns A promise resolving to the translation result, including the translated text,
 * the detected source language, and optional error information
 */
declare function Translate(text: string, sourceLanguage: SourceLanguage, translateLanguage: TranslateLanguage): Promise<TranslateResult>;

export { Translate };
