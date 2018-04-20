var mongoose = require('mongoose');

// var filmTvModel = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     author: String,
//     genre: String
// })

var filmModel = new mongoose.Schema( {
    title: String,
    typeOfMedia:String,
    year: String,
    genre: String,
    ageClass: String,
    numberOfSeasons: String,
    personalRating:String
    }

)

module.exports = mongoose.model('Film', filmModel);

//mainTitle, typeOfMedia, yearOfRelease, genre, ageClasification, numberOfSeasons, personalRating