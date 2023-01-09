import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../Context'
import '../css/Search.css'
export default function Search() {

    const [url, setUrl] = useState('');
    const { setSearchTerm, fetchRandomMeal } = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(url);
        setUrl('');
    }

    return (

        <div className='searchbox'  >
            <div className='heading'>
                Reciepes all around the world
            </div>

            <form onSubmit={handleSubmit}  >
                <div className="inputBox">

                    <div class="inputGroup">
                        <input type="text" value={url} onChange={(e) => { setUrl(e.target.value) }} required />
                        <label for="name">Meal</label>
                    </div>



                    <button type='submit' >Search</button>
                    <button type='button' onClick={fetchRandomMeal} className="surbtn" >Surprise me</button>

                </div>

            </form>


        </div>
    )
}
