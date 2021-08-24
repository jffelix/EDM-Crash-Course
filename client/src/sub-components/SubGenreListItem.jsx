import React from 'react';

var SubGenreListItem = (props) => {

    return (
        <div>
            <h4>{props.item.subGenreName}</h4>
            <button>Play Song</button>
        </div>
    )

}

export default SubGenreListItem;