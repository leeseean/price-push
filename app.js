const gate = require('./lib/gate');
const sendMail = require('./lib/mail');
const priceConfig = require('./lib/price.config')

// Trading Pairs
// gate.getPairs(function (res) {
//     console.log(res);
// });


// Market Info
// gate.getMarketinfo(function (res) {
//     console.log(res);
// });


// Market Details
// gate.getMarketlist(function (res) {
//     console.log(res);
// });


// Tickers for all the supported trading pairs
// gate.getTickers(function (res) {
//     console.log(res);
// });


//Ticker
/* gate.getTicker('eth_usdt', function (res) {
    console.log(res);
}); */


// Depth
// gate.orderBooks(function (res) {
//     console.log(res);
// });


// Depth of pair
// gate.orderBook('etc_btc',function (res) {
//     console.log(res);
// });


// Trade History
// gate.tradeHistory('etc_btc',function (res) {
//     console.log(res);
// });


// Get account fund balances
// gate.getBalances(function (res) {
//     console.log(res);
// });


// get deposit address
// gate.depositAddress('btc',function (res) {
//     console.log(res);
// });


// get deposit withdrawal history
// gate.depositsWithdrawals('1508225535','1508311935',function (res) {
//     console.log(res);
// });

// Place order buy
// gate.buy('etc_btc','0.001',	'0.876',function (res) {
//     console.log(res);
// });


// Place order sell
// gate.sell('etc_btc','0.02','3',function (res) {
//     console.log(res);
// });

// Cancel order
// gate.cancelOrder('267040896','etc_btc', function (res) {
//     console.log(res);
// });

// Cancel all orders
// gate.cancelAllOrders('1', 'etc_btc', function (res) {
//     console.log(res);
// });

// Get order status
// gate.getOrder('267040896', 'etc_btc', function (res) {
//     console.log(res);
// });


//Get my open order list
// gate.openOrders( function (res) {
//     console.log(res);
// });


// Get my last 24h trades
// gate.myTradeHistory('etc_btc','267040896', function (res) {
//     console.log(res);
// });


// withdrawal 
// gate.withdraw('btc','123', '1CGJ7kWYC8fHYShC4m8Wy9j9BfrD9fLn58', function (res) {
//     console.log(res);
// });

//每隔15分钟查询下eth的价格
function intervalEth() {
    const interval = setInterval(() => {
        priceConfig.forEach(item => {
            gate.getTicker(item.tiker, (res) => {
                if (Number(res.last) < item.min || Number(res.last) > item.max) { //小于200的时候通知我
                    sendMail('leeseean@qq.com', `当前${item.tiker}价格为${res.last}`, `当前${item.tiker}价格为${res.last}`);
                }
            });
        });
    }, 15 * 60 * 1000);
}

intervalEth();
sendMail('leeseean@qq.com', `启动成功`, `启动成功`);
