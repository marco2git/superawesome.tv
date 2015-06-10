var githubhook = require('githubhook'),
    servers = {
        'hook': 'https://github.com/marco2git/superawesome.tv'
    };


var thishook = githubhook(9001, servers, function (err, payload) {
    if (!err) {
        var deploySh = require('child_process').spawn('sh', [ 'hook.sh' ], {
            cwd: process.env.PWD
        });

        deploySh.stdout.on('data', function(data) {
            var buff = new Buffer(data);
            console.log(buff.toString('utf8'));
        });
        console.log(payload); // payload is the JSON blob that github POSTs to the server
    } else {
        console.log(err);
    }
});
