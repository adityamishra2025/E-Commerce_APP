import { useState, useEffect } from "react";
import axios from 'axios';

export default function useCategory() {
    const [categories, setCategories] = useState([])

    //get categories
    const getCategories = async () => {
        try {
            const { data } = await axios.get("/api/v1/category/get-category")
            setCategories(data?.category)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return categories;
}



// useCategory is a custom hook that encapsulates the logic for fetching a list of categories from an API.
// It manages the state of the categories, fetches them when the component mounts, and returns the list for use in the component.
// This hook allows you to reuse the category - fetching logic across different components without duplicating code.