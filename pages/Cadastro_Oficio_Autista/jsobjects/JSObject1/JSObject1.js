export default {
  atualizarRelogio: () => {
    // Atualiza a cada 1 segundo
    setInterval(() => {
      // Salva a hora atual no store em formato HH:mm:ss
      storeValue("atualizador_hora", moment().format("HH:mm:ss"));
    }, 1000);
  }
}