export default {
  async cadastrarComImagens() {
    // 1. Validações básicas de segurança antes de começar
    if (!n_denuncia_animal.text || !Oficio_Text_den_geral.text) {
      return showAlert('Os campos Número da Denúncia e Descrição são obrigatórios!', 'warning');
    }
    if (!FilePicker1.files || FilePicker1.files.length === 0) {
      return showAlert('Por favor, selecione pelo menos 1 foto antes de salvar!', 'warning');
    }
    
    let linksDasFotos = [];

    // 2. Loop para enviar cada uma das fotos selecionadas (até 4)
    for (let i = 0; i < FilePicker1.files.length; i++) {
      const arquivoAtual = FilePicker1.files[i];
      
      // Limpa os espaços e caracteres especiais do nome original do arquivo
      const nomeOriginalLimpo = encodeURIComponent(arquivoAtual.name);
      // Gera o nome único unindo o número da denúncia, a ordem e o nome limpo
      const nomeUnico = `${n_denuncia_animal.text}_foto_${i + 1}_${Date.now()}_${nomeOriginalLimpo}`;
      
      // Grava temporariamente os dados brutos da imagem na memória que a API vai ler
      await storeValue("nomeArquivoAtual", nomeUnico);
      
      // Executa a sua API de upload (Salvar_fotos_animais) para enviar a imagem atual
      await Salvar_fotos_animais.run();
      
      // Guarda o link público final gerado para esta foto específica
      const urlFinalDaFoto = `https://supabase.co{nomeUnico}`;
      linksDasFotos.push(urlFinalDaFoto);
    }

    // Une os links de todas as fotos em um único texto separado por vírgula
    await storeValue("urlsParaOBanco", linksDasFotos.join(", "));

    // 3. Executa a sua query SQL que salva todos os textos da denúncia no banco de dados
    await Query_Salvar_Oficio_Geral.run()
      .then(() => {
        showAlert('Denúncia e todas as imagens salvas com sucesso!', 'success');
        
        // Limpa os componentes da tela após concluir tudo
        resetWidget("n_denuncia_animal");
        resetWidget("Text_den_animal");
        resetWidget("FilePicker1");
      })
      .catch(() => showAlert('Erro ao registrar os dados da denúncia no banco de dados.', 'error'));
  }
}
