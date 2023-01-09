import { React, createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const AppContext = createContext();
const AppProvider = ({ children }) => {

    const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    const randomMealUrl = ``;
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const { data } = await axios.get(url)
            if (data.meals)
                setMeals(data.meals);
            else
                setMeals([]);
        } catch (error) {
            console.log(error.response);
        }
        setLoading(false);
    }
    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl);
    }


    const selectMeal = (idMeal, facoriteMeal) => {
        let meal;
        meal = meals.find((meal) => meal.idMeal === idMeal)
        setSelectedMeal(meal);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const addToFavorites = (idMeal) => {
        const meal = meals.find((meal) => meal.idMeal === idMeal)
        const alredayFavorite = favorites.find((meal) => meal.idMeal === idMeal);
        if (alredayFavorite)
            return;
        const updatedFavorites = [...favorites, meal];
        setFavorites(updatedFavorites);
    }

    const removeFromFavorites = (idMeal) => {
        const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal)
        setFavorites(updatedFavorites);
    }
    useEffect(() => {
        fetchMeals(`${allMealsUrl}${searchTerm}`);

    }, [searchTerm]);





    return <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandomMeal, showModal, selectedMeal, selectMeal, closeModal, addToFavorites, removeFromFavorites, favorites }} >
        {children}
    </AppContext.Provider>
}
export { AppProvider, AppContext }