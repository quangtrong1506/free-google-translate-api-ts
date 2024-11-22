import { Translate } from './index';

test('Translate Auto => Vietnamese', async () => {
    const translate = await Translate('Hello World!', 'auto', 'fr');
    console.log(translate);
});
