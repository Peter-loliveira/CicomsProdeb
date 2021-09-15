 // Lista de Cicons e seus dados
 const cicoms = [
    {cicom: 'Alagoinhas', circuito: 'ALH5021751', Contato: 'Lucimeire', Tel: '(75)3423-9200'},
    {cicom: 'Barreiras', circuito: 'BES5031525', Contato: 'Cap PM Leonardo', Tel: '(77)3611-0190'},
    {cicom: 'Brumado', circuito: 'BRM5016519', Contato: 'Cap PM Leila', Tel: '(77)3453-2649'},
    {cicom: 'Esplanada', circuito: 'ESA5011387', Contato: 'Cap. Helmo', Tel: '(77)3413-7600'},
    {cicom: 'Euclides da Cunha', circuito: 'ECN5011240', Contato: 'Cap PM Fábio Oliveira', Tel: '(75)32710190'},
    {cicom: 'Feira de Santana', circuito: 'FSA5094140', Contato: 'Cap PM Rosuilson', Tel: '(75)3224-0918'},
    {cicom: 'Guanambi', circuito: 'GNB5017824', Contato: 'Cap PM Catarina', Tel: '(77)3451-5399'},
    {cicom: 'Ibotirama', circuito: 'IBM5010783', Contato: 'Coordenador da Unidade', Tel: '(77)3698-6500'},
    {cicom: 'Irece', circuito: 'IEE5017806', Contato: 'Cap PM Guimares', Tel: '(74)3641-5935'},
    {cicom: 'Itaberaba', circuito: 'IEB5011725', Contato: 'Cap. PM Estrela', Tel: '(75)3251-8450'},
    {cicom: 'Itabuna', circuito: 'ITB5038838', Contato: 'Cap. PM Jovita', Tel: '(73)32141500'},
    {cicom: 'Jequié', circuito: 'JEE5022430', Contato: 'Cap. PM Ellison Machado', Tel: '(73)3528-3900'},
    {cicom: 'Juazeiro', circuito: 'JUO5026611', Contato: 'Cap. PM Ricardo', Tel: '(74)3611-9230'},
    {cicom: 'Paulo Afonso', circuito: 'PAF5020161', Contato: ' Cap. PM Nery', Tel: '(75)3281-8900'},
    {cicom: 'Porto Seguro', circuito: 'PGU5022195', Contato: ' Cap. PM Marcio Henrique', Tel: '(73)3268-9330'},
    {cicom: 'Santa Maria da Vitoria', circuito: 'SMV5012231', Contato: 'Cap. PM Azevedo', Tel: '(77)3483-6549'},
    {cicom: 'Santo Antônio de Jesus', circuito: 'SNJ5024228', Contato: 'Cap. PM Vaz', Tel: '(75)3631-8450'},
    {cicom: 'Senhor do Bonfim', circuito: 'SBM5014086', Contato: 'Cap. PM Wallace', Tel: '(74)3541-3995'},
    {cicom: 'Serrinha', circuito: 'SEH5019056', Contato: 'Cap. Jailson', Tel: '(75) 3261-8247'},
    {cicom: 'Teixeira de Freitas', circuito: 'TAF5036594', Contato: 'Cap. PM Marion', Tel: '(73)3165-2199'},
    {cicom: 'Valença', circuito: 'VEC5015775', Contato: 'Cap. PM Claudelúcia Veiga', Tel: '(75)36433400'},
    {cicom: 'Vitoria da Conquista', circuito: 'VCA5038417', Contato: 'Contato 21', Tel: '(77)3333-0021'},
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
        `CICOM ${cicoms[indexSelecionado].cicom.toUpperCase()}.\nInformamos que às ${hora}h:${min} do dia ${dia}/${mes}/${ano} foi constatado que o link de dados do CICOM na cidade de ${cicoms[indexSelecionado].cicom} do circuito ${cicoms[indexSelecionado].circuito.toUpperCase()} encontra-se inoperante. \nInformamos ainda que o atendimento é de emergência operando 24h e não pode parar. Telefone de contato: ${cicoms[indexSelecionado].Tel.toUpperCase()} ${cicoms[indexSelecionado].Contato.toUpperCase()}, Coordenador da Unidade. \nChamado aberto por .`
    let whatsappFinal =
        `Foi aberto um Incidente Junto à PRODEB referente à CICOM ${cicoms[indexSelecionado].cicom.toUpperCase()}. Incidente Nº: `

    textoGerado.value = textoFinal
    whatsappGerado.value = whatsappFinal
}

// copia os textos para a área de transferencia
const copiarTextoIncidente = () => navigator.clipboard.writeText(textoGerado.value)
const copiarTextoWhatsapp = () => navigator.clipboard.writeText(whatsappGerado.value)