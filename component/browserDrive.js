const { Builder, By, Key, until } = require("selenium-webdriver");

async function navigateAndFindElement() {
  // Launch the browser (replace 'chrome' with your desired browser)
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Navigate to a website
    await driver.get("https://in.bookmyshow.com/explore/movies-bengaluru");

    setTimeout(() => {
      console.log("after 3 seconds");
    }, 3000);

    // // Find an element by ID
    const element = await driver.findElement(By.id("super-container"));

    // element.findElement(By.)

    // // Wait for the page to load (modify the waiting logic as needed)
    // await driver.wait(until.titleContains("Example Domain"), 10000);

    // // Find an element by ID
    // const element = await driver.findElement(By.id("search-box"));

    // // Interact with the element (optional)
    // if (element) {
    //   await element.sendKeys("Selenium test", Key.ENTER);
    //   console.log("Element found and interacted with");
    // } else {
    //   console.log("Element not found");
    // }
  } catch (error) {
    console.error(error);
  } finally {
    // Quit the browser
    // await driver.quit();
  }
}

navigateAndFindElement();
