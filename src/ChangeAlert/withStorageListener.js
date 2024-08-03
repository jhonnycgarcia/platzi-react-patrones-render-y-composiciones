import React from 'react';

function withStorageListener(WrapperComponent) {
    return function WrapperComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(() => {
            window.addEventListener('storage', handleStorageChange);

            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
        }, []);

        const toggleShow = () => {
            setStorageChange(false);
            props.sincronize();
        }

        function handleStorageChange(change){

            if(change.key === 'TODOS_V1'){
                console.log('Hubo cambios en TODOS_V1');
                setStorageChange(true);
            }

            // setStorageChange(!storageChange);
        }

        return (
            <WrapperComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        );
    }
}

export { withStorageListener };