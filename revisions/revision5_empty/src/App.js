import React from 'react';

export default function App() {
  const [isDeleting, setIsDeleting] = React.useState(false);
  let warning;
  if(isDeleting) {
    warning = (
    <div data-testid="alert" id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div>
  )
}

  function deleteHandler(){
    setIsDeleting(true);
  }

  function proceedHandler(){
    setIsDeleting(false);
  }
    return (
      <div>
        {warning}
        <button onClick={deleteHandler}>Delete</button>
      </div>    
    );
}