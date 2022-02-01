// Getting the first 250 cards
fetch('https://api.pokemontcg.io/v2/cards',{
    headers:{
        "Content-Type":"application/json",
        "X-Api-Key": "e8bdc35b-8907-45b0-b1c1-eb5d3cd116a6"
    }
})
//turning into the json object
.then(function(response){
    return response.json()
})
//drilling down to the first entry
.then(function(data){
    console.log(data.data[0]);
})




//              0    1       2
//Add more cryptos for later
var cryptoS =['BTC', 'ETH', 'USDT']
// var cryptoInfo ={
//     cryptoID: data.asset_id_quote,
//     cryptoRate: data.rate
//     // data.rate + ":" + data.asset_id_quote
// }
var cryptoInfo ={}
for(var i=0; i<cryptoS.length; i++){
//console.log(i);
fetch(	'https://rest.coinapi.io/v1/exchangerate/USD/'+cryptoS[i]+'?apikey=EE0B3E38-CFD9-4BEE-8F5D-BF82AE6DD7BF')
.then(function(response){
    return response.json()
})
.then(function(data){
   // console.log(data.rate); 
    //console.log(data.asset_id_quote);
    cryptoInfo[data.asset_id_quote]=data.rate
})
sleep(500)
};
console.log(cryptoInfo);


// fetch(	'https://rest.coinapi.io/v1/exchangerate/USD/ETH?apikey=EE0B3E38-CFD9-4BEE-8F5D-BF82AE6DD7BF')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
// })
// sleep(500)
// fetch(	'https://rest.coinapi.io/v1/exchangerate/USD/USDT?apikey=EE0B3E38-CFD9-4BEE-8F5D-BF82AE6DD7BF')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
// })

//https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  