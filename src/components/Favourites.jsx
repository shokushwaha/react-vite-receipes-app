import React from 'react'
import { AppContext } from '../Context'
import { useContext } from 'react';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import "../css/Favorites.css"
export default function Favourites() {
    const { favorites, removeFromFavorites } = useContext(AppContext);
    return (
        <>
            <div className="favHeading">

                Favourites
            </div>

            <div className="favBox">

                {favorites.map((item) => {

                    const { idMeal, strMeal: title, strMealThumb: image, strSource } = item;
                    return (
                        <div className='singleFav'>

                            <div className="two">

                                <img src={image} width="100px" /><div className='ttitle'>{title}</div>
                            </div>
                            <a href={strSource} target="_blank" className='srcc'> <InsertLinkIcon />  More....</a>
                            <div className="dlt">

                                <button onClick={() => removeFromFavorites(idMeal)} >Remove</button>
                            </div>
                        </div>
                    )
                })}

            </div>

        </>
    )
}
