export default {
	// Gera um ID numérico aleatório para o Cadastro do Animal
	randomCadastroID: () => {
		return Math.ceil(Math.random() * 9999) + 1;
	},

	// Gera um ID numérico aleatório para o Denunciante / Protocolo
	randomDenuncianteID: () => {
		return Math.ceil(Math.random() * 99999) + 1;
	} 
}
