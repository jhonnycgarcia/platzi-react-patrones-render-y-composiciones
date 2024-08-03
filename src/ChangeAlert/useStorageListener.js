import React from 'react';

function useStorageListener(sincronize) {

    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleShow = () => {
        setStorageChange(false);
        sincronize();
    }

    function handleStorageChange(change){

        if(change.key === 'TODOS_V1'){
            console.log('Hubo cambios en TODOS_V1');
            setStorageChange(true);
        }

        // setStorageChange(!storageChange);
    }

    return {
        show: storageChange,
        toggleShow
    }
}

export { useStorageListener };