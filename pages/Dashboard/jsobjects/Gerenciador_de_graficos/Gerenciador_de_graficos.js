export default {
	getPieChart: () => {
		// Pega os dados brutos retornados pela sua query do Supabase
		const rawData = Dashboard_Cad_Animal.data || [];
		
		// Conta quantas vezes cada classificação aparece no banco
		const counts = {};
		rawData.forEach(row => {
			const tipo = row.classificacao;
			if (tipo) {
				counts[tipo] = (counts[tipo] || 0) + 1;
			}
		});

		// Transforma o resultado no formato que o gráfico FusionCharts entende
		const chartData = Object.keys(counts).map(tipo => {
			return {
				label: tipo,        // Ex: "Maus Tratos", "Abandono"
				value: counts[tipo] // Quantidade de registros
			};
		});

		const dataSource = {
			chart: {
				caption: "Classificação de Ocorrências Animais",
				palettecolors: "#5A38FD, #2ec4b6, #ff9f1c", // Uma cor para cada categoria
				theme: "fusion"
			},
			data: chartData
		};

		return {
			type: "pie2d", // Mantém gráfico de pizza. Use "column2d" se preferir barras.
			dataFormat: "json",
			dataSource
		};		
	}
}
