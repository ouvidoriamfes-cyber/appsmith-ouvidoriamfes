export default {
	isBotaoBloqueado: (perfisPermitidos) => {
		const perfilAtual = appsmith.store.perfil_usuario;
		return !perfisPermitidos.includes(perfilAtual);
	},

	getDenunciaPorNumero: () => {
		// Verifica se o dropdown existe antes de tentar ler o valor dele
		const numeroSelecionado = typeof Select_n_den_animal !== "undefined" ? Select_n_den_animal.selectedOptionValue : null;
		
		if (!numeroSelecionado) return {};
		
		// Varre o banco de dados e acha a linha correspondente
		return Query_Buscar_Animais.data.find(r => String(r.Num_Denuncia) === numeroSelecionado) || {};
	}
}