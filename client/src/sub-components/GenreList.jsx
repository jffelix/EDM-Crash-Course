import React from 'react';
import GenreListItem from './GenreListItem.jsx';
import '../App.css';

var GenreList = (props) => (

    <div className="listBorder">
        <h2>Choose a genre</h2>
        <select className="genreOption" onClick={props.clickGenre}>
            {props.list.map((genre, index) =>
            
                < GenreListItem item={genre} key={index} />

            )}
        </select>
    </div>

)

export default GenreList;