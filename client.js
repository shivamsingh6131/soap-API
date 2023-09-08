const soap = require('soap');

const url = 'http://localhost:8000/wsdl?wsdl';
const args = { name: 'John' };

soap.createClient(url, function(err, client) {
  if (err) {
    console.error(err);
    return;
  }

  client.MyFunction(args, function(err, result) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(result);
  });
});
