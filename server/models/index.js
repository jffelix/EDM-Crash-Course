const mongoose = require('mongoose');
const genreList = require('../../client/src/seeds.js');

const genreItemSchema = new mongoose.Schema({
    genreName: String,
    hasSubGenres: Boolean,
    subGenres: [
        {
            subGenreName: String,
            songLink: String
        }
    ]  
});

var genreItem = mongoose.model('Item', genreItemSchema);

genreItemSchema.create(genreList)
    .then((response) => {
        console.log('response from db: ', response);
        console.log('Populated collection!');
    })
    .catch((err) => {
        console.log('Error received during population: ', err);
    });

module.exports = genreItem;