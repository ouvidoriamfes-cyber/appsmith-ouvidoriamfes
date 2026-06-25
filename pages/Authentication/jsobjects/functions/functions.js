export default {

	defaultTab: 'Sign In',

	setDefaultTab: (newTab) => {
		this.defaultTab = newTab;
	},

		signIn: async () => {
		// Executa a busca do usuário no banco do Supabase pelo e-mail inserido
		const dadosUser = await Query_Supabase_Login.run();

		// Verifica se encontrou algum usuário com esse e-mail
		if (dadosUser && dadosUser.length > 0) {
			const usuario = dadosUser[0];
			
			// Salva os dados na memória do Appsmith usando as colunas da sua tabela
			await storeValue('id_usuario', usuario.id);
			await storeValue('email_usuario', usuario.Login);
			await storeValue('perfil_usuario', usuario.Perfil);
			
			showAlert('Login efetuado com sucesso!', 'success');
			
			// COMANDO ATIVADO: Redireciona para a Page1
			navigateTo('Tela_inicial');
			
		} else {
			return showAlert('Combinação de e-mail/senha inválida ou usuário não encontrado', 'error');
		}
	},


	register: async () => {
		// Importante: Criar usuários direto na tabela 'auth.users' via INSERT SQL comum 
		// costuma ser bloqueado pelo Supabase devido às regras de segurança (RLS).
		showAlert('Para cadastrar novos usuários no Supabase, o recomendado é usar a API Rest descrita anteriormente.', 'warning');
	},
}
