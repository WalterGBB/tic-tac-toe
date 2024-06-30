import { jugadasGanadoras } from "../constants/constantes"

export const verificarGanadorDe = (tableroParaRevisar) => {
    //Revisamos las combinaciones ganadoras para ver si ganó X u O
    for (const jugada of jugadasGanadoras) {
        const [a, b, c] = jugada
        if (
            tableroParaRevisar[a] && //Si el cuadrado no está vacío != null
            tableroParaRevisar[a] === tableroParaRevisar[b] &&
            tableroParaRevisar[a] === tableroParaRevisar[c])
            return tableroParaRevisar[a] //Retorna X u O
    }
    return null //Si no hay ganador
}