const soap = require('soap');
const http = require('http');

const service = {
    MyService: {
        MyPort: {
            MyFunction: function (args) {
                // Your SOAP service logic here
                return { result: 'Hello, ' + args.name };
            },
        },
    },
};

const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');
const server = http.createServer(function (request, response) {
    response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
const soapServer = soap.listen(server, '/wsdl', service, xml, function () {
    console.log('server initialized');
});
