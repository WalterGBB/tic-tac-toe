import { Cuadrado } from './Cuadrado'; // Importamos el componente Cuadrado

export function Tablero({ tablero, actualizarTablero }) {
    return (
        <section className='juego'>
            {/* Mapeamos el array 'tablero' para renderizar los cuadrados */}
            {tablero.map((ea, index) => (
                <Cuadrado
                    key={index} // Clave única para cada cuadrado (es buena práctica usar el índice en un map)
                    index={index} // Índice del cuadrado en el tablero
                    actualizarTablero={actualizarTablero} // Función para actualizar el tablero cuando se hace clic en el cuadrado
                >
                    {ea} {/* Mostramos el valor actual del cuadrado ('X', 'O' o null) */}
                </Cuadrado>
            ))}
        </section>
    );
}

/*RESUMEN:
  El componente Tablero es responsable de renderizar visualmente el tablero de juego. Utiliza el componente 
  Cuadrado para representar cada cuadrado del tablero, mapeando el array tablero y proporcionando las props 
  necesarias (key, index, actualizarTablero) para cada cuadrado. Esto asegura que cada cuadrado del tablero 
  esté correctamente representado en la interfaz de usuario y que pueda interactuar adecuadamente con las 
  funciones de actualización del juego. */