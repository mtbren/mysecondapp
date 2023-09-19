import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses(props){
    const [filteredYear, setFilterYear] = useState('2020');

    /*let filteredText = "2019, 2021 and 2022";
    if(filteredYear === '2019'){
        filteredText = "2020, 2021 and 2022";
    }else if(filteredYear === '2020'){
        filteredText = "2019, 2021 and 2022";
    }else if(filteredYear === '2021'){
        filteredText = "2019, 2020 and 2022";
    }else if(filteredYear === '2022'){
        filteredText = "2019, 2020 and 2021";
    }*/

    const filterChangeHandler = (selectedYear) => {        
        //console.log("The selected year is "+selectedYear);
        setFilterYear(selectedYear);

    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString()===filteredYear;
    });

    
    return(
        <div> 
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>          
            </Card>
        </div>
    );
}

export default Expenses;