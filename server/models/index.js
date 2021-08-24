const mongoose = require('mongoose');
const genreList = require('../../client/src/seeds.js');
// console.log('genreList: ', genreList);

const genreItemSchema = new mongoose.Schema({
    genreName: {type: String},
    hasSubGenres: {type: Boolean},
    subGenres: [
        {
            subGenreName: String,
            songLink: String
        }
    ]  
});

var genreItem = mongoose.model('Item', genreItemSchema);

// genreItem as a variable will allow use of it's methods
genreItem.create(genreList)
    .then((response) => {
        // console.log('response from db: ', response);
        console.log('Populated collection!');
    })
    .catch((err) => {
        console.log('Error received during population: ', err);
    });

module.exports = genreItem;