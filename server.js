var express = require('express'),  
    http = require('http'),
    app = express();

app.set('port', process.env.PORT || 8080);

app.post('/deploy/', function (req, res) {  
     var spawn = require('child_process').spawn,
        deploy = spawn('sh', [ './deploy.sh' ]);

    deploy.stdout.on('data', function (data) {
        console.log(''+data);
    });

    deploy.on('close', function (code) {
        console.log('Github Hook superawesome.tv exited with code ' + code);
    });
    res.json(200, {message: 'Github Hook superawesome.tv received!'})
});

http.createServer(app).listen(app.get('port'), function(){  
  console.log('Express server superawesome.tv listening for deployment on port ' + app.get('port'));
});
