import "./ExpenseItem.css"

function ExpenseDate(props){
    const expenseDate = new Date(2024, 10 ,10);
    // let month = props.date.getUTCMonth();
    const month = props.date.toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw', month: 'long'});
    // let day = props.date.getUTCDay();
    const day = props.date.toLocaleString('pl-PL', {day: '2-digit'});
    let year = props.date.getUTCFullYear();
    // let newDate = year +"/"+month+"/"+day;
    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
        
    )
}
export default ExpenseDate;