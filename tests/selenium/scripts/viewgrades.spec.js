// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
require('dotenv').config()

describe('a', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  it('Retorno de erro quando login inválido', async function() {
    await driver.get("http://portal.facthus.edu.br/FrameHTML/web/app/Edu/PortalEducacional/login/")
    await driver.manage().window().setRect({ width: 1936, height: 1048 })
    await driver.sleep(2000);
    await driver.findElement(By.id("User")).click();
    await driver.findElement(By.id("User")).sendKeys(process.env.LOGIN_FACTHUS);
    await driver.findElement(By.id("Pass")).click();
    await driver.findElement(By.id("Pass")).sendKeys(process.env.PASSWORD_FACTHUS);
    await driver.findElement(By.css(".container > .login-box > .form > .form__field:nth-child(4) > input")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#show-menu")).click()
    await driver.findElement(By.id("EDU_PORTAL_ACADEMICO_CENTRALALUNO_NOTAS")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("table > tbody > .ng-scope:nth-child(1) > .textAlignCenter > a")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css(".modal-open > .modal > .modal-dialog > .modal-content > .modal-footer")).click();
  })
})
