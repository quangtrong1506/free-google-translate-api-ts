export type Language =
    | 'ab' // Abkhaz
    | 'ace' // Acehnese
    | 'ach' // Acholi
    | 'af' // Afrikaans
    | 'sq' // Albanian
    | 'alz' // Alur
    | 'am' // Amharic
    | 'ar' // Arabic
    | 'hy' // Armenian
    | 'as' // Assamese
    | 'awa' // Awadhi
    | 'ay' // Aymara
    | 'az' // Azerbaijani
    | 'ban' // Balinese
    | 'bm' // Bambara
    | 'ba' // Bashkir
    | 'eu' // Basque
    | 'btx' // Batak Karo
    | 'bts' // Batak Simalungun
    | 'bbc' // Batak Toba
    | 'be' // Belarusian
    | 'bem' // Bemba
    | 'bn' // Bengali
    | 'bew' // Betawi
    | 'bho' // Bhojpuri
    | 'bik' // Bikol
    | 'bs' // Bosnian
    | 'br' // Breton
    | 'bg' // Bulgarian
    | 'bua' // Buryat
    | 'yue' // Cantonese
    | 'ca' // Catalan
    | 'ceb' // Cebuano
    | 'ny' // Chichewa (Nyanja)
    | 'zh-CN' // Chinese (Simplified)
    | 'zh-TW' // Chinese (Traditional)
    | 'cv' // Chuvash
    | 'co' // Corsican
    | 'crh' // Crimean Tatar
    | 'hr' // Croatian
    | 'cs' // Czech
    | 'da' // Danish
    | 'din' // Dinka
    | 'dv' // Divehi
    | 'doi' // Dogri
    | 'dov' // Dombe
    | 'nl' // Dutch
    | 'dz' // Dzongkha
    | 'en' // English
    | 'eo' // Esperanto
    | 'et' // Estonian
    | 'ee' // Ewe
    | 'fj' // Fijian
    | 'fil' // Filipino (Tagalog)
    | 'fi' // Finnish
    | 'fr' // French
    | 'fr-FR' // French (French)
    | 'fr-CA' // French (Canadian)
    | 'fy' // Frisian
    | 'ff' // Fulfulde
    | 'gaa' // Ga
    | 'gl' // Galician
    | 'lg' // Ganda (Luganda)
    | 'ka' // Georgian
    | 'de' // German
    | 'el' // Greek
    | 'gn' // Guarani
    | 'gu' // Gujarati
    | 'ht' // Haitian Creole
    | 'cnh' // Hakha Chin
    | 'ha' // Hausa
    | 'haw' // Hawaiian
    | 'iw' // Hebrew
    | 'hil' // Hiligaynon
    | 'hi' // Hindi
    | 'hmn' // Hmong
    | 'hu' // Hungarian
    | 'hrx' // Hunsrik
    | 'is' // Icelandic
    | 'ig' // Igbo
    | 'ilo' // Iloko
    | 'id' // Indonesian
    | 'ga' // Irish
    | 'it' // Italian
    | 'ja' // Japanese
    | 'jv' // Javanese
    | 'kn' // Kannada
    | 'pam' // Kapampangan
    | 'kk' // Kazakh
    | 'km' // Khmer
    | 'cgg' // Kiga
    | 'rw' // Kinyarwanda
    | 'ktu' // Kituba
    | 'gom' // Konkani
    | 'ko' // Korean
    | 'kri' // Krio
    | 'ku' // Kurdish (Kurmanji)
    | 'ckb' // Kurdish (Sorani)
    | 'ky' // Kyrgyz
    | 'lo' // Lao
    | 'ltg' // Latgalian
    | 'la' // Latin
    | 'lv' // Latvian
    | 'lij' // Ligurian
    | 'li' // Limburgan
    | 'ln' // Lingala
    | 'lt' // Lithuanian
    | 'lmo' // Lombard
    | 'luo' // Luo
    | 'lb' // Luxembourgish
    | 'mk' // Macedonian
    | 'mai' // Maithili
    | 'mak' // Makassar
    | 'mg' // Malagasy
    | 'ms' // Malay
    | 'ms-Arab' // Malay (Jawi)
    | 'ml' // Malayalam
    | 'mt' // Maltese
    | 'mi' // Maori
    | 'mr' // Marathi
    | 'chm' // Meadow Mari
    | 'mni-Mtei' // Meiteilon (Manipuri)
    | 'min' // Minang
    | 'lus' // Mizo
    | 'mn' // Mongolian
    | 'my' // Myanmar (Burmese)
    | 'nr' // Ndebele (South)
    | 'new' // Nepalbhasa (Newari)
    | 'ne' // Nepali
    | 'nso' // Northern Sotho (Sepedi)
    | 'no' // Norwegian
    | 'nus' // Nuer
    | 'oc' // Occitan
    | 'or' // Odia (Oriya)
    | 'om' // Oromo
    | 'pag' // Pangasinan
    | 'pap' // Papiamento
    | 'ps' // Pashto
    | 'fa' // Persian
    | 'pl' // Polish
    | 'pt' // Portuguese
    | 'pt-PT' // Portuguese (Portugal)
    | 'pt-BR' // Portuguese (Brazil)
    | 'pa' // Punjabi
    | 'pa-Arab' // Punjabi (Shahmukhi)
    | 'qu' // Quechua
    | 'rom' // Romani
    | 'ro' // Romanian
    | 'rn' // Rundi
    | 'ru' // Russian
    | 'sm' // Samoan
    | 'sg' // Sango
    | 'sa' // Sanskrit
    | 'gd' // Scots Gaelic
    | 'sr' // Serbian
    | 'st' // Sesotho
    | 'crs' // Seychellois Creole
    | 'shn' // Shan
    | 'sn' // Shona
    | 'scn' // Sicilian
    | 'szl' // Silesian
    | 'sd' // Sindhi
    | 'si' // Sinhala (Sinhalese)
    | 'sk' // Slovak
    | 'sl' // Slovenian
    | 'so' // Somali
    | 'es' // Spanish
    | 'su' // Sundanese
    | 'sw' // Swahili
    | 'ss' // Swati
    | 'sv' // Swedish
    | 'tg' // Tajik
    | 'ta' // Tamil
    | 'tt' // Tatar
    | 'te' // Telugu
    | 'tet' // Tetum
    | 'th' // Thai
    | 'ti' // Tigrinya
    | 'ts' // Tsonga
    | 'tn' // Tswana
    | 'tr' // Turkish
    | 'tk' // Turkmen
    | 'ak' // Twi (Akan)
    | 'uk' // Ukrainian
    | 'ur' // Urdu
    | 'ug' // Uyghur
    | 'uz' // Uzbek
    | 'vi' // Vietnamese
    | 'cy' // Welsh
    | 'xh' // Xhosa
    | 'yi' // Yiddish
    | 'yo' // Yoruba
    | 'yua' // Yucatec Maya
    | 'zu'; // Zulu

