import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {
        const [show, setShow] = useState(false)

        const { label, image, url, ingredients, calories } = recipe.recipe;
        return( 
                <div className="recipe">
                        <h2>{label}</h2>
                        <img src={image} alt={label}/>
                        <h2>{calories}</h2>
                        <a href={url} target="_blank" rel="noopener noreferrer" className={calories > 500 ? 'Fat' : 'Skinny'}>
                                How to make it?
                        </a>
                        
                        
                        {calories > 1000 ? <h3>Fat-Boy</h3> : <h3>Skinny-Boy</h3>}
                        
                        <button onClick={() => setShow(!show)}>Ingredients</button>
                        {show && <RecipeDetails ingredients={ingredients} />}
                </div>
        );
        };

        export default Recipe;