var bmxKey = '90358f9bd76621e60cff0377154e1676311960c976cb7fbb29fd84678ac4b238';
var CurrencyValues = {};
async function fetchUSDSell( USDSellseries ) {
  return new Promise(resolve => {
    fetch('https://www.banxico.org.mx/SieAPIRest/service/v1/series/' + USDSellseries + '/datos/oportuno?token=' + bmxKey)  
    .then(function(respUSDSell) { return respUSDSell.json() })
    .then(async function(dataUSDSell) {
      await drawUSDSell(dataUSDSell);
      resolve();
    })
    .catch(function() {
      resolve();
    });
  });
};
async function fetchUSDBuy( USDBuyseries ) {
  return new Promise(resolve => {
    fetch('https://www.banxico.org.mx/SieAPIRest/service/v1/series/' + USDBuyseries + '/datos/oportuno?token=' + bmxKey)  
    .then(function(respUSDBuy) { return respUSDBuy.json() })
    .then(async function(dataUSDBuy) {
      await drawUSDBuy(dataUSDBuy);
      resolve();
    })
    .catch(function() {
      resolve();
    });
  });
};
async function fetchEUR( EURseries ) {
  return new Promise(resolve => {
    fetch('https://www.banxico.org.mx/SieAPIRest/service/v1/series/' + EURseries + '/datos/oportuno?token=' + bmxKey)  
    .then(function(respEUR) { return respEUR.json() })
    .then(async function(dataEUR) {
      await drawEUR(dataEUR);
      resolve();
    })
    .catch(function() {
      resolve();
    });
  });
};
async function drawUSDSell( USDSell ) {
  return new Promise(resolve => {
    var usdsell = (parseFloat(((USDSell.bmx.series)[0]).datos[0].dato)+0.10).toFixed(2);
	document.getElementById('usd_sell').innerHTML = '$' + usdsell;
    CurrencyValues.USDSell = usdsell;
    resolve();
  });
};
async function drawUSDBuy( USDBuy ) {
  return new Promise(resolve => {
    var usdbuy = (parseFloat(((USDBuy.bmx.series)[0]).datos[0].dato)-0.10).toFixed(2);
	document.getElementById('usd_buy').innerHTML = '$' + usdbuy;
    CurrencyValues.USDBuy = usdbuy;
    resolve();
  });
};
async function drawEUR( EUR ) {
  return new Promise(resolve => {
    var eursell = parseFloat(((EUR.bmx.series)[0]).datos[0].dato).toFixed(2);
	document.getElementById('eur_sell').innerHTML = '$' + eursell;
    CurrencyValues.EURSell = eursell;
    resolve();
  });
};
async function drawEURBuy() {
  return new Promise(resolve => {
    var eurbuy = (CurrencyValues.EURSell - (Math.abs(CurrencyValues.USDSell - CurrencyValues.USDBuy))).toFixed(2);
    document.getElementById('eur_buy').innerHTML = '$' + eurbuy;
  resolve();
  });
};
async function runFunctions() {
  await Promise.all([
    fetchUSDSell('SF43784'),
    fetchUSDBuy('SF43787'),
    fetchEUR('SF57923')
  ]).then(() => drawEURBuy());
}
window.addEventListener('load', function() {
  runFunctions();
})