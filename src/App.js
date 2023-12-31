import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

const INITIAL_EXPENSES = [
    {
      id: "e1",
      title: "TP",
      amount: 94.2,
      date: new Date("2021, 02, 30"),
    },
    { id: "e2", title: "TV", amount: 104.2, date: new Date("2021, 01, 10") },
    {
      id: "e3",
      title: "CI",
      amount: 99.2,
      date: new Date("2021, 03, 21"),
    },
    {
      id: "e4",
      title: "DW",
      amount: 976.2,
      date: new Date("2021, 09, 30"),
    },
    {
      id: "e5",
      title: "RGSTN",
      amount: 80.45,
      date: new Date("2021, 07, 30"),
    },
  ];


const App = () => {
  const[expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  }

  return (
    <div>
      <NewExpense onSaveExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
