import { Translate } from './index';

test('Translate Auto => Vietnamese', async () => {
    const translate = await Translate('Hello', 'auto', 'vi');
    console.log(translate);
});
test('Translate English => Vietnamese', () => {
    expect(async () => {
        const translate = await Translate('Hello', 'en', 'vi');
        console.log(translate);
    });
});
