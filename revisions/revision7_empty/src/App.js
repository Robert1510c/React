import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    function handleClick(){
        setHighlighted(isHighlighted=> !isHighlighted);
    }
    return (
        <React.Fragment>
            <p className={highlighted ? 'active' : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </React.Fragment>
    );
}
