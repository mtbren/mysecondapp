import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // useState registers some value as state for the component in which it is being called
  // to be more precise, it registers it for a component instance
  // State is separated a per component instance basis
  const [title, setTitle] = useState(props.title);
  //console.log("Evaluated ExpenseItem with title = "+props.title);
  const updateTitle = () => {
    setTitle("UPdated")
    console.log('Updated...');
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={updateTitle}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
