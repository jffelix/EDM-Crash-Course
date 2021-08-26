import React from 'react';
import testSeeds from './seeds.js';
import GenreList from './sub-components/GenreList.jsx';
import SubGenreList from './sub-components/SubGenreList.jsx';
import axios from 'axios';

import "./App.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            fullGenreList: [],
            wasGenreSelected: false,
            selectedGenre: null,
            subGenreList: [],
            wasPlaySongClicked: false,
            selectedColor: null,
            wasGenreToggled: false,

        }

        this.getGenres = this.getGenres.bind(this);
        this.clickGenre = this.clickGenre.bind(this);
        this.showSubGenreList = this.showSubGenreList.bind(this);
        // this.clickPlaySong = this.clickPlaySong.bind(this);
        this.getLoginPage = this.getLoginPage.bind(this);
    }

    // componentDidMount() {
    //     this.getGenres();
    //     // this.getLoginPage();
    // }

    getLoginPage() {

        // BACKUP CODE IN CASE AUTHENTICATION DOESN'T WORK
        
        axios.get('/login')
        .then(() => {

            this.setState({
                isAuthenticated: true
            })

            console.log('Connected with Axios GET request for login!');
            
        })
        .then(() => {
            this.getGenres();

        })
        .catch((err) => {
            console.log('Error received during Axios GET request for login: ', err);
        })


        // // CODE TO REDIRECT TO SPOTIFY LOGIN

        // const client_id = '31f7861b80164367b314769d0df02af0';
        // const redirect_uri = 'http://localhost:4001/genres';

        // var scopes = ['streaming'];

        // window.location = 'https://accounts.spotify.com/authorize' +
        // '?response_type=code' +
        // '&client_id=' + client_id +
        // (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        // '&redirect_uri=' + encodeURIComponent(redirect_uri);


    }

    getGenres() {
        axios.get('/genres')
        .then((response) => {

            // filter between tokens and data

            this.setState({
                // IF USING SPOTIFY: response.data.genreData

                fullGenreList: response.data,
                isAuthenticated: true

            }, () => {
                console.log('response data: ', response.data);
            })

            console.log('response.data: ', response.data);
        })
        .catch((err) => {
            console.log('Error received from Axios GET request: ', err);
        })
    }

    clickGenre(event) {
        // console.log('clicked genre: ', event.target.value);
        var genreParsed = JSON.parse(event.target.value);
        // console.log('genreParsed: ', genreParsed);

        // if switching to another genre
        if (this.state.selectedGenre !== genreParsed) {
            this.setState({
                wasGenreToggled: true
            }, () => {
                console.log('wasGenreToggled: ', this.state.wasGenreToggled);
            })
        }
        
        this.setState({
            selectedGenre: genreParsed,
            wasGenreSelected: true,
        }, () => {

            this.showSubGenreList(genreParsed);
            // console.log('selectedGenre: ', this.state.selectedGenre);
        })

    }

    showSubGenreList(genre) {
        // console.log('genre from showSubGenreList: ', genre);

        var matchedGenre = null;

        for (var i = 0; i < this.state.fullGenreList.length; i++) {
            if (this.state.fullGenreList[i].genreName === genre) {
                matchedGenre = this.state.fullGenreList[i];
            }
            // console.log(this.state.fullGenreList[i]);
        }

        this.setState({
            subGenreList: matchedGenre

        }, () => {
            // console.log('genreColor: ', genreParsed.genreColor);
            // console.log('subGenreList: ', this.state.subGenreList);

            this.setState({
                selectedColor: this.state.subGenreList.genreColor
            })
        })

    }

    // clickPlaySong() {
    //     this.setState({
    //         wasPlaySongClicked: true
    //     })
    // }

    render() {
        // console.log('testSeeds: ', testSeeds);

        // if using spotify, must create a conditional to render log in page

        if (!this.state.isAuthenticated) {
            return (
                <div className="login">
                    <h1>Please login to Spotify to continue</h1>
                    <button onClick={() => this.getLoginPage()}>Login</button>
                </div>
            )
        } else if (this.state.isAuthenticated && !this.state.wasGenreSelected) {

            return (
                <div className="main">
                    <h1 className="title">EDM Crash Course!</h1>
                    <i className="subTitle">Does all electronic music really sound the same?</i>
                    <GenreList list={testSeeds} clickGenre={this.clickGenre} />
                </div>
            )

        } else {

            return (
                <div className={this.state.selectedColor} >
                    {/* <h1 className="title">EDM Crash Course!</h1> */}
                    <i className="subTitle">Click around and explore!</i>
                    <GenreList list={this.state.fullGenreList} clickGenre={this.clickGenre} />
                    <p></p>

                    <SubGenreList 
                    subList={this.state.subGenreList.subGenres}

                    wasGenreToggled={this.state.wasGenreToggled}
                    wasPlaySongClicked={this.state.wasPlaySongClicked} />
                </div>
            )

        }


    }


}

export default App;