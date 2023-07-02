import Expenses from "./components/Expenses";

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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
