//need install packs like (npm intall sync-request )
const req = require('sync-request');
const fs = require('fs');

var obj = JSON.parse(fs.readFileSync('results.json', 'utf8'));
obj.data.forEach(reprocessInvoice);
console.log('Done!');

function reprocessInvoice(obj) {
    sleep(1000);

    http://api.internal.ml.com/users/${obj.seller_id}/invoices/${obj.id}?caller.id=${obj.seller_id}
    var retorno = req('GET', `http://api.internal.ml.com/users/${obj.seller_id}/invoices/${obj.id}?caller.id=${obj.seller_id}`);

    //console.log(JSON.parse(retorno.body));

    var result = JSON.parse(retorno.body);
    console.log(result.shipment.logistic_type);
    console.log(retorno.statusCode)


}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}
