import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props){
    const [filteredYear, setFilterYear] = useState('2020');

    let filteredText = "2019, 2021 and 2022";
    if(filteredYear === '2019'){
        filteredText = "2020, 2021 and 2022";
    }else if(filteredYear === '2020'){
        filteredText = "2019, 2021 and 2022";
    }else if(filteredYear === '2021'){
        filteredText = "2019, 2020 and 2022";
    }else if(filteredYear === '2022'){
        filteredText = "2019, 2020 and 2021";
    }

    const filterChangeHandler = (selectedYear) => {        
        //console.log("The selected year is "+selectedYear);
        setFilterYear(selectedYear);
    }
    return(
        <div>
            
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <p>The expenses for the years {filteredText} are filtered out !</p>
                {props.items.map(expense => 
                        <ExpenseItem title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                }
            </Card>
        </div>
    );
}

export default Expenses;