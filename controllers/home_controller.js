const CSV = require('../models/csvModel');

// home controller
module.exports.home = async function(req, res){
    try{

        const csvFiles = await CSV.find({});

            return res.render('home',{
            files : csvFiles,
            title: 'Home',
            style: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet crossorigin="anonymous">',
            script: '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"  crossorigin="anonymous"></script>',
        })
    }catch(err){
        console.log(err);
        res.status(500).json( {message: 'Internal server error'} );
    }
    
}