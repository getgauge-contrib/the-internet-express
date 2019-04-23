require('chromedriver')
const performance = require('perf_hooks').performance;
const {
  Builder,
  By,
  Key,
  until
} = require('selenium-webdriver');

describe('Actions by webdriver', function() {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({
      implicit: 2000,
      pageLoad: 2000,
      script: 2000
    });
  });

  it('.select() - select an option in a <select> element', async () => {
    await driver.get('http://localhost:3000/dropdown');
    await driver.findElement(By.css('#dropdown > option:nth-child(1)')).click();
  });

  after(async () => {
    await driver.quit();
  });
});