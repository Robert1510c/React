import {useState} from 'react';
export default function App() {
    const [price, setPrice] = useState(100);

    function handleClick(){
        setPrice(75)
    }
    return (
        <div>
            <p data-testid="price">$100</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
  }
  
  