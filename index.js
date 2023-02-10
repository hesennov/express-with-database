let http = require("http");
let fs = require("fs");
let server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      res.write(html);
      res.end();
    });
    //     res.write("<h1>asdasdasd</h1>");
  } else if (req.url == "/urunler") {
    fs.readFile("products.html", (err, html) => {
      res.write(html);
      res.end();
    });
    //     res.write("<h1>urunler</h1>");
  } else {
    fs.readFile("404.html", (err, html) => {
      res.write(html);
      res.end();
    });
    //     res.write("<h1> sayfa bulunamadi</h1>");
  }

});

server.listen(5000, () => {
  console.log("http://localhost:5000 asdadsasd");
});
