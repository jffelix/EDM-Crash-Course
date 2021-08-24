import React from 'react';
import GenreListItem from './GenreListItem.jsx';

var GenreList = (props) => (

    <div>
        <h2>Choose a genre</h2>
        <select onClick={props.clickGenre}>
            {props.list.map((genre, index) =>
            
                <GenreListItem item={genre} key={index} />

            )}
        </select>
    </div>

)

export default GenreList;