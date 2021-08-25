import React from 'react';
import GenreListItem from './GenreListItem.jsx';
import '../App.css';

// placeholder option tag is unreliable
  // throws CORS errors

var GenreList = (props) => (

    <div className="listBorder">
        <h2>Choose a genre</h2>
        <select className="genreOption" onClick={props.clickGenre}>

            {/* <option value="" disabled selected hidden>Choose one...</option> */}

            {props.list.map((genre, index) =>
            
                < GenreListItem item={genre} key={index} />

            )}
        </select>
    </div>

)

export default GenreList;