import React from 'react';
import testSeeds from './seeds.js';
import GenreList from './sub-components/GenreList.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedGenre: null
        }

        this.clickGenre = this.clickGenre.bind(this);
    }

    clickGenre(event) {
        // console.log('clicked genre: ', event.target.value);

        var genreParsed = JSON.parse(event.target.value);
        console.log('genreParsed: ', genreParsed);

    }

    render() {
        // console.log('testSeeds: ', testSeeds);

        return (
            <div>
                <h1>EDM genre list!</h1>
                <i>Does all electronic music really sound the same?</i>
                <GenreList list={testSeeds} clickGenre={this.clickGenre} />
            </div>
        )
    }


}

export default App;