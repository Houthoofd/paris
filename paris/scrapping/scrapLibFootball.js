const puppeteer = require('puppeteer');
const colors = require('colors');


// Processus de scrapping page 'Tennis' du site Bwin.be //

function evalution(_page,callback,arg = null){
  return _page.evaluate(callback);
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://sports.bwin.be/fr/sports/aujourd-hui')
  // await page.goto('https://sports.bwin.be/fr/sports/tennis-5/aujourd-hui'); // lien vers tennis


  evalution(page,function(){

    // return new Promise(function(next){
    //   next(Array.from(document.querySelectorAll('ms-event') , function(x,i){
    //     return {
    //       teams1 : x.querySelectorAll('div.participant')[0].innerHTML.split(/<span class="participant-country">|<\span>/).join("").split('</span>').join(""),
    //       teams2 : x.querySelectorAll('div.participant')[1].innerHTML.split(/<span class="participant-country">|<\span>/).join("").split('</span>').join(""),
    //       odd_team1 : (x.querySelectorAll('ms-font-resizer').length > 0 ? x.querySelectorAll('ms-font-resizer')[0].innerHTML : ""),
    //       odd_team2 : (x.querySelectorAll('ms-font-resizer').length > 1 ? x.querySelectorAll('ms-font-resizer')[1].innerHTML : ""),
    //     };
    //   }));
    // })

  })
  .then(function(_result){
    // console.table(_result);
  })

  // await browser.close();
})();
