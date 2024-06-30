import { useState } from 'react';
import confetti from 'canvas-confetti'; // biblioteca JavaScript que permite crear efectos visuales de confeti dinámicos y animados en el navegador
import { turnos } from '../constants/constantes.js'; // Importamos los turnos (X y O) desde un archivo de constantes
import { verificarGanadorDe } from '../logic/tablero.js'; // Importamos la función para verificar si hay un ganador desde un archivo de lógica del tablero

export function useTicTacToe() {
    // Estado para el tablero de juego (inicializado con un array de 9 elementos nulos)
    const [tablero, setTablero] = useState(Array(9).fill(null));

    // Estado para controlar el turno actual (inicializado con el turno de X)
    const [turno, setTurno] = useState(turnos.X);

    // Estado para almacenar al ganador del juego (inicializado como null)
    const [ganador, setGanador] = useState(null);

    // Función para actualizar el tablero cuando un jugador hace un movimiento
    const actualizarTablero = (index) => {
        // Si el cuadrado ya está ocupado o ya hay un ganador, retornamos sin hacer cambios
        if (tablero[index] || ganador) return;

        // Creamos una copia del tablero actual usando spread operator para inmutabilidad
        const nuevoTablero = [...tablero];
        // Colocamos el símbolo del jugador actual (X o O) en la posición seleccionada
        nuevoTablero[index] = turno;
        // Actualizamos el estado del tablero con el nuevo tablero
        setTablero(nuevoTablero);

        // Cambiamos el turno al siguiente jugador
        const nuevoTurno = turno === turnos.X ? turnos.O : turnos.X;
        setTurno(nuevoTurno);

        // Verificamos si hay un ganador en el nuevo estado del tablero
        const nuevoGanador = verificarGanadorDe(nuevoTablero);
        if (nuevoGanador) {
            // Si hay un ganador, lanzamos confetti (¡celebración!)
            confetti();
            // Actualizamos el estado del ganador con el jugador ganador
            setGanador(nuevoGanador);
        } else if (nuevoTablero.every((Cuadrado) => Cuadrado !== null)) {
            // Si no hay ganador pero todos los cuadros están llenos, es un empate
            setGanador(false);
        }
    };

    // Función para reiniciar el juego (resetear todos los estados)
    const resetJuego = () => {
        setTablero(Array(9).fill(null)); // Reiniciamos el tablero a su estado inicial
        setTurno(turnos.X); // Reiniciamos el turno al jugador X
        setGanador(null); // Reiniciamos el estado del ganador a null
    };

    // Retornamos los estados y funciones que queremos exponer fuera del hook
    return { tablero, turno, ganador, actualizarTablero, resetJuego };
}

/*RESUMEN:
  El hook useTicTacToe encapsula toda la lógica del juego Tic Tac Toe, incluyendo el estado del tablero, 
  el control de turnos, la verificación de ganadores y la función para reiniciar el juego. Utiliza useState 
  para gestionar el estado localmente y proporciona funciones para interactuar con el estado del juego de 
  manera controlada y eficiente. Este enfoque modular y reutilizable ayuda a mantener el código organizado y 
  facilita la escalabilidad del juego Tic Tac Toe. */