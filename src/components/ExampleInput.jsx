// InputExample.jsx
import { useState } from 'react';

// Definición del componente funcional InputExample
const InputExample = () => {
    // Estado para almacenar el valor del campo de entrada
    const [inputValue, setInputValue] = useState('');

    // Función que maneja el cambio en el campo de entrada
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    // Renderiza un campo de entrada que refleja el valor almacenado en el estado
    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Escribe algo"
        />
    );
};

// Exporta el componente InputExample para ser utilizado en otros archivos
export default InputExample;