export default {
  // Variável que guardará a hora atualizada
  horaAtual: "13:11",

  // Função que inicia o relógio automático
  iniciarRelogio: () => {
    setInterval(() => {
      // Atualiza a variável interna com a hora atual formatada
      this.horaAtual = moment().format("HH:mm:ss");
    }, 1000); // Atualiza a cada 1 segundo (1000ms)
  }
}
