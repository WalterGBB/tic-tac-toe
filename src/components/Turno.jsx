import { Cuadrado } from './Cuadrado'; // Importamos el componente Cuadrado
import { turnos } from '../constants/constantes'; // Importamos los turnos (X y O) desde un archivo de constantes

export function Turno({ turno }) {
    return (
        <section className='turno'>
            {/* Cuadrado para el jugador X */}
            <Cuadrado seleccionado={turno === turnos.X}>
                {turnos.X} {/* Mostramos 'X' dentro del Cuadrado si es el turno de X */}
            </Cuadrado>
            {/* Cuadrado para el jugador O */}
            <Cuadrado seleccionado={turno === turnos.O}>
                {turnos.O} {/* Mostramos 'O' dentro del Cuadrado si es el turno de O */}
            </Cuadrado>
        </section>
    );
}

/*RESUMEN:
  El componente Turno se encarga de mostrar visualmente el turno actual del juego Tic Tac Toe. Utiliza el 
  componente Cuadrado para representar los símbolos (X u O) de los jugadores según el turno recibido como prop 
  (turno). Este componente facilita la visualización del estado del juego al mostrar de manera clara y directa 
  quién tiene el turno en cada momento. */