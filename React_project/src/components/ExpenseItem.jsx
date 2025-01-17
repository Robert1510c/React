import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.jsx"
import Card from "./Card.jsx"

function ExpenseItem(props){
    return (
        <Card className="expense-item">
            <div className="expense-item__id">{props.id} </div>
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description"> 
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>

    )
}

export default ExpenseItem;