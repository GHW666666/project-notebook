import http from 'http'
http.createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify({code: 200, msg: 'hello world'}))
}).listen(3000)
console.log('Server running at http://127.0.0.1:3000/')
