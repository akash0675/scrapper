const puppeteer = require('puppeteer');
const stringSearch = require('string-search');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://fireandfragrance.com/podcasts/2017/1/15/andy-byrd-boundless-love');
  const text = await page.content();
  stringSearch.find(text, 'mp3')
    .then((result) => {
      result.map(res => {
        res.text.match(/^.+\.((mp3")|(mp4"))$/)
        // stringSearch.find(res.text, /^.+\.((mp3")|(mp4"))$/).then(url => console.log(url))
        console.log(res.text)
      })
    });
  browser.close();
})();
