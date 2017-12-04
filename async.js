var Async = function(){
    this.asyncMap = function(images, downloadImage, callback){
        var listError = [];
        var listResult = [];
        for(var i = 0; i < images.length;i++){
            (function(i){
                //console.log(images[i]);
                downloadImage(images[i], function(err, res){
                    if(err){
                        listError.push(err);
                    }else{
                        listResult.push(res);
                    }

                    if(listResult.length === images.length || listError === images.length)
                        return callback(
                            (listError.length > 0) ? listError : null,
                            listResult
                        )
                })
            })(i);
        }
    }
}

module.exports = Async;
