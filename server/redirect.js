REDIRECT_URL = 'http://aroofoveroneshead.com';

WebApp.connectHandlers
  .use(function(req, res, next) {
    var location = REDIRECT_URL;
    res.writeHead(301, {'Location': location});
    res.end();
  });