/*Un componente modal en React es una ventana emergente que aparece sobre el contenido 
principal de una aplicación. Los modales se utilizan comúnmente para mostrar información 
adicional, formularios, confirmaciones de acciones, alertas y otros contenidos interactivos 
sin abandonar la página actual. */

import { Cuadrado } from "./Cuadrado";

export function GanadorModal({ ganador, resetJuego }) {
    // Si no hay ganador (ganador === null), no renderizamos nada
    if (ganador === null) return null;

    // Determinamos el texto a mostrar según el valor de 'ganador'
    const ganadorTexto = ganador === false ? '¡Empate 🎉!' : 'Ganó ';

    return (
        <section className='ganador'>
            <div className="text">
                <h3 className={ganador === false ? 'empate' : ''}>
                    {ganadorTexto}
                </h3>

                {/* Mostramos el símbolo del ganador si ganador no es false */}
                {ganador !== false && (
                    <header className='gano'>
                        <Cuadrado>{ganador}</Cuadrado>
                    </header>
                )}

                <footer>
                    {/* Botón para reiniciar el juego */}
                    <button onClick={resetJuego}>Jugar otra vez</button>
                </footer>
            </div>
        </section>
    );
}

/*RESUMEN:
El componente GanadorModal es responsable de mostrar un modal cuando hay un ganador o un empate en el juego. 
Dependiendo del valor de ganador, muestra el resultado del juego y permite al usuario reiniciar el juego 
haciendo clic en el botón "Jugar otra vez". El uso de condicionales (if (ganador === null) return false;) 
asegura que el modal se muestre solo cuando haya un resultado definitivo, mejorando la experiencia del usuario 
al jugar nuestro Tic Tac Toe. */