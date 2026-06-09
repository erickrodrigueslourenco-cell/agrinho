// Dados extras das tecnologias (Simulando um Banco de Dados)
const infoTecnologias = {
    iot: {
        titulo: "Sensores Inteligentes e IoT (Internet das Coisas)",
        texto: "Dispositivos enterrados no solo ou espalhados pela plantação medem constantemente a umidade, temperatura e nutrientes. Isso permite que o agricultor irrigue apenas quando necessário, economizando até 40% de água e aplicando fertilizantes na quantidade exata."
    },
    drones: {
        titulo: "Drones e Monitoramento por Satélite",
        texto: "Câmeras multiespectrais a bordo de drones sobrevoam a lavoura capturando imagens invisíveis ao olho humano. O sistema identifica manchas de pragas, falhas de plantio ou estresse hídrico em minutos, evitando que o problema se espalhe por toda a fazenda."
    },
    ia: {
        titulo: "Inteligência Artificial e Big Data",
        texto: "Algoritmos analisam históricos de clima, dados do solo e preços de mercado para cruzar informações. A IA ajuda o produtor a decidir o dia exato de plantar e colher, prevendo a produtividade da safra com margens de acerto superiores a 90%."
    }
};

// 1. Lógica de Navegação por Abas (Tabs)
const botoesNav = document.querySelectorAll('.nav-btn');
const secoes = document.querySelectorAll('.tab-content');

botoesNav.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove classe ativa de todos os botões e seções
        botoesNav.forEach(btn => btn.classList.remove('active'));
        secoes.forEach(sec => sec.classList.remove('active'));

        // Adiciona classe ativa no botão clicado
        botao.classList.add('active');
        
        // Ativa a seção correspondente
        const targetId = botao.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Botão da página inicial que leva para as tecnologias
document.getElementById('btn-conhecer').addEventListener('click', () => {
    document.querySelector('[data-target="pilares"]').click();
});

// 2. Lógica dos Cards de Tecnologia (Exibir detalhes)
const cards = document.querySelectorAll('.card');
const painelDetalhe = document.getElementById('detalhe-painel');
const detalheTitulo = document.getElementById('detalhe-titulo');
const detalheTexto = document.getElementById('detalhe-texto');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const chaveTech = card.getAttribute('data-tech');
        const dados = infoTecnologias[chaveTech];

        if (dados) {
            detalheTitulo.textContent = dados.titulo;
            detalheTexto.textContent = dados.texto;
            painelDetalhe.classList.remove('hidden');
            
            // Rola a tela suavemente até o painel de detalhes
            painelDetalhe.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 3. Lógica do Simulador de Impacto (Cálculo fictício baseado em dados reais)
const btnCalcular = document.getElementById('btn-calcular');
const inputHectares = document.getElementById('hectares');
const campoResultado = document.getElementById('resultado-calculo');

btnCalcular.addEventListener('click', () => {
    const hectares = parseFloat(inputHectares.value);

    if (isNaN(hectares) || hectares <= 0) {
        campoResultado.textContent = "Por favor, insira um número válido de hectares.";
        campoResultado.style.color = "#d32f2f";
        campoResultado.classList.remove('hidden');
        return;
    }

    // Média estimada: Economia de 150.000 litros de água por hectare/ano com manejo IoT
    const economiaAgua = hectares * 150000;
    
    campoResultado.innerHTML = `<strong>Estimativa de Impacto:</strong><br>
    Sua propriedade pode economizar cerca de <strong>${economiaAgua.toLocaleString('pt-BR')} litros</strong> de água por ano, além de reduzir em até 15% os custos com energia de irrigação!`;
    campoResultado.style.color = "var(--primary-color)";
    campoResultado.classList.remove('hidden');
});
