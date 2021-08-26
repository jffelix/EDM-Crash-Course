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

        var songLink = this.props.item.songLink.replace("watch?v=", "embed/")

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

                    {/* <p>Testing toggle feature</p> */}

                    {/* SPOTIFY IFRAME TAG */}

                    {/* <iframe src={this.props.item.songLink} width="50%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}

                    {/* YOUTUBE BACKUP IFRAME TAG */}

                    <iframe width="275" height="154.6875" src={songLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>
            )

        }

    
        // if button has been pushed
          // render media player
    }


}

export default SubGenreListItem;



// (this.props.wasGenreToggled && this.state.wasPlayButtonClicked)