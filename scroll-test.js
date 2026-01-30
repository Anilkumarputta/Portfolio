const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.setViewport({ width: 1280, height: 800 });
  
  // Scroll to projects section
  await page.evaluate(() => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  });
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: '/tmp/projects-section.png', fullPage: false });
  
  // Scroll more to see buttons
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/projects-buttons.png', fullPage: false });
  
  await browser.close();
})();
