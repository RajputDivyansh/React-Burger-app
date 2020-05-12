import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classses from './BuildControls.module.css';

const controls = [
    {label: "Salad",type: "salad"},
    {label: "Bacon",type: "bacon"},
    {label: "Cheese",type: "cheese"},
    {label: "Meat",type: "meat"}
]

const buildControl = (props) => (
    <div className={classses.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) => ( 
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabledProperty[ctrl.type]} />
        ))}
        <button 
        className={classses.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControl;