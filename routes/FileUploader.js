FileUploader = function() {};

FileUploader.prototype.uploadFile = function(req, res) {
    // We are able to access req.files.file thanks to 
    // the multiparty middleware
    var file = req.files.file;
    console.log(file.name);
    console.log(file.type);
    console.log(JSON.stringify(req.files.file));
    //fs.readFile(req.files.displayImage.path, function (err, data) {
    //
    //    var newPath = __dirname + "/uploads/"+file.name;
    //    fs.writeFile(newPath, data, function (err) {
    //        res.redirect("back");
    //    });
    //});

    res.end(JSON.stringify({fileName:'lol'}));
}

module.exports = new FileUploader();