
import ExpenseItem from './components/ExpenseItem.jsx'
import ExerciseComponent from './components/ExerciseComponent.jsx'
import Product from './components/Product.jsx';
import Expenses from "./components/Expenses.jsx"

function App() {

  const products = [
    {title: "Product1", price: 10, description: "First product"},
    {title: "Product2", price: 20, description: "Second product"},
  ]

  const expenses = [
    {
      id: 'e1',
      title: 'external SSD 512 GB',
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { id: 'e2', 
      title: 'new laptop', 
      amount: 2299.49, 
      date: new Date(2023, 10, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 1597.45,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e4',
      title: 'bluetooth JBL headphones',
      amount: 70,
      date: new Date(2023, 9, 12),
    },
  ];
  

  return (
    <div>
      <Expenses expenses = {expenses}/>

        <div>
          <h1>My shop</h1>
          <Product title={products[0].title} price={products[0].price} description={products[0].description}></Product>
          <Product title={products[1].title} price={products[1].price} description={products[1].description}></Product>
        </div>
    </div>
  )
}

export default App
