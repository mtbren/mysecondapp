import React from "react";
import { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const expenseSaveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onSaveExpense(expenseData);
        setIsEditing(false);
    } 

    
    const clickHandle = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={clickHandle}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense={expenseSaveHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;