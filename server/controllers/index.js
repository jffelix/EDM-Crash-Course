const dbHelpers = require('../models/index.js');
const mongoose = require('mongoose');

const SpotifyWebApi = require('spotify-web-api-node');
// const querystring = require('querystring');
const client_id = '31f7861b80164367b314769d0df02af0';
const client_secret = 'fd64c363f32f4c64b557c8193106ad4e';
const redirect_uri = 'localhost:4001/genres';

// const scopes = [
//     'ugc-image-upload',
//     'user-read-playback-state',
//     'user-modify-playback-state',
//     'user-read-currently-playing',
//     'streaming',
//     'app-remote-control',
//     'user-read-email',
//     'user-read-private',
//     'playlist-read-collaborative',
//     'playlist-modify-public',
//     'playlist-read-private',
//     'playlist-modify-private',
//     'user-library-modify',
//     'user-library-read',
//     'user-top-read',
//     'user-read-playback-position',
//     'user-read-recently-played',
//     'user-follow-read',
//     'user-follow-modify'
// ];
  
// const spotifyApi = new SpotifyWebApi({
//     redirectUri: 'http://localhost:8888/login',
//     clientId: client_id,
//     clientSecret: client_secret
// });


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

        // res.redirect(spotifyApi.createAuthorizeURL(scopes));

        res.send("Hello from loginPage in controllers!");

    },

    loginCallback: function(req, res) {

        // res.send('Hello from callback in controllers!');
    },

    refreshToken: function(req, res) {
        res.send('Hello from refreshToken in controllers!')
    }

}

module.exports = controllers;