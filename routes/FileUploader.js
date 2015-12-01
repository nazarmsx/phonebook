FileUploader = function() {};
var fs=require('fs');
var dir = './public/uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

FileUploader.prototype.uploadFile = function(req, res) {
    // We are able to access req.files.file thanks to 
    // the multiparty middleware
    var file = req.files.file;
    //console.log(file.name);
    //console.log(file.type);
    console.log(JSON.stringify(req.files.file));
    res.writeHead(200, {"Content-Type": "application/json"});

    fs.readFile(req.files.file.path, function (err, data) {
        if(err){
        console.log('error');
        res.end("{error}"); return;}
        else {
        }

        var newPath = './public/uploads/'+file.name;

        fs.writeFile(newPath, data, function (err) {
if(err)
console.log(err);
            res.end(JSON.stringify({fileName:'uploads/'+file.name}));
        });
    });


}

module.exports = new FileUploader();