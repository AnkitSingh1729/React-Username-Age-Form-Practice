import React from "react";
import classes from  './Card.module.css';

const Card = props => { // had we used props.clsname instead, then we were bound to use clsname in AddUser component
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
}


export default Card;