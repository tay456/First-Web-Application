var Film = require('../model/filmModel');

var filmController = {
    getNewAdd: function (req,res) {
        res.render('addingItem');
    },
    postNewAdd: function (req, res) {
        var newFilm = new Film (req.body);
        newFilm.save(function (err, newFilm){
            if(err) {return res.status(500).render('unsuccessful-add')};
            res.status(201).render('successful-add');
        });
    }
};

module.exports = filmController;