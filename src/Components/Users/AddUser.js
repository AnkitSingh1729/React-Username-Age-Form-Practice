import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    
    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
        })
        return;
    }
    if (+enteredAge < 1){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).'
        })
        return;
    }
    console.log(enteredAge, enteredUserName);
    setEnteredUsername("");
    setEnteredAge("");
    props.onAddUser(enteredUserName, enteredAge);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
      setError(null);
  }
  return (
      <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            // Card is our custom element, therefore we need to specifically add props.className inside Card component
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                id="username"
                onChange={usernameChangeHandler}
                value={enteredUserName}
                type="text"
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                id="age"
                onChange={ageChangeHandler}
                value={enteredAge}
                type="number"
                />
                <Button type="submit">Add User</Button>
            </form>
            </Card>
      </div>
    
  );
};

export default AddUser;
