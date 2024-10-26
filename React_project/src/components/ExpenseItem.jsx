import "./ExpenseItem.css"


function ExpenseItem(props){
    const expenseDate = new Date(2024, 10 ,10);
    let month = props.date.getUTCMonth();
    let day = props.date.getUTCDay();
    let year = props.date.getUTCFullYear();
    let newDate = year +"/"+month+"/"+day;


    return (
        <div className="expense-item">
            <div>{newDate}</div>
            <div className="expense-item__description"> 
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>

    )
}

export default ExpenseItem;