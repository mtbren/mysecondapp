import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.2,
      date: new Date("2021, 02, 30"),
    },
    { id: "e2", title: "TV", amount: 104.2, date: new Date("2021, 01, 10") },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 99.2,
      date: new Date("2021, 03, 21"),
    },
    {
      id: "e4",
      title: "Dishwasher",
      amount: 976.2,
      date: new Date("2021, 09, 30"),
    },
    {
      id: "e5",
      title: "Registration",
      amount: 80.45,
      date: new Date("2021, 07, 30"),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
    </div>
  );
}

export default App;
