import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

// /**
//  * Higher Order Component
//  */
// function HOCApp({greeting, name}){
//   return (
//       <h1>¡{greeting}, {name}!</h1>
//   );
// }

// function withGreeting(greeting){
//   return function WrapperComponentWithGreeting(WrapperComponent) {
//     return function ComponentWithWhatever(props){
//         return (
//           <React.Fragment>
//             <WrapperComponent {...props} greeting={greeting} />
//             <p>Estamos acompañando al wrapper component</p>
//           </React.Fragment>
//         );
//       }
//   }
// }

// const AppWithGreeting = withGreeting('Hey')(HOCApp);

ReactDOM.render(
  <App />,
  // <HOCApp greeting="Buenas" name="Math"/>,
  // <AppWithGreeting name="Pedro"/>,
  document.getElementById('root')
);
