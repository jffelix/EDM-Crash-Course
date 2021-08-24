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
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/8ATu1BiOPZA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                    <p>Mini audio player will be here</p>
                </div>
            )

        }

    
        // if button has been pushed
          // render media player
    }


}

export default SubGenreListItem;