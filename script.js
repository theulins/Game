/* Corpo */
body {
    background: linear-gradient(to bottom, #1d2671, #c33764);
    color: white;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

/* Estrutura do Jogo */
.game {
    background: rgba(0, 0, 0, 0.8);
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    text-align: center;
}

/* Rolos */
.rolos {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.rolo {
    width: 100px;
    height: 100px;
    background-color: #333;
    margin: 10px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
}

.rolo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: girar 1.2s ease-in-out infinite;
}

.rolo img.parado {
    animation: none;
}

/* Painel de Controle */
.painel-controle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}

button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}

/* Resultado */
#resultado {
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
}

/* Animações */
@keyframes girar {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-200%);
    }
}
