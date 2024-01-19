// ClickExample.jsx

// Definición del componente funcional ClickExample
const ClickExample = () => {
    // Función que maneja el clic del botón
    const handleClick = () => {
        alert('¡Botón clickeado!');
    };

    // Renderiza un botón que activa la función handleClick al hacer clic
    return (
        <button onClick ={handleClick}>
            click
        </button>
    );
};

// Exporta el componente ClickExample para ser utilizado en otros archivos
export default ClickExample;