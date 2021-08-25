const dbHelpers = require('../models/index.js');
const mongoose = require('mongoose');

const axios = require('axios');

const SpotifyWebApi = require('spotify-web-api-node');
// const querystring = require('querystring');

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

        // req.query.code permits to retreive token 

        var reqSpotifyCode = {
            grant_type: "authorization_code",
            code: req.query.code,
            redirect_uri: 'http://localhost:4001/genres',
            client_id: '31f7861b80164367b314769d0df02af0',
            client_secret: 'fd64c363f32f4c64b557c8193106ad4e'
        };

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Authorization': 'JWT fefege...'
          }

        axios({
            url: 'https://accounts.spotify.com/api/token',
            method: 'POST',
            params: reqSpotifyCode,
            headers: headers
        })
        .then((response) => {
            // response.data.access_token
            console.log('access token: ', response.data.access_token);

            // response.data.refresh_token
            console.log('refresh token: ', response.data.refresh_token);

            // debugger;
        })
        .catch((err) => {
            // debugger;
            console.log('Error received from Axios in controllers.', err);
        })


        // GET request to retrieve genre data

        dbHelpers.find()
        .then((results) => {
            // send back to home page
            // send token
            // send back genre data
            res.redirect('http://localhost:4001/genres')
            // res.send(results);
            console.log('Connected with dbHelpers.find()!');
        })
        .catch((err) => {
            res.status(400).send(err);
            console.log('Error recevied at dbHelpers.find()');
        })

    },

    loginPage: function(req, res) {

        // res.redirect(spotifyApi.createAuthorizeURL(scopes));
        // var scopes = ['streaming'];

        // res.header("Access-Control-Allow-Origin", "*");

        // res.send("Hello from loginPage in controllers!");

    },

    loginCallback: function(req, res) {

        // res.send('Hello from callback in controllers!');
    },

    refreshToken: function(req, res) {
        res.send('Hello from refreshToken in controllers!')
    }

}

module.exports = controllers;