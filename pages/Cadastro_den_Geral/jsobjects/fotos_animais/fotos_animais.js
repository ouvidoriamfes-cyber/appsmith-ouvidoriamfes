export default {
  async cadastrarComImagens() {
    // Roda o upload se houver fotos selecionadas
    if (FilePicker1.files && FilePicker1.files.length > 0) {
      // await Nome_Da_Sua_Query_De_Upload.run();
    }

    // Executa a query SQL de salvamento
    // IMPORTANTE: Mude 'Substitua_Pelo_Nome_Da_Sua_Query_SQL' para o nome real da sua query
    return Query_Salvar_Geral.run()
      .then(() => {
        showAlert('Cadastro realizado com sucesso!', 'success');
        
        // Limpa os campos obrigatórios da tela
        resetWidget("n_denuncia_animal", true);
        resetWidget("Text_den_animal", true);
        
        // Limpa o seletor de arquivos (caso tenha sido usado)
        resetWidget("FilePicker1", true);
      })
      .catch(() => showAlert('Erro ao salvar o cadastro.', 'error'));
  }
}
