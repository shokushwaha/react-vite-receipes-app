import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context'
import "../css/Modal.css"
export default function Modal() {
    const { selectedMeal, closeModal } = useContext(AppContext);

    const { idMeal, strMeal: title, strMealThumb: image, strInstructions: text, strSource: source } = selectedMeal;
    return (
        <>

            <div className="modalBox">

                <h1>{title}</h1>
                <img src={image} width="100px" alt="" />
                <p>{text}</p>
                <a href={source}>Source</a>
                <button onClick={closeModal}>Close</button>
            </div>
        </>
    )
}
