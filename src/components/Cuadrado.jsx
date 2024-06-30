export const Cuadrado = ({ children, seleccionado, actualizarTablero, index }) => {
    // Determina las clases CSS del cuadrado según si está seleccionado o no
    const className = `cuadrado ${seleccionado ? 'seleccionado' : ''}`;

    // Función que se llama cuando se hace clic en un cuadrado del tablero
    const handleClick = () => {
        actualizarTablero(index); // Llama a la función actualizarTablero con el índice del cuadrado
    };

    return (
        <>
            {/* Cuando el usuario haga click en un cuadrado del tablero se llamará a la función handleClick */}
            <div className={className} onClick={handleClick}>
                {children} {/* Renderiza el contenido del cuadrado (X, O o null) */}
            </div>
        </>
    );
};

/*RESUMEN:
  El componente Cuadrado representa visualmente un cuadrado del juego Tic Tac Toe. Utiliza props para 
  determinar su contenido ('X', 'O' o null), si está seleccionado para el turno actual, y para manejar la 
  función que actualiza el estado del tablero cuando se hace clic en él. Este tipo de componente es crucial 
  en juegos y aplicaciones interactivas donde se deben gestionar interacciones de usuario para actualizar el 
  estado de la aplicación. */