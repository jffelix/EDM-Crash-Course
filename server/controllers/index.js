const dbHelpers = require('../models/index.js');
const mongoose = require('mongoose');

const SpotifyWebApi = require('spotify-web-api-node');
const my_client_id = '31f7861b80164367b314769d0df02af0';
const my_client_secret = 'fd64c363f32f4c64b557c8193106ad4e';
const redirect_uri = 'localhost:4001/genres';
var scopes = ['user-read-private user-read-email'];

var spotifyApi = new SpotifyWebApi({
    clientId: my_client_id,
    clientSecret: my_client_secret,
    redirectUri: redirect_uri
})

const controllers = {

    getGenres: function(req, res) {

        dbHelpers.find()
        .then((results) => {
            res.status(200).send(results);
            console.log('Connected with dbHelpers.find()!');
        })
        .catch((err) => {
            res.status(400).send(err);
            console.log('Error recevied at dbHelpers.find()');
        })

    },

    loginPage: function(req, res) {
        res.redirect(spotifyApi.createAuthorizeURL(scopes));
    }

}

module.exports = controllers;