const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'x-test, Content-Type, Accept, Access-Control-Allow-Headers'
};

const s = require('http').Server((req, res) => {
  if (req.url === '/result4/') {
    res.writeHead(200, ...CORS);
    let header = req.getHeader('x-test');
    let body = req.method;

    let result = new Object();
    result.message = 'bee_joo';
    result["x-result"] = header;
    result["x-body"] = body;
    let json = JSON.stringify(result);
    res.write(json);
  }
  else {
    res.write('Oh no');
  }
  res.end();
});
s.listen(process.env.PORT);
