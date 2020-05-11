import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient'
import BurgerIngredients from './Burgeringredient/Burgeringredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return  [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} /> 
            });
        })
        .reduce((arr,el) => {
            // console.log(arr);
            // console.log(el);
            return arr.concat(el)
        },[]);
        // console.log(transformedIngredients)
        if(transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients</p>
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;