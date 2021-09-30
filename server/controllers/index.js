const dbHelpers = require('../models/index.js');
const mongoose = require('mongoose');

const axios = require('axios');

const SpotifyWebApi = require('spotify-web-api-node');

// NEED TO CREATE config.js FILE TO HIDE SPOTIFY CODES
  // USE gitignore TO HIDE FROM USERS IN GITHUB

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

var accessToken = null;
var refreshToken = null;


const controllers = {

    getGenres: function(req, res) {


        // // CODE TO AUTHENTICATE AND RETRIEVE ACCESS TOKEN

        // var reqSpotifyCode = {
        //     grant_type: "authorization_code",
        //     // req.query.code permits to retreive token 
        //     code: req.query.code,
        //     redirect_uri: 'http://localhost:4001/genres',
        //     client_id: 'reference config.js here',
        //     client_secret: 'reference config.js here'
        // };

        // const headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //     // 'Authorization': 'JWT fefege...'
        //   }

        // // POST request to retrieve Spotify access and refresh tokens

        // axios({
        //     url: 'https://accounts.spotify.com/api/token',
        //     method: 'POST',
        //     params: reqSpotifyCode,
        //     headers: headers
        // })
        // .then((response) => {
        //     // // response.data.access_token
        //     // console.log('access token: ', response.data.access_token);

        //     // // response.data.refresh_token
        //     // console.log('refresh token: ', response.data.refresh_token);

        //     console.log('response.data from server: ', response.data);

        //     accessToken = response.data.access_token;
        //     refreshToken = response.data.refresh_token;


        //     // GET request to retrieve genre data

        //     dbHelpers.find()
        //     .then((results) => {
        //         // send back to home page
        //         // send back tokens
        //         // send back genre data from 'results'

        //         var resultsObj = {
        //             access_token: accessToken,
        //             refresh_token: refreshToken,
        //             genreData: results
        //         }

        //         // console.log('resultsObj: ', resultsObj);

        //         res.status(200).send(resultsObj);
        //         res.redirect('http://localhost:4001/genres');

        //         // res.send("Hello from dbHelpers in controllers!");

        //         // console.log('results from .find(): ', results);
        //         console.log('Connected with dbHelpers.find()!');
        //     })
        //     .catch((err) => {
        //         res.status(400).send(err);
        //         console.log('Error recevied at dbHelpers.find()');
        //     })


        //     // debugger;
        // })
        // .catch((err) => {
        //     // debugger;
        //     console.log('Error received from Axios in controllers.', err);
        // })



        // BACKUP CODE IN CASE AUTHENTICATION DOESN'T WORK

        // GET request to retrieve genre data

        dbHelpers.find()
        .then((results) => {
            // send back to home page
            // send back tokens
            // send back genre data from 'results'

            // var resultsObj = {
            //     access_token: accessToken,
            //     refresh_token: refreshToken,
            //     data: results
            // }

            // console.log('resultsObj: ', resultsObj);

            // res.redirect('http://localhost:4001/genres')
            // res.send(results);

            res.status(200).send(results);

            // console.log('results from .find(): ', results);
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







// module.exports.getTracks = (callback, key, tempo, energy, valence) => {  spotifyApi.clientCredentialsGrant().then(    (data) => {      // console.log('The access token expires in ' + data.body['expires_in']);      // console.log('The access token is ' + data.body['access_token']);      // Save the access token so that it's used in future calls      spotifyApi.setAccessToken(data.body['access_token']);      getRecs(callback, key, tempo, energy, valence);    },    (err) => {      console.log('Something went wrong when retrieving an access token', err);    }  )}
//     const getRecs = (callback, key, tempo, energy, valence) => {  spotifyApi.getRecommendations({    target_energy: energy,    seed_genres: ['ambient', 'classical'],    target_key: key,    min_key: key,    max_key: key,    target_tempo: tempo,    target_valence: valence,    target_danceability: valence,    target_loudness: energy  })    .then((data) => {      let recommendations = data.body;      callback(recommendations.tracks)    }, (err) =>  {      console.log("Something went wrong!", err);    });