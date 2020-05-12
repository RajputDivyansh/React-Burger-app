import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    console.log(props.btnType);
    return <button 
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
};

export default button;