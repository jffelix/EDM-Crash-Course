import React from 'react';
import SubGenreListItem from './SubGenreListItem.jsx';

var SubGenreList = (props) => {

    if (props.subList === undefined) {

        return (
            <div>Loading...</div>
        )

    } else {

        return (
            <div>
                {props.subList.map((subGenre, index) => 
                
                    <SubGenreListItem 
                    item={subGenre} 
                    key={index}
                    // clickPlaySong={props.clickPlaySong}
                    wasPlaySongClicked={props.wasPlaySongClicked} />

                )}
            </div>

        )
    }

}

export default SubGenreList;