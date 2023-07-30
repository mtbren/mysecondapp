import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {
    const expenseSaveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onSaveExpense(expenseData);
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={expenseSaveHandler}/>
        </div>
    )
}

export default NewExpense;