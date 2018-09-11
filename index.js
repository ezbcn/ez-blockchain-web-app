/*ar Web3 = require("web3"); 

const testnet = 'https://ropsten.infura.io/';
const walletAddress = '0x72b7d5dff8509f321a40e28e37f18b3198a26cbe';

const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
var balance = web3.eth.getBalance(walletAddress); //Will give value in.
balance = web3.toDecimal(balance);
console.log(balance);
*/

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Server is running...");
  res.end();
}).listen(8080);