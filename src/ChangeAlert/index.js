import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({show, toggleShow, sincronize}) {
  // return (
  //   <div>
  //     <h1>¿Hubo cambios?</h1>
  //   </div>
  // );

  if(show) {
    return (
      <div>
        <h1>¡Hubo cambios!</h1>
        <button 
          onClick={toggleShow}
        >
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return null;
  }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };