 // Lista de Cicons e seus dados
 const cicoms = [
    {cicom: 'Alagoinhas', circuito: 'ALH5021751', Tel: '(75)3423-9200'},
    {cicom: 'Barreiras', circuito: 'BES5031525', Tel: '(77)3611-0190'},
    {cicom: 'Brumado', circuito: 'BRM5016519', Tel: '(77)3453-2649'},
    {cicom: 'Esplanada', circuito: 'ESA5011387', Tel: '(77)3413-7600'},
    {cicom: 'Euclides da Cunha', circuito: 'ECN5011240', Tel: '(75)32710190'},
    {cicom: 'Feira de Santana', circuito: 'FSA5094140', Tel: '(75)3224-0918'},
    {cicom: 'Guanambi', circuito: 'GNB5017824', Tel: '(77)3451-5399'},
    {cicom: 'Ibotirama', circuito: 'IBM5010783', Tel: '(77)3698-6500'},
    {cicom: 'Irece', circuito: 'IEE5017806', Tel: '(74)3641-5935'},
    {cicom: 'Itaberaba', circuito: 'IEB5011725', Tel: '(75)3251-8450'},
    {cicom: 'Itabuna', circuito: 'ITB5038838', Tel: '(73)32141500'},
    {cicom: 'Jequié', circuito: 'JEE5022430', Tel: '(73)3528-3900'},
    {cicom: 'Juazeiro', circuito: 'JUO5026611', Tel: '(74)3611-9230'},
    {cicom: 'Paulo Afonso', circuito: 'PAF5020161', Tel: '(75)3281-8900'},
    {cicom: 'Porto Seguro', circuito: 'PGU5022195', Tel: '(73)3268-9330'},
    {cicom: 'Santa Maria da Vitoria', circuito: 'SMV5012231', Tel: '(77)3483-6549'},
    {cicom: 'Santo Antônio de Jesus', circuito: 'SNJ5024228', Tel: '(75)3631-8450'},
    {cicom: 'Senhor do Bonfim', circuito: 'SBM5014086', Tel: '(74)3541-3995'},
    {cicom: 'Serrinha', circuito: 'SEH5019056', Tel: '(75) 3261-8247'},
    {cicom: 'Teixeira de Freitas', circuito: 'TAF5036594', Tel: '(73)3165-2199'},
    {cicom: 'Valença', circuito: 'VEC5015775', Tel: '(75)36433400'},
    {cicom: 'Vitoria da Conquista', circuito: 'VCA5038417',Tel: '(77) 3420-8800'}
]

// Preenche a lista de Cicoms
const lista = document.getElementById('listaCicoms')

cicoms.forEach((cicomAtual) => {
        const novoItem = document.createElement('option')
        novoItem.text = cicomAtual.cicom
        lista.append(novoItem)
})

// Assossia os campos de texto para inserir os textos gerados
const areaTransf = 'Clique no botão ao lado para copiar para a área de transferência!'
const placeIncident = `Texto para o INCIDENTE.\n${areaTransf}`
const textoGerado = document.getElementById('textoGerado')
textoGerado.setAttribute('placeholder', placeIncident)
const whatsappGerado = document.getElementById('whatsappGerado')
const placeWhatsapp = `Texto para o Whatsapp.\n${areaTransf}`
whatsappGerado.setAttribute('placeholder', placeWhatsapp)


function geraTextos() {

    if(lista.value == 'Selecione uma CICOM') {
        textoGerado.value = ''
        whatsappGerado.value = ''
    }
    
    // Captura data e hora atual
    let data = new Date()
    
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
    let indexSelecionado = lista.selectedIndex - 1

    // Gera os textos finais
    let textoFinal =
        `CICOM ${cicoms[indexSelecionado].cicom.toUpperCase()}.\nInformamos que às ${hora}h:${min} do dia ${dia}/${mes}/${ano} foi constatado que o link de dados do CICOM na cidade de ${cicoms[indexSelecionado].cicom} do circuito ${cicoms[indexSelecionado].circuito.toUpperCase()} encontra-se inoperante. \nInformamos ainda que o atendimento é de emergência operando 24h e não pode parar.\nTelefone / Contato: ${cicoms[indexSelecionado].Tel.toUpperCase()} / Coordenador ou Adjunto da CICOM.\nChamado aberto por `
    let whatsappFinal =
        `Foi aberto um Incidente junto à PRODEB referente à queda do link de DADOS da CICOM ${cicoms[indexSelecionado].cicom.toUpperCase()}.\n Incidente Nº: `

    textoGerado.value = textoFinal
    whatsappGerado.value = whatsappFinal
}

// copia os textos para a área de transferencia
const copiarTextoIncidente = () => navigator.clipboard.writeText(textoGerado.value)
const copiarTextoWhatsapp = () => navigator.clipboard.writeText(whatsappGerado.value)