export type LanguageDetail = {
    code: Language;
    name: string;
};
export const languages: LanguageDetail[] = [
    { code: 'ab', name: 'Abkhaz' },
    { code: 'ace', name: 'Acehnese' },
    { code: 'ach', name: 'Acholi' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'sq', name: 'Albanian' },
    { code: 'alz', name: 'Alur' },
    { code: 'am', name: 'Amharic' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hy', name: 'Armenian' },
    { code: 'as', name: 'Assamese' },
    { code: 'awa', name: 'Awadhi' },
    { code: 'ay', name: 'Aymara' },
    { code: 'az', name: 'Azerbaijani' },
    { code: 'ban', name: 'Balinese' },
    { code: 'bm', name: 'Bambara' },
    { code: 'ba', name: 'Bashkir' },
    { code: 'eu', name: 'Basque' },
    { code: 'btx', name: 'Batak Karo' },
    { code: 'bts', name: 'Batak Simalungun' },
    { code: 'bbc', name: 'Batak Toba' },
    { code: 'be', name: 'Belarusian' },
    { code: 'bem', name: 'Bemba' },
    { code: 'bn', name: 'Bengali' },
    { code: 'bew', name: 'Betawi' },
    { code: 'bho', name: 'Bhojpuri' },
    { code: 'bik', name: 'Bikol' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'br', name: 'Breton' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'bua', name: 'Buryat' },
    { code: 'yue', name: 'Cantonese' },
    { code: 'ca', name: 'Catalan' },
    { code: 'ceb', name: 'Cebuano' },
    { code: 'ny', name: 'Chichewa (Nyanja)' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'zh-TW', name: 'Chinese (Traditional)' },
    { code: 'cv', name: 'Chuvash' },
    { code: 'co', name: 'Corsican' },
    { code: 'crh', name: 'Crimean Tatar' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'din', name: 'Dinka' },
    { code: 'dv', name: 'Divehi' },
    { code: 'doi', name: 'Dogri' },
    { code: 'dov', name: 'Dombe' },
    { code: 'nl', name: 'Dutch' },
    { code: 'dz', name: 'Dzongkha' },
    { code: 'en', name: 'English' },
    { code: 'eo', name: 'Esperanto' },
    { code: 'et', name: 'Estonian' },
    { code: 'ee', name: 'Ewe' },
    { code: 'fj', name: 'Fijian' },
    { code: 'fil', name: 'Filipino (Tagalog)' },
    { code: 'fi', name: 'Finnish' },
    { code: 'fr', name: 'French' },
    { code: 'fr-FR', name: 'French (French)' },
    { code: 'fr-CA', name: 'French (Canadian)' },
    { code: 'fy', name: 'Frisian' },
    { code: 'ff', name: 'Fulfulde' },
    { code: 'gaa', name: 'Ga' },
    { code: 'gl', name: 'Galician' },
    { code: 'lg', name: 'Ganda (Luganda)' },
    { code: 'ka', name: 'Georgian' },
    { code: 'de', name: 'German' },
    { code: 'el', name: 'Greek' },
    { code: 'gn', name: 'Guarani' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ht', name: 'Haitian Creole' },
    { code: 'cnh', name: 'Hakha Chin' },
    { code: 'ha', name: 'Hausa' },
    { code: 'haw', name: 'Hawaiian' },
    { code: 'iw', name: 'Hebrew' },
    { code: 'hil', name: 'Hiligaynon' },
    { code: 'hi', name: 'Hindi' },
    { code: 'hmn', name: 'Hmong' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'hrx', name: 'Hunsrik' },
    { code: 'is', name: 'Icelandic' },
    { code: 'ig', name: 'Igbo' },
    { code: 'ilo', name: 'Iloko' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ga', name: 'Irish' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'jv', name: 'Javanese' },
    { code: 'kn', name: 'Kannada' },
    { code: 'pam', name: 'Kapampangan' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'km', name: 'Khmer' },
    { code: 'cgg', name: 'Kiga' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'ktu', name: 'Kituba' },
    { code: 'gom', name: 'Konkani' },
    { code: 'ko', name: 'Korean' },
    { code: 'kri', name: 'Krio' },
    { code: 'ku', name: 'Kurdish (Kurmanji)' },
    { code: 'ckb', name: 'Kurdish (Sorani)' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'lo', name: 'Lao' },
    { code: 'ltg', name: 'Latgalian' },
    { code: 'la', name: 'Latin' },
    { code: 'lv', name: 'Latvian' },
    { code: 'lij', name: 'Ligurian' },
    { code: 'li', name: 'Limburgan' },
    { code: 'ln', name: 'Lingala' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lmo', name: 'Lombard' },
    { code: 'luo', name: 'Luo' },
    { code: 'lb', name: 'Luxembourgish' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'mai', name: 'Maithili' },
    { code: 'mak', name: 'Makassar' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'ms', name: 'Malay' },
    { code: 'ms-Arab', name: 'Malay (Jawi)' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'mt', name: 'Maltese' },
    { code: 'mi', name: 'Maori' },
    { code: 'mr', name: 'Marathi' },
    { code: 'chm', name: 'Meadow Mari' },
    { code: 'mni-Mtei', name: 'Meiteilon (Manipuri)' },
    { code: 'min', name: 'Minang' },
    { code: 'lus', name: 'Mizo' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'my', name: 'Myanmar (Burmese)' },
    { code: 'nr', name: 'Ndebele (South)' },
    { code: 'new', name: 'Nepalbhasa (Newari)' },
    { code: 'ne', name: 'Nepali' },
    { code: 'nso', name: 'Northern Sotho (Sepedi)' },
    { code: 'no', name: 'Norwegian' },
    { code: 'nus', name: 'Nuer' },
    { code: 'oc', name: 'Occitan' },
    { code: 'or', name: 'Odia (Oriya)' },
    { code: 'om', name: 'Oromo' },
    { code: 'pag', name: 'Pangasinan' },
    { code: 'pap', name: 'Papiamento' },
    { code: 'ps', name: 'Pashto' },
    { code: 'fa', name: 'Persian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'pt-PT', name: 'Portuguese (Portugal)' },
    { code: 'pt-BR', name: 'Portuguese (Brazil)' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'pa-Arab', name: 'Punjabi (Shahmukhi)' },
    { code: 'qu', name: 'Quechua' },
    { code: 'rom', name: 'Romani' },
    { code: 'ro', name: 'Romanian' },
    { code: 'rn', name: 'Rundi' },
    { code: 'ru', name: 'Russian' },
    { code: 'sm', name: 'Samoan' },
    { code: 'sg', name: 'Sango' },
    { code: 'sa', name: 'Sanskrit' },
    { code: 'gd', name: 'Scots Gaelic' },
    { code: 'sr', name: 'Serbian' },
    { code: 'st', name: 'Sesotho' },
    { code: 'crs', name: 'Seychellois Creole' },
    { code: 'shn', name: 'Shan' },
    { code: 'sn', name: 'Shona' },
    { code: 'scn', name: 'Sicilian' },
    { code: 'szl', name: 'Silesian' },
    { code: 'sd', name: 'Sindhi' },
    { code: 'si', name: 'Sinhala (Sinhalese)' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'so', name: 'Somali' },
    { code: 'es', name: 'Spanish' },
    { code: 'su', name: 'Sundanese' },
    { code: 'sw', name: 'Swahili' },
    { code: 'ss', name: 'Swati' },
    { code: 'sv', name: 'Swedish' },
    { code: 'tg', name: 'Tajik' },
    { code: 'ta', name: 'Tamil' },
    { code: 'tt', name: 'Tatar' },
    { code: 'te', name: 'Telugu' },
    { code: 'tet', name: 'Tetum' },
    { code: 'th', name: 'Thai' },
    { code: 'ti', name: 'Tigrinya' },
    { code: 'ts', name: 'Tsonga' },
    { code: 'tn', name: 'Tswana' },
    { code: 'tr', name: 'Turkish' },
    { code: 'tk', name: 'Turkmen' },
    { code: 'ak', name: 'Twi (Akan)' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'ur', name: 'Urdu' },
    { code: 'ug', name: 'Uyghur' },
    { code: 'uz', name: 'Uzbek' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'cy', name: 'Welsh' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'yi', name: 'Yiddish' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'yua', name: 'Yucatec Maya' },
    { code: 'zu', name: 'Zulu' },
];
export type SourceLanguage = 'auto' | Language;
export type TranslateLanguage = Language;

/**
 * Represents the result of a translation operation.
 */
export type TranslateResult = {
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
