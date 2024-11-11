import ExpenseItem from "./ExpenseItem.jsx";

function Expenses(props){
    const items = props.expenses;
    return(
        <div>
            {items.map(item => {return(
            <ExpenseItem 
                id = {item.id}
                title={item.title} 
                amount={item.amount} 
                date={item.date} 
                key={item.id}/>)})};
        </div>
    );
}

export default Expenses;