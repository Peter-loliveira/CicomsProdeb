 // Lista de Cicons e seus dados
 const cicoms = [
    {cicom: 'Alagoinhas', circuito: 'VPN01', Contato: 'Contato 01', Tel: '(77)3333-0001'},
    {cicom: 'Barreiras', circuito: 'VPN02', Contato: 'Contato 02', Tel: '(77)3333-0002'},
    {cicom: 'Brumado', circuito: 'VPN03', Contato: 'Contato 03', Tel: '(77)3333-0003'},
    {cicom: 'Esplanada', circuito: 'VPN04', Contato: 'Contato 04', Tel: '(77)3333-0004'},
    {cicom: 'Euclides da Cunha', circuito: 'VPN05', Contato: 'Contato 05', Tel: '(77)3333-0005'},
    {cicom: 'Feira de Santana', circuito: 'VPN05', Contato: 'Contato 05', Tel: '(77)3333-0005'},
    {cicom: 'Guanambi', circuito: 'VPN06', Contato: 'Contato 06', Tel: '(77)3333-0006'},
    {cicom: 'Ibotirama', circuito: 'VPN07', Contato: 'Contato 07', Tel: '(77)3333-0007'},
    {cicom: 'Irece', circuito: 'VPN08', Contato: 'Contato 08', Tel: '(77)3333-0008'},
    {cicom: 'Itaberaba', circuito: 'VPN09', Contato: 'Contato 09', Tel: '(77)3333-0009'},
    {cicom: 'Itabuna', circuito: 'VPN10', Contato: 'Contato 10', Tel: '(77)3333-0010'},
    {cicom: 'Jequié', circuito: 'VPN11', Contato: 'Contato 11', Tel: '(77)3333-0011'},
    {cicom: 'Juazeiro', circuito: 'VPN12', Contato: 'Contato 12', Tel: '(77)3333-0012'},
    {cicom: 'Paulo Afonso', circuito: 'VPN13', Contato: 'Contato 13', Tel: '(77)3333-0013'},
    {cicom: 'Porto Seguro', circuito: 'VPN14', Contato: 'Contato 14', Tel: '(77)3333-0014'},
    {cicom: 'Santa Maria da Vitoria', circuito: 'VPN15', Contato: 'Contato 15', Tel: '(77)3333-0015'},
    {cicom: 'Santo Antônio de Jesus', circuito: 'VPN16', Contato: 'Contato 16', Tel: '(77)3333-0016'},
    {cicom: 'Senhor do Bonfim', circuito: 'VPN17', Contato: 'Contato 17', Tel: '(77)3333-0017'},
    {cicom: 'Serrinha', circuito: 'VPN18', Contato: 'Contato 18', Tel: '(77)3333-0018'},
    {cicom: 'Teixeira de Freitas', circuito: 'VPN19', Contato: 'Contato 19', Tel: '(77)3333-0019'},
    {cicom: 'Valença', circuito: 'VPN20', Contato: 'Contato 20', Tel: '(77)3333-0020'},
    {cicom: 'Vitoria da Conquista', circuito: 'VPN21', Contato: 'Contato 21', Tel: '(77)3333-0021'},
]

// Preenche a lista de Cicoms
const lista = document.getElementById('listaCicoms')
for (let i = 0; i < cicoms.length; i++) {
    let novoItem = document.createElement('option')
    novoItem.text = cicoms[i].cicom
    lista.append(novoItem)
}

// Assossio os campos de texto para inserir os textos gerados
const textoGerado = document.getElementById('textoGerado')
const whatsappGerado = document.getElementById('whatsappGerado')


function geraTextos() {
    // Captura data e hora atual
    let data = new Date()
    console.log(data);
    let dia = data.getDate();
    if(dia < 10) {dia = '0' + dia} 

    let mes = data.getMonth() + 1;
    if(mes < 10) {mes = '0' + mes} 
    
    let ano = data.getFullYear();
    let hora = data.getHours();
    if(hora < 10) {hora = '0' + hora} 
    
    let min = data.getMinutes();
    if(min < 10) {min = '0' + min} 

    // Captura item ca lista selecionado
    let indexSelecionado = lista.selectedIndex

    // Gera os textos finais
    let textoFinal =
        `CICOM ${cicoms[indexSelecionado].cicom.toUpperCase()}. Informamos que às ${hora}h:${min} do dia ${dia}/${mes}/${ano} foi constatado que o link de dados do CICOM na cidade de Valença do circuito ${cicoms[indexSelecionado].circuito.toUpperCase()} encontra-se inoperante. Informamos ainda que o atendimento é de emergência operando 24h e não pode parar. Telefone de contato: ${cicoms[indexSelecionado].Tel.toUpperCase()} ${cicoms[indexSelecionado].Contato.toUpperCase()}, Coordenador da Unidade. \nChamado aberto por Peter Lange.`
    let whatsappFinal =
        `Foi aberto um Incidente Junto à PRODEB referente à CICOM ${cicoms[indexSelecionado].cicom.toUpperCase()}. Incidente Nº: `

    textoGerado.value = textoFinal
    whatsappGerado.value = whatsappFinal
}

// copia os textos para a área de transferencia
const copiarTextoIncidente = () => navigator.clipboard.writeText(textoGerado.value)
const copiarTextoWhatsapp = () => navigator.clipboard.writeText(whatsappGerado.value)