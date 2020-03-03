import { Selector } from 'testcafe';

fixture `Actions by Testcafe`
    .page `http://localhost:3000/dropdown/`;

const dropdownSelect = Selector('#dropdown');
const dropdownOption = dropdownSelect.find('option');


test('.select() - select an option in a <select> element', async t => {
    await t
    .click(dropdownSelect)
    .click(dropdownOption.withText('Option 1'));
});
