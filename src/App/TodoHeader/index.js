import React from 'react';

function TodoHeader({children, loading}) {
  
  return (
    <header>
      {/* { React.cloneElement(children, { loading }) } */}
      { 
        React.Children
          .toArray(children)
          .map(child =>  React.cloneElement(child, { loading }))
      }
    </header>
  );
}

export { TodoHeader };
