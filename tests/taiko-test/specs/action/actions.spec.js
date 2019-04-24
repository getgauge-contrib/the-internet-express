const {
  openBrowser,
  write,
  closeBrowser,
  goto,
  press,
  text,
  focus,
  inputField,
  toRightOf
} = require('taiko');

describe('Actions by Taiko', () => {

  before(async () => {
    await openBrowser();
  });

  it('.select() - select an option in a <select> element', async () => {
    await goto('http://localhost:3000/dropdown');
    await comboBox(below(text("Dropdown List"))).select("Option 1");
  });

  after(async () => {
    await closeBrowser();
  });

});
