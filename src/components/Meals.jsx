import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context'
import "../css/Meals.css"
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Meals() {
    const { meals, loading, selectMeal, addToFavorites, removeFromFavorites } = useContext(AppContext);
    console.log(meals);




    if (loading) {
        return <><div class="loader"></div></>
    }

    if (meals.length < 1)
        return <>
            Nothing to show try again
        </>

    return (
        < >
            <div className="card">

                <div className="mealBox">

                    {


                        meals.map(singleMeal => {
                            const { idMeal, strMeal: title, strMealThumb: image, strSource, strInstructions
                                , strYoutube
                            } = singleMeal
                            return (

                                < >  <article key={idMeal} className="singleMeal" >
                                    <div className="one">

                                        <img src={image} width='100px' alt="mealimage" onClick={() => selectMeal(idMeal)} className="img" />


                                        <div className='title'>{title}</div>
                                    </div>

                                    <div className='inst'>{strInstructions}</div>
                                    <a href={strSource} target="_blank" className='src'> <InsertLinkIcon />  More....</a>
                                    <a href={strYoutube} target="_blank" className='yt'> <YouTubeIcon />  YouTube</a>
                                    <div className="btns">

                                        <button onClick={() => addToFavorites(idMeal)} >Add to Favorites</button>
                                    </div>
                                </article>
                                </>
                            )
                        })

                    }
                </div>
            </div>


        </ >
    )
}
