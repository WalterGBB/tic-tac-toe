// Importamos el custom hook useTicTacToe que contiene la lógica del juego
import { useTicTacToe } from './hooks/useTicTacToe';

// Importamos los componentes necesarios para renderizar el juego
import { Tablero } from './components/Tablero.jsx';
import { Turno } from './components/Turno.jsx';
import { GanadorModal } from './components/GanadorModal.jsx';

// Definimos el componente funcional principal App
function App() {
  // Utilizamos el hook useTicTacToe para obtener los estados y funciones del juego
  const { tablero, turno, ganador, actualizarTablero, resetJuego } = useTicTacToe();

  // Renderizamos el contenido principal del juego
  return (
    <main className='tablero'>
      {/* Título del juego */}
      <h1>Tic Tac Toe</h1>
      {/* Componente Tablero: Renderiza los cuadrados del juego y maneja la interacción del usuario */}
      <Tablero tablero={tablero} actualizarTablero={actualizarTablero} />

      {/* Componente Turno: Muestra el turno actual (X o O) */}
      <Turno turno={turno} />

      {/* Componente GanadorModal: Modal que se muestra cuando hay un ganador */}
      <GanadorModal resetJuego={resetJuego} ganador={ganador} />
    </main>
  );
}

// Exportamos el componente App para que pueda ser utilizado en el main
export default App;


/*RESUMEN:
  Este componente App actúa como el contenedor principal del juego Tic Tac Toe. Utiliza el hook useTicTacToe 
  para manejar la lógica del juego y renderiza los componentes necesarios para mostrar y controlar el estado 
  del juego, asegurando una separación clara de responsabilidades y facilitando el mantenimiento del código. */