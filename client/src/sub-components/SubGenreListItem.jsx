import React from 'react';

class SubGenreListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wasPlayButtonClicked: false
        }

        this.clickPlay = this.clickPlay.bind(this);
    }

    clickPlay() {
        this.setState({
            wasPlayButtonClicked: true
        })
    }

    render() {
        // if button hasn't been pushed yet

        if (!this.state.wasPlayButtonClicked) {

            return (
                <div>
                    <h4>{this.props.item.subGenreName}</h4>
                    <button onClick={this.clickPlay}>Play Song</button>
                </div>
            )

        } else {

            return (
                <div>
                    <h4>{this.props.item.subGenreName}</h4>

                    <iframe src={this.props.item.songLink} width="45%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    <p>Mini audio player will be here</p>
                </div>
            )

        }

    
        // if button has been pushed
          // render media player
    }


}

export default SubGenreListItem;