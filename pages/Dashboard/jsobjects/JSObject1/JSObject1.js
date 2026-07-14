export default {
	// Puxa e agrupa os dados para o gráfico do E-charts
	getChartData: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		
		const counts = {};
		rawData.forEach(row => {
			const tipo = row.classificacao;
			if (tipo) {
				counts[tipo] = (counts[tipo] || 0) + 1;
			}
		});

		return Object.keys(counts).map(tipo => {
			return {
				name: tipo,
				value: counts[tipo]
			};
		});
	},

	// 📊 FUNÇÃO DO GRÁFICO (E-charts Custom)
	getEChartConfiguration: () => {
		const chartData = JSObject1.getChartData();
		
		return {
			title: {
				text: 'Classificação de Ocorrências',
				left: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{b}: {c} ({d}%)'
			},
			legend: {
				orient: 'horizontal',
				bottom: 'bottom'
			},
			series: [
				{
					name: 'Ocorrências',
					type: 'pie',
					radius: '50%',
					data: chartData,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		};
	},

	// 🔢 FUNÇÕES DE CONTAGEM PURA (Apenas o número bruto)

	getTotalAnimais: () => {
		return (Dashboard_Cad_Animal.data || []).length;
	},

	getAbandonoCount: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		return rawData.filter(row => row.classificacao === 'Abandono').length;
	},

	getAcidenteCount: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		return rawData.filter(row => row.classificacao === 'Acidente').length;
	},

	getAgressaoCount: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		return rawData.filter(row => row.classificacao === 'Agressão').length;
	},

	getAssassinatoCount: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		return rawData.filter(row => row.classificacao === 'Assassinato').length;
	},

	getAtropelamentoCount: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		return rawData.filter(row => row.classificacao === 'Atropelamento').length;
	},

	getEnvenenamentoCount: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		return rawData.filter(row => row.classificacao === 'Envenenamento').length;
	},

	getMausTratosCount: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		return rawData.filter(row => row.classificacao === 'Maus Tratos').length;
	},

	getOutrosCount: () => {
		const rawData = Dashboard_Cad_Animal.data || [];
		return rawData.filter(row => row.classificacao === 'Outros').length;
	},

	// 📋 FORMATADORES PARA OS WIDGETS DE TEXTO (Retorna com K ou M se for muito grande)
	
	formatarTotalGeral: () => {
		return JSObject1.numFormatter(JSObject1.getTotalAnimais());
	},

	formatarAbandono: () => {
		return JSObject1.numFormatter(JSObject1.getAbandonoCount());
	},

	formatarAcidente: () => {
		return JSObject1.numFormatter(JSObject1.getAcidenteCount());
	},

	formatarAgressao: () => {
		return JSObject1.numFormatter(JSObject1.getAgressaoCount());
	},

	formatarAssassinato: () => {
		return JSObject1.numFormatter(JSObject1.getAssassinatoCount());
	},

	formatarAtropelamento: () => {
		return JSObject1.numFormatter(JSObject1.getAtropelamentoCount());
	},

	formatarEnvenenamento: () => {
		return JSObject1.numFormatter(JSObject1.getEnvenenamentoCount());
	},

	formatarMausTratos: () => {
		return JSObject1.numFormatter(JSObject1.getMausTratosCount());
	},

	formatarOutros: () => {
		return JSObject1.numFormatter(JSObject1.getOutrosCount());
	},

	// Módulo interno que faz o cálculo visual das abreviações (K, M)
	numFormatter: (num) => {
		if (num > 999 && num < 1000000) {
			return (num / 1000).toFixed(0) + 'K';
		} else if (num >= 1000000) {
			return (num / 1000000).toFixed(0) + 'M';
		} else {
			return num;
		}
	}
}
