import React, { useState } from 'react';
import "./App.css";
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Alert from './component/Alert';
import Recipe from './component/Recipe';




const App = () => {
        const [query, setQuery] = useState("");
        const [recipes, setRecipes] = useState([]);
        const [alert, setAlert] = useState("");
        const [calories, setCalories] = useState("")



        const APP_ID = "57be7ce1";

        const APP_KEY = "6bda5f07921f6b7a77ede390b3d63334";

        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        const getData = async() => {

            if (query !== "") {
                const result = await Axios.get(url);
                if (!result.data.more) {
                    return setAlert("No food with such name");
                }
                setRecipes(result.data.hits)
                setCalories(calories.data)

                console.log(result);
                setAlert("");
                setQuery("");

            } else {
                setAlert('Please fill the form')
            }

        };

        const onChange = e => {
            setQuery(e.target.value);
        }

        const onSubmit = (e) => {
            e.preventDefault();
            getData();
        };

        return ( 
        <div className = "App">
              <h1>Food Search App</h1>
              
        
                <form className = "search-form"
                onSubmit = { onSubmit } > {alert !== "" && < Alert alert = { alert }/>} 
                <input type = "text"
                    placeholder = "Search Your Recipe Food"
                    autoComplete = "off"
                    onChange = { onChange }
                    value = { query }
                    /> 
                    <input type = "submit"
                    value = "search" / >
                    </form> 
                    <div className = "recipes"> 
                    {recipes !== [] && recipes.map(recipe => < Recipe key = {uuidv4()} recipe = { recipe } />)} 
        </div>
        </div>

                            
        );
    };

export default App;