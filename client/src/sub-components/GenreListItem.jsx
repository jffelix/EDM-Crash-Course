import React from 'react';
import '../App.css';

// var GenreListItem = (props) => (
//     <div>
//         <p>{props.item.genreName}</p>
//     </div>
// )

// need to make <option> tag have an onClick handler instead of <select> tag

class GenreListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        var genreStringify = JSON.stringify(this.props.item.genreName);

        return (
            <option value={genreStringify}>{this.props.item.genreName}</option>

        )
    }
}

export default GenreListItem;