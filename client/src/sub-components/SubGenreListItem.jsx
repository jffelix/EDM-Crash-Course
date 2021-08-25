import React from 'react';

import '../App.css';

class SubGenreListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wasPlayButtonClicked: false
        }

        this.clickPlay = this.clickPlay.bind(this);
    }

    clickPlay() {

        // need to figure out how to stop song when another genre is selected

        this.setState({
            wasPlayButtonClicked: true
        })

        // this.setState(prevState => ({
        //     wasPlayButtonClicked: true
        // }), () => {
        //     console.log('wasPlayButtonClicked: ', this.state.wasPlayButtonClicked)
        // })
    }

    render() {
        // if button hasn't been pushed yet

        if (!this.state.wasPlayButtonClicked) {

            return (
                <div className="subGenre">
                    <h4>{this.props.item.subGenreName}</h4>
                    <button className="playSong" onClick={this.clickPlay}>Play Song</button>
                </div>
            )

        } else {

            return (
                <div className="subGenre">
                    <h4>{this.props.item.subGenreName}</h4>

                    {/* <iframe src={this.props.item.songLink} width="30%" height="50" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}

                    {/* <p>Testing toggle feature</p> */}

                    <iframe src={this.props.item.songLink} width="50%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            )

        }

    
        // if button has been pushed
          // render media player
    }


}

export default SubGenreListItem;



// (this.props.wasGenreToggled && this.state.wasPlayButtonClicked)