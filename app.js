{
const IC={
  cobra:'<svg viewBox="0 0 40 40"><path d="M6 30h16a6 6 0 0 0 0-12H16a5 5 0 0 1 0-10h14" fill="none" stroke="#1fae6a" stroke-width="7" stroke-linecap="round"/><circle cx="31" cy="8" r="5" fill="#1fae6a"/><circle cx="32" cy="7" r="1.6" fill="#fff"/><circle cx="10" cy="20" r="3.5" fill="#ff4f5e"/></svg>',
  pulo:'<svg viewBox="0 0 40 40"><rect x="4" y="30" width="16" height="5" rx="2.5" fill="#1fae6a"/><rect x="22" y="18" width="14" height="5" rx="2.5" fill="#1fae6a"/><circle cx="14" cy="14" r="8" fill="#f5b800"/><circle cx="11.5" cy="12.5" r="1.6" fill="#18256e"/><circle cx="16.5" cy="12.5" r="1.6" fill="#18256e"/></svg>',
  voo:'<svg viewBox="0 0 40 40"><rect x="28" y="0" width="9" height="13" rx="2" fill="#2340d8"/><rect x="28" y="27" width="9" height="13" rx="2" fill="#2340d8"/><circle cx="15" cy="20" r="9" fill="#ff4f5e"/><path d="M8 21q5-6 9 0z" fill="#fff"/><circle cx="18" cy="17" r="1.8" fill="#18256e"/><path d="M23 19l5 2-5 2z" fill="#f5b800"/></svg>',
  frutas:'<svg viewBox="0 0 40 40"><circle cx="12" cy="10" r="6" fill="#ff4f5e"/><circle cx="27" cy="16" r="5" fill="#f5b800"/><path d="M6 26h28l-4 10H10z" fill="#2340d8"/><path d="M12 4q2-3 5-2" stroke="#1fae6a" stroke-width="2.5" fill="none"/></svg>',
  cores:'<svg viewBox="0 0 40 40"><rect x="3" y="3" width="16" height="16" rx="4" fill="#ff4f5e"/><rect x="21" y="3" width="16" height="16" rx="4" fill="#2340d8"/><rect x="3" y="21" width="16" height="16" rx="4" fill="#1fae6a"/><rect x="21" y="21" width="16" height="16" rx="4" fill="#f5b800"/></svg>'
};
IC.prateleira='<svg viewBox="0 0 40 40"><rect x="2" y="30" width="36" height="5" rx="2" fill="#8a5526"/><path d="M7 10h4v4l2 3v13H5V17l2-3z" fill="#ff4f5e"/><path d="M18 10h4v4l2 3v13h-8V17l2-3z" fill="#ff4f5e"/><path d="M29 10h4v4l2 3v13h-8V17l2-3z" fill="#ff4f5e"/></svg>';
const PROD=[['#ff4f5e','b'],['#2340d8','l'],['#1fae6a','c'],['#f5b800','p'],['#8b5cf6','b'],['#ef7d22','l']];
const prod=i=>{const[c,f]=PROD[i];return '<svg viewBox="0 0 24 34">'+({
  b:`<path d="M9 2h6v6l3 4v20H6V12l3-4z" fill="${c}"/><rect x="6" y="16" width="12" height="8" fill="#fff9"/>`,
  l:`<rect x="5" y="5" width="14" height="27" rx="3" fill="${c}"/><rect x="6" y="3" width="12" height="3" rx="1.5" fill="#cbd2e0"/><circle cx="12" cy="18" r="4" fill="#fff9"/>`,
  c:`<path d="M5 9 12 3l7 6v23H5z" fill="${c}"/><rect x="7" y="16" width="10" height="9" rx="2" fill="#fff9"/>`,
  p:`<rect x="4" y="9" width="16" height="23" rx="5" fill="${c}"/><rect x="5" y="4" width="14" height="6" rx="2" fill="#18256e"/><rect x="7" y="17" width="10" height="7" rx="2" fill="#fff9"/>`
}[f])+'</svg>'};
IC.corrida='<svg viewBox="0 0 40 40"><rect x="0" y="32" width="40" height="8" fill="#1fae6a"/><path d="M27 32l4-9 5 9z" fill="#7a7f8f"/><circle cx="13" cy="17" r="8" fill="#2340d8"/><circle cx="16" cy="15" r="2" fill="#fff"/><path d="M9 25l-3 6M16 25l4 5" stroke="#18256e" stroke-width="3" stroke-linecap="round"/></svg>';
IC.copos='<svg viewBox="0 0 40 40"><path d="M3 12h9l2 20H1z" fill="#2340d8"/><path d="M27 12h9l2 20H25z" fill="#2340d8"/><path d="M15 6h9l2 20H13z" fill="#2340d8"/><circle cx="19.5" cy="33" r="4" fill="#ff4f5e"/></svg>';
const BOLA='<svg viewBox="0 0 40 44"><ellipse cx="20" cy="40" rx="15" ry="3.5" fill="#00000026"/><defs><radialGradient id="bg" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ffe95a"/><stop offset=".55" stop-color="#ffbe12"/><stop offset="1" stop-color="#ef8a00"/></radialGradient></defs><circle cx="20" cy="21" r="18" fill="url(#bg)"/><ellipse cx="13.5" cy="12.5" rx="5.5" ry="3.4" transform="rotate(-35 13.5 12.5)" fill="#fff" opacity=".8"/></svg>';
const COPO='<svg viewBox="0 0 90 112"><defs><linearGradient id="cg" x1="0" x2="1"><stop offset="0" stop-color="#d82a20"/><stop offset=".35" stop-color="#f4503f"/><stop offset=".7" stop-color="#e5372b"/><stop offset="1" stop-color="#bf231a"/></linearGradient></defs><ellipse cx="45" cy="106" rx="42" ry="6" fill="#00000026"/><path d="M19 8Q45 0 71 8L87 97Q45 109 3 97Z" fill="url(#cg)"/><ellipse cx="45" cy="8" rx="26" ry="5" fill="#c5281f"/><path d="M3 93Q45 105 87 93L88.5 100Q45 113 1.5 100Z" fill="#fff"/><path d="M3 93Q45 105 87 93L88 96Q45 108 2 96Z" fill="#e9dfd2"/><path d="M26 16L18 88L24 90L32 17Z" fill="#fff" opacity=".35"/><path d="M62 16L70 90L65 91L57 17Z" fill="#7a0e08" opacity=".22"/><path d="M40 14L38 92" stroke="#fff" stroke-width="2" opacity=".18"/></svg>';
IC.bolhas='<svg viewBox="0 0 40 40"><circle cx="14" cy="24" r="10" fill="#7fc8ff"/><circle cx="28" cy="12" r="7" fill="#ff8fa3"/><circle cx="30" cy="30" r="5" fill="#f5b800"/><circle cx="10" cy="20" r="3" fill="#fff"/><circle cx="25.5" cy="9.5" r="2" fill="#fff"/></svg>';
IC.lagoa='<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#5ab8e8"/><circle cx="12" cy="30" r="7" fill="#1fae6a"/><circle cx="28" cy="12" r="7" fill="#1fae6a"/><path d="M12 30l7-3v6z" fill="#5ab8e8"/><circle cx="28" cy="11" r="5" fill="#8be36b"/><circle cx="26" cy="8.5" r="1.6" fill="#18256e"/><circle cx="30" cy="8.5" r="1.6" fill="#18256e"/></svg>';
IC.torre='<svg viewBox="0 0 40 40"><rect x="6" y="30" width="28" height="7" rx="2" fill="#2340d8"/><rect x="9" y="22" width="24" height="7" rx="2" fill="#1fae6a"/><rect x="10" y="14" width="20" height="7" rx="2" fill="#f5b800"/><rect x="16" y="5" width="18" height="7" rx="2" fill="#ff4f5e"/></svg>';
IC.sequencia='<svg viewBox="0 0 40 40"><rect x="3" y="3" width="16" height="16" rx="8" fill="#1fae6a"/><rect x="21" y="3" width="16" height="16" rx="8" fill="#ff4f5e"/><rect x="3" y="21" width="16" height="16" rx="8" fill="#f5b800"/><rect x="21" y="21" width="16" height="16" rx="8" fill="#2340d8"/><circle cx="29" cy="11" r="4" fill="#fff9"/></svg>';
const TOUP='<svg viewBox="0 0 60 60"><ellipse cx="30" cy="38" rx="24" ry="22" fill="#9a6a44"/><ellipse cx="30" cy="44" rx="14" ry="11" fill="#d8b08a"/><circle cx="21" cy="30" r="4" fill="#18256e"/><circle cx="39" cy="30" r="4" fill="#18256e"/><circle cx="22.3" cy="28.6" r="1.4" fill="#fff"/><circle cx="40.3" cy="28.6" r="1.4" fill="#fff"/><ellipse cx="30" cy="38" rx="5" ry="3.5" fill="#ff8fa3"/><rect x="26" y="45" width="3.5" height="5" rx="1" fill="#fff"/><rect x="30.5" y="45" width="3.5" height="5" rx="1" fill="#fff"/></svg>';
const BOMB='<svg viewBox="0 0 60 60"><circle cx="30" cy="38" r="20" fill="#18256e"/><circle cx="23" cy="31" r="5" fill="#ffffff40"/><rect x="25" y="13" width="10" height="7" rx="2" fill="#4a5590"/><path d="M30 13q2-8 10-9" stroke="#8a5526" stroke-width="3" fill="none"/><circle cx="41" cy="4" r="4" fill="#ff4f5e"/><circle cx="41" cy="4" r="2" fill="#f5b800"/></svg>';
IC.martelada='<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#1fae6a"/><ellipse cx="20" cy="33" rx="14" ry="5" fill="#3b2410"/><ellipse cx="20" cy="24" rx="11" ry="10" fill="#9a6a44"/><circle cx="16" cy="21" r="2" fill="#18256e"/><circle cx="24" cy="21" r="2" fill="#18256e"/><ellipse cx="20" cy="26" rx="2.6" ry="1.8" fill="#ff8fa3"/></svg>';
IC.nave='<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#1a1838"/><circle cx="8" cy="9" r="1.2" fill="#fff"/><circle cx="31" cy="6" r="1" fill="#fff"/><circle cx="29" cy="15" r="5" fill="#9a8a7a"/><path d="M20 14l8 20H12z" fill="#ff4f5e"/><circle cx="20" cy="25" r="3" fill="#7fc8ff"/><path d="M16 34h8l-4 5z" fill="#f5b800"/></svg>';
IC.paredao='<svg viewBox="0 0 40 40"><rect x="8" y="31" width="24" height="6" rx="3" fill="#2340d8"/><circle cx="24" cy="12" r="5" fill="#ff4f5e"/><path d="M10 6l10 4" stroke="#ff4f5e55" stroke-width="3" stroke-linecap="round"/></svg>';
IC.contas='<svg viewBox="0 0 40 40"><rect x="3" y="3" width="34" height="34" rx="8" fill="#2340d8"/><path d="M11 13h8M15 9v8M23 13h7M11 27h8M23 25h7M23 29h7" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>';
IC.n2048='<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="6" fill="#c98b4a"/><rect x="5" y="5" width="14" height="14" rx="3" fill="#ffe08a"/><rect x="21" y="5" width="14" height="14" rx="3" fill="#ff4f5e"/><rect x="5" y="21" width="14" height="14" rx="3" fill="#ffb347"/><rect x="21" y="21" width="14" height="14" rx="3" fill="#fff3c4"/></svg>';
IC.tiroalvo='<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#ff4f5e"/><circle cx="20" cy="20" r="10" fill="#fff"/><circle cx="20" cy="20" r="5" fill="#ff4f5e"/><path d="M20 1v10M20 29v10M1 20h10M29 20h10" stroke="#18256e" stroke-width="2.5"/></svg>';
IC.canhao='<svg viewBox="0 0 40 40"><rect x="0" y="33" width="40" height="7" fill="#1fae6a"/><rect x="8" y="17" width="22" height="9" rx="3" transform="rotate(-30 12 26)" fill="#18256e"/><circle cx="12" cy="29" r="6" fill="#8a5526"/><circle cx="33" cy="8" r="4" fill="#ff4f5e"/></svg>';
IC.arco='<svg viewBox="0 0 40 40"><ellipse cx="28" cy="11" rx="7" ry="8.5" fill="#ff4f5e"/><path d="M28 19.5v8" stroke="#18256e" stroke-width="1.5"/><path d="M6 36q-2-16 12-26" stroke="#8a5526" stroke-width="3" fill="none"/><path d="M8 34l14-18" stroke="#18256e" stroke-width="2"/><path d="M22 16l-1 5 4-3z" fill="#18256e"/></svg>';
IC.invasores='<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#1a1838"/><ellipse cx="20" cy="16" rx="11" ry="9" fill="#8be36b"/><circle cx="16" cy="15" r="2.5" fill="#18256e"/><circle cx="24" cy="15" r="2.5" fill="#18256e"/><path d="M14 8l-3-5M26 8l3-5" stroke="#8be36b" stroke-width="2"/><path d="M15 34h10l-5-7z" fill="#7fc8ff"/><rect x="19" y="21" width="2" height="5" fill="#f5b800"/></svg>';
const vtx=n=>'Vidas: '+'●'.repeat(Math.max(0,n))+'○'.repeat(Math.max(0,3-Math.max(0,n)));
const mira=(x,a,b)=>{x.strokeStyle='#18256e';x.lineWidth=2;x.beginPath();x.arc(a,b,14,0,7);x.moveTo(a-22,b);x.lineTo(a-6,b);x.moveTo(a+6,b);x.lineTo(a+22,b);x.moveTo(a,b-22);x.lineTo(a,b-6);x.moveTo(a,b+6);x.lineTo(a,b+22);x.stroke()};
const FORMAS=['<circle cx="20" cy="20" r="14"/>','<rect x="7" y="7" width="26" height="26" rx="4"/>','<path d="M20 5 36 34H4z"/>','<path d="M20 3 37 20 20 37 3 20z"/>','<path d="M15 4h10v11h11v10H25v11H15V25H4V15h11z"/>','<path d="M20 3l5 10.6 11.6 1.3-8.7 7.9 2.4 11.4L20 28.4l-10.3 5.8 2.4-11.4-8.7-7.9L15 13.6z"/>','<path d="M20 36S4 26 4 14a8.5 8.5 0 0 1 16-4 8.5 8.5 0 0 1 16 4c0 12-16 22-16 22z"/>','<path d="M27 4a16 16 0 1 0 10 27A14 14 0 0 1 27 4z"/>'];
const FCOR=['#ff4f5e','#2340d8','#1fae6a','#f5b800','#8b5cf6','#ef7d22'];
const fig=id=>`<svg viewBox="0 0 40 40" fill="${FCOR[id%6]}">${FORMAS[Math.floor(id/6)%8]}</svg>`;
const embaralha=a=>{for(let i=a.length-1;i>0;i--){const j=rnd(0,i);[a[i],a[j]]=[a[j],a[i]]}return a};
IC.memoria2='<svg viewBox="0 0 40 40"><rect x="3" y="3" width="15" height="15" rx="3" fill="#2340d8"/><rect x="22" y="3" width="15" height="15" rx="3" fill="#fff3c4"/><circle cx="29.5" cy="10.5" r="4.5" fill="#ff4f5e"/><rect x="3" y="22" width="15" height="15" rx="3" fill="#fff3c4"/><circle cx="10.5" cy="29.5" r="4.5" fill="#ff4f5e"/><rect x="22" y="22" width="15" height="15" rx="3" fill="#2340d8"/></svg>';
IC.trio='<svg viewBox="0 0 40 40"><circle cx="8" cy="20" r="6" fill="#1fae6a"/><circle cx="20" cy="20" r="6" fill="#1fae6a"/><circle cx="32" cy="20" r="6" fill="#1fae6a"/><rect x="2" y="3" width="11" height="11" rx="2" fill="#ff4f5e"/><path d="M26 3l6 11H20z" fill="#f5b800"/><rect x="15" y="28" width="10" height="10" rx="2" fill="#2340d8"/></svg>';
IC.acheopar='<svg viewBox="0 0 40 40"><circle cx="10" cy="10" r="6" fill="#2340d8"/><path d="M30 4l6 11H24z" fill="#1fae6a"/><path d="M10 24l6 11H4z" fill="#ff4f5e"/><path d="M30 24l6 11H24z" fill="#ff4f5e"/><circle cx="20" cy="30" r="12" fill="none" stroke="#18256e" stroke-width="2" stroke-dasharray="4 3"/></svg>';
IC.padrao='<svg viewBox="0 0 40 40"><g fill="#fff3c4"><rect x="3" y="3" width="10" height="10" rx="2"/><rect x="15" y="15" width="10" height="10" rx="2"/><rect x="27" y="3" width="10" height="10" rx="2"/><rect x="3" y="27" width="10" height="10" rx="2"/><rect x="27" y="27" width="10" height="10" rx="2"/></g><g fill="#2340d8"><rect x="15" y="3" width="10" height="10" rx="2"/><rect x="3" y="15" width="10" height="10" rx="2"/><rect x="27" y="15" width="10" height="10" rx="2"/><rect x="15" y="27" width="10" height="10" rx="2"/></g></svg>';
IC.javi='<svg viewBox="0 0 40 40"><path d="M2 20q18-18 36 0-18 18-36 0z" fill="#fff3c4" stroke="#18256e" stroke-width="2"/><circle cx="20" cy="20" r="7" fill="#2340d8"/><circle cx="20" cy="20" r="3" fill="#18256e"/><circle cx="22" cy="18" r="1.5" fill="#fff"/></svg>';
IC.numeros='<svg viewBox="0 0 40 40"><rect x="2" y="2" width="16" height="16" rx="3" fill="#2340d8"/><rect x="22" y="22" width="16" height="16" rx="3" fill="#2340d8"/><rect x="22" y="2" width="16" height="16" rx="3" fill="#2340d8"/><text x="10" y="15" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff" text-anchor="middle">1</text><text x="30" y="15" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff" text-anchor="middle">2</text><text x="30" y="35" font-size="13" font-family="sans-serif" font-weight="700" fill="#fff" text-anchor="middle">3</text></svg>';
IC.estrada='<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#555b70"/><path d="M13 2v6M13 14v6M13 26v6M27 2v6M27 14v6M27 26v6" stroke="#fff" stroke-width="2"/><rect x="15" y="22" width="10" height="15" rx="3" fill="#ff4f5e"/><rect x="29" y="4" width="9" height="13" rx="3" fill="#f5b800"/></svg>';
IC.descida='<svg viewBox="0 0 40 40"><path d="M0 0h40v5l-4 4-4-4-4 4-4-4-4 4-4-4-4 4-4-4-4 4z" fill="#ff4f5e"/><rect x="0" y="18" width="22" height="5" rx="2" fill="#2340d8"/><rect x="32" y="18" width="8" height="5" rx="2" fill="#2340d8"/><rect x="0" y="32" width="8" height="5" rx="2" fill="#2340d8"/><rect x="18" y="32" width="22" height="5" rx="2" fill="#2340d8"/><circle cx="27" cy="26" r="4.5" fill="#f5b800"/></svg>';
IC.teclas='<svg viewBox="0 0 40 40"><rect x="1" y="1" width="38" height="38" rx="5" fill="#fff" stroke="#18256e" stroke-width="2"/><path d="M10.5 1v38M20 1v38M29.5 1v38" stroke="#18256e33"/><rect x="2" y="24" width="8" height="14" fill="#18256e"/><rect x="21" y="8" width="8" height="14" fill="#18256e"/><rect x="11" y="2" width="9" height="6" fill="#18256e"/></svg>';
const GAMES={
  padrao:{nome:'Padrão',desc:'Como numa controladora de pads: os pads acendem um de cada vez, cada um com o seu som. Decore quais acenderam e toque neles. A cada rodada acende um a mais e a controladora cresce. Errou, acabou.',como:'Olhe a sequência de pads e toque nos que acenderam.',unid:'rodadas'},
  javi:{nome:'Já vi?',desc:'As figuras aparecem uma de cada vez. Diga se a figura é nova ou se já apareceu antes. O tempo para responder vai diminuindo. Errou ou demorou, acabou.',como:'Toque em "Nova" ou "Já vi".',unid:'acertos'},
  numeros:{nome:'Números em ordem',desc:'Os números aparecem espalhados. Quando você toca no 1, os outros se escondem: toque nos outros em ordem, de memória. A cada rodada entra mais um número.',como:'Decore as posições e toque do menor para o maior.',unid:'rodadas'},
  estrada:{nome:'Estrada',desc:'Seu carro vermelho anda numa estrada de 3 faixas. Os outros carros seguem em frente na própria faixa. Desvie deles e dos buracos; dá para ficar na mesma faixa de um carro, só não pode bater. Fica cada vez mais rápido. Bateu, acabou.',como:'Toque no lado esquerdo ou direito da tela.',unid:'carros'},
  descida:{nome:'Descida',desc:'As plataformas sobem sem parar. Leve a bolinha até os buracos para descer. Se ela encostar nos espinhos lá em cima, acabou.',como:'Segure o lado esquerdo ou direito da tela.',unid:'andares'},
  teclas:{nome:'Teclas',desc:'Cada tecla é uma nota de uma partitura de verdade e cai no instante exato dela. Toque nelas de baixo para cima, sem deixar nenhuma passar e sem tocar fora delas. A dificuldade sobe aos poucos: fácil, médio, difícil e extremo. Tocar no tempo certo faz parecer que é você tocando a música. Toque nelas de baixo para cima, sem deixar nenhuma passar e sem tocar fora delas. Às vezes duas vêm juntas: toque nas duas. A música vai acelerando.',como:'Toque nas teclas escuras (use dois dedos quando vierem duas). A primeira dá a largada e a música começa.',unid:'teclas'},
  memoria2:{nome:'Memória sem fim',desc:'Encontre os pares de frutas. Limpou o tabuleiro, vem outro maior. Cada par encontrado dá mais tempo no relógio. Acabou o tempo, acabou o jogo.',como:'Toque em duas cartas para virar.',unid:'pares'},
  trio:{nome:'Trio',desc:'Troque dois doces vizinhos para juntar 3 ou mais iguais. Junte 4, 5, em L/T ou em quadrado para criar doces especiais com poderes. Cada combinação enche o relógio.',como:'Arraste um doce para o vizinho (ou toque num e depois no outro). 4 em linha = listrado, L/T = embalado, quadrado 2x2 = peixinho, 5 em linha = bomba colorida.',unid:'peças'},
  acheopar:{nome:'Ache o par',desc:'Só existem duas figuras iguais na tela. Ache o par antes do tempo acabar. A cada rodada aparecem mais figuras e o tempo diminui. Errou, acabou.',como:'Toque numa das duas figuras iguais.',unid:'pares'},
  tiroalvo:{nome:'Tiro ao alvo',desc:'Alvos atravessam a tela. Acerte no centro para ganhar mais: miolo vale 3, meio vale 2, borda vale 1. Cada alvo que escapa custa uma vida.',como:'Toque no alvo para atirar.',unid:'pontos'},
  canhao:{nome:'Canhão',desc:'Puxe para trás, mire e solte. Calcule a força e o ângulo para acertar o alvo. Cada tiro errado custa uma vida, e você tem 3.',como:'Arraste o dedo para trás (como um estilingue) e solte.',unid:'acertos'},
  arco:{nome:'Arco e flecha',desc:'Balões sobem pela tela. Mire e atire flechas para estourar. Balão dourado vale 3. Cada balão que escapa custa uma vida.',como:'Toque onde quer mirar: o arco vira e atira.',unid:'pontos'},
  invasores:{nome:'Invasores',desc:'Alienígenas descem do espaço. Sua nave atira sozinha: você só mira. Os roxos grandes aguentam 3 tiros. Se passarem pela sua base, você perde vida.',como:'Arraste o dedo para mover a nave.',unid:'aliens'},
  nave:{nome:'Nave',desc:'Sua nave atira sozinha em naves inimigas e rochas do espaço. Pegue os itens: o de mísseis melhora os tiros, o relógio deixa você rápido e o escudo protege. Encostou ou levou tiro sem escudo, acabou.',como:'Arraste o dedo para guiar a nave para qualquer lado.',unid:'pontos'},
  paredao:{nome:'Paredão',desc:'Rebata a bolinha, quebre o muro de tijolos e pegue os poderes que caem: largo, multibola, fogo, laser e escudo. Se a bolinha cair, acabou.',como:'Arraste o dedo para mover a raquete e toque para lançar a bolinha. Tijolos verdes (+) soltam poderes, laranjas explodem e os de aço aguentam 2 batidas.',unid:'rebatidas'},
  contas:{nome:'Contas',desc:'Responda a conta antes do tempo acabar. As contas ficam mais difíceis e o tempo mais curto. Errou ou demorou, acabou.',como:'Toque na resposta certa.',unid:'acertos'},
  n2048:{nome:'2048',desc:'Arraste para mover todos os números. Dois números iguais se juntam e viram a soma. O jogo acaba quando não der mais para mexer.',como:'Arraste o dedo no tabuleiro ou use as setas.',unid:'pontos'},
  torre:{nome:'Torre',desc:'Solte cada bloco em cima do anterior. O que ficar para fora é cortado e o bloco seguinte fica menor. Errou tudo, acabou.',como:'Toque na tela para soltar o bloco.',unid:'andares'},
  sequencia:{nome:'Sequência',desc:'Os botões acendem numa ordem. Repita a ordem certinha. A cada rodada entra mais um passo e fica mais rápido.',como:'Olhe, decore e toque nos botões na mesma ordem.',unid:'rodadas'},
  martelada:{nome:'Martelada',desc:'Acerte as toupeiras antes que elas se escondam. Não acerte as bombas! Você tem 3 vidas.',como:'Toque nas toupeiras.',unid:'toupeiras'},
  lagoa:{nome:'Lagoa',desc:'Pule de folha em folha subindo a lagoa. O sapo salta exatamente onde você toca: para frente ou para os lados, mas só até a folha vizinha, nunca duas de uma vez. A lagoa anda sozinha e vai ficando mais rápida: não fique para trás!',como:'Toque numa folha vizinha (à frente ou ao lado) para o sapo pular até ela. Folha longe demais não funciona e tocar na água faz ele cair!',unid:'pulos'},
  bolhas:{nome:'Bolhas',desc:'Estoure as bolhas antes que elas fujam pelo alto. Cuidado com as bolhas de espinho: não toque nelas! Você tem 3 vidas.',como:'Toque nas bolhas para estourar.',unid:'bolhas'},
  copos:{nome:'Copinhos',desc:'Veja onde a bolinha se esconde, acompanhe os copos embaralhando e acerte o copo certo. Cada rodada embaralha mais e mais rápido.',como:'Toque no copo onde você acha que está a bolinha.',unid:'acertos'},
  corrida:{nome:'Corrida',desc:'O coelhinho corre sozinho e cada vez mais rápido. Pule as pedras, os troncos, os cogumelos, os espinhos e as caixas e pegue as moedas pelo caminho (elas servem para comprar vidas no site). Vá o mais longe que conseguir.',como:'Toque para pular: toque rápido dá um pulo curto, segurando o dedo o pulo fica mais alto e mais longo. Toque de novo no ar para dar um pulo duplo! Você tem 3 vidas (corações).',unid:'metros'},
  prateleira:{nome:'Prateleiras',desc:'Junte 3 produtos iguais na mesma prateleira para limpar. Chegam produtos novos o tempo todo; se as prateleiras encherem, acabou. Use a bandeja para guardar produtos e os poderes quando apertar.',como:'Arraste um produto até outra prateleira (ou toque nele e depois na prateleira). Poderes: lupa mostra uma dica, estrela limpa o produto mais comum, troca embaralha tudo e gelo para a chegada por 7 segundos.',unid:'trios'},
  cobra:{nome:'Cobrinha',desc:'Coma as frutinhas e cresça. Bateu na parede ou em você mesmo, acabou. Fica mais rápida a cada fruta.',como:'Arraste o dedo na tela ou use as setas.',unid:'frutas'},
  pulo:{nome:'Pula-pula',desc:'O porquinho pula sozinho. Leve ele de plataforma em plataforma e suba o mais alto que der. Pegue o coração para se salvar de um espinho, a estrela para dar um superpulo e a moeda para ganhar metros extras. Plataformas de nuvem só podem ser pisadas uma vez e depois somem. Depois que sobe bastante, cair sem pisar em nenhuma plataforma acaba o jogo!',como:'Toque ou arraste o dedo na tela: o porquinho vai até onde você tocar. Ou incline o celular. Se cair de pouco, o chão segura!',unid:'metros'},
  voo:{nome:'Voo',desc:'Passe pelos buracos entre os canos sem encostar em nada. Cada cano que você passa vale um ponto.',como:'Toque na tela para bater as asas.',unid:'canos'},
  frutas:{nome:'Chuva de frutas',desc:'Pegue as frutas com a cesta e fuja das bombas. Você tem 3 vidas.',como:'Arraste o dedo para mover a cesta.',unid:'frutas'},
  cores:{nome:'Cores',desc:'Toque na cor que a palavra diz, não na cor da tinta! O tempo fica cada vez menor.',como:'Errou ou demorou, acabou.',unid:'acertos'}
};
const KEYS=['cobra','pulo','voo','frutas','cores','prateleira','corrida','copos','bolhas','lagoa','torre','sequencia','martelada','nave','contas','memoria2','trio','padrao','javi','numeros','estrada','descida','teclas']; /* jogos liberados; os outros entram um por um */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40)||'x';
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
let cur='cobra',scores=[],db=null,limpa=[];
const stage=$('stage');
const ls={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
/* ---------- jogador deste aparelho ---------- */
let pid=ls.get('pf-id');if(!pid){pid='p'+Math.random().toString(36).slice(2,12)+Date.now().toString(36).slice(-4);ls.set('pf-id',pid)}
let eu={name:ls.get('pf-nome')||'',av:+(ls.get('pf-av')||0)},perfis={},hist={};
try{hist=JSON.parse(ls.get('pf-hist')||'{}')||{}}catch(e){hist={}}
/* personagens: 35 rostos de emoção gerados por rostos.py; para incluir mais, acrescente no fim da lista */
let _imP=null;function imgsPulo(){if(_imP)return _imP;_imP={};for(const k in SPRP){if(Array.isArray(SPRP[k]))_imP[k]=SPRP[k].map(u=>{const i=new Image();i.src=u;return i});else{const i=new Image();i.src=SPRP[k];_imP[k]=i}}return _imP}
let _imC=null;function imgsCobra(){if(_imC)return _imC;_imC={};for(const k in SPRC){const i=new Image();i.src=SPRC[k];_imC[k]=i}return _imC}
let _imV=null;function imgsVoo(){if(_imV)return _imV;_imV={};for(const k in SPRV){const i=new Image();i.src=SPRV[k];_imV[k]=i}return _imV}
let _imR=null;function imgsCorr(){if(_imR)return _imR;_imR={};for(const k in SPRR){const i=new Image();i.src=SPRR[k];_imR[k]=i}return _imR}
let _imL=null;function imgsLagoa(){if(_imL)return _imL;_imL={};for(const k in SPRL){const i=new Image();i.src=SPRL[k];_imL[k]=i}return _imL}
let _imE=null;function imgsEstrada(){if(_imE)return _imE;_imE={};for(const k in SPRE){const i=new Image();i.src=SPRE[k];_imE[k]=i;if(i.decode)i.decode().catch(()=>{})}return _imE}
setTimeout(imgsEstrada,50);
let _imD=null;function imgsDesc(){if(_imD)return _imD;_imD={};for(const k in SPRD){const i=new Image();i.src=SPRD[k];_imD[k]=i;if(i.decode)i.decode().catch(()=>{})}return _imD}
setTimeout(imgsDesc,80);
let _imF=null;function imgsFrutas(){if(_imF)return _imF;_imF={};for(const k in SPRF){const i=new Image();i.src=SPRF[k];_imF[k]=i;if(i.decode)i.decode().catch(()=>{})}return _imF}
setTimeout(imgsFrutas,120);
let _imM=null;function imgsMar(){if(_imM)return _imM;_imM={};for(const k in SPRM){const i=new Image();i.src=SPRM[k];_imM[k]=i;if(i.decode)i.decode().catch(()=>{})}return _imM}
setTimeout(imgsMar,2500);
let _imT=null;function imgsTorre(){if(_imT)return _imT;_imT={};for(const k in SPRT){const i=new Image();i.src=SPRT[k];_imT[k]=i;if(i.decode)i.decode().catch(()=>{})}return _imT}
setTimeout(imgsTorre,3000);
let _imPA=null;function imgsParedao(){if(_imPA)return _imPA;_imPA={};for(const k in SPRPA){const i=new Image();i.src=SPRPA[k];_imPA[k]=i;if(i.decode)i.decode().catch(()=>{})}return _imPA}
setTimeout(imgsParedao,3500);
let _imDC=null;function imgsDoces(){if(_imDC)return _imDC;_imDC={};for(const k in SPRDC){const i=new Image();i.src=SPRDC[k];_imDC[k]=i;if(i.decode)i.decode().catch(()=>{})}return _imDC}
setTimeout(imgsDoces,4000);
let _imPR=null;function imgsPrat(){if(_imPR)return _imPR;_imPR={};for(const k in SPRPR){const i=new Image();i.src=SPRPR[k];_imPR[k]=i;if(i.decode)i.decode().catch(()=>{})}return _imPR}
setTimeout(imgsPrat,4500);
const avatar=i=>{const a=AVS[i];return a?`<img src="${a[1]}" alt="${esc(a[0])}" draggable="false">`:'<svg viewBox="0 0 40 40"><circle cx="20" cy="21" r="16" fill="#cbd2e0"/><circle cx="20" cy="17" r="6" fill="#fff"/><path d="M9 33q11-12 22 0" fill="#fff"/></svg>'};
const curto=i=>AVS[i]?AVS[i][0].split(',')[0]:'';
const chave=s=>s.pid||('n:'+slug(s.name));
const nomeDe=s=>(s.pid&&perfis[s.pid]&&perfis[s.pid].name)||s.name;
const avDe=s=>s.pid&&perfis[s.pid]?perfis[s.pid].av:(typeof s.av==='number'?s.av:-1);
const CATS=[
  ['memoria','Memória','decorar e lembrar',['memoria2','padrao','javi','numeros','sequencia','copos']],
  ['agilidade','Agilidade','controle e movimento',['cobra','pulo','voo','corrida','lagoa','estrada','descida','teclas']],
  ['reflexo','Reflexo','reagir rápido',['frutas','cores','bolhas','martelada','torre','nave']],
  ['raciocinio','Raciocínio','pensar e calcular',['contas','trio','prateleira']]];
const clear=()=>{limpa.forEach(f=>f());limpa=[]};
const _real=performance.now.bind(performance);let pausaAcum=0,pausado=false,pausaIni=0;performance.now=()=>_real()-pausaAcum;
const agora=()=>performance.now();
const timers=new Set();
const later=(f,ms)=>{const o={f,rem:ms,ini:_real()};o.go=()=>{o.id=setTimeout(()=>{timers.delete(o);o.f()},o.rem)};o.go();timers.add(o);limpa.push(()=>{clearTimeout(o.id);timers.delete(o)})};
function pausa(){if(pausado)return;pausado=true;pausaIni=_real();timers.forEach(o=>{clearTimeout(o.id);o.rem=Math.max(0,o.rem-(_real()-o.ini))})}
function retoma(){if(!pausado)return;pausaAcum+=_real()-pausaIni;pausado=false;timers.forEach(o=>{o.ini=_real();o.go()})}
const onKey=f=>{window.addEventListener('keydown',f);limpa.push(()=>window.removeEventListener('keydown',f))};

/* ---------- rankings ---------- */
function best(game){
  const m={};
  scores.filter(s=>s&&s.game===game&&typeof s.score==='number'&&(s.name||s.pid)).forEach(s=>{
    const k=chave(s);if(!m[k]||s.score>m[k].score)m[k]=s;
  });
  return Object.values(m).sort((a,b)=>b.score-a.score||String(a.at).localeCompare(String(b.at)));
}
const quem=s=>`<span class="nm"><span class="mini">${avatar(avDe(s))}</span><span class="tx">${esc(nomeDe(s))}</span></span>`;
const lista=(arr,unid)=>arr.length?arr.map((s,i)=>`<li class="${chave(s)===pid?'me':''}"><span class="pos">${i+1}º</span>${quem(s)}<span class="sc">${s.score} ${unid}</span></li>`).join(''):'<li><p class="empty">Ninguém jogou ainda. Seja o primeiro!</p></li>';
function renderGeral(){
  const t={};
  KEYS.forEach(k=>best(k).slice(0,3).forEach((s,i)=>{const id=chave(s);t[id]=t[id]||{s,m:[0,0,0]};t[id].m[i]++}));
  const arr=Object.entries(t).sort((a,b)=>b[1].m[0]-a[1].m[0]||b[1].m[1]-a[1].m[1]||b[1].m[2]-a[1].m[2]).slice(0,8);
  $('geral').innerHTML='<li class="hd"><span></span><span></span><span class="n">1º</span><span class="n">2º</span><span class="n">3º</span></li>'+(arr.length?arr.map(([id,o],i)=>`<li class="${id===pid?'me':''}"><span class="pos">${i+1}º</span>${quem(o.s)}<span class="n">${o.m[0]}</span><span class="n">${o.m[1]}</span><span class="n">${o.m[2]}</span></li>`).join(''):'<li><p class="empty" style="grid-column:1/-1">O primeiro campeão sai na primeira partida.</p></li>');
}
function render(){
  renderGeral();
  $('euNome').textContent=eu.name||'Jogador';$('euAv').innerHTML=avatar(eu.av);renderHome();
  const rk=$('rk');if(rk)rk.innerHTML=lista(best(cur).slice(0,10),GAMES[cur].unid);
  const rc=$('rec');if(rc){const b=best(cur).find(s=>chave(s)===pid);rc.textContent=b?`Seu recorde: ${b.score} ${GAMES[cur].unid}`:''}
  if(!$('perfil').hidden&&!editando)desenhaPerfil();
}
function registra(game,score){
  hist[game]=(hist[game]||[]).concat([[score,Date.now()]]).slice(-30);ls.set('pf-hist',JSON.stringify(hist));
  if(db)db.doc('hist/'+pid).set({g:Object.fromEntries(Object.entries(hist).map(([k,v])=>[k,v.flat()]))}).catch(()=>{});
}
async function salvar(score){
  const g=GAMES[cur],game=cur;
  const antigo=best(game).find(s=>chave(s)===pid);
  const posDe=()=>best(game).findIndex(s=>chave(s)===pid)+1;
  if(score<=0)return{pos:antigo?posDe():0,txt:antigo?`Seu recorde é ${antigo.score} ${g.unid}.`:'Faça pelo menos 1 ponto para entrar no ranking.'};
  if(antigo&&score<=antigo.score)return{pos:posDe(),txt:`Seu recorde é ${antigo.score} ${g.unid}.`};
  const doc={game,pid,name:eu.name,av:eu.av,score,at:new Date().toISOString()};
  scores=scores.filter(s=>!(s.game===game&&chave(s)===pid)).concat(doc);
  if(db){try{await db.collection('scores').doc(game+'__'+pid).set(doc)}catch(e){$('status').textContent='Não deu para salvar no placar compartilhado ('+(e&&e.code||'erro')+'); ficou só neste aparelho.';ls.set('pf-scores2',JSON.stringify(scores))}}
  else ls.set('pf-scores2',JSON.stringify(scores));
  render();
  return{pos:posDe(),txt:'Novo recorde!',novo:true};
}

/* ---------- efeitos sonoros (sintetizados, sem arquivos) ---------- */
let AC=null,som=ls.get('pf-som')!=='0';
const ac=()=>{try{if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume()}catch(e){AC=null}return AC};
function tom(f1,f2,dur,tipo,vol,atraso){const c=ac();if(!c||!som)return;const t=c.currentTime+(atraso||0),o=c.createOscillator(),g=c.createGain();o.type=tipo||'sine';o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(Math.max(30,f2),t+dur);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol||.1,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+dur+.03)}
function ruido(dur,vol,fil,atraso){const c=ac();if(!c||!som)return;const n=Math.floor(c.sampleRate*dur),buf=c.createBuffer(1,n,c.sampleRate),d=buf.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*(1-i/n);
  const src=c.createBufferSource();src.buffer=buf;const f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=fil||1200;const g=c.createGain();const t=c.currentTime+(atraso||0);g.gain.setValueAtTime(vol||.15,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);src.connect(f);f.connect(g);g.connect(c.destination);src.start(t)}
const SFX={
  click:()=>tom(540,400,.07,'triangle',.1),
  select:()=>{tom(440,660,.09,'sine',.12);tom(660,990,.11,'sine',.1,.07)},
  play:()=>[392,523,659,784].forEach((f,i)=>tom(f,f*1.01,.11,'square',.05,i*.06)),
  sair:()=>{tom(520,300,.16,'triangle',.11)},
  ponto:()=>tom(720,1040,.08,'sine',.1),
  moeda:()=>{tom(988,988,.07,'square',.05);tom(1319,1319,.2,'square',.05,.07)},
  tap:()=>tom(620,440,.045,'sine',.06),
  tiro:()=>tom(1250,150,.13,'square',.035),
  acerto:()=>tom(380,260,.045,'triangle',.03),
  explosao:()=>{ruido(.35,.2,900);tom(170,40,.32,'sawtooth',.08)},
  item:()=>{tom(784,784,.28,'sine',.06);tom(1568,1568,.18,'sine',.02);tom(1175,1175,.34,'sine',.055,.09);tom(2350,2350,.2,'sine',.015,.09)},
  escudo:()=>{tom(330,660,.16,'sine',.06);tom(988,988,.3,'sine',.05,.1);tom(1480,1480,.22,'sine',.02,.1)},
  dano:()=>{tom(230,80,.28,'sawtooth',.12);ruido(.18,.1,600)},
  fim:()=>[392,330,262,196].forEach((f,i)=>tom(f,f*.97,.22,'triangle',.11,i*.15)),
  recorde:()=>[523,659,784,1047,1319].forEach((f,i)=>tom(f,f,.17,'square',.06,i*.1)),
  erro:()=>tom(210,140,.2,'square',.06),
  pulo:()=>tom(330,680,.09,'square',.035),
  vira:()=>{ruido(.07,.07,2400);tom(520,760,.07,'triangle',.06)}
};
let _ultSom=0;
const sfx=n=>{try{const t=_real?_real():performance.now();if((n==='tiro'||n==='acerto'||n==='ponto'||n==='tap')&&t-_ultSom<45)return;if(n==='tiro'||n==='acerto'||n==='ponto'||n==='tap')_ultSom=t;SFX[n]&&SFX[n]()}catch(e){}};
/* ---------- música de fundo (chiptune, estilo jogos clássicos; sintetizada) ---------- */
const mf=m=>440*Math.pow(2,(m-69)/12);
const FAIXAS={
  espaco:{bpm:156,lead:'square',lv:.05,hat:1,
    acordes:[[45,3],[41,4],[48,4],[43,4],[45,3],[41,4],[43,4],[40,4]],
    pads:[0,0,1,0, 0,1,1,0],
    P:[[0,1,2,3,2,1,2,3,0,1,2,3,2,1,2,1],[3,-1,2,-1,1,2,3,-1,5,-1,3,2,1,-1,0,-1]]},
  alegre:{bpm:128,lead:'square',lv:.045,hat:1,
    acordes:[[48,4],[45,3],[41,4],[43,4],[48,4],[45,3],[41,4],[43,4]],
    pads:[0,1,0,0, 1,0,1,0],
    P:[[0,2,1,2,3,2,1,2,0,2,1,2,3,2,4,2],[4,-1,3,-1,2,3,4,-1,5,-1,4,3,2,-1,3,-1]]},
  calma:{bpm:96,lead:'triangle',lv:.07,hat:0,
    acordes:[[41,4],[38,3],[46,4],[48,4],[41,4],[38,3],[46,4],[48,4]],
    pads:[0,0,0,0, 0,0,0,0],
    P:[[0,-1,-1,1,-1,2,-1,-1,3,-1,-1,2,-1,1,-1,-1],[2,-1,3,-1,-1,2,-1,1,0,-1,-1,1,-1,-1,0,-1]]}
};
const faixaDe=k=>k==='teclas'?'ritmo':['nave','invasores','tiroalvo','canhao','arco'].includes(k)?'espaco':['memoria2','padrao','javi','numeros','sequencia','copos','contas','n2048','trio','prateleira'].includes(k)?'calma':'alegre';
/* ---------- repositório de músicas do jogo Teclas ----------
   Músicas originais, compostas por IA especialmente para este jogo (sem direitos autorais de terceiros),
   tocadas por síntese no próprio navegador: não há arquivos de áudio nem gravações.
   Cada música: bpm (passos por minuto), ch = acordes [nota-base, 3 menor / 4 maior] a cada 8 passos
   e n = uma nota (número MIDI) por passo; 0 = segura a nota anterior (e não gera tecla).
   Para adicionar outra, é só incluir um item nesta lista. */
const MUSICAS=[{"nome": "Dia de Sol", "bpm": 164, "ch": [[48, 4], [43, 4], [45, 3], [41, 4]], "n": [72, 0, 76, 79, 76, 72, 76, 0, 71, 0, 74, 79, 74, 71, 74, 0, 72, 0, 76, 81, 76, 72, 69, 0, 72, 0, 77, 81, 77, 72, 77, 0, 76, 76, 0, 79, 0, 76, 72, 0, 74, 74, 0, 79, 0, 74, 71, 0, 72, 72, 0, 76, 0, 81, 76, 0, 77, 0, 81, 0, 77, 72, 0, 0]}, {"nome": "Corrida Neon", "bpm": 176, "ch": [[50, 4], [45, 4], [47, 3], [43, 4]], "n": [74, 0, 78, 81, 78, 74, 78, 0, 73, 0, 76, 81, 76, 73, 76, 0, 71, 0, 74, 78, 74, 71, 74, 0, 71, 0, 74, 79, 74, 71, 67, 0, 81, 0, 78, 0, 74, 78, 81, 0, 81, 0, 76, 0, 73, 76, 81, 0, 78, 0, 74, 0, 71, 74, 78, 0, 79, 0, 74, 0, 71, 74, 79, 0]}, {"nome": "Festa na Praia", "bpm": 168, "ch": [[43, 4], [50, 4], [52, 3], [48, 4]], "n": [67, 0, 71, 74, 71, 67, 71, 0, 66, 0, 69, 74, 69, 66, 69, 0, 67, 0, 71, 76, 71, 67, 71, 0, 67, 0, 72, 76, 72, 67, 64, 0, 79, 0, 74, 0, 71, 74, 79, 0, 78, 0, 74, 0, 69, 74, 78, 0, 76, 0, 71, 0, 67, 71, 76, 0, 76, 76, 0, 72, 0, 67, 72, 0]}, {"nome": "Pulo Gigante", "bpm": 160, "ch": [[41, 4], [48, 4], [50, 3], [46, 4]], "n": [72, 72, 0, 77, 0, 81, 77, 0, 72, 72, 0, 76, 0, 79, 76, 0, 74, 74, 0, 77, 0, 81, 77, 0, 70, 70, 0, 74, 0, 77, 74, 0, 81, 0, 77, 0, 72, 77, 81, 0, 79, 0, 76, 0, 72, 76, 79, 0, 77, 0, 74, 0, 81, 0, 77, 74, 74, 0, 70, 0, 72, 0, 0, 0]}, {"nome": "Estrelas Dançantes", "bpm": 172, "ch": [[48, 4], [45, 3], [41, 4], [43, 4]], "n": [76, 0, 79, 0, 76, 72, 74, 76, 72, 0, 76, 0, 81, 76, 72, 0, 77, 0, 81, 0, 77, 72, 69, 0, 74, 0, 79, 0, 74, 71, 74, 0, 79, 0, 76, 0, 72, 76, 79, 0, 81, 0, 76, 0, 72, 76, 81, 0, 77, 81, 0, 77, 0, 72, 77, 0, 79, 0, 74, 0, 71, 74, 79, 0]}];
const musica={id:null,passo:0,prox:0,F:null,g:null};
function nMus(f,t,dur,tipo,vol){const c=AC;if(!c||!musica.g)return;const o=c.createOscillator(),g=c.createGain();o.type=tipo;o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(musica.g);o.start(t);o.stop(t+dur+.02)}
function kickMus(t,vol){const c=AC,o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(42,t+.11);g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+.13);o.connect(g);g.connect(musica.g);o.start(t);o.stop(t+.15)}
function hatMus(t,vol){const c=AC,n=Math.floor(c.sampleRate*.04),b=c.createBuffer(1,n,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*(1-i/n);
  const s=c.createBufferSource();s.buffer=b;const f=c.createBiquadFilter();f.type='highpass';f.frequency.value=6500;const g=c.createGain();g.gain.value=vol;s.connect(f);f.connect(g);g.connect(musica.g);s.start(t)}
function agendaMus(){
  const c=AC;if(!c||!musica.F)return;
  if(pausado||!emJogo){musica.prox=Math.max(musica.prox,c.currentTime+.05);return}
  const F=musica.F,passoT=60/F.bpm/4,total=F.acordes.length*16;
  while(musica.prox<c.currentTime+.3){
    const p=musica.passo%total,bar=Math.floor(p/16),s=p%16,[r,terc]=F.acordes[bar],t=musica.prox;
    if(som){
      if(s%2===0){const pat=[0,0,12,0,0,0,12,7][s/2];nMus(mf(r+pat),t,passoT*1.7,'triangle',.11)}
      const P=F.P[F.pads[bar]],v=P[s];
      if(v>=0){const tons=[r+24,r+24+terc,r+31,r+36],m=tons[v%4]+(v>=4?12:0);nMus(mf(m),t,passoT*(P[(s+1)%16]<0?1.9:.95),F.lead,F.lv)}
      if(F.hat){if(s%4===0)kickMus(t,.16);if(s%4===2)hatMus(t,.05)}
    }
    musica.prox+=passoT;musica.passo++;
  }
}
function musicaLiga(nome){const c=ac();if(!c)return;musicaPara();musica.F=nome==='ritmo'?null:(FAIXAS[nome]||FAIXAS.alegre);musica.g=c.createGain();musica.g.gain.value=som?.5:0;musica.g.connect(c.destination);musica.passo=0;musica.prox=c.currentTime+.15;musica.id=musica.F?setInterval(agendaMus,60):null}
function musicaPara(){clearInterval(musica.id);musica.id=null;musica.F=null;if(musica.g){try{musica.g.gain.value=0;musica.g.disconnect()}catch(e){}musica.g=null}}
const atualizaSomBtn=()=>document.querySelectorAll('.somb').forEach(b=>b.classList.toggle('mudo',!som));
/* ---------- moedas e vidas (só aparecem no perfil e na tela de fim) ---------- */
const ICO={"coin": "<svg viewBox=\"0 0 64 64\"><circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#ffd23f\" stroke=\"#3a2f6b\" stroke-width=\"5\"/><circle cx=\"32\" cy=\"32\" r=\"16\" fill=\"#ffb02e\" stroke=\"#3a2f6b\" stroke-width=\"3\"/><path d=\"M32 22v20M26 28h9a4 4 0 0 1 0 8h-9\" fill=\"none\" stroke=\"#3a2f6b\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M18 22a17 17 0 0 1 8-8\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\" opacity=\".8\"/></svg>", "vida": "<svg viewBox=\"0 0 64 64\"><path d=\"M32 56C12 42 6 31 6 21 6 13 12 8 19 8c6 0 10 3 13 8 3-5 7-8 13-8 7 0 13 5 13 13 0 10-6 21-26 35z\" fill=\"#ff5c8a\" stroke=\"#3a2f6b\" stroke-width=\"5\" stroke-linejoin=\"round\"/><path d=\"M16 20c0-4 3-6 6-6\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\" opacity=\".85\"/></svg>", "trofeu": "<svg viewBox=\"0 0 64 64\"><path d=\"M16 10h32v14c0 10-7 17-16 17S16 34 16 24z\" fill=\"#ffd23f\" stroke=\"#3a2f6b\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M16 16H7c0 10 4 15 11 16M48 16h9c0 10-4 15-11 16\" fill=\"none\" stroke=\"#3a2f6b\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M32 41v9\" stroke=\"#3a2f6b\" stroke-width=\"4\"/><rect x=\"20\" y=\"50\" width=\"24\" height=\"8\" rx=\"4\" fill=\"#ffb02e\" stroke=\"#3a2f6b\" stroke-width=\"4\"/></svg>", "coroa": "<svg viewBox=\"0 0 64 64\"><path d=\"M8 46L6 20l15 14 11-20 11 20 15-14-2 26z\" fill=\"#ffd23f\" stroke=\"#3a2f6b\" stroke-width=\"4\" stroke-linejoin=\"round\"/><rect x=\"8\" y=\"46\" width=\"48\" height=\"9\" rx=\"4\" fill=\"#ffb02e\" stroke=\"#3a2f6b\" stroke-width=\"4\"/><circle cx=\"32\" cy=\"14\" r=\"4\" fill=\"#ff5c8a\" stroke=\"#3a2f6b\" stroke-width=\"3\"/></svg>"};
const PRECO=20;
let moedas=+(ls.get('pf-moedas')||0)||0,banco=0,cont=false,dado=0;
const salvaCarteira=()=>ls.set('pf-moedas',String(moedas));
const zeraRodada=()=>{banco=0;cont=false;dado=0};
function resumoGeral(){
  const primeiros=KEYS.filter(k=>{const b=best(k)[0];return b&&chave(b)===pid}).length;
  const t={};KEYS.forEach(k=>best(k).slice(0,3).forEach((x,i)=>{const id=chave(x);t[id]=t[id]||[0,0,0];t[id][i]++}));
  const ord=Object.entries(t).sort((a,b)=>b[1][0]-a[1][0]||b[1][1]-a[1][1]||b[1][2]-a[1][2]).map(e=>e[0]);
  return{primeiros,pos:ord.indexOf(pid)};
}
/* ---------- perfil e análise ---------- */
let editando=false;
const normNome=n=>String(n).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
const MSG_NOME='Esse apelido já está em uso. Escolha outro.';
function erroNome(input,msg){
  let p=input.parentNode.querySelector('.nomeErro');
  if(!p){p=document.createElement('p');p.className='nomeErro status';p.style.cssText='margin:6px 0 0;color:#ff7aa8!important;font-weight:800';input.insertAdjacentElement('afterend',p)}
  p.textContent=msg||'';p.hidden=!msg;
}
/* devolve null se salvou, ou o texto do erro (apelido repetido) */
async function salvaPerfil(nome,av){
  const nid=normNome(nome);
  if(Object.entries(perfis).some(([id,p])=>id!==pid&&p&&p.name&&normNome(p.name)===nid))return MSG_NOME;
  if(db){
    try{await db.doc('nomes/'+encodeURIComponent(nid)).set({uid:pid})}
    catch(e){if(e&&e.code==='permission-denied')return MSG_NOME}
    if(eu.name){const ant=normNome(eu.name);if(ant!==nid)try{db.doc('nomes/'+encodeURIComponent(ant)).delete().catch(()=>{})}catch(e){}}
  }
  eu={name:nome,av};ls.set('pf-nome',nome);ls.set('pf-av',String(av));perfis[pid]={name:nome,av};
  if(db)db.doc('perfis/'+pid).set({name:nome,av,at:new Date().toISOString()}).catch(()=>{});
  render();
  return null;
}
function escolheAv(box,sel,onPick){
  box.innerHTML=AVS.map((a,i)=>`<button type="button" data-a="${i}" class="${i===sel?'on':''}" aria-label="${esc(a[0])}" title="${esc(a[0])}">${avatar(i)}<span class="avn">${esc(curto(i))}</span></button>`).join('');
  box.querySelectorAll('button').forEach(b=>b.onclick=()=>{box.querySelectorAll('button').forEach(o=>o.classList.toggle('on',o===b));onPick(+b.dataset.a)});
}
const media=a=>a.reduce((x,y)=>x+y,0)/a.length;
function analisa(){
  const jogos={};
  KEYS.forEach(k=>{const lst=best(k),i=lst.findIndex(s=>chave(s)===pid),h=hist[k]||[];
    const n=lst.length,p=i+1,niv=i<0||n<2?null:1-(p-1)/(n-1);
    let tend=null;if(h.length>=4){const sc=h.map(x=>x[0]),ant=sc.length>=6?sc.slice(0,-3):sc.slice(0,Math.floor(sc.length/2)),rec=sc.length>=6?sc.slice(-3):sc.slice(Math.floor(sc.length/2)),a=media(ant),r=media(rec);tend=a>0?(r-a)/a:(r>0?1:0)}
    jogos[k]={rec:i<0?null:lst[i].score,pos:i<0?null:p,n,niv,tend,part:h.length}});
  const cats=CATS.map(([id,nome,,ks])=>{const js=ks.map(k=>jogos[k]),nv=js.filter(j=>j.niv!==null).map(j=>j.niv),td=js.filter(j=>j.tend!==null).map(j=>j.tend);
    return{id,nome,niv:nv.length?media(nv):null,tend:td.length?media(td):null,jogados:js.filter(j=>j.rec!==null||j.part>0).length,total:ks.length,part:js.reduce((a,j)=>a+j.part,0)}});
  return{jogos,cats};
}
function desenhaPerfil(){
  const{jogos,cats}=analisa(),jogados=KEYS.filter(k=>jogos[k].rec!==null||jogos[k].part>0).length,part=Object.values(hist).reduce((a,h)=>a+h.length,0);
  const comNiv=cats.filter(c=>c.niv!==null).sort((a,b)=>b.niv-a.niv);
  let resumo='Jogue em várias categorias para a análise ficar completa.';
  if(comNiv.length>=2)resumo=`Seu ponto forte é <b>${comNiv[0].nome}</b>. Para melhorar, treine <b>${comNiv[comNiv.length-1].nome}</b>.`;
  else if(comNiv.length===1)resumo=`Até agora você vai melhor em <b>${comNiv[0].nome}</b>. Jogue outras categorias para comparar.`;
  const melhorou=cats.filter(c=>c.tend!==null&&c.tend>.1).map(c=>c.nome);if(melhorou.length)resumo+=` Você está melhorando em ${melhorou.join(', ')}.`;
  const nivTxt=c=>c.niv===null?(c.part?['Sem rivais ainda','var(--muted)']:['Ainda não jogou','var(--muted)']):c.niv>=.67?['Mandando bem','var(--good)']:c.niv>=.34?['Na média','#f5b800']:['Precisa treinar','var(--coral)'];
  const tdTxt=t=>t===null?'<span class="tend">Jogue mais vezes para ver sua evolução</span>':t>.1?`<span class="tend up">▲ Melhorou ${Math.round(t*100)}%</span>`:t<-.1?`<span class="tend down">▼ Caiu ${Math.round(-t*100)}%</span>`:'<span class="tend">● Estável</span>';
  const seta=t=>t===null?'':t>.1?'<span class="up">▲</span>':t<-.1?'<span class="down">▼</span>':'●';
  const rg=resumoGeral();
  $('pBody').innerHTML=`
    <div class="phead"><div class="bigav">${avatar(eu.av)}</div><div><h2>${esc(eu.name)}</h2><p style="margin:2px 0 0">${esc(AVS[eu.av]?AVS[eu.av][0]:'')}</p><p>${part} ${part===1?'partida':'partidas'} · ${jogados} de ${KEYS.length} jogos jogados</p></div></div>
    <div class="carteira"><span class="chip">${ICO.coin}${moedas}<small>moedas</small></span><span class="chip">${ICO.trofeu}${rg.primeiros}<small>1º lugares</small></span><span class="chip">${ICO.coroa}${rg.pos>=0?(rg.pos+1)+'º':'-'}<small>no geral</small></span></div>
    <div class="loja"><p><b>Moedas:</b> quando você perde, ${PRECO} moedas deixam você continuar de onde parou. A pontuação fica guardada e a nova rodada soma com ela.</p><p class="tend">Ganhe moedas jogando: 3 por partida, +10 por recorde seu e +20 por ficar em 1º lugar.</p></div>
    <div><button class="ghost" id="pEd">Trocar apelido ou personagem</button></div>
    <div class="edit" id="pEdBox" hidden><label class="campo">Apelido<input id="pNome" maxlength="18" value="${esc(eu.name)}"></label><span class="poslbl">Personagem</span><div class="avs" id="pAvs"></div><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="go" id="pOk">Salvar</button><button class="ghost" id="pCan">Cancelar</button></div></div>
    <h3 style="font-size:24px">Análise</h3>
    <p class="resumo">${resumo}</p>
    <div class="cats">${cats.map(c=>{const[l,cor]=nivTxt(c);return `<div class="ck"><h4>${c.nome}</h4><span class="lv" style="color:${cor}">${l}</span><div class="meter"><i style="width:${c.niv===null?0:Math.max(6,c.niv*100)}%;background:${cor}"></i></div>${tdTxt(c.tend)}<span class="tend">${c.jogados} de ${c.total} jogos · ${c.part} ${c.part===1?'partida':'partidas'}</span></div>`}).join('')}</div>
    <p class="status">"Mandando bem", "Na média" e "Precisa treinar" comparam suas posições com as da família. A evolução compara suas últimas partidas com as primeiras.</p>
    <h3 style="font-size:24px">Meus jogos</h3>
    <table class="tbl"><thead><tr><th>Jogo</th><th class="r">Recorde</th><th class="r">Posição</th><th class="r hm">Partidas</th><th class="r">Evolução</th></tr></thead><tbody>
    ${CATS.flatMap(c=>c[3]).map(k=>{const j=jogos[k];return `<tr><td><span class="jg">${IC[k]}${GAMES[k].nome}</span></td><td class="r">${j.rec===null?'—':j.rec}</td><td class="r">${j.pos?j.pos+'º de '+j.n:'—'}</td><td class="r hm">${j.part}</td><td class="r">${seta(j.tend)}</td></tr>`}).join('')}
    </tbody></table>`;
  let novoAv=eu.av;
  $('pEd').onclick=()=>{editando=true;$('pEdBox').hidden=false;$('pEd').parentElement.hidden=true;escolheAv($('pAvs'),eu.av,a=>novoAv=a);$('pNome').focus()};
  $('pCan').onclick=()=>{editando=false;desenhaPerfil()};
  $('pOk').onclick=async()=>{const n=$('pNome').value.trim();if(!n){$('pNome').focus();return}const er=await salvaPerfil(n,novoAv);if(er){erroNome($('pNome'),er);return}editando=false;desenhaPerfil()};$('pNome').addEventListener('input',()=>erroNome($('pNome'),''));
}
function abrePerfil(){editando=false;$('perfil').hidden=false;document.body.style.overflow='hidden';desenhaPerfil();$('pX').focus()}
function fechaPerfil(){editando=false;$('perfil').hidden=true;document.body.style.overflow='';$('eu').focus()}

/* ---------- telas ---------- */
let emJogo=false,tIni=0,tUsado=0,tInt=null,entrou=0;
const fmtRel=ms=>{const s=Math.max(0,Math.floor(ms/1000));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
const fmtTxt=ms=>{const s=Math.max(0,Math.floor(ms/1000)),m=Math.floor(s/60);return m?`${m}min ${String(s%60).padStart(2,'0')}s`:`${s}s`};
const atualizaRel=()=>{if(pausado||!emJogo)return;$('tmt').textContent=fmtRel(agora()-tIni)};
function saiTelaCheia(){try{if(document.fullscreenElement)document.exitFullscreen().catch(()=>{})}catch(e){}}
function comeca(continua){
  if(continua)tIni=agora()-tUsado;else{zeraRodada();tIni=agora();tUsado=0}
  entrou=agora();emJogo=true;pausado=false;$('sair').hidden=true;
  $('modal').classList.add('jogo');$('tmr').hidden=false;$('tmt').textContent=fmtRel(agora()-tIni);clearInterval(tInt);tInt=setInterval(atualizaRel,250);
  try{const r=document.documentElement.requestFullscreen&&!document.fullscreenElement?document.documentElement.requestFullscreen():null;if(r&&r.catch)r.catch(()=>{})}catch(e){}
  $('modal').classList.remove('cena');JOGOS[cur]();if(!stage.querySelector('canvas'))$('modal').classList.add('cena');
  musicaLiga(faixaDe(cur));
}
function pedeSair(){
  if(!emJogo||agora()-entrou<5000){fecha();return}
  pausa();$('sair').hidden=false;$('sairNao').focus();
}
function intro(){
  clear();zeraRodada();const g=GAMES[cur];
  stage.innerHTML=`<div class="intro"><div style="display:flex;flex-direction:column;gap:12px"><div class="ic">${IC[cur]}</div><h2 class="big" style="font-size:clamp(32px,6vw,46px)">${g.nome}</h2><p>${g.desc}</p><p style="color:var(--muted)">${g.como}</p><p class="rec" id="rec"></p><div><button class="go" id="play">Jogar</button></div></div><div class="note"><h3>Ranking</h3><ol id="rk"></ol></div></div>`;
  $('play').onclick=()=>comeca(false);render();
}
let acabou=false;
function fecha(){musicaPara();emJogo=false;clearInterval(tInt);$('tmr').hidden=true;$('sair').hidden=true;$('modal').classList.remove('jogo','cena');pausado=false;saiTelaCheia();zeraRodada();clear();acabou=true;stage.innerHTML='';$('modal').hidden=true;document.body.style.overflow='';const t=$('tabs').querySelector(`[data-k="${cur}"]`);if(t)t.focus({preventScroll:true})}
function fim(score){
  if(acabou)return;acabou=true;clear();
  finaliza(banco+score);
}
function finaliza(total){
  const g=GAMES[cur];
  emJogo=false;musicaPara();sfx('fim');tUsado=agora()-tIni;clearInterval(tInt);$('tmr').hidden=true;$('modal').classList.remove('jogo','cena');
  if(cont&&hist[cur]&&hist[cur].length)hist[cur].pop();
  registra(cur,total);
  stage.innerHTML=`<p class="msg">Fim de jogo · ${g.nome}</p>
    <p style="margin:0;font-weight:800">Sua pontuação</p><div class="big">${total} <span style="font-size:.4em">${g.unid}</span></div>
    <p class="tempo">Tempo de jogo: ${fmtRel(tUsado)}</p><p class="expl">Você fez ${total} ${g.unid} em ${fmtTxt(tUsado)}.</p>
    <div class="posbox" id="pb"><span class="poslbl">Sua posição no ranking</span><span class="posn" id="pn">…</span><span class="msg" id="sv">Salvando…</span></div>
    <p class="ganho" id="mo"></p>
    <div id="cont" style="display:flex;flex-direction:column;align-items:center;gap:6px"></div>
    <p style="margin:6px 0 0;font:600 20px Fredoka,sans-serif">E agora?</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center"><button class="go" id="again">Jogar novamente</button><button class="ghost" id="volta" style="font:700 20px Fredoka,sans-serif;padding:12px 30px">Voltar</button></div>`;
  $('again').onclick=()=>comeca(false);
  $('volta').onclick=fecha;
  salvar(total).then(r=>{
    const pn=$('pn'),sv=$('sv'),mo=$('mo'),ct=$('cont');if(!pn)return;
    const tot=total>0?3+(r.novo?10:0)+(r.novo&&r.pos===1?20:0):0,ganho=Math.max(0,tot-dado);
    if(r.novo)sfx('recorde');if(ganho){dado+=ganho;moedas+=ganho;salvaCarteira();later(()=>sfx('moeda'),r.novo?700:250)}
    pn.textContent=r.pos?r.pos+'º lugar':'—';if(r.novo)$('pb').classList.add('rec1');
    sv.textContent=r.txt;
    if(ganho&&mo)mo.innerHTML=`<span class="ic28">${ICO.coin}</span>+${ganho} moedas`;
    if(total<=0||!ct)return;
    if(moedas>=PRECO){
      ct.innerHTML=`<button class="go" id="cbt" style="display:flex;align-items:center;gap:8px"><span class="ic28">${ICO.vida}</span>Continuar · ${PRECO} <span class="ic28">${ICO.coin}</span></button><span class="tend">Você tem ${moedas} moedas. Seus ${total} ${g.unid} ficam guardados.</span>`;
      $('cbt').onclick=()=>{moedas-=PRECO;salvaCarteira();banco=total;cont=true;acabou=false;comeca(true);
        stage.insertAdjacentHTML('afterbegin',`<div class="banco"><span class="ic28">${ICO.vida}</span>+${total} guardados</div>`)};
    }else ct.innerHTML=`<span class="tend" style="display:flex;align-items:center;gap:6px"><span class="ic28">${ICO.coin}</span>Continuar custa ${PRECO} moedas. Você tem ${moedas}.</span>`;
  });
}
let W=360,H=520;
function tela(extra){
  clear();acabou=false;let cv='';H=520;
  if($('modal').classList.contains('jogo')){   /* tela cheia: o campo de jogo se adapta ao formato do aparelho */
    const aw=Math.max(240,window.innerWidth),ah=Math.max(300,window.innerHeight-44-(extra?120:0));
    const r=Math.max(1.44,Math.min(2.4,ah/aw));H=Math.round(360*r);
    let w=aw,h=aw*r;if(h>ah){h=ah;w=ah/r}
    cv=` style="--cw:${Math.floor(w)}px;--ch:${Math.floor(h)}px"`;
  }
  stage.innerHTML=`<div class="hud"><span id="pt">0</span><span id="hv"></span></div><div class="cv"${cv}><canvas id="cv"></canvas></div>${extra||''}`;
  const c=$('cv'),x=c.getContext('2d'),dpr=Math.min(2,window.devicePixelRatio||1);
  c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);
  const pos=e=>{const r=c.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*W,y:(e.clientY-r.top)/r.height*H}};
  if($('modal').classList.contains('jogo')){const md=$('modal');const cor=()=>{try{const d=x.getImageData(0,0,c.width,3).data;let r=0,g=0,b=0,n=0;for(let i=0;i<d.length;i+=16){r+=d[i];g+=d[i+1];b+=d[i+2];n++}if(n)md.style.setProperty('--tira',`rgb(${r/n|0},${g/n|0},${b/n|0})`)}catch(_){}};
    const ti=setInterval(cor,300);const t0=setTimeout(cor,80);limpa.push(()=>{clearInterval(ti);clearTimeout(t0);md.style.removeProperty('--tira')})}
  return{c,x,pos,pts:(n)=>{$('pt').textContent=n+' '+GAMES[cur].unid}};
}
function loop(f){
  let raf,last=performance.now(),vivo=true;
  const step=t=>{if(!vivo)return;if(pausado){last=t;raf=requestAnimationFrame(step);return}const dt=Math.min(3,(t-last)/16.67);last=t;if(f(dt)===false)return;raf=requestAnimationFrame(step)};
  raf=requestAnimationFrame(step);limpa.push(()=>{vivo=false;cancelAnimationFrame(raf)});
}
const rr=(x,a,b,w,h,r)=>{x.beginPath();x.roundRect(a,b,w,h,r);x.fill()};
const bola=(x,a,b,r,c)=>{x.fillStyle=c;x.beginPath();x.arc(a,b,r,0,7);x.fill()};

let _imN=null;function imgsNave(){if(_imN)return _imN;_imN={};for(const k in SPRN){const i=new Image();i.src=SPRN[k];_imN[k]=i}return _imN}
const JOGOS={
  padrao(){
    clear();$('modal').classList.add('cena-pad');limpa.push(()=>$('modal').classList.remove('cena-pad'));acabou=false;let score=0,k=3,S=[],achou=new Set(),pode=false;
    const PEN=[1,1.125,1.25,1.5,1.667],nota=i=>262*PEN[i%5]*(i%10>=5?2:1)*(i>=10?(i>=20?.5:1.5)*(i%2?1:1):1);
    const som1=i=>{const f=nota(i);tom(f,f*.985,.2,'square',.045);tom(f/2,f/2,.22,'sine',.06);ruido(.02,.03,6000)};
    stage.innerHTML=`<div class="hud"><span id="pt">0 rodadas</span><span id="hv"></span></div><div class="mpc"><div class="mtop"><div class="knobs"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="lcd"><span class="l1">PADRÃO · PADS</span><p class="msg" id="dc"></p></div></div><div class="fg pads" id="fg"></div></div>`;
    const fg=$('fg'),dc=$('dc');
    const rodada=()=>{const lado=k<=4?3:k<=7?4:k<=11?5:6,n=lado*lado;S=embaralha([...Array(n).keys()]).slice(0,Math.min(k,n-2));achou=new Set();pode=false;
      fg.style.gridTemplateColumns=`repeat(${lado},minmax(0,1fr))`;
      fg.innerHTML=[...Array(n).keys()].map(i=>{const h=Math.round((i*137.5)%360);return `<button data-i="${i}" style="--c:hsl(${h},100%,58%)" aria-label="Pad"></button>`}).join('');
      dc.textContent='OLHE A SEQUÊNCIA…';$('hv').textContent=S.length+' pads';
      S.forEach((i,j)=>{later(()=>{fg.children[i].classList.add('acc');som1(i)},700+j*480);later(()=>fg.children[i].classList.remove('acc'),700+j*480+330)});
      later(()=>{pode=true;dc.textContent='AGORA TOQUE NOS PADS!'},700+S.length*480+150);
      fg.querySelectorAll('button').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(!pode)return;b.classList.add('tap');setTimeout(()=>b.classList.remove('tap'),130);const i=+b.dataset.i;if(achou.has(i))return;
        som1(i);
        if(S.includes(i)){achou.add(i);b.classList.add('acc');if(achou.size===S.length){pode=false;score++;k++;$('pt').textContent=score+' rodadas';dc.textContent='ISSO!';later(()=>{[0,2,4].forEach((q,w)=>later(()=>tom(523*PEN[q],523*PEN[q],.16,'square',.04),w*90));},120);later(rodada,900)}}
        else{pode=false;b.classList.add('no');sfx('erro');S.forEach(j=>{if(!achou.has(j))fg.children[j].classList.add('sel')});dc.textContent='ERROU!';later(()=>fim(score),1300)}}));
    };
    rodada();
  },
  javi(){
    clear();acabou=false;let score=0,lim=4500,t0=0,atual=-1,velho=false,trava=false;const vistos=[],pool=embaralha([...Array(48).keys()]);
    $('modal').classList.add('cena-javi');limpa.push(()=>$('modal').classList.remove('cena-javi'));
    stage.innerHTML=`<div class="jv"><div class="jh"><span class="jc"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.5 6 20.9l1.3-6.7-5-4.7 6.8-.8z" fill="#ffd43b" stroke="#c98a00" stroke-width="1.6" stroke-linejoin="round"/></svg><span id="pt">0 acertos</span></span><span class="jc"><span id="hv">0 figuras vistas</span></span></div><div class="jbar"><i id="bt" style="width:100%"></i></div><div class="jcard"><div class="fig1" id="f1"></div></div><div class="jo"><button id="bn"><svg viewBox="0 0 24 24" fill="none" stroke="#2b1a75" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/></svg> Nova</button><button id="bv"><svg viewBox="0 0 24 24" fill="none" stroke="#2b1a75" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M1.8 12S5.5 5.5 12 5.5 22.2 12 22.2 12 18.5 18.5 12 18.5 1.8 12 1.8 12z"/><circle cx="12" cy="12" r="4.2" fill="#3b6cf0"/><circle cx="12" cy="12" r="1.8" fill="#2b1a75" stroke="none"/></svg> Já vi</button></div></div>`;
    const prox=()=>{velho=vistos.length>=2&&(pool.length===0||Math.random()<.45);atual=velho?vistos[rnd(0,vistos.length-1)]:pool.pop();
      const f=$('f1');f.innerHTML=fig(atual);f.style.transform='scale(.85)';later(()=>f.style.transform='',90);$('hv').textContent=vistos.length+' figuras vistas';t0=performance.now();trava=false};
    const resp=(disseVelho,b)=>{if(trava)return;trava=true;
      if(disseVelho===velho){b.classList.add('ok');score++;$('pt').textContent=score+' acertos';if(!velho)vistos.push(atual);lim=Math.max(1500,lim*.97);later(()=>{b.classList.remove('ok');prox()},220)}
      else{b.classList.add('no');$('hv').textContent=velho?'Essa já tinha aparecido!':'Essa era nova!';later(()=>fim(score),1100)}};
    $('bn').addEventListener('pointerdown',e=>{e.preventDefault();resp(false,e.currentTarget)});$('bv').addEventListener('pointerdown',e=>{e.preventDefault();resp(true,e.currentTarget)});
    onKey(e=>{if(e.key==='ArrowLeft')resp(false,$('bn'));if(e.key==='ArrowRight')resp(true,$('bv'))});
    prox();
    loop(()=>{if(trava)return;const r=1-(performance.now()-t0)/lim;$('bt').style.width=Math.max(0,r*100)+'%';if(r<=0){trava=true;$('hv').textContent='Demorou!';later(()=>fim(score),900);return false}});
  },
  numeros(){
    clear();$('modal').classList.add('cena-num');limpa.push(()=>$('modal').classList.remove('cena-num'));acabou=false;let score=0,n=4,prox=1,pos=[],pode=false;const CO=5,RO=6;
    stage.innerHTML=`<div class="hud"><span id="pt">0 rodadas</span><span id="hv"></span></div><p class="msg" id="dc"></p><div class="fg" id="fg" style="grid-template-columns:repeat(${CO},minmax(0,1fr));width:min(380px,100%)"></div>`;
    const fg=$('fg'),dc=$('dc');
    const rodada=()=>{pos=embaralha([...Array(CO*RO).keys()]).slice(0,n);prox=1;pode=true;
      fg.innerHTML=[...Array(CO*RO).keys()].map(i=>{const v=pos.indexOf(i)+1;return v?`<button class="num" data-v="${v}">${v}</button>`:'<button class="vazio" tabindex="-1" aria-hidden="true"></button>'}).join('');
      dc.textContent=`Decore e toque no 1. (${n} números)`;$('hv').textContent='';
      fg.querySelectorAll('.num').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(!pode)return;const v=+b.dataset.v;
        if(v===prox){if(v===1){fg.querySelectorAll('.num').forEach(o=>o.classList.add('tapa'));dc.textContent='Agora em ordem, de memória!'}
          b.classList.remove('tapa');b.classList.add('ok');b.style.color='#18256e';prox++;
          if(prox>n){pode=false;score++;n=Math.min(CO*RO,n+1);$('pt').textContent=score+' rodadas';dc.textContent='Isso!';later(rodada,700)}}
        else{pode=false;b.classList.add('no');fg.querySelectorAll('.num').forEach(o=>{o.classList.remove('tapa')});dc.textContent=`Errou! O próximo era o ${prox}.`;later(()=>fim(score),1500)}}));
    };
    rodada();
  },
  estrada(){
    const{c,x,pos,pts}=tela();const I=imgsEstrada();const LX=[107,180,252],CY=H-100,TH=480,CK=.37,DIM={"am": [126, 207], "la": [126, 199], "ve": [128, 198], "azul": [126, 207], "verde": [126, 207], "roxo": [126, 207], "rosa": [128, 198]};let lane=1,cx=LX[1],obs=[],score=0,v=4,prox=0,listra=0,libre=1;pts(0);
    const vai=d=>{lane=Math.max(0,Math.min(2,lane+d))};
    c.addEventListener('pointerdown',e=>{e.preventDefault();vai(pos(e).x<W/2?-1:1)});
    onKey(e=>{if(e.key==='ArrowLeft'){e.preventDefault();vai(-1)}if(e.key==='ArrowRight'){e.preventDefault();vai(1)}});
    const CC=['am','la','azul','verde','roxo','rosa'];
    loop(dt=>{
      if(!I.bg.naturalWidth||!I.c_ve.naturalWidth||!I.hole.naturalWidth){x.fillStyle='#3c4a5a';x.fillRect(0,0,W,H);return}
      v=Math.min(13,4+score*.09);cx+=(LX[lane]-cx)*Math.min(1,.35*dt);listra+=v*dt;
      prox-=v*dt;if(prox<=0){prox=Math.max(170,270-score*1.2)+rnd(0,80);const n=score>12&&Math.random()<.45?2:1;let ls;
        const oc=new Set(obs.filter(q=>q.y<260).map(q=>q.l));
        if(n===2){const cand=[0,1,2].filter(f=>Math.abs(f-libre)<=1&&!oc.has(f)||Math.abs(f-libre)<=1&&oc.size<2);const f=cand.length?cand[rnd(0,cand.length-1)]:libre;ls=[0,1,2].filter(l=>l!==f);libre=f}
        else{const cand=[0,1,2].filter(l=>l!==libre||Math.random()<.4);ls=[cand[rnd(0,cand.length-1)]]}
        ls=ls.filter(l=>!obs.some(q=>Math.abs(q.x-LX[l])<50&&q.y<170));
        if(new Set([...oc,...ls]).size>=3)ls=ls.filter(l=>oc.has(l));
        if(!ls.length)prox=25;
        ls.forEach(l=>{const t=Math.random()<.3?'cone':'carro';obs.push({l,x:LX[l],y:-60,tipo:t,k:t==='carro'?.12+Math.random()*.2:0,mud:rnd(50,160),c:CC[rnd(0,CC.length-1)],conta:l===ls[0]})})}
      for(const o of obs){
        if(o.tipo==='carro'){let k=o.k;const fr=obs.find(q=>q!==o&&q.tipo==='carro'&&q.y>o.y&&q.y-o.y<86&&Math.abs(q.x-o.x)<30);if(fr)k=Math.min(k,fr.k);o.y+=v*(1-k)*dt;
          
          o.x+=(LX[o.l]-o.x)*Math.min(1,.07*dt)}
        else o.y+=v*dt;
        if(o.y>H+60){o.fora=1;if(o.conta){score++;pts(score)}}
        const ox=o.x,h=o.tipo==='cone'?30:66;if(Math.abs(ox-cx)<(o.tipo==='cone'?19:36)&&o.y+h/2>CY-33&&o.y-h/2<CY+33){fim(score);return false}}
      const al=q=>q.tipo==='carro'?76:40;
      const ne=(q,r)=>Math.abs(q.x-r.x)<50||Math.abs(LX[q.l]-r.x)<50||Math.abs(LX[q.l]-LX[r.l||0])<1&&r.tipo==='carro';
      const cs=obs.filter(q=>q.tipo==='carro').sort((p,q)=>p.y-q.y);
      for(const h of obs)if(h.tipo!=='carro'){let last=h;for(const q of cs){if(q.y<=last.y||!ne(q,last))continue;const gp=(al(q)+al(last))/2+14;if(q.y-last.y<gp){q.y=last.y+gp;last=q}else if(last===h)continue;else break}}
      const ord=obs.slice().sort((p,q)=>q.y-p.y);for(let i=0;i<ord.length;i++){const o=ord[i];if(o.tipo!=='carro')continue;for(let k=0;k<i;k++){const f=ord[k];if(f.y>o.y&&(Math.abs(f.x-o.x)<50||Math.abs(LX[f.l]-LX[o.l])<50)){const gp=(al(f)+al(o))/2+14;if(f.y-o.y<gp)o.y=f.y-gp}}}
      obs=obs.filter(o=>!o.fora);
      x.fillStyle='#3c4a5a';x.fillRect(0,0,W,H);
      if(I.bg.naturalWidth){const off=listra%(2*TH);for(let k=-2;k*TH+off<H;k++){const y=k*TH+off;if(((k%2)+2)%2===0)x.drawImage(I.bg,0,y,W,TH+1);else{x.save();x.translate(0,y+TH+1);x.scale(1,-1);x.drawImage(I.bg,0,0,W,TH+1);x.restore()}}}
      const carro=(ax,ay,k,rot)=>{const im=I['c_'+k],d=DIM[k];if(!im||!im.naturalWidth)return;const w=d[0]*CK,h=d[1]*CK;x.save();x.translate(ax,ay);x.rotate(rot||0);x.drawImage(im,-w/2,-h/2,w,h);x.restore()};
      obs.forEach(o=>{const ox=o.x;if(o.tipo==='cone'){const hi=I.hole;if(hi&&hi.naturalWidth)x.drawImage(hi,ox-15,o.y-20,30,40)}else carro(ox,o.y,o.c,(o.x-LX[o.l])*.006)});
      carro(cx,CY,'ve',(cx-LX[lane])*.006);
    });
  },
  descida(){
    const{c,x,pts}=tela();const I=imgsDesc(),DD={"bg": [470, 718], "capL": [60, 43], "capR": [59, 43], "bola": [66, 62], "spk": [40, 143], "midL": [24, 43], "midR": [24, 43]},PF=.638,TOPY=64;const R=12,GW=74;let b={x:180,y:120,vx:0,vy:0},rows=[],score=0,v=1.1,hold=0,keys=0,falta=0;pts(0);
    for(let y=200;y<H+120;y+=110)rows.push({y,gx:rnd(10,W-GW-10),ok:false});
    const set=e=>{const r=c.getBoundingClientRect();hold=e.clientX-r.left<r.width/2?-1:1};
    c.addEventListener('pointerdown',e=>{c.setPointerCapture(e.pointerId);set(e)});c.addEventListener('pointermove',e=>{if(e.buttons||e.pointerType==='touch')set(e)});
    c.addEventListener('pointerup',()=>hold=0);c.addEventListener('pointercancel',()=>hold=0);
    onKey(e=>{if(e.key==='ArrowLeft')keys=-1;if(e.key==='ArrowRight')keys=1});
    const up=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight')keys=0};window.addEventListener('keyup',up);limpa.push(()=>window.removeEventListener('keyup',up));
    loop(dt=>{
      if(!I.bg.naturalWidth||!I.midL.naturalWidth||!I.midR.naturalWidth||!I.bola.naturalWidth||!I.spk.naturalWidth){x.fillStyle='#3a5fe0';x.fillRect(0,0,W,H);return}
      v=Math.min(4.2,1.1+score*.045);rows.forEach(r=>r.y-=v*dt);
      const last=rows[rows.length-1];if(last.y<H+10)rows.push({y:last.y+110,gx:rnd(10,W-GW-10),ok:false});rows=rows.filter(r=>r.y>-20);
      const d=hold||keys;b.vx=(b.vx+d*.8*dt)*Math.pow(.85,dt);b.vx=Math.max(-6,Math.min(6,b.vx));b.x=Math.max(R,Math.min(W-R,b.x+b.vx*dt));
      b.vy=Math.min(9,b.vy+.45*dt);b.y+=b.vy*dt;
      for(const r of rows){const noBuraco=b.x-R*.6>r.gx&&b.x+R*.6<r.gx+GW;if(!noBuraco&&b.y+R>=r.y&&b.y+R<=r.y+18&&b.vy>=-v){b.y=r.y-R;b.vy=0}
        if(!r.ok&&b.y-R>r.y+10){r.ok=true;score++;pts(score)}}
      if(b.y>H-R){b.y=H-R;b.vy=0}
      if(b.y-R<TOPY){fim(score);return false}
      {const bw=DD.bg[0],bh=DD.bg[1],sc=Math.max(W/bw,H/bh),dw=bw*sc,dh=bh*sc;x.drawImage(I.bg,(W-dw)/2,H-dh,dw,dh)}
      const cw=DD.capL[0]*PF,cr=DD.capR[0]*PF,ph=DD.midL[1]*PF,pw=(x0,x1,y)=>{};
      const pil=(x0,x1,y,lado)=>{const yy=y-3.5;if(lado==='e'){x.drawImage(I.midL,x0,yy,Math.max(1,x1-cr-x0)+1,ph);x.drawImage(I.capR,x1-cr,yy,cr,ph)}else{x.drawImage(I.capL,x0,yy,cw,ph);x.drawImage(I.midR,x0+cw-1,yy,Math.max(1,x1-x0-cw)+1,ph)}};
      rows.forEach(r=>{pil(-30,r.gx,r.y,'e');pil(r.gx+GW,W+30,r.y,'d')});
      if(b.vy>4){const h=Math.min(46,(b.vy-4)*9),g2=x.createLinearGradient(0,b.y-R-h,0,b.y);g2.addColorStop(0,'rgba(255,255,255,0)');g2.addColorStop(1,'rgba(255,255,255,.55)');x.fillStyle=g2;for(const dx of[-6,0,6])x.fillRect(b.x+dx-1.2,b.y-R-h,2.4,h)}
      x.save();x.shadowColor='#ffd23a';x.shadowBlur=10;x.drawImage(I.bola,b.x-14.5,b.y-14.5*DD.bola[1]/DD.bola[0]-.5,29,29*DD.bola[1]/DD.bola[0]);x.restore();
      const sw=W/18,sh=DD.spk[1]*sw/DD.spk[0];x.fillStyle='#d8264a';x.fillRect(0,0,W,sh*.5);for(let i=0;i<18;i++)x.drawImage(I.spk,i*sw-.3,0,sw+.6,sh);
    });
  },
  teclas(){
    const{c,x,pos,pts}=tela();const CW=W/4,RH=130,HL=H-72,TH=112,NIV=['Fácil','Médio','Difícil','Extremo'],VR=[1.8,2.4,2.9,3.3];
    const nowT=()=>AC?AC.currentTime:performance.now()/1000;
    /* faixas: cada música é uma partitura de verdade (notas com tempo). Uma teclas por nota da melodia, no instante exato dela */
    const TR=[];
    const mkTrack=n=>{const sc=SCORES[n<4?n:2+((n-2)%2)],prev=TR[n-1],start=prev?prev.end+1.4:0,u=sc.u,tier=Math.min(3,n);
      const ps=sc.m.map(q=>q[1]).sort((a,b)=>a-b),th=[.25,.5,.75].map(f=>ps[Math.floor(f*(ps.length-1))]);
      const mel=sc.m.map(q=>[start+q[0]*u,q[1],q[2]*u,th.filter(v=>q[1]>v).length]);
      const an=sc.m.map(q=>[start+q[0]*u,q[1],q[2]*u,'m']).concat(sc.a.map(q=>[start+q[0]*u,q[1],q[2]*u,q[3]])).sort((p,q)=>p[0]-q[0]);
      const end=Math.max(...sc.m.map(q=>q[0]+q[2]))*u+start;
      TR.push({n,sc,start,end,tier,mel,an,np:0,D0:prev?prev.D0+(start-prev.start)*VR[prev.tier]*RH:0})};
    const ensure=t=>{while(!TR.length||TR[TR.length-1].end<t)mkTrack(TR.length)};
    const trackAt=t=>{ensure(t);let r=TR[0];for(const T of TR)if(T.start<=t)r=T;else break;return r};
    const D=t=>{const T=trackAt(t);return T.D0+(t-T.start)*VR[T.tier]*RH};
    const tierAt=t=>trackAt(t).tier,vel=t=>VR[tierAt(t)]*RH;
    const E=[];let cn=0,ck=0,tw=null;
    const nxt=()=>{if(tw){const e=tw;tw=null;return e}while(cn>=TR.length)mkTrack(TR.length);const T=TR[cn];if(ck>=T.mel.length){cn++;ck=0;return nxt()}
      const q=T.mel[ck++],e={t:q[0],col:q[3],L:0,hit:false,hf:1};if(T.tier>=2&&(ck*7+cn*3)%9===0)tw={t:e.t,col:(e.col+1+((ck*5)%3))%4,L:0,hit:false,hf:1};return e};
    const fill=t=>{while(!E.length||E[E.length-1].t<t){const e=nxt(),need=(TH+8)/vel(e.t);
      const busy=c=>{for(let j=E.length-1;j>=Math.max(0,E.length-24);j--)if(E[j].col===c&&e.t-E[j].t<need&&E[j].t!==e.t)return true;return false};
      const dup=c=>E.slice(-6).some(q=>q.t===e.t&&q.col===c);
      if(busy(e.col)||dup(e.col)){let ok=false;for(const d of[1,-1,2,-2,3,-3]){const c=e.col+d;if(c<0||c>3||dup(c))continue;if(!busy(c)){e.col=c;ok=true;break}}if(!ok)continue}
      E.push(e)}};
    const alt=()=>TH;
    fill(6);const vt0=E[0].t-.5;let started=false,T0=0,score=0,erro=null,pop=null,ultNiv=0,i0=0;pts(0);
    const vt=()=>started?vt0+(nowT()-T0):vt0;
    const yc=(t,v)=>HL-(D(t)-D(v));
    /* a música toca de fundo, agendada no relógio de áudio; as teclas não fazem som */
    const agenda=()=>{if(!started||!AC||!musica.g||!som)return;const v=vt();ensure(v+3);
      for(const T of TR){if(T.end<v-1||T.start>v+1.5)continue;
        while(T.np<T.an.length&&T.an[T.np][0]<=v+1.2){const q=T.an[T.np++],when=T0+(q[0]-vt0);if(when<AC.currentTime-.02)continue;const f=mf(q[1]),k=q[3],dur=Math.max(.15,q[2]);
          if(k==='m'){nMus(f,when,dur*.95,'triangle',.13);nMus(f*2,when,dur*.6,'sine',.04)}
          else if(k==='b')nMus(f,when,dur,'triangle',.15);
          else nMus(f,when,dur,'sine',.07)}}};
    const inicia=()=>{started=true;T0=nowT()+.03};
    c.addEventListener('pointerdown',e=>{e.preventDefault();if(erro)return;const p=pos(e),col=Math.floor(p.x/CW),v=vt();
      let f=-1;for(let i=i0;i<E.length;i++)if(!E[i].hit){f=i;break}
      const alvo=f>=0?E[f]:null;let ok=false;
      if(alvo)for(let i=f;i<E.length&&E[i].t-alvo.t<.004;i++){const e2=E[i];if(e2.hit||e2.col!==col)continue;const bot=yc(e2.t,v)+30,top=bot-TH;if(p.y>=top-14&&p.y<=bot+14){e2.hit=true;ok=true;break}}
      if(ok){if(!started)inicia();score++;pts(score);pop={t:0,txt:score>=60?'INCRÍVEL!':score>=35?'PERFECT!':score>=18?'EXCELENTE!':score>=8?'GREAT!':'GOOD'}}
      else{erro={x:col*CW,y:p.y-RH/2};later(()=>fim(score),700)}});
    const bgc=document.createElement('canvas');bgc.width=W;bgc.height=H;{const g=bgc.getContext('2d');
      const gr=g.createLinearGradient(0,0,W*.7,H);gr.addColorStop(0,'#5a2cff');gr.addColorStop(.28,'#2f6bff');gr.addColorStop(.5,'#2fb4ff');gr.addColorStop(.76,'#6a4cff');gr.addColorStop(1,'#d04bff');g.fillStyle=gr;g.fillRect(0,0,W,H);
      g.fillStyle='#fff';g.globalAlpha=.09;for(let i=0;i<7;i++){g.beginPath();g.moveTo(-120+i*80,0);g.lineTo(-60+i*80,0);g.lineTo(-60+i*80+H*.55,H);g.lineTo(-120+i*80+H*.55,H);g.fill()}g.globalAlpha=1;
      g.lineWidth=3;g.shadowColor='#fff';g.shadowBlur=14;[[H*.38,70,.5],[H*.86,55,.45]].forEach(([y0,am,al])=>{g.strokeStyle='rgba(255,255,255,'+al+')';g.beginPath();g.moveTo(-10,y0);g.bezierCurveTo(W*.3,y0-am*2,W*.6,y0+am,W+10,y0-am);g.stroke()});g.shadowBlur=0;
      [[.14,.2,28],[.86,.09,16],[.2,.5,32],[.82,.62,24],[.1,.82,16],[.9,.9,28],[.55,.34,12],[.6,.74,14]].forEach(([fx,fy,sz])=>{g.save();g.translate(fx*W,fy*H);g.rotate(Math.PI/4);g.fillStyle='rgba(255,255,255,.14)';g.fillRect(-sz/2,-sz/2,sz,sz);g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=1.2;g.strokeRect(-sz/2,-sz/2,sz,sz);g.restore()});
      for(let i=0;i<26;i++){g.fillStyle='rgba(255,255,255,'+(.25+Math.random()*.5)+')';g.beginPath();g.arc(Math.random()*W,Math.random()*H,Math.random()*1.6+.5,0,7);g.fill()}}
    const estrela=(cx,cy,r,cor)=>{x.fillStyle=cor;x.beginPath();for(let i=0;i<10;i++){const rr2=i%2?r*.45:r,an=-Math.PI/2+i*Math.PI/5;x.lineTo(cx+Math.cos(an)*rr2,cy+Math.sin(an)*rr2)}x.closePath();x.fill()};
    const coroa=(cx,cy,r,cor)=>{x.fillStyle=cor;x.beginPath();x.moveTo(cx-r,cy+r*.7);x.lineTo(cx-r,cy-r*.5);x.lineTo(cx-r*.5,cy+r*.1);x.lineTo(cx,cy-r*.8);x.lineTo(cx+r*.5,cy+r*.1);x.lineTo(cx+r,cy-r*.5);x.lineTo(cx+r,cy+r*.7);x.closePath();x.fill()};
    const ps=setInterval(()=>{try{if(!AC)return;if(pausado&&AC.state==='running')AC.suspend();else if(!pausado&&AC.state==='suspended')AC.resume()}catch(e){}},150);limpa.push(()=>{clearInterval(ps);try{if(AC&&AC.state==='suspended')AC.resume()}catch(e){}});
    loop(dt=>{
      const v=vt();agenda();fill(v+5);window.__t=E;window.__v=v;window.__yc=yc;
      const T=trackAt(v),tr=T.tier;if(tr!==ultNiv){ultNiv=tr;pop={t:0,txt:NIV[tr].toUpperCase()}}
      if(!erro&&started){for(let i=i0;i<E.length;i++){const e=E[i];if(e.t>v+.5)break;if(!e.hit){const top=yc(e.t,v)+30-TH;if(top>H){erro={x:e.col*CW,y:H-RH};later(()=>fim(score),700)}break}}}
      while(i0<E.length&&E[i0].hit&&yc(E[i0].t,v)+30-TH>H+10)i0++;
      x.drawImage(bgc,0,0);
      x.save();x.strokeStyle='rgba(190,245,255,.85)';x.lineWidth=1.5;x.shadowColor='#6fe6ff';x.shadowBlur=10;for(let i=0;i<=4;i++){x.beginPath();x.moveTo(i*CW,0);x.lineTo(i*CW,H);x.stroke()}x.restore();
      let a0=true;
      for(let i=i0;i<E.length;i++){const e=E[i],bot=yc(e.t,v)+30,top=bot-TH;if(top>H+4)continue;if(bot<-10&&e.t>v)break;
        if(e.hit){e.hf=Math.max(0,e.hf-.09*dt);if(e.hf<=0)continue}
        const X=e.col*CW+1,w=CW-2;x.save();x.globalAlpha=e.hit?e.hf*.7:1;
        const g2=x.createLinearGradient(0,top,0,bot);g2.addColorStop(0,'#01012e');g2.addColorStop(1,'#0a0f78');x.fillStyle=g2;x.fillRect(X,top,w,TH);
        x.shadowColor=e.col%2?'#ff6bf0':'#5fe3ff';x.shadowBlur=10;x.strokeStyle=e.col%2?'#ff8cf5':'#7fe9ff';x.lineWidth=2;x.strokeRect(X+1,top+1,w-2,TH-2);x.shadowBlur=0;
        x.restore();
        if(!started&&a0&&!e.hit){a0=false;x.fillStyle='#fff';x.font='700 18px Fredoka';x.textAlign='center';x.fillText('Comece',e.col*CW+CW/2,bot-TH/2+6)}}
      {const lv=Math.min(7,tr*2+((v-T.start)/(T.end-T.start)>.5?2:1)),x0=26,x1=W-26,yb=62;x.lineCap='round';x.lineWidth=5;x.strokeStyle='rgba(255,255,255,.3)';x.beginPath();x.moveTo(x0,yb);x.lineTo(x1,yb);x.stroke();
        if(lv>0){x.strokeStyle='#7fe9ff';x.shadowColor='#7fe9ff';x.shadowBlur=8;x.beginPath();x.moveTo(x0,yb);x.lineTo(x0+(x1-x0)*(lv-1)/6,yb);x.stroke();x.shadowBlur=0}
        for(let i=0;i<7;i++){const cx=x0+(x1-x0)*i/6,on=i<lv;x.save();if(on){x.shadowColor='#fff';x.shadowBlur=9}(i<4?estrela:coroa)(cx,yb,10,on?'#fff':'rgba(255,255,255,.4)');x.restore()}}
      x.save();x.textAlign='center';x.fillStyle='#fff';x.font='700 56px Fredoka';x.shadowColor='#b6e8ff';x.shadowBlur=12;x.fillText(String(score),W/2,134);x.restore();
      x.fillStyle='rgba(255,255,255,.85)';x.font='600 12px Fredoka';x.textAlign='center';x.fillText('♪ '+T.sc.nome+' · '+NIV[tr],W/2,90);
      if(pop){pop.t+=dt;if(pop.t>40)pop=null;else{const k=Math.max(0,1-pop.t/8),al=pop.t<28?1:(40-pop.t)/12;x.save();x.globalAlpha=al;x.translate(W/2,186);x.scale(1+k*.4,1+k*.4);x.font='900 38px Fredoka';x.textAlign='center';x.lineJoin='round';
        const gw=x.measureText(pop.txt).width,gg=x.createLinearGradient(-gw/2,0,gw/2,0);gg.addColorStop(0,'#ff6bd6');gg.addColorStop(1,'#46e6ff');x.shadowColor='#ff7bf2';x.shadowBlur=16;x.lineWidth=6;x.strokeStyle='#fff';x.strokeText(pop.txt,0,0);x.shadowBlur=0;x.fillStyle=gg;x.fillText(pop.txt,0,0);x.restore()}}
      if(erro){x.fillStyle='#ff4f5ecc';x.fillRect(erro.x+2,erro.y,CW-4,RH)}
    });
  },
  tiroalvo(){
    const{c,x,pos,pts}=tela();let al=[],fx=[],score=0,vidas=3,prox=300,t=0,mx=-99,my=-99,flash=0;pts(0);$('hv').textContent=vtx(3);
    c.addEventListener('pointermove',e=>{const p=pos(e);mx=p.x;my=p.y});
    c.addEventListener('pointerdown',e=>{e.preventDefault();const p=pos(e);mx=p.x;my=p.y;
      for(let i=al.length-1;i>=0;i--){const a=al[i],d=Math.hypot(p.x-a.x,p.y-a.y);if(d<a.r){const v=d<a.r*.34?3:d<a.r*.67?2:1;score+=v;pts(score);fx.push({x:a.x,y:a.y,s:'+'+v,v:1});al.splice(i,1);break}}});
    loop(dt=>{
      t+=dt;prox-=dt*16.67;
      if(prox<=0){prox=Math.max(380,1150-score*6);const d=Math.random()<.5?1:-1,r=Math.max(17,34-score/10),v=(1.3+Math.min(3.6,score*.025))*(.8+Math.random()*.4),y=rnd(80,H-130);al.push({x:d>0?-r:W+r,y0:y,y,r,vx:d*v,bob:score>20&&Math.random()<.5?rnd(15,40):0,ph:Math.random()*6})}
      for(const a of al){a.x+=a.vx*dt;a.y=a.y0+Math.sin(t*.05+a.ph)*a.bob;if((a.vx>0&&a.x>W+a.r)||(a.vx<0&&a.x<-a.r)){a.fora=1;vidas--;flash=12;$('hv').textContent=vtx(vidas)}}
      al=al.filter(a=>!a.fora);if(vidas<=0){fim(score);return false}
      x.fillStyle=flash>0?'#ffd0d4':'#cfe9ff';x.fillRect(0,0,W,H);if(flash>0)flash-=dt;
      x.fillStyle='#2340d8';for(let i=0;i<W;i+=40){x.beginPath();x.moveTo(i,0);x.quadraticCurveTo(i+20,40,i+40,0);x.fill()}
      x.fillStyle='#8a5526';x.fillRect(0,H-50,W,50);x.fillStyle='#a8703c';x.fillRect(0,H-50,W,8);
      al.forEach(a=>{bola(x,a.x,a.y,a.r,'#ff4f5e');bola(x,a.x,a.y,a.r*.67,'#fff');bola(x,a.x,a.y,a.r*.34,'#ff4f5e');bola(x,a.x,a.y,a.r*.1,'#fff')});
      fx=fx.filter(f=>(f.v-=.025*dt)>0);fx.forEach(f=>{x.globalAlpha=f.v;x.fillStyle='#18256e';x.font='700 26px Fredoka';x.textAlign='center';x.fillText(f.s,f.x,f.y-(1-f.v)*40)});x.globalAlpha=1;
      if(mx>0)mira(x,mx,my);
    });
  },
  canhao(){
    const{c,x,pos,pts}=tela();const CX=50,CY=H-62,G=H-40;let ang=-.8,pow=0,arr=null,bal=null,alvo,score=0,vidas=3,fx=0,trail=[];
    pts(0);$('hv').textContent=vtx(3);
    const novo=()=>{const r=Math.max(13,26-score*.6);alvo={x:rnd(170,W-30),y:rnd(110,H-140),r,vy:score>5?(Math.random()<.5?1:-1)*(.5+Math.min(2,score*.06)):0}};novo();
    c.addEventListener('pointerdown',e=>{e.preventDefault();if(bal)return;c.setPointerCapture(e.pointerId);const p=pos(e);arr={x:p.x,y:p.y}});
    c.addEventListener('pointermove',e=>{if(!arr)return;const p=pos(e),dx=arr.x-p.x,dy=arr.y-p.y,d=Math.min(150,Math.hypot(dx,dy));if(d>6){ang=Math.max(-1.5,Math.min(.1,Math.atan2(dy,dx)))}pow=d/150});
    const solta=()=>{if(!arr)return;arr=null;if(pow<.08){pow=0;return}const v=4+pow*10.5;bal={x:CX+Math.cos(ang)*36,y:CY+Math.sin(ang)*36,vx:Math.cos(ang)*v,vy:Math.sin(ang)*v};trail=[];pow=0};
    c.addEventListener('pointerup',solta);c.addEventListener('pointercancel',solta);
    loop(dt=>{
      if(alvo.vy){alvo.y+=alvo.vy*dt;if(alvo.y<90||alvo.y>H-130)alvo.vy*=-1}
      if(bal){bal.vy+=.22*dt;bal.x+=bal.vx*dt;bal.y+=bal.vy*dt;trail.push({x:bal.x,y:bal.y});
        if(Math.hypot(bal.x-alvo.x,bal.y-alvo.y)<alvo.r+7){score++;pts(score);fx=20;bal=null;novo()}
        else if(bal.x>W+20||bal.x<-20||bal.y>G){bal=null;vidas--;$('hv').textContent=vtx(vidas);if(vidas<=0){fim(score);return false}}}
      const gr=x.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#8fd3ff');gr.addColorStop(1,'#e6f6ff');x.fillStyle=gr;x.fillRect(0,0,W,H);
      x.fillStyle='#9bd78a';x.beginPath();x.moveTo(0,G);x.quadraticCurveTo(120,G-70,240,G);x.quadraticCurveTo(310,G-40,W,G);x.fill();
      x.fillStyle='#1fae6a';x.fillRect(0,G,W,40);
      x.fillStyle='#8a5526';x.fillRect(alvo.x-2,alvo.y+alvo.r,4,Math.max(0,G-alvo.y-alvo.r));
      bola(x,alvo.x,alvo.y,alvo.r,'#ff4f5e');bola(x,alvo.x,alvo.y,alvo.r*.66,'#fff');bola(x,alvo.x,alvo.y,alvo.r*.33,'#ff4f5e');
      trail.slice(-30).forEach((p,i)=>{x.globalAlpha=i/40;bola(x,p.x,p.y,3,'#18256e')});x.globalAlpha=1;
      if(arr&&pow>.08){const v=4+pow*10.5;let px=CX+Math.cos(ang)*36,py=CY+Math.sin(ang)*36,vx=Math.cos(ang)*v,vy=Math.sin(ang)*v;for(let k=0;k<14;k++){vy+=.22;px+=vx;py+=vy;if(k%2)bola(x,px,py,2.5,'#18256e88')}}
      if(bal)bola(x,bal.x,bal.y,7,'#18256e');
      x.save();x.translate(CX,CY);x.rotate(ang);x.fillStyle='#18256e';rr(x,-4,-9,44,18,6);x.fillStyle='#2340d8';rr(x,30,-11,10,22,3);x.restore();
      bola(x,CX-6,CY+10,12,'#8a5526');bola(x,CX-6,CY+10,4,'#f5b800');
      if(arr){x.fillStyle='#ffffffaa';rr(x,14,G+12,104,12,6);x.fillStyle=pow>.8?'#ff4f5e':'#f5b800';rr(x,16,G+14,100*pow,8,4)}
      if(fx>0){fx-=dt;x.fillStyle='#18256e';x.font='700 26px Fredoka';x.textAlign='center';x.fillText('Na mosca!',W/2,70)}
    });
  },
  arco(){
    const{c,x,pos,pts}=tela();const AX=W/2,AY=H-36;let ang=-Math.PI/2,fl=[],bs=[],fx=[],score=0,vidas=3,prox=400,cd=0,t=0;pts(0);$('hv').textContent=vtx(3);
    const mirar=p=>{ang=Math.max(-Math.PI+.15,Math.min(-.15,Math.atan2(p.y-AY,p.x-AX)))};
    const atira=()=>{if(cd>0)return;cd=13;fl.push({x:AX+Math.cos(ang)*20,y:AY+Math.sin(ang)*20,vx:Math.cos(ang)*10,vy:Math.sin(ang)*10,a:ang})};
    c.addEventListener('pointerdown',e=>{e.preventDefault();mirar(pos(e));atira()});c.addEventListener('pointermove',e=>mirar(pos(e)));
    onKey(e=>{if(e.key==='ArrowLeft')ang=Math.max(-Math.PI+.15,ang-.08);if(e.key==='ArrowRight')ang=Math.min(-.15,ang+.08);if(e.key===' '){e.preventDefault();atira()}});
    const CB=['#ff4f5e','#2340d8','#1fae6a','#8b5cf6','#ef7d22'];
    loop(dt=>{
      t+=dt;cd-=dt;prox-=dt*16.67;
      if(prox<=0){prox=Math.max(330,1000-score*7);const ouro=Math.random()<.1;bs.push({x:rnd(25,W-25),y:H+30,r:ouro?15:rnd(17,22),v:.9+Math.min(2.6,score*.025)+Math.random()*.5,ouro,c:CB[rnd(0,4)],ph:Math.random()*6})}
      for(const b of bs){b.y-=b.v*dt;b.px=b.x+Math.sin(t*.04+b.ph)*10;if(b.y<-b.r-20){b.fora=1;if(!b.ouro){vidas--;$('hv').textContent=vtx(vidas)}}}
      for(const f of fl){f.x+=f.vx*dt;f.y+=f.vy*dt;if(f.x<-20||f.x>W+20||f.y<-20)f.fora=1;
        for(const b of bs){if(!b.fora&&Math.hypot(f.x-b.px,f.y-b.y)<b.r+4){b.fora=1;f.fora=1;const v=b.ouro?3:1;score+=v;pts(score);fx.push({x:b.px,y:b.y,s:'+'+v,v:1});break}}}
      bs=bs.filter(b=>!b.fora);fl=fl.filter(f=>!f.fora);if(vidas<=0){fim(score);return false}
      const gr=x.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#ffd6a0');gr.addColorStop(1,'#bfe6ff');x.fillStyle=gr;x.fillRect(0,0,W,H);
      bs.forEach(b=>{x.strokeStyle='#18256e66';x.lineWidth=1;x.beginPath();x.moveTo(b.px,b.y+b.r);x.lineTo(b.px+Math.sin(t*.1)*3,b.y+b.r+22);x.stroke();
        x.fillStyle=b.ouro?'#f5b800':b.c;x.beginPath();x.ellipse(b.px,b.y,b.r*.88,b.r,0,0,7);x.fill();bola(x,b.px-b.r*.35,b.y-b.r*.4,b.r*.2,'#ffffff99');if(b.ouro){x.strokeStyle='#fff';x.lineWidth=2;x.stroke()}});
      fl.forEach(f=>{x.save();x.translate(f.x,f.y);x.rotate(f.a);x.strokeStyle='#18256e';x.lineWidth=2.5;x.beginPath();x.moveTo(-22,0);x.lineTo(0,0);x.stroke();x.fillStyle='#18256e';x.beginPath();x.moveTo(4,0);x.lineTo(-4,-4);x.lineTo(-4,4);x.fill();x.restore()});
      fx=fx.filter(f=>(f.v-=.03*dt)>0);fx.forEach(f=>{x.globalAlpha=f.v;x.fillStyle='#18256e';x.font='700 24px Fredoka';x.textAlign='center';x.fillText(f.s,f.x,f.y-(1-f.v)*30)});x.globalAlpha=1;
      x.fillStyle='#1fae6a';x.fillRect(0,H-18,W,18);
      x.save();x.translate(AX,AY);x.rotate(ang);x.strokeStyle='#8a5526';x.lineWidth=5;x.beginPath();x.arc(0,0,24,-1.3,1.3);x.stroke();x.strokeStyle='#18256e';x.lineWidth=1.5;x.beginPath();x.moveTo(Math.cos(-1.3)*24,Math.sin(-1.3)*24);x.lineTo(cd>0?-4:-10,0);x.lineTo(Math.cos(1.3)*24,Math.sin(1.3)*24);x.stroke();
      if(cd<=0){x.lineWidth=2.5;x.beginPath();x.moveTo(-10,0);x.lineTo(26,0);x.stroke();x.fillStyle='#18256e';x.beginPath();x.moveTo(30,0);x.lineTo(22,-4);x.lineTo(22,4);x.fill()}x.restore();
    });
  },
  invasores(){
    const{c,x,pos,pts}=tela();const SY=H-56;let sx=180,ti=[],es=[],score=0,vidas=3,prox=500,cd=0,t=0,kd=0,flash=0;pts(0);$('hv').textContent=vtx(3);
    const est=Array.from({length:40},()=>({x:rnd(0,W),y:rnd(0,H),s:Math.random()*1.5+.4}));
    const mv=e=>{sx=Math.max(18,Math.min(W-18,pos(e).x))};
    c.addEventListener('pointerdown',e=>{c.setPointerCapture(e.pointerId);mv(e)});c.addEventListener('pointermove',mv);
    onKey(e=>{if(e.key==='ArrowLeft')kd=-1;if(e.key==='ArrowRight')kd=1});
    const up=()=>kd=0;window.addEventListener('keyup',up);limpa.push(()=>window.removeEventListener('keyup',up));
    loop(dt=>{
      t+=dt;sx=Math.max(18,Math.min(W-18,sx+kd*6*dt));cd-=dt;prox-=dt*16.67;
      if(cd<=0){cd=Math.max(8,16-score*.04);{sfx('tiro');ti.push({x:sx,y:SY-20})}}
      if(prox<=0){prox=Math.max(280,1050-score*8);const g=score>15&&Math.random()<.25;es.push({x:rnd(24,W-24),y:-20,r:g?20:14,hp:g?3:1,g,v:.6+Math.min(2,score*.022)+Math.random()*.4,ph:Math.random()*6})}
      for(const e of es){e.y+=e.v*dt;e.x=Math.max(e.r,Math.min(W-e.r,e.x+Math.sin(t*.04+e.ph)*.9*dt));
        if(Math.hypot(e.x-sx,e.y-SY)<e.r+12){fim(score);return false}
        if(e.y>H+e.r){e.fora=1;vidas--;flash=12;$('hv').textContent=vtx(vidas)}}
      for(const s of ti){s.y-=8*dt;if(s.y<-10)s.fora=1;for(const e of es){if(!e.fora&&Math.abs(s.x-e.x)<e.r&&Math.abs(s.y-e.y)<e.r){s.fora=1;e.hp--;e.hit=5;if(e.hp<=0){e.fora=1;score++;pts(score);sfx('explosao')}else sfx('acerto');break}}}
      es=es.filter(e=>!e.fora);ti=ti.filter(s=>!s.fora);if(vidas<=0){fim(score);return false}
      x.fillStyle=flash>0?'#3a1530':'#14122e';x.fillRect(0,0,W,H);if(flash>0)flash-=dt;
      est.forEach(s=>{s.y+=s.s*.6*dt;if(s.y>H)s.y=0;x.fillStyle=`rgba(255,255,255,${.3+s.s/3})`;x.fillRect(s.x,s.y,s.s,s.s)});
      x.fillStyle='#ff4f5e33';x.fillRect(0,H-6,W,6);
      es.forEach(e=>{const cor=e.hit>0?'#fff':e.g?'#b48cff':'#8be36b';if(e.hit>0)e.hit-=dt;x.strokeStyle=cor;x.lineWidth=2;x.beginPath();x.moveTo(e.x-e.r*.5,e.y-e.r*.7);x.lineTo(e.x-e.r*.8,e.y-e.r*1.2);x.moveTo(e.x+e.r*.5,e.y-e.r*.7);x.lineTo(e.x+e.r*.8,e.y-e.r*1.2);x.stroke();
        x.fillStyle=cor;x.beginPath();x.ellipse(e.x,e.y,e.r,e.r*.8,0,0,7);x.fill();bola(x,e.x-e.r*.35,e.y-e.r*.1,e.r*.2,'#18256e');bola(x,e.x+e.r*.35,e.y-e.r*.1,e.r*.2,'#18256e');
        if(e.g){x.fillStyle='#ffffff99';for(let k=0;k<e.hp;k++)x.fillRect(e.x-9+k*7,e.y+e.r*.35,5,3)}});
      x.fillStyle='#f5b800';ti.forEach(s=>x.fillRect(s.x-2,s.y-8,4,12));
      x.fillStyle='#7fc8ff';x.beginPath();x.moveTo(sx,SY-18);x.lineTo(sx+18,SY+14);x.lineTo(sx-18,SY+14);x.fill();x.fillStyle='#2340d8';x.fillRect(sx-3,SY-24,6,12);bola(x,sx,SY+2,4,'#fff');
    });
  },
  memoria2(){
    clear();$('modal').classList.add('cena-mem');limpa.push(()=>$('modal').classList.remove('cena-mem'));acabou=false;let score=0,nivel=0,tempo=30000,abertas=[],trava=false,deck=[],achados=0;
    stage.innerHTML=`<div class="hud"><span id="pt">0 pares</span><span id="hv"></span></div><div class="bar"><i id="bt" style="width:100%"></i></div><div class="fg" id="fg"></div>`;
    const fg=$('fg');fg.classList.add('mem');
    const fase=()=>{const pares=Math.min(18,3+nivel),ids=embaralha([...Array(FRU.length).keys()]).slice(0,pares);deck=embaralha([...ids,...ids]);achados=0;abertas=[];
      fg.style.gridTemplateColumns=`repeat(${deck.length<=8?3:deck.length<=12?4:deck.length<=20?5:6},minmax(0,1fr))`;$('hv').textContent='Fase '+(nivel+1);
      fg.innerHTML=deck.map((v,i)=>`<button class="mc" data-i="${i}" aria-label="Carta"><span class="cd"><span class="fa ba" style="background-image:url(${VERSO})"></span><span class="fa fr"><img src="${FRU[v][1]}" alt="${FRU[v][0]}" draggable="false"></span></span></button>`).join('');
      const cs=[...fg.querySelectorAll('.mc')];
      cs.forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();const i=+b.dataset.i;if(trava||b.classList.contains('up')||b.classList.contains('done'))return;
        sfx('vira');b.classList.add('up');abertas.push(i);
        if(abertas.length<2)return;
        const[a,c2]=abertas;abertas=[];
        if(deck[a]===deck[c2]){trava=true;later(()=>{[a,c2].forEach(k=>{cs[k].classList.remove('up');cs[k].classList.add('done')});sfx('ponto');trava=false;
            score++;achados++;$('pt').textContent=score+' pares';tempo=Math.min(45000,tempo+2500);
            if(achados*2===deck.length){nivel++;tempo=Math.min(45000,tempo+4000);trava=true;later(()=>{trava=false;fase()},600)}},380)}
        else{trava=true;later(()=>{cs[a].classList.remove('up');cs[c2].classList.remove('up');sfx('vira');later(()=>{trava=false},380)},800)}}));
    };
    fase();
    loop(dt=>{tempo-=dt*16.67*(1+nivel*.06);$('bt').style.width=Math.max(0,tempo/450)+'%';if(tempo<=0){fim(score);return false}});
  },
  trio(){
    clear();acabou=false;const CO=7,RO=8,MAX=30000,N=CO*RO;let g=[],sp=[],score=0,tempo=MAX,sel=null,ocup=false,pend=[],fxs=[],ps=[];
    const modal=$('modal');modal.classList.add('cena-trio');
    for(const k in SPRDC)stage.style.setProperty('--u-'+k,'url('+SPRDC[k]+')');
    limpa.push(()=>{modal.classList.remove('cena-trio');for(const k in SPRDC)stage.style.removeProperty('--u-'+k);stage.style.removeProperty('--u-trbg')});
    const IM=imgsDoces();let pronto=false;Promise.all(Object.values(IM).map(i=>i.decode?i.decode().catch(()=>{}):0)).then(()=>{pronto=true});
    /* fundo desenhado uma vez: céu, nuvens, colinas, rio e algodão-doce */
    {const cv=document.createElement('canvas');cv.width=360;cv.height=720;const b=cv.getContext('2d');
      let q=b.createLinearGradient(0,0,0,720);q.addColorStop(0,'#58b8ff');q.addColorStop(.45,'#b9e6ff');q.addColorStop(1,'#d9f5ff');b.fillStyle=q;b.fillRect(0,0,360,720);
      const nuv=(cx,cy,s)=>{b.fillStyle='#ffffffee';[[0,0,30],[28,-10,26],[-28,-4,22],[54,4,20],[-52,8,18]].forEach(a=>{b.beginPath();b.arc(cx+a[0]*s,cy+a[1]*s,a[2]*s,0,7);b.fill()})};
      nuv(70,70,1);nuv(280,130,.8);nuv(150,230,.6);nuv(310,40,.55);
      const colina=(y,c1,c2,amp,ph)=>{q=b.createLinearGradient(0,y-amp,0,720);q.addColorStop(0,c1);q.addColorStop(1,c2);b.fillStyle=q;b.beginPath();b.moveTo(0,720);for(let x=0;x<=360;x+=10)b.lineTo(x,y+Math.sin(x/70+ph)*amp);b.lineTo(360,720);b.fill()};
      colina(420,'#8fe07a','#4fc46a',24,0);
      b.strokeStyle='#7fd0ff';b.lineWidth=22;b.lineCap='round';b.beginPath();b.moveTo(250,430);b.bezierCurveTo(200,470,330,520,230,570);b.bezierCurveTo(150,610,260,660,180,720);b.stroke();
      b.strokeStyle='#c7ecff';b.lineWidth=7;b.beginPath();b.moveTo(256,430);b.bezierCurveTo(206,470,336,520,236,570);b.stroke();
      colina(520,'#5fd36e','#2fb464',30,2);
      const alg=(x,y,s,col)=>{b.fillStyle='#9a6a4a';b.fillRect(x-3*s,y,6*s,34*s);b.fillStyle=col;[[0,-8,20],[-15,2,16],[15,2,16],[0,8,16]].forEach(a=>{b.beginPath();b.arc(x+a[0]*s,y+a[1]*s,a[2]*s,0,7);b.fill()});b.fillStyle='#ffffff55';b.beginPath();b.arc(x-6*s,y-14*s,6*s,0,7);b.fill()};
      alg(28,430,1.2,'#ff9fc9');alg(330,400,1,'#ffb0d8');alg(70,500,.8,'#ff8fc0');alg(300,540,.9,'#ff9fd0');
      const mar=(x,y,w,h)=>{b.fillStyle='#fff';rr(b,x,y,w,h,8);b.fillStyle='#ffd3e6';rr(b,x+3,y+h*.55,w-6,h*.4,6)};
      mar(300,330,40,34);mar(318,360,34,28);mar(6,350,34,30);
      stage.style.setProperty('--u-trbg','url('+cv.toDataURL('image/jpeg',.85)+')')}
    const HUE=[0,25,50,115,200,270],HF=[65,95,120,190,280,350];
    const gera=()=>{g=[];sp=[];for(let i=0;i<N;i++){g.push(rnd(0,5));sp.push(0)}};
    const row=i=>Math.floor(i/CO),col=i=>i%CO;
    const colorOk=v=>v>=0&&v<=5;
    const matches=()=>{const runs=[];
      for(let r=0;r<RO;r++){let s=0;for(let c2=1;c2<=CO;c2++){const i=r*CO+c2;if(c2<CO&&g[i]===g[i-1]&&colorOk(g[i]))continue;if(c2-s>=3&&colorOk(g[r*CO+s])){const cs=[];for(let k=s;k<c2;k++)cs.push(r*CO+k);runs.push({cs,d:'h',v:g[r*CO+s]})}s=c2}}
      for(let c2=0;c2<CO;c2++){let s=0;for(let r=1;r<=RO;r++){const i=r*CO+c2;if(r<RO&&g[i]===g[i-CO]&&colorOk(g[i]))continue;if(r-s>=3&&colorOk(g[s*CO+c2])){const cs=[];for(let k=s;k<r;k++)cs.push(k*CO+c2);runs.push({cs,d:'v',v:g[s*CO+c2]})}s=r}}
      const sq=[];for(let r=0;r<RO-1;r++)for(let c2=0;c2<CO-1;c2++){const i=r*CO+c2,v=g[i];if(colorOk(v)&&g[i+1]===v&&g[i+CO]===v&&g[i+CO+1]===v)sq.push({cs:[i,i+1,i+CO,i+CO+1],d:'q',v})}
      const all=[...runs,...sq],par=all.map((_,i)=>i),fd=i=>par[i]===i?i:(par[i]=fd(par[i]));
      for(let a=0;a<all.length;a++)for(let b2=a+1;b2<all.length;b2++)if(all[a].v===all[b2].v&&all[a].cs.some(x=>all[b2].cs.includes(x)))par[fd(a)]=fd(b2);
      const gr={};all.forEach((m,i)=>{(gr[fd(i)]=gr[fd(i)]||[]).push(m)});
      return Object.values(gr).map(ms=>{const cells=new Set();ms.forEach(m=>m.cs.forEach(x=>cells.add(x)));
        const hs=ms.filter(m=>m.d==='h'),vs=ms.filter(m=>m.d==='v'),qs=ms.filter(m=>m.d==='q'),mx=Math.max(0,...[...hs,...vs].map(m=>m.cs.length));
        let kind='plain',piv=null;const cands=[...cells];
        if(mx>=5){kind='bomb';const r0=[...hs,...vs].find(m=>m.cs.length>=5);piv=r0.cs[Math.floor(r0.cs.length/2)]}
        else if(hs.length&&vs.length){kind='emb';piv=hs[0].cs.find(x=>vs.some(m=>m.cs.includes(x)))}
        else if(mx===4){kind='lis';const r0=[...hs,...vs].find(m=>m.cs.length===4);piv=r0.cs[1];var dir=r0.d}
        else if(qs.length){kind='fish';piv=qs[0].cs[0]}
        return{cells,kind,piv,v:ms[0].v,cands,dir}})};
    const troca=(a,b)=>{[g[a],g[b]]=[g[b],g[a]];[sp[a],sp[b]]=[sp[b],sp[a]]};
    const viz=(a,b)=>(Math.abs(a-b)===1&&row(a)===row(b))||Math.abs(a-b)===CO;
    const valida=(a,b)=>{if(g[a]===6||g[b]===6)return true;if(sp[a]&&sp[b])return true;troca(a,b);const ok=matches().length>0;troca(a,b);return ok};
    const temJogada=()=>{for(let i=0;i<N;i++)for(const j of[i+1,i+CO]){if((j===i+1&&col(i)===CO-1)||j>=N)continue;if(valida(i,j))return true}return false};
    do gera();while(matches().length||!temJogada());
    stage.innerHTML=`<div class="trbd"><div class="hud"><span id="pt">0 peças</span><span id="hv"></span></div><div class="bar"><i id="bt" style="width:100%"></i></div><div class="trw" id="trw"><div class="fg" id="fg" style="grid-template-columns:repeat(${CO},minmax(0,1fr))"></div><canvas id="fxc"></canvas></div></div>`;
    const fg=$('fg'),wrap=$('trw'),fxc=$('fxc'),X=fxc.getContext('2d');
    const fit=()=>{const r=wrap.getBoundingClientRect();if(fxc.width!==Math.round(r.width)||fxc.height!==Math.round(r.height)){fxc.width=Math.round(r.width);fxc.height=Math.round(r.height)}};
    const ctr=i=>{const b=fg.children[i].getBoundingClientRect(),w=wrap.getBoundingClientRect();return{x:b.left-w.left+b.width/2,y:b.top-w.top+b.height/2,s:b.width}};
    const spark=(x0,y0,n,cs,v)=>{for(let k=0;k<n;k++){const a=Math.random()*7,s=Math.random()*(v||4)+1;ps.push({x:x0,y:y0,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,r:3+Math.random()*5,c:cs[rnd(0,cs.length-1)]})}};
    const cell=(i,pop,fall)=>{const v=g[i];let cl='cd',st='';
      if(v<0)return `<button data-i="${i}" class="t vz"></button>`;
      if(v===6){cl+=' sp bomba'}else if(sp[i]){cl+=' sp '+['','lis','lis v','emb','fish'][sp[i]];st=`--h:${sp[i]===4?HF[v]:HUE[v]}deg`}else st=`--s:var(--u-c${v})`;
      return `<button data-i="${i}" class="t${sel===i?' sel':''}${pop?' pop':''}" aria-label="Doce"><i class="${cl}" style="${st};--f:${fall||0}"></i></button>`};
    let FALL=[];
    const desenha=(marca)=>{fg.innerHTML=g.map((v,i)=>cell(i,marca&&marca.has(i),FALL[i])).join('');FALL=[]};
    const espera=ms=>new Promise(r=>later(r,ms));
    /* expande: calcula tudo que some, com poderes em cadeia, e cria os efeitos */
    const expande=(ini,reter)=>{const S=new Set(),q=[],fl=[];const add=i=>{if(i<0||i>=N||g[i]<0||reter.has(i)||S.has(i))return;S.add(i);if(sp[i]||g[i]===6)q.push(i)};
      ini.forEach(add);reter.forEach(i=>{if(sp[i]||g[i]===6){q.push(i)}});
      while(q.length){const i=q.shift(),r=row(i),c2=col(i),p=ctr(i);
        if(g[i]===6&&!sp[i]){const cs=[0,1,2,3,4,5].filter(v=>g.includes(v)),cv=cs[rnd(0,cs.length-1)];g.forEach((v,k)=>{if(v===cv){add(k);fl.push({t:'bolt',a:i,b:k})}})}
        else if(sp[i]===1){for(let k=0;k<CO;k++)add(r*CO+k);fl.push({t:'beam',a:i,d:'h'})}
        else if(sp[i]===2){for(let k=0;k<RO;k++)add(k*CO+c2);fl.push({t:'beam',a:i,d:'v'})}
        else if(sp[i]===3){for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){const rr2=r+dr,cc=c2+dc;if(rr2>=0&&rr2<RO&&cc>=0&&cc<CO)add(rr2*CO+cc)}fl.push({t:'ring',a:i});pend.push(i)}
        else if(sp[i]===4){const L=[];for(let k=0;k<N;k++)if(g[k]>=0&&!S.has(k)&&!reter.has(k))L.push(k);if(L.length){const k=L[rnd(0,L.length-1)];add(k);fl.push({t:'fish',a:i,b:k})}}}
      return{S,fl}};
    const dispara=fl=>{fit();fl.forEach(f=>{const a=ctr(f.a);
      if(f.t==='beam')fxs.push({t:'beam',x:a.x,y:a.y,s:a.s,d:f.d,l:1,dur:520});
      if(f.t==='ring'){fxs.push({t:'ring',x:a.x,y:a.y,s:a.s,l:1,dur:520});spark(a.x,a.y,18,['#fff3a0','#ffd23a','#ff9ad0','#8fe6ff'],5)}
      if(f.t==='fish'){const b=ctr(f.b);fxs.push({t:'fish',x:a.x,y:a.y,x1:b.x,y1:b.y,s:a.s,l:1,dur:560})}
      if(f.t==='bolt'){const b=ctr(f.b);fxs.push({t:'bolt',x:a.x,y:a.y,x1:b.x,y1:b.y,s:a.s,l:1,dur:520})}})};
    const aplica=async(S,fl,novos)=>{
      desenha(S);if(fl.length)dispara(fl);else{fit();S.forEach(i=>{const p=ctr(i);spark(p.x,p.y,3,['#fff','#ffe8a0'],3)})}
      await espera(fl.length?520:240);
      score+=S.size;$('pt').textContent=score+' peças';tempo=Math.min(MAX,tempo+S.size*420);
      S.forEach(i=>{g[i]=-1;sp[i]=0});
      novos.forEach(n=>{g[n.i]=n.v;sp[n.i]=n.s});
      FALL=Array(N).fill(0);
      for(let c2=0;c2<CO;c2++){const it=[];for(let r=RO-1;r>=0;r--){const i=r*CO+c2;if(g[i]>=0)it.push({v:g[i],s:sp[i],r})}
        let nw=RO-it.length;for(let r=RO-1,k=0;r>=0;r--,k++){const i=r*CO+c2;if(k<it.length){g[i]=it[k].v;sp[i]=it[k].s;FALL[i]=r-it[k].r}else{g[i]=rnd(0,5);sp[i]=0;FALL[i]=nw}}}
      desenha();await espera(260)};
    const resolve=async(pref)=>{let guard=0;
      while(guard++<60){
        let ms=matches();
        if(!ms.length){if(!pend.length)break;
          const S=new Set(),ini=[];const ps2=pend.splice(0);const fl=[];
          ps2.forEach(i=>{const r=row(i),c2=col(i);for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){const r2=r+dr,c3=c2+dc;if(r2>=0&&r2<RO&&c3>=0&&c3<CO)ini.push(r2*CO+c3)}fl.push({t:'ring',a:i})});
          const ex=expande(ini,new Set());ex.fl.forEach(f=>fl.push(f));await aplica(ex.S,fl,[]);continue}
        const reter=new Set(),novos=[],ini=[];
        ms.forEach(m=>{m.cells.forEach(i=>ini.push(i));if(m.kind!=='plain'){let p=m.piv;const pf=(pref||[]).find(x=>m.cells.has(x));if(pf!==undefined)p=pf;reter.add(p);
          const mk={bomb:{v:6,s:0},emb:{v:m.v,s:3},lis:{v:m.v,s:m.dir==='h'?1:2},fish:{v:m.v,s:4}}[m.kind];novos.push({i:p,v:mk.v,s:mk.s})}});
        pref=null;
        // poderes que estavam dentro da combinação disparam; o pivô é substituído
        const trg=ini.filter(i=>!reter.has(i));
        const ex=expande(trg,reter);
        // pivô antigo com poder: dispara também
        await aplica(ex.S,ex.fl,novos)}
      if(!temJogada()){$('hv').textContent='Embaralhando…';do gera();while(matches().length||!temJogada());desenha();later(()=>$('hv').textContent='',800)}};
    const tenta=async(a,b)=>{if(ocup)return;ocup=true;sel=null;
      if(!valida(a,b)){desenha();fg.children[a].classList.add('no');fg.children[b].classList.add('no');await espera(260);desenha();ocup=false;return}
      // animação de troca
      const A=fg.children[a].firstChild,B=fg.children[b].firstChild,ra=fg.children[a].getBoundingClientRect(),rb=fg.children[b].getBoundingClientRect();
      A.style.transition=B.style.transition='transform .14s';A.style.transform=`translate(${rb.left-ra.left}px,${rb.top-ra.top}px)`;B.style.transform=`translate(${ra.left-rb.left}px,${ra.top-rb.top}px)`;
      await espera(150);troca(a,b);
      if(g[a]===6||g[b]===6){const bb=g[b]===6?b:a,ou=bb===b?a:b;const alvos=g[ou]===6||g[bb]===6&&g[ou]===6?[...Array(N).keys()]:[...Array(N).keys()].filter(k=>g[k]===g[ou]);
        const S0=new Set([bb,...alvos]);const fl=alvos.map(k=>({t:'bolt',a:bb,b:k}));const ex=expande([...S0],new Set());ex.fl.forEach(f=>fl.push(f));await aplica(ex.S,fl,[])}
      else if(sp[a]&&sp[b]){const ex=expande([a,b],new Set());await aplica(ex.S,ex.fl,[])}
      await resolve([b,a]);ocup=false};
    let p0=null;
    const cs=()=>fg.children[0].getBoundingClientRect().width||48;
    const solta=()=>{if(p0&&p0.el)p0.el.style.transform=''};
    fg.addEventListener('pointerdown',e=>{const b=e.target.closest('button');if(!b||ocup||b.classList.contains('vz'))return;e.preventDefault();try{fg.setPointerCapture(e.pointerId)}catch(_){}p0={i:+b.dataset.i,x:e.clientX,y:e.clientY,el:b.firstChild,mov:0}});
    fg.addEventListener('pointermove',e=>{if(!p0||ocup)return;const dx=e.clientX-p0.x,dy=e.clientY-p0.y,s=cs(),ax=Math.abs(dx),ay=Math.abs(dy);
      if(Math.max(ax,ay)>6)p0.mov=1;
      const h2=ax>=ay,i=p0.i;let j=-1;
      if(h2){if(dx>0&&col(i)<CO-1)j=i+1;if(dx<0&&col(i)>0)j=i-1}else{if(dy>0&&row(i)<RO-1)j=i+CO;if(dy<0&&row(i)>0)j=i-CO}
      const m=Math.min(s*.9,Math.max(ax,ay));if(p0.el)p0.el.style.transform=j<0?'':(h2?`translate(${Math.sign(dx)*m}px,0)`:`translate(0,${Math.sign(dy)*m}px)`);
      if(j>=0&&Math.max(ax,ay)>s*.38){solta();p0=null;tenta(i,j)}});
    const fim2=e=>{if(!p0)return;const{i,mov}=p0;solta();p0=null;if(ocup||mov)return;
      if(sel===null){sel=i;desenha()}else if(sel===i){sel=null;desenha()}else if(viz(sel,i))tenta(sel,i);else{sel=i;desenha()}};
    fg.addEventListener('pointerup',fim2);fg.addEventListener('pointercancel',()=>{solta();p0=null});
    desenha();
    const star=(x0,y0,r)=>{X.beginPath();for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,rr2=k%2?r*.45:r;X.lineTo(x0+Math.cos(a)*rr2,y0+Math.sin(a)*rr2)}X.closePath();X.fill()};
    loop(dt=>{
      if(!ocup&&pronto)tempo-=dt*16.67*(1+score/500);$('bt').style.width=Math.max(0,tempo/MAX*100)+'%';if(tempo<=0){fim(score);return false}
      if(!fxs.length&&!ps.length){if(X.__sujo){X.clearRect(0,0,fxc.width,fxc.height);X.__sujo=0}return}
      X.__sujo=1;X.clearRect(0,0,fxc.width,fxc.height);const cw=fxc.width,ch=fxc.height;
      fxs=fxs.filter(f=>f.l>0);
      fxs.forEach(f=>{f.l-=dt*16.67/f.dur;const k=Math.max(0,f.l),p=1-k;X.save();
        if(f.t==='beam'){const th=f.s*(.25+.55*Math.sin(Math.PI*Math.min(1,p*1.2)));X.globalAlpha=Math.min(1,k*2);X.shadowColor='#fff2a0';X.shadowBlur=22;
          const g2=f.d==='h'?X.createLinearGradient(0,f.y-th,0,f.y+th):X.createLinearGradient(f.x-th,0,f.x+th,0);g2.addColorStop(0,'rgba(255,210,80,0)');g2.addColorStop(.4,'#fff7c0');g2.addColorStop(.5,'#fff');g2.addColorStop(.6,'#fff7c0');g2.addColorStop(1,'rgba(255,210,80,0)');X.fillStyle=g2;
          if(f.d==='h')X.fillRect(0,f.y-th,cw,th*2);else X.fillRect(f.x-th,0,th*2,ch);
          if(Math.random()<.9){const t2=Math.random();ps.push(f.d==='h'?{x:t2*cw,y:f.y,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*3,l:.8,r:4,c:'#fff6b0'}:{x:f.x,y:t2*ch,vx:(Math.random()-.5)*3,vy:(Math.random()-.5)*2,l:.8,r:4,c:'#fff6b0'})}}
        if(f.t==='ring'){const R=f.s*(.4+p*2.4);X.globalAlpha=Math.min(1,k*1.6);const g2=X.createRadialGradient(f.x,f.y,R*.2,f.x,f.y,R);g2.addColorStop(0,'rgba(255,255,220,.9)');g2.addColorStop(.6,'rgba(255,170,220,.45)');g2.addColorStop(1,'rgba(255,150,220,0)');X.fillStyle=g2;X.beginPath();X.arc(f.x,f.y,R,0,7);X.fill();X.strokeStyle='#ffe27a';X.lineWidth=5*k+1;X.beginPath();X.arc(f.x,f.y,R*.85,0,7);X.stroke()}
        if(f.t==='fish'){const t2=Math.min(1,p*1.25),xx=f.x+(f.x1-f.x)*t2,yy=f.y+(f.y1-f.y)*t2-Math.sin(Math.PI*t2)*50,ang=Math.atan2(f.y1-f.y-Math.cos(Math.PI*t2)*50*Math.PI*.0,f.x1-f.x);
          for(let s=0;s<2;s++)ps.push({x:xx,y:yy,vx:(Math.random()-.5),vy:(Math.random()-.5),l:.9,r:3+Math.random()*4,c:['#9fe6ff','#fff','#ffd7f2'][rnd(0,2)]});
          X.translate(xx,yy);X.rotate(ang);if(f.x1<f.x){X.scale(1,-1)}const w=f.s*1.0,im=IM.fish,h=w*im.naturalHeight/im.naturalWidth;X.drawImage(im,-w/2,-h/2,w,h)}
        if(f.t==='bolt'){X.globalAlpha=Math.min(1,k*2);X.strokeStyle='#e8fbff';X.shadowColor='#4fd2ff';X.shadowBlur=14;X.lineWidth=2.5;X.beginPath();X.moveTo(f.x,f.y);const n=5;for(let s=1;s<n;s++){const t2=s/n;X.lineTo(f.x+(f.x1-f.x)*t2+(Math.random()-.5)*16,f.y+(f.y1-f.y)*t2+(Math.random()-.5)*16)}X.lineTo(f.x1,f.y1);X.stroke();if(k>.7){X.fillStyle='#fff';X.beginPath();X.arc(f.x1,f.y1,f.s*.35*k,0,7);X.fill()}}
        X.restore()});
      ps=ps.filter(p=>p.l>0);ps.forEach(p=>{p.l-=dt*.03;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=.08*dt;X.globalAlpha=Math.max(0,p.l);X.fillStyle=p.c;star(p.x,p.y,p.r)});X.globalAlpha=1});
  },
  acheopar(){
    clear();acabou=false;let score=0,lim=9000,t0=0,dup=-1,trava=false;const modal=$('modal');modal.classList.add('cena-ache');limpa.push(()=>modal.classList.remove('cena-ache'));
    stage.innerHTML=`<div class="acbd"><div class="achud"><span id="pt">0 pares</span><span id="hv"></span></div><div class="acbar"><i id="bt" style="width:100%"></i></div><div class="mesa"><div class="fg" id="fg"></div><b class="pe e1"></b><b class="pe e2"></b></div><div class="acfx" id="acfx"></div></div>`;
    const fg=$('fg'),fx=$('acfx'),NA=SPRAC.length;
    const confete=(el)=>{const r=el.getBoundingClientRect(),b=fx.getBoundingClientRect(),cx=r.left+r.width/2-b.left,cy=r.top+r.height/2-b.top,cor=['#ff5fa8','#ffd23a','#7be05a','#6db8ff','#b07cff','#fff'];
      for(let k=0;k<12;k++){const p=document.createElement('i'),a=k/12*6.283+Math.random()*.4,d=34+Math.random()*34;p.textContent=k%3?'●':'★';p.style.cssText=`left:${cx}px;top:${cy}px;color:${cor[k%6]};--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d}px`;fx.appendChild(p);setTimeout(()=>p.remove(),700)}};
    const rodada=()=>{const[n,co]=score<4?[9,3]:score<10?[16,4]:score<20?[25,5]:[30,5];
      const ids=embaralha([...Array(NA).keys()]).slice(0,n-1);dup=ids[rnd(0,n-2)];const cs=embaralha([...ids,dup]);
      fg.style.gridTemplateColumns=`repeat(${co},minmax(0,1fr))`;fg.innerHTML=cs.map(v=>`<button data-v="${v}" aria-label="Figura"><img src="${SPRAC[v]}" alt="" draggable="false"></button>`).join('');
      fg.querySelectorAll('button').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(trava)return;trava=true;
        if(+b.dataset.v===dup){fg.querySelectorAll(`[data-v="${dup}"]`).forEach(k=>{k.classList.add('ok');confete(k)});score++;$('pt').textContent=score+' pares';lim=Math.max(3000,lim*.95);later(()=>{trava=false;rodada()},450)}
        else{b.classList.add('no');fg.querySelectorAll(`[data-v="${dup}"]`).forEach(k=>k.classList.add('sel'));later(()=>fim(score),1100)}}));
      t0=performance.now();
    };
    rodada();
    loop(()=>{if(trava)return;const r=1-(performance.now()-t0)/lim;$('bt').style.width=Math.max(4,r*100)+'%';$('hv').textContent='Tempo: '+Math.max(0,Math.ceil(r*lim/1000))+'s';if(r<=0){trava=true;fg.querySelectorAll(`[data-v="${dup}"]`).forEach(k=>k.classList.add('sel'));later(()=>fim(score),1100);return false}});
  },
  nave(){
    const{c,x,pos,pts}=tela();let sy=H-62,ty=sy,kdy=0;const D=Math.min(2,window.devicePixelRatio||1);
    const I=imgsNave();
    let sx=W/2,tx=W/2,kd=0,t=0,score=0,morto=false;
    let rochas=[],naves=[],tiros=[],balas=[],itens=[],fx=[],estr=[];
    let nivelTiro=1,velT=0,escT=0,cd=0,pRocha=500,pNave=4200,semItem=0;
    /* fundo: galáxia em espiral desenhada uma vez */
    const bg=document.createElement('canvas');bg.width=W*D;bg.height=H*D;const b=bg.getContext('2d');b.scale(D,D);
    {const g=b.createLinearGradient(0,0,0,H);g.addColorStop(0,'#070620');g.addColorStop(.55,'#0b0a2c');g.addColorStop(1,'#04041a');b.fillStyle=g;b.fillRect(0,0,W,H);
     const neb=(cx,cy,r,col)=>{const g2=b.createRadialGradient(cx,cy,0,cx,cy,r);g2.addColorStop(0,col);g2.addColorStop(1,'rgba(0,0,0,0)');b.fillStyle=g2;b.fillRect(cx-r,cy-r,r*2,r*2)};
     neb(W*.78,H*.2,110,'rgba(70,130,230,.35)');neb(W*.2,H*.78,120,'rgba(120,70,200,.30)');neb(W*.85,H*.85,90,'rgba(60,150,220,.25)');
     const cx=W*.5,cy=H*.4;b.save();b.translate(cx,cy);b.rotate(-.5);b.scale(1,.72);
     for(let arm=0;arm<2;arm++)for(let i=0;i<900;i++){const a=i*.011+arm*Math.PI,r=8+i*.2,j=(Math.random()-.5)*(10+i*.05);
       b.fillStyle=`rgba(${140+Math.random()*60|0},${110+Math.random()*50|0},255,${.05+Math.random()*.16})`;b.beginPath();b.arc(Math.cos(a)*r+j,Math.sin(a)*r+j,.7+Math.random()*1.8,0,7);b.fill()}
     b.restore();neb(cx,cy,60,'rgba(230,210,255,.55)');neb(cx,cy,26,'rgba(255,255,255,.7)');
     for(let i=0;i<110;i++){b.fillStyle=`rgba(255,255,255,${.25+Math.random()*.6})`;b.beginPath();b.arc(Math.random()*W,Math.random()*H,Math.random()*1.1+.3,0,7);b.fill()}}
    for(let i=0;i<40;i++)estr.push({x:rnd(0,W),y:rnd(0,H),s:Math.random()*1.6+.5,az:Math.random()<.4});
    pts(0);
    let down=false,rel=false,ox=0,oy=0;
    const cl=(a,m,M)=>Math.max(m,Math.min(M,a));
    const mv=e=>{const q=pos(e);if(rel){tx=cl(q.x+ox,22,W-22);ty=cl(q.y+oy,60,H-32)}else{tx=cl(q.x,22,W-22);ty=cl(q.y-(e.pointerType==='touch'?48:0),60,H-32)}};
    c.addEventListener('pointerdown',e=>{c.setPointerCapture(e.pointerId);down=true;const q=pos(e);rel=Math.hypot(q.x-sx,q.y-sy)<75;if(rel){ox=sx-q.x;oy=sy-q.y}mv(e)});
    c.addEventListener('pointermove',mv);
    const solta=()=>{down=false;rel=false};c.addEventListener('pointerup',solta);c.addEventListener('pointercancel',solta);
    onKey(e=>{if(e.key==='ArrowLeft')kd=-1;if(e.key==='ArrowRight')kd=1;if(e.key==='ArrowUp')kdy=-1;if(e.key==='ArrowDown')kdy=1});
    const up=()=>{kd=0;kdy=0};window.addEventListener('keyup',up);limpa.push(()=>window.removeEventListener('keyup',up));
    const boom=(px,py,r,cores)=>{const n=Math.round(8+r*.6);for(let i=0;i<n;i++){const a=Math.random()*7,v=Math.random()*3.2+.6;fx.push({x:px,y:py,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,r:Math.random()*r*.28+2,c:cores[rnd(0,cores.length-1)]})}};
    const mais=n=>{score+=n;pts(score)};
    const soltaItem=(px,py,forca)=>{if(!forca&&(Math.random()>.15||itens.length>=2))return;const r=Math.random();itens.push({x:Math.max(22,Math.min(W-22,px)),y:py,tipo:r<.4?'tiro':r<.7?'vel':'esc',ph:Math.random()*6});semItem=0};
    const poligono=()=>Array.from({length:10},()=>.78+Math.random()*.3);
    const novaRocha=()=>{const q=Math.random(),sec=t/60;let r,hp;if(q<.55){r=rnd(12,17);hp=1}else if(q<.88||sec<18){r=rnd(19,25);hp=2}else{r=rnd(28,34);hp=3}
      rochas.push({x:rnd(r,W-r),y:-r-4,r,hp,max:hp,vy:1+Math.random()*.9+Math.min(1.6,sec*.012),vx:(Math.random()-.5)*(.5+Math.min(1,sec*.01)),a:0,va:(Math.random()-.5)*.06,f:poligono(),gray:Math.random()<.4,hit:0})};
    const TIPOS={scout:{img:'scout',w:32,r:12,hp:1,pt:3,vy:1.2,atira:0},rapida:{img:'rapida',w:38,r:13,hp:1,pt:3,vy:2.5,atira:0},med1:{img:'med1',w:52,r:19,hp:2,pt:5,vy:.75,atira:1},med2:{img:'med2',w:54,r:20,hp:3,pt:8,vy:.6,atira:2}};
    const novaNave=()=>{const sec=t/60,q=Math.random();const k=sec>24&&q<.28?'med2':sec>10&&q<.5?'med1':q<.7?'scout':'rapida';const T=TIPOS[k];
      naves.push({k,T,x:rnd(30,W-30),y:-24,r:T.r,hp:T.hp,vy:T.vy+Math.min(.7,sec*.006),ph:Math.random()*6,at:rnd(50,110),hit:0})};
    const morre=()=>{if(morto)return;morto=true;sfx('explosao');boom(sx,sy,30,['#fff','#ffd23f','#ff7a3d','#7fe3ff']);acabou=true;later(()=>{acabou=false;fim(score)},800)};
    const desenhaSpr=(im,px,py,w,flash)=>{if(!im||!im.complete||!im.naturalWidth)return false;const h=w*im.naturalHeight/im.naturalWidth;x.drawImage(im,px-w/2,py-h/2,w,h);
      if(flash>0){x.globalCompositeOperation='lighter';x.globalAlpha=.7;x.drawImage(im,px-w/2,py-h/2,w,h);x.globalAlpha=1;x.globalCompositeOperation='source-over'}return true};
    loop(dt=>{
      t+=dt;const sec=t/60;
      if(!morto){
        if(kd)tx=Math.max(22,Math.min(W-22,sx+kd*60));if(kdy)ty=Math.max(60,Math.min(H-32,sy+kdy*60));
        const dx=tx-sx,dy=ty-sy,dd=Math.hypot(dx,dy),f=1-Math.pow(1-(velT>0?.55:.38),Math.max(.1,dt)),pass=Math.min(dd,Math.max(dd*f,.01),(velT>0?40:30)*Math.max(.1,dt));if(down&&(rel||dd<45)){sx=tx;sy=ty}else if(dd>0){sx+=dx/dd*pass;sy+=dy/dd*pass}
        if(velT>0)velT-=dt;if(escT>0)escT-=dt;
        cd-=dt;if(cd<=0){cd=velT>0?7:12;let bx=[[0,0]];if(nivelTiro===2)bx=[[-8,0],[8,0]];if(nivelTiro>=3)bx=[[-10,-.9],[0,0],[10,.9]];sfx('tiro');bx.forEach(([ox,vx])=>tiros.push({x:sx+ox,y:sy-20,vx}))}
        pRocha-=dt*16.67;if(pRocha<=0){pRocha=Math.max(380,1150-sec*9);novaRocha()}
        if(sec>4){pNave-=dt*16.67;if(pNave<=0){pNave=Math.max(850,2600-sec*22);novaNave()}}
        semItem+=dt/60;if(semItem>16&&itens.length===0)soltaItem(rnd(40,W-40),-14,true);
      }
      for(const s of tiros){s.y-=9.5*dt;s.x+=s.vx*dt;if(s.y<-20||s.x<-10||s.x>W+10)s.fora=1}
      for(const r of rochas){r.y+=r.vy*dt;r.x+=r.vx*dt;r.a+=r.va*dt;if(r.hit>0)r.hit-=dt;if(r.y>H+r.r+10||r.x<-r.r-30||r.x>W+r.r+30)r.fora=1}
      for(const n of naves){n.y+=n.vy*dt;if(n.k==='scout')n.x=Math.max(n.r,Math.min(W-n.r,n.x+Math.sin(t*.05+n.ph)*1.6*dt));else if(n.k==='rapida'&&!morto)n.x+=Math.max(-.6,Math.min(.6,(sx-n.x)*.02))*dt;else n.x=Math.max(n.r,Math.min(W-n.r,n.x+Math.sin(t*.03+n.ph)*.8*dt));
        if(n.hit>0)n.hit-=dt;if(n.y>H+40)n.fora=1;
        if(n.T.atira){n.at-=dt;if(n.at<=0&&n.y>10&&n.y<H*.62&&!morto){n.at=rnd(75,135)-Math.min(30,sec*.4);
          if(n.T.atira===2){balas.push({x:n.x-10,y:n.y+18,vx:-.4,vy:3.1},{x:n.x+10,y:n.y+18,vx:.4,vy:3.1})}else balas.push({x:n.x,y:n.y+16,vx:0,vy:3.2})}}}
      for(const q of balas){q.y+=q.vy*dt;q.x+=q.vx*dt;if(q.y>H+10||q.x<-10||q.x>W+10)q.fora=1}
      for(const i of itens){i.y+=1.15*dt;i.x+=Math.sin(t*.06+i.ph)*.35*dt;if(i.y>H+24)i.fora=1}
      for(const s of tiros){if(s.fora)continue;
        for(const r of rochas){if(r.fora||s.fora)continue;if(Math.hypot(s.x-r.x,s.y-r.y)<r.r+3){s.fora=1;r.hp--;r.hit=4;sfx(r.hp<=0?'explosao':'acerto');if(r.hp<=0){r.fora=1;boom(r.x,r.y,r.r,r.gray?['#aab4c6','#7d8798','#fff']:['#c9a07a','#8b6a52','#ffd23f']);mais(r.max);soltaItem(r.x,r.y)}}}
        for(const n of naves){if(n.fora||s.fora)continue;if(Math.abs(s.x-n.x)<n.r+2&&Math.abs(s.y-n.y)<n.r+2){s.fora=1;n.hp--;n.hit=4;sfx(n.hp<=0?'explosao':'acerto');if(n.hp<=0){n.fora=1;boom(n.x,n.y,n.r+6,['#fff','#ffd23f','#ff7a3d','#ff4f5e']);mais(n.T.pt);soltaItem(n.x,n.y)}}}}
      if(!morto){
        for(const r of rochas){if(!r.fora&&Math.hypot(r.x-sx,r.y-sy)<r.r+11){if(escT>0){sfx('explosao');r.fora=1;boom(r.x,r.y,r.r,['#7fe3ff','#fff','#c9a07a']);mais(r.max)}else{morre();break}}}
        if(!morto)for(const n of naves){if(!n.fora&&Math.hypot(n.x-sx,n.y-sy)<n.r+11){if(escT>0){sfx('explosao');n.fora=1;boom(n.x,n.y,n.r+6,['#7fe3ff','#fff','#ffd23f']);mais(n.T.pt)}else{morre();break}}}
        if(!morto)for(const q of balas){if(!q.fora&&Math.hypot(q.x-sx,q.y-sy)<12){q.fora=1;if(escT>0)boom(q.x,q.y,6,['#7fe3ff','#fff']);else{morre();break}}}
        for(const i of itens){if(!i.fora&&Math.hypot(i.x-sx,i.y-sy)<28){i.fora=1;boom(i.x,i.y,10,['#fff','#ffd23f']);sfx(i.tipo==='esc'?'escudo':'item');
          if(i.tipo==='tiro'){if(nivelTiro<3)nivelTiro++;else mais(3)}else if(i.tipo==='vel')velT=600;else escT=480}}
      }
      rochas=rochas.filter(r=>!r.fora);naves=naves.filter(n=>!n.fora);tiros=tiros.filter(s=>!s.fora);balas=balas.filter(q=>!q.fora);itens=itens.filter(i=>!i.fora);
      for(const f of fx){f.x+=f.vx*dt;f.y+=f.vy*dt;f.vx*=.97;f.vy*=.97;f.l-=.03*dt}fx=fx.filter(f=>f.l>0);
      /* desenho */
      x.drawImage(bg,0,0,W,H);
      for(const s of estr){s.y+=s.s*.9*dt;if(s.y>H){s.y=-2;s.x=rnd(0,W)}x.fillStyle=s.az?`rgba(150,210,255,${.3+s.s/3})`:`rgba(255,255,255,${.3+s.s/3})`;x.fillRect(s.x,s.y,s.s,s.s*(1+s.s*.8))}
      for(const r of rochas){x.save();x.translate(r.x,r.y);x.rotate(r.a);
        const g=x.createRadialGradient(-r.r*.35,-r.r*.35,r.r*.1,0,0,r.r*1.1);if(r.gray){g.addColorStop(0,'#b9c3d4');g.addColorStop(1,'#59647a')}else{g.addColorStop(0,'#b88e68');g.addColorStop(1,'#5e4332')}
        x.fillStyle=r.hit>0?'#fff':g;x.strokeStyle=r.gray?'#3b4457':'#3d2a1e';x.lineWidth=2;x.beginPath();r.f.forEach((m,k)=>{const a=k/r.f.length*Math.PI*2;x.lineTo(Math.cos(a)*r.r*m,Math.sin(a)*r.r*m)});x.closePath();x.fill();x.stroke();
        if(r.hit<=0){x.fillStyle=r.gray?'#4a5469':'#4a3424';x.globalAlpha=.55;x.beginPath();x.arc(-r.r*.28,-r.r*.15,r.r*.2,0,7);x.arc(r.r*.3,r.r*.28,r.r*.14,0,7);x.arc(r.r*.05,r.r*.5,r.r*.1,0,7);x.fill();x.globalAlpha=1}
        x.restore()}
      for(const n of naves){if(!desenhaSpr(I[n.T.img],n.x,n.y,n.T.w,n.hit)){x.fillStyle=n.hit>0?'#fff':'#ff6b5a';x.beginPath();x.moveTo(n.x,n.y+n.r);x.lineTo(n.x+n.r,n.y-n.r);x.lineTo(n.x-n.r,n.y-n.r);x.fill()}}
      x.globalCompositeOperation='lighter';
      for(const q of balas){const g=x.createRadialGradient(q.x,q.y,0,q.x,q.y,9);g.addColorStop(0,'rgba(255,255,255,.95)');g.addColorStop(.35,'rgba(255,90,90,.8)');g.addColorStop(1,'rgba(255,40,40,0)');x.fillStyle=g;x.fillRect(q.x-9,q.y-14,18,28)}
      for(const s of tiros){x.fillStyle='rgba(80,190,255,.28)';x.beginPath();x.roundRect(s.x-4.5,s.y-13,9,28,5);x.fill();x.fillStyle='#bff0ff';x.beginPath();x.roundRect(s.x-2,s.y-11,4,22,2);x.fill()}
      for(const f of fx){x.globalAlpha=Math.max(0,f.l);x.fillStyle=f.c;x.beginPath();x.arc(f.x,f.y,f.r*f.l+.5,0,7);x.fill()}x.globalAlpha=1;x.globalCompositeOperation='source-over';
      for(const i of itens){const cor=i.tipo==='tiro'?'#ff9a3d':i.tipo==='vel'?'#3fd47a':'#3dc8ff',p=1+Math.sin(t*.12)*.08;
        const g=x.createRadialGradient(i.x,i.y,4,i.x,i.y,28);g.addColorStop(0,cor+'aa');g.addColorStop(1,cor+'00');x.fillStyle=g;x.fillRect(i.x-28,i.y-28,56,56);
        x.fillStyle='#0b0a2ccc';x.strokeStyle=cor;x.lineWidth=3;x.beginPath();x.arc(i.x,i.y,17*p,0,7);x.fill();x.stroke();
        const im=I[i.tipo];if(!desenhaSpr(im,i.x,i.y,i.tipo==='tiro'?24:22,0)){x.fillStyle=cor;x.fillRect(i.x-5,i.y-5,10,10)}}
      if(!morto){
        const fl=(velT>0?16:10)+Math.sin(t*.9)*4;x.globalCompositeOperation='lighter';
        [-8,8].forEach(o=>{const g=x.createLinearGradient(0,sy+16,0,sy+16+fl*1.6);g.addColorStop(0,'rgba(190,240,255,.95)');g.addColorStop(.4,'rgba(60,160,255,.7)');g.addColorStop(1,'rgba(60,160,255,0)');x.fillStyle=g;x.beginPath();x.moveTo(sx+o-4,sy+16);x.quadraticCurveTo(sx+o,sy+16+fl*1.9,sx+o+4,sy+16);x.fill()});x.globalCompositeOperation='source-over';
        if(!desenhaSpr(I.jogador,sx,sy,48,0)){x.fillStyle='#8fa6d8';x.beginPath();x.moveTo(sx,sy-22);x.lineTo(sx+18,sy+16);x.lineTo(sx-18,sy+16);x.fill()}
        if(escT>0&&(escT>100||Math.floor(t/5)%2)){const p=1+Math.sin(t*.2)*.05,g2=x.createRadialGradient(sx,sy,10,sx,sy,32*p);g2.addColorStop(0,'rgba(120,220,255,.05)');g2.addColorStop(.8,'rgba(120,220,255,.28)');g2.addColorStop(1,'rgba(180,240,255,.85)');x.fillStyle=g2;x.beginPath();x.arc(sx,sy,32*p,0,7);x.fill()}
      }
      x.font='800 12px Nunito,sans-serif';x.textBaseline='middle';let py=14;
      x.fillStyle='#ffffffcc';x.fillText('Tiro',10,py);for(let k=0;k<3;k++){x.fillStyle=k<nivelTiro?'#ff9a3d':'#ffffff33';x.beginPath();x.arc(46+k*12,py,4,0,7);x.fill()}
      if(velT>0){py+=18;x.fillStyle='#3fd47a';x.beginPath();x.arc(15,py,6,0,7);x.fill();x.fillStyle='#fff';x.fillText('Rápido '+Math.ceil(velT/60)+'s',26,py)}
      if(escT>0){py+=18;x.fillStyle='#3dc8ff';x.beginPath();x.arc(15,py,6,0,7);x.fill();x.fillStyle='#fff';x.fillText('Escudo '+Math.ceil(escT/60)+'s',26,py)}
    });
  },
  paredao(){
    const{c,x,pos,pts}=tela();const T=imgsParedao();const S=Math.max(W/768,H/1536),PY=H-218*S,R=9;
    let px=180,pw0=92,pw=92,sp=4.6,score=0,comecou=false,kd=0,hit=null,fr=[],pu=[],tiros=[],balls=[],br=[],onda=0,shake=0,msg=null,tF=0,tW=0,tL=0,tLs=0,escudo=false;
    const PAL=[['#ff6a5a','#c41818'],['#ffa23a','#e05a00'],['#ffd23a','#f08a00'],['#5ee03a','#1f9a14'],['#52b6ff','#1565e0'],['#c77bff','#7a2ad0']];
    const PUS={L:['#2fe0ff','LARGO'],M:['#ff5ad0','MULTIBOLA'],F:['#ff8a1a','FOGO'],T:['#ffe23a','LASER'],E:['#5ee03a','ESCUDO']};
    const BC=7,BW=(W-16)/BC,BHh=20,BY=66;
    const novaBola=(vx,vy,x0,y0)=>({x:x0,y:y0,vx,vy,tr:[]});
    balls.push(novaBola(0,0,px,PY-R-1));
    const muro=()=>{br=[];onda++;const R6=6;const pats=[()=>1,(r,k)=>(r+k)%2===0,(r,k)=>k>=r&&k<BC-r||r>=4,(r,k)=>!(r>0&&r<4&&k>1&&k<BC-2),(r,k)=>r%2===0,(r,k)=>Math.random()<.75,(r,k)=>Math.abs(k-3)<=Math.min(3,r+1)];
      const f=pats[(onda-1)%pats.length];
      for(let r=0;r<R6;r++)for(let k=0;k<BC;k++){if(!f(r,k))continue;const q=Math.random();let t='n',hp=1;
        const pd=Math.min(.28,.08+onda*.03);
        if(q<pd){t='d';hp=2}else if(q<pd+.13){t='b'}else if(q<pd+.19){t='x'}
        br.push({x:8+k*BW,y:BY+r*(BHh+3),w:BW-3,h:BHh,r:r%6,t,hp})}};
    muro();
    const pop=(n,cx,cy,col,sz)=>{for(let z=0;z<n;z++)fr.push({x:cx,y:cy,vx:(Math.random()-.5)*6,vy:-Math.random()*4-1,r:sz*(.6+Math.random()),c:col,t:34})};
    const quebra=(k,forte)=>{ // dano em tijolo
      k.hp-=forte?9:1;if(k.hp>0){pop(3,k.x+k.w/2,k.y+k.h/2,'#cfd6e6',2.5);return}
      const q=br.indexOf(k);if(q<0)return;br.splice(q,1);pop(9,k.x+k.w/2,k.y+k.h/2,k.t==='d'?'#aab3c8':PAL[k.r][0],4);
      if(k.t==='b'){const kk=Object.keys(PUS);const t=kk[Math.floor(Math.random()*kk.length)];pu.push({k:t,x:k.x+k.w/2,y:k.y+k.h/2,vy:1.8})}
      if(k.t==='x'){shake=10;pop(22,k.x+k.w/2,k.y+k.h/2,'#ffb02a',5);fr.push({ring:1,x:k.x+k.w/2,y:k.y+k.h/2,t:18,r:6});
        br.slice().forEach(o=>{if(Math.hypot(o.x+o.w/2-(k.x+k.w/2),o.y+o.h/2-(k.y+k.h/2))<BW*1.7)quebra(o,true)})}};
    const ativa=t=>{msg={t:60,s:PUS[t][1],c:PUS[t][0]};
      if(t==='L')tW=600;if(t==='F')tF=420;if(t==='T')tL=480;if(t==='E')escudo=true;
      if(t==='M'){const b0=balls[0];if(b0){const v=Math.hypot(b0.vx,b0.vy)||sp,a0=Math.atan2(b0.vx,-b0.vy);[-.55,.55].forEach(d=>{const a=a0+d;balls.push(novaBola(v*Math.sin(a),-v*Math.cos(a),b0.x,b0.y))})}}};
    $('hv').textContent='Quebre o muro!';
    const lanca=()=>{if(comecou)return;comecou=true;$('hv').textContent='';const a=(Math.random()-.5)*.7,b=balls[0];b.vx=sp*Math.sin(a);b.vy=-sp*Math.cos(a)};
    const mv=e=>{px=Math.max(pw/2,Math.min(W-pw/2,pos(e).x))};
    pts(0);
    c.addEventListener('pointerdown',e=>{c.setPointerCapture(e.pointerId);mv(e);lanca()});
    c.addEventListener('pointermove',mv);
    onKey(e=>{if(e.key==='ArrowLeft')kd=-1;if(e.key==='ArrowRight')kd=1;if(e.key===' '){e.preventDefault();lanca()}});
    const up=()=>kd=0;window.addEventListener('keyup',up);limpa.push(()=>window.removeEventListener('keyup',up));
    const bloco=(k)=>{const t=k.t,p=PAL[k.r];let c0,c1;
      if(t==='d'){c0=k.hp>1?'#c9d2e6':'#9aa4bd';c1=k.hp>1?'#6c7894':'#59627c'}else if(t==='b'){c0='#7dff5a';c1='#1fae14'}else if(t==='x'){c0='#ffb02a';c1='#d4350a'}else{c0=p[0];c1=p[1]}
      const g=x.createLinearGradient(0,k.y,0,k.y+k.h);g.addColorStop(0,c0);g.addColorStop(1,c1);
      x.fillStyle='#0a1a6a44';rr(x,k.x+1,k.y+3,k.w,k.h,5);x.fillStyle=g;rr(x,k.x,k.y,k.w,k.h,5);x.fillStyle='#ffffff55';rr(x,k.x+3,k.y+2,k.w-6,4,2);
      const cx=k.x+k.w/2,cy=k.y+k.h/2;x.fillStyle='#fff';
      if(t==='d'){x.fillStyle='#3a4360';[k.x+7,k.x+k.w-7].forEach(rx=>{x.beginPath();x.arc(rx,cy+1,2,0,7);x.fill()});if(k.hp<2){x.strokeStyle='#2a3150';x.lineWidth=1.5;x.beginPath();x.moveTo(cx-6,k.y+3);x.lineTo(cx,cy);x.lineTo(cx-3,k.y+k.h-3);x.moveTo(cx,cy);x.lineTo(cx+8,k.y+k.h-3);x.stroke()}}
      if(t==='b'){x.font='900 15px Fredoka';x.textAlign='center';x.fillText('+',cx,cy+5)}
      if(t==='x'){x.font='900 13px Fredoka';x.textAlign='center';x.fillText('✹',cx,cy+5)}};
    loop(dt=>{
      if(!T.bg.naturalWidth||!T.bola.naturalWidth)return;
      const alvoW=(tW>0?1.55:1)*pw0;pw+=(alvoW-pw)*.15;if(tW>0)tW-=dt;if(tF>0)tF-=dt;
      px=Math.max(pw/2,Math.min(W-pw/2,px+kd*7*dt));
      if(!comecou){balls[0].x=px;balls[0].y=PY-R-1}
      // lasers
      if(tL>0){tL-=dt;tLs-=dt;if(tLs<=0){tLs=16;[-.35,.35].forEach(d=>tiros.push({x:px+d*pw,y:PY}))}}
      tiros.forEach(t=>{t.y-=9*dt;for(const k of br){if(t.x>k.x&&t.x<k.x+k.w&&t.y<k.y+k.h&&t.y>k.y){t.y=-99;quebra(k,false);break}}});tiros=tiros.filter(t=>t.y>-20);
      // power-ups
      pu.forEach(p=>{p.y+=p.vy*dt;if(p.y>PY-6&&p.y<PY+16&&Math.abs(p.x-px)<pw/2+14){p.y=H+99;ativa(p.k);pop(14,p.x,PY,PUS[p.k][0],3)}});pu=pu.filter(p=>p.y<H+20);
      if(comecou){
        const nS=Math.ceil(sp*dt/5);
        balls.forEach(b=>{for(let s=0;s<nS;s++){b.x+=b.vx*dt/nS;b.y+=b.vy*dt/nS;
          if(b.x<R){b.x=R;b.vx=Math.abs(b.vx)}if(b.x>W-R){b.x=W-R;b.vx=-Math.abs(b.vx)}if(b.y<R){b.y=R;b.vy=Math.abs(b.vy)}
          if(b.vy>0&&b.y+R>=PY&&b.y+R<=PY+16&&Math.abs(b.x-px)<pw/2+R){const o=Math.max(-1,Math.min(1,(b.x-px)/(pw/2))),a=o*1.05;score++;pts(score);sp=Math.min(11.5,4.6+score*.18);pw0=Math.max(56,92-score*1.2);b.vx=sp*Math.sin(a);b.vy=-sp*Math.cos(a);b.y=PY-R;hit={x:b.x,t:14}}
          if(escudo&&b.vy>0&&b.y+R>=PY+26){escudo=false;b.vy=-Math.abs(b.vy);b.y=PY+26-R;pop(16,b.x,PY+26,'#2fe0ff',3);msg={t:40,s:'SALVOU!',c:'#2fe0ff'}}
          for(let q=br.length-1;q>=0;q--){const k=br[q];const cx=Math.max(k.x,Math.min(b.x,k.x+k.w)),cy=Math.max(k.y,Math.min(b.y,k.y+k.h)),dx=b.x-cx,dy=b.y-cy;
            if(dx*dx+dy*dy<R*R){
              if(tF<=0||k.t==='d'&&k.hp>1&&false){if(Math.abs(dx)>Math.abs(dy)){b.vx=dx>0?Math.abs(b.vx):-Math.abs(b.vx)}else{b.vy=dy>0?Math.abs(b.vy):-Math.abs(b.vy)}}
              quebra(k,tF>0);if(!br.length)muro();break}}}
          });
        balls=balls.filter(b=>b.y<=H+R);
        if(!balls.length){fim(score);return false}
      }
      balls.forEach(b=>{b.tr.push({x:b.x,y:b.y});if(b.tr.length>9)b.tr.shift()});
      // --- desenho
      x.save();if(shake>0){shake-=dt;x.translate((Math.random()-.5)*7,(Math.random()-.5)*7)}
      const bw=768*S,bh=1536*S;x.drawImage(T.bg,(W-bw)/2,H-bh,bw,bh);
      x.strokeStyle='#ffffffb0';x.lineWidth=3;x.setLineDash([14,12]);x.beginPath();x.moveTo(0,H*.49);x.lineTo(W,H*.49);x.stroke();x.setLineDash([]);
      br.forEach(bloco);
      if(escudo){x.save();x.shadowColor='#2fe0ff';x.shadowBlur=14;x.strokeStyle='#8ff3ff';x.lineWidth=4;x.beginPath();x.moveTo(6,PY+26);x.lineTo(W-6,PY+26);x.stroke();x.restore()}
      fr=fr.filter(p=>p.t>0);fr.forEach(p=>{p.t-=dt;if(p.ring){x.globalAlpha=Math.max(0,p.t/18);x.strokeStyle='#ffd27a';x.lineWidth=4;x.beginPath();x.arc(p.x,p.y,p.r+(18-p.t)*5,0,7);x.stroke();return}p.vy+=.25*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;x.globalAlpha=Math.max(0,p.t/34);x.fillStyle=p.c;x.fillRect(p.x,p.y,p.r,p.r)});x.globalAlpha=1;
      pu.forEach(p=>{const col=PUS[p.k][0];x.save();x.shadowColor=col;x.shadowBlur=12;x.fillStyle=col;rr(x,p.x-14,p.y-8,28,16,8);x.restore();x.fillStyle='#ffffff77';rr(x,p.x-10,p.y-6,20,4,2);x.fillStyle='#10206a';x.font='900 12px Fredoka';x.textAlign='center';x.fillText(p.k,p.x,p.y+4.5)});
      tiros.forEach(t=>{x.save();x.shadowColor='#2fe0ff';x.shadowBlur=8;x.strokeStyle='#e8fdff';x.lineWidth=3;x.lineCap='round';x.beginPath();x.moveTo(t.x,t.y);x.lineTo(t.x,t.y+13);x.stroke();x.restore()});
      balls.forEach(b=>{
        b.tr.forEach((r,i)=>{x.globalAlpha=i/22;bola(x,r.x,r.y,R*(i/9),tF>0?'#ffb02a':'#ff6a7a')});x.globalAlpha=1;
        if(tF>0){x.save();x.shadowColor='#ff8a1a';x.shadowBlur=18;x.fillStyle='#ff9a2a55';x.beginPath();x.arc(b.x,b.y,R+4,0,7);x.fill();x.restore()}
        const ang=comecou?Math.atan2(b.vx,-b.vy):0,bwid=R*2.5,bhei=bwid*T.bola.naturalHeight/T.bola.naturalWidth;
        x.save();x.translate(b.x,b.y);x.rotate(ang);if(tF>0)x.filter='hue-rotate(25deg) brightness(1.2)';x.drawImage(T.bola,-bwid/2,-bhei*.36,bwid,bhei);x.restore()});
      x.save();x.shadowColor=tL>0?'#ffe23a':'#2fe0ff';x.shadowBlur=14;const g=x.createLinearGradient(0,PY,0,PY+12);g.addColorStop(0,tL>0?'#ffe97a':'#4d86ff');g.addColorStop(1,tL>0?'#e09a00':'#0a2fd0');x.fillStyle=g;rr(x,px-pw/2,PY,pw,13,6.5);x.restore();
      x.fillStyle='#ffffff66';rr(x,px-pw/2+5,PY+2,pw-10,3,1.5);x.strokeStyle='#0a1a8a';x.lineWidth=1.5;x.beginPath();x.roundRect(px-pw/2,PY,pw,13,6.5);x.stroke();
      if(tL>0){x.fillStyle='#fff';[-.35,.35].forEach(d=>rr(x,px+d*pw-2,PY-6,4,7,2))}
      if(hit){hit.t-=dt;if(hit.t<=0)hit=null;else{const k=hit.t/14;x.save();x.globalAlpha=k;x.strokeStyle='#fff';x.lineWidth=3;x.lineCap='round';[-.6,0,.6].forEach(a=>{const l1=10+(1-k)*10,l2=l1+10;x.beginPath();x.moveTo(hit.x+Math.sin(a)*l1,PY-Math.cos(a)*l1);x.lineTo(hit.x+Math.sin(a)*l2,PY-Math.cos(a)*l2);x.stroke()});x.restore()}}
      x.restore();
      if(msg){msg.t-=dt;if(msg.t<=0)msg=null;else{x.save();x.globalAlpha=Math.min(1,msg.t/20);x.fillStyle=msg.c;rr(x,W/2-70,H*.4-18,140,36,18);x.fillStyle='#10206a';x.font='900 18px Fredoka';x.textAlign='center';x.fillText(msg.s,W/2,H*.4+6);x.restore()}}
    });
  },  contas(){
    clear();acabou=false;let score=0,lim=7000,t0=0,res=0,trava=false;
    stage.innerHTML=`<div class="hud"><span id="pt">0 acertos</span><span></span></div><div class="bar"><i id="bt" style="width:100%"></i></div><div class="big" id="q" style="padding:12px 0">&nbsp;</div><div class="opts" id="op"></div>`;
    const nova=()=>{
      const n=score;let a,b,s,ops=['+','−'];if(n>=5)ops.push('×');if(n>=12)ops.push('÷');const o=ops[rnd(0,ops.length-1)],M=10+n*4;
      if(o==='+'){a=rnd(1,M);b=rnd(1,M);res=a+b}else if(o==='−'){a=rnd(2,M);b=rnd(1,a);res=a-b}else if(o==='×'){a=rnd(2,Math.min(12,4+Math.floor(n/3)));b=rnd(2,Math.min(12,4+Math.floor(n/4)));res=a*b}else{b=rnd(2,10);res=rnd(2,10);a=b*res}
      const set=new Set([res]);while(set.size<4){const d=res+rnd(-9,9);if(d>=0&&d!==res)set.add(d)}
      $('q').textContent=`${a} ${o} ${b}`;
      $('op').innerHTML=[...set].sort(()=>Math.random()-.5).map(v=>`<button data-v="${v}">${v}</button>`).join('');
      $('op').querySelectorAll('button').forEach(bt=>bt.addEventListener('pointerdown',e=>{e.preventDefault();if(trava)return;trava=true;
        if(+bt.dataset.v===res){bt.className='ok';score++;$('pt').textContent=score+' acertos';lim=Math.max(2200,lim*.95);later(()=>{trava=false;nova()},180)}
        else{bt.className='no';later(()=>fim(score),500)}}));
      t0=performance.now();
    };
    nova();
    loop(()=>{if(trava)return;const r=1-(performance.now()-t0)/lim;$('bt').style.width=Math.max(0,r*100)+'%';if(r<=0){fim(score);return false}});
  },
  n2048(){
    clear();acabou=false;let g=Array(16).fill(0),score=0;
    const COR={2:'#fff3c4',4:'#ffe08a',8:'#ffb347',16:'#ff8a4c',32:'#ff4f5e',64:'#e11d74',128:'#8b5cf6',256:'#2340d8',512:'#0e9bb5',1024:'#1fae6a',2048:'#18256e'};
    const poe=()=>{const L=g.map((v,i)=>v?-1:i).filter(i=>i>=0);if(L.length)g[L[rnd(0,L.length-1)]]=Math.random()<.9?2:4};poe();poe();
    stage.innerHTML=`<div class="hud"><span id="pt">0 pontos</span><span id="hv"></span></div><div class="g48" id="gb"></div><p class="msg">Arraste para cima, baixo, esquerda ou direita.</p>`;
    const gb=$('gb');
    const desenha=()=>{gb.innerHTML=g.map(v=>`<div class="tl" style="background:${v?COR[v]||'#0b1240':'#ffffff40'};color:${v>4?'#fff':'#18256e'};font-size:${v>=1000?'clamp(14px,4.5vw,22px)':''}">${v||''}</div>`).join('');$('hv').textContent='Maior: '+Math.max(...g)};
    const lin=(d,i)=>{const r=d==='L'||d==='R'?[0,1,2,3].map(j=>i*4+j):[0,1,2,3].map(j=>i+j*4);return d==='R'||d==='D'?r.reverse():r};
    const pode=()=>g.some((v,i)=>!v||(i%4<3&&v===g[i+1])||(i<12&&v===g[i+4]));
    const move=d=>{if(acabou)return;let mv=false;
      for(let i=0;i<4;i++){const ix=lin(d,i),v=ix.map(k=>g[k]).filter(Boolean),o=[];
        for(let j=0;j<v.length;j++){if(v[j]===v[j+1]){o.push(v[j]*2);score+=v[j]*2;j++}else o.push(v[j])}
        while(o.length<4)o.push(0);ix.forEach((k,j)=>{if(g[k]!==o[j])mv=true;g[k]=o[j]})}
      if(mv){poe();$('pt').textContent=score+' pontos';desenha();if(!pode()){acabou=true;later(()=>{acabou=false;fim(score)},900)}}};
    let p0=null;gb.addEventListener('pointerdown',e=>{p0={x:e.clientX,y:e.clientY};gb.setPointerCapture(e.pointerId)});
    gb.addEventListener('pointerup',e=>{if(!p0)return;const dx=e.clientX-p0.x,dy=e.clientY-p0.y;p0=null;if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;move(Math.abs(dx)>Math.abs(dy)?(dx>0?'R':'L'):(dy>0?'D':'U'))});
    onKey(e=>{const m={ArrowLeft:'L',ArrowRight:'R',ArrowUp:'U',ArrowDown:'D'}[e.key];if(m){e.preventDefault();move(m)}});
    desenha();
  },
  torre(){
    const{c,x,pts}=tela();const T=imgsTorre();const BH=30,B0=H-100;let bl=[{x:80,w:200}],cur={x:-200,w:200,d:1},score=0,v=2.4,cam=0,caidos=[],perf=0,px=0,t=0;
    pts(0);$('hv').textContent='Toque para cortar';
    const PAL=[['#52b6ff','#1565e0'],['#5ee03a','#1f9a14'],['#ffd23a','#f08a00'],['#ff6a5a','#c41818'],['#b46bff','#6320d0'],['#ffa23a','#e05a00'],['#ff62c4','#c41880']];
    const blk=(bx,by,bw,i,al)=>{const p=PAL[i%7],h=BH-3;x.globalAlpha=al||1;
      const g=x.createLinearGradient(0,by,0,by+h);g.addColorStop(0,p[0]);g.addColorStop(1,p[1]);
      x.fillStyle='rgba(20,10,60,.28)';rr(x,bx+1,by+4,bw,h,8);
      x.fillStyle=g;rr(x,bx,by,bw,h,8);
      x.fillStyle='#ffffff55';rr(x,bx+4,by+2.5,Math.max(2,bw-8),5,3);
      x.fillStyle='#00000026';rr(x,bx+3,by+h-5,Math.max(2,bw-6),4,2);
      x.strokeStyle=p[1];x.lineWidth=1.5;x.beginPath();x.roundRect?x.roundRect(bx,by,bw,h,8):x.rect(bx,by,bw,h);x.stroke();x.globalAlpha=1};
    const solta=e=>{if(e)e.preventDefault();if(acabou||!cur)return;
      const p=bl[bl.length-1],a=Math.max(cur.x,p.x),b=Math.min(cur.x+cur.w,p.x+p.w),ov=b-a;
      if(ov<=0){caidos.push({x:cur.x,w:cur.w,y:B0-bl.length*BH,vy:0,i:bl.length});cur=null;later(()=>fim(score),700);return}
      if(Math.abs(cur.x-p.x)<5){bl.push({x:p.x,w:p.w});perf=26;px=p.x+p.w/2}
      else{bl.push({x:a,w:ov});const fx=cur.x<p.x?cur.x:b,fw=cur.w-ov;caidos.push({x:fx,w:fw,y:B0-(bl.length-1)*BH,vy:0,i:bl.length-1})}
      score++;pts(score);v=Math.min(7.5,2.4+score*.13);const top=bl[bl.length-1];cur={x:score%2?W:-top.w,w:top.w,d:score%2?-1:1};
    };
    c.addEventListener('pointerdown',solta);onKey(e=>{if(e.key===' '){solta(e)}});
    loop(dt=>{
      t+=dt;
      if(!T.bg.naturalWidth||!T.chao.naturalWidth)return;
      if(cur){cur.x+=cur.d*v*dt;if(cur.x>W-cur.w*.2&&cur.d>0)cur.d=-1;if(cur.x<-cur.w*.8&&cur.d<0)cur.d=1}
      const alvo=Math.max(0,bl.length*BH-(B0-230));cam+=(alvo-cam)*.1*dt;
      const sc=Math.max(W/T.bg.naturalWidth,H/T.bg.naturalHeight)*1.0,bw=T.bg.naturalWidth*sc,bh=T.bg.naturalHeight*sc;
      x.drawImage(T.bg,Math.min(0,Math.max(W-bw,W*.68-bw*.75)),Math.min(0,H-bh)+Math.min(Math.max(0,bh-H),cam*.12),bw,bh);
      x.save();x.translate(0,cam);
      const cw=W,ch=T.chao.naturalHeight*cw/T.chao.naturalWidth,gy=B0+BH-10;
      x.fillStyle='#5b3d8a';x.fillRect(0,gy+ch-2,W,600);x.drawImage(T.chao,0,gy,cw,ch);
      bl.forEach((b,i)=>blk(b.x,B0-i*BH,b.w,i));
      caidos=caidos.filter(f=>f.y<B0+400);caidos.forEach(f=>{f.vy+=.5*dt;f.y+=f.vy*dt;blk(f.x,f.y,f.w,f.i,.85)});
      if(cur){const cy=B0-bl.length*BH;blk(cur.x,cy,cur.w,bl.length)}
      if(perf>0){const k=1-perf/26,w2=70+k*70,ty=B0-(bl.length-1)*BH+BH/2;x.globalAlpha=Math.max(0,perf/26);x.drawImage(T.burst,px-w2/2,ty-w2*.39,w2,w2*T.burst.naturalHeight/T.burst.naturalWidth);x.globalAlpha=1}
      x.restore();
      if(perf>0){perf-=dt;x.save();x.globalAlpha=Math.min(1,perf/10);x.fillStyle='#6a2ee0';rr(x,W/2-62,56,124,36,18);x.fillStyle='#fff';x.font='700 22px Fredoka';x.textAlign='center';x.fillText('Perfeito!',W/2,82);x.restore()}
    });
  },  sequencia(){
    clear();acabou=false;let ac=null;try{ac=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}
    const P=[['#1fae6a',330],['#ff4f5e',392],['#f5b800',262],['#2340d8',523]];let seq=[],i=0,pode=false,score=0;
    stage.innerHTML=`<div class="hud"><span id="pt">0 rodadas</span><span></span></div><p class="msg" id="dc">Preste atenção…</p><div class="seq">${P.map((p,k)=>`<button data-k="${k}" style="background:${p[0]}" aria-label="Botão ${k+1}"></button>`).join('')}</div>`;
    const bt=[...stage.querySelectorAll('.seq button')],dc=$('dc');
    const som=k=>{if(!ac)return;try{const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=P[k][1];o.type='triangle';o.connect(g);g.connect(ac.destination);g.gain.setValueAtTime(.18,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.35);o.start();o.stop(ac.currentTime+.36)}catch(e){}};
    const espera=ms=>new Promise(r=>later(r,ms));
    const acende=async(k,ms)=>{bt[k].classList.add('on');som(k);await espera(ms);bt[k].classList.remove('on')};
    const rodada=async()=>{pode=false;dc.textContent='Preste atenção…';seq.push(rnd(0,3));await espera(700);const d=Math.max(230,520-score*18);
      for(const k of seq){await acende(k,d);await espera(d*.45)}i=0;pode=true;dc.textContent='Sua vez! Repita a ordem.'};
    bt.forEach((b,k)=>b.addEventListener('pointerdown',async e=>{e.preventDefault();if(!pode)return;
      acende(k,180);
      if(k!==seq[i]){pode=false;dc.textContent='Errou a ordem!';await espera(900);fim(score);return}
      i++;if(i===seq.length){pode=false;score++;$('pt').textContent=score+' rodadas';dc.textContent='Isso!';await espera(500);rodada()}}));
    rodada();
  },
  martelada(){
    clear();acabou=false;let score=0,vidas=3,prox=600,st=Array(9).fill(null),pronto=false;
    const modal=$('modal');modal.classList.add('cena-mar');
    const IM=imgsMar();for(const k in SPRM)stage.style.setProperty('--u-'+k,'url('+SPRM[k]+')');
    limpa.push(()=>{modal.classList.remove('cena-mar');for(const k in SPRM)stage.style.removeProperty('--u-'+k)});
    Promise.all(Object.values(IM).map(i=>i.decode?i.decode().catch(()=>{}):0)).then(()=>{pronto=true});
    const AR={t1:1.406,t2:1.396,t3:1.5,t4:1.303,t5:1.34,t6:1.243,bomba:.84};
    const DEC=[['cog',1,'b',1,17,110/103],['toco',0,'b',1,20,100/71],['fw',20,'b',2,8,59/55],['fp',72,'b',3,8,55/47],['ped2',36,'b',2.5,11,66/43],['fy',60,'b',1.5,8,61/48],['fol',31,'t',0,0,0]].filter(d=>d[0]!=='fol');
    const dec=DEC.map(d=>{const ar={cog:103/110,toco:100/71,fw:59/55,fp:55/47,ped2:66/43,fy:61/48}[d[0]];const side=d[0]==='toco'?'right:1%':'left:'+d[1]+'%';return `<i style="${side};bottom:${d[3]}%;width:${d[4]}%;--ar:${ar};--sp:var(--u-${d[0]})"></i>`}).join('');
    const dec2=[['placa',5,36,13,110/147],['planta',80,36,15,102/105],['fol',70,41,12,106/92],['ped1',22,44,11,82/59]].map(d=>`<i style="left:${d[1]}%;top:${d[2]}%;width:${d[3]}%;--ar:${d[4]};--sp:var(--u-${d[0]})"></i>`).join('');
    stage.innerHTML=`<div class="hud"><span class="plq" id="pt">0 toupeiras</span><i class="topo"></i><span class="plq" id="hv"></span></div><div class="mar"><div class="dec">${dec}${dec2}</div><div class="toca">${st.map((_,k)=>`<button class="buraco" data-k="${k}" aria-label="Buraco ${k+1}"><u class="cl"><i class="m"></i></u></button>`).join('')}</div><div class="fx"></div></div>`;
    const bs=[...stage.querySelectorAll('.buraco')],mar=stage.querySelector('.mar'),fx=stage.querySelector('.fx');
    const face=(k,f)=>{const m=bs[k].querySelector('.m');m.style.setProperty('--sp','var(--u-'+f+')');m.style.setProperty('--ar',AR[f]);m.style.setProperty('--w',f==='bomba'?'44%':'60%')};
    const vid=()=>{const v=Math.max(0,vidas);$('hv').innerHTML='<b style="color:#ff4d5e">'+'♥'.repeat(v)+'</b><b style="color:#4a230a88">'+'♥'.repeat(3-v)+'</b>'};vid();
    const desce=k=>{st[k]=null;bs[k].classList.remove('up')};
    const perde=()=>{vidas--;vid();mar.classList.remove('dano');void mar.offsetWidth;mar.classList.add('dano')};
    const efeito=(k,bomba)=>{const mr=mar.getBoundingClientRect(),br=bs[k].getBoundingClientRect(),cw=br.width,cx=br.left-mr.left+cw/2,cy=br.top-mr.top+br.height*.52,sy=mar.clientHeight/(mr.height||1);
      const mk=(cls,w,x,y,ar)=>{const e=document.createElement('i');e.className=cls;e.style.cssText=`left:${x}px;top:${y}px;width:${w}px`;fx.appendChild(e);setTimeout(()=>e.remove(),800);return e};
      const wm=cw*.8;mk('mt',wm,cx-wm*.3,cy+br.height*.14-wm*(231/248)*.92);
      const wi=cw*1.15;const im=mk('im',wi,cx-wi/2,cy-wi*(161/235)*.5);if(bomba)im.style.filter='hue-rotate(-30deg) saturate(1.4)';
      if(!bomba){const wa=cw*.7;mk('ac',wa,cx-wa/2,cy-br.height*.42-wa*(151/178)*.5)}};
    bs.forEach((b,k)=>b.addEventListener('pointerdown',e=>{e.preventDefault();const s=st[k];if(!s||s.pego)return;
      s.pego=1;if(s.t!=='b')face(k,'t6');efeito(k,s.t==='b');later(()=>{b.classList.remove('pego');desce(k)},330);b.classList.add('pego');
      if(s.t==='b')perde();else{score++;$('pt').textContent=score+' toupeiras'}}));
    loop(dt=>{
      if(!pronto)return;
      const now=performance.now();prox-=dt*16.67;
      if(prox<=0){prox=Math.max(330,950-score*12);const L=st.map((s,k)=>s?-1:k).filter(k=>k>=0);
        if(L.length){const k=L[rnd(0,L.length-1)],bomba=score>5&&Math.random()<Math.min(.28,score/90);st[k]={t:bomba?'b':'t',ate:now+Math.max(520,1300-score*14)};face(k,bomba?'bomba':['t1','t2','t4','t5'][rnd(0,3)]);bs[k].classList.add('up')}}
      st.forEach((s,k)=>{if(!s||s.pego)return;if(s.t==='t'&&!s.fug&&now>s.ate-300){s.fug=1;face(k,'t3')}if(now>s.ate){if(s.t==='t')perde();desce(k)}});
      if(vidas<=0){fim(score);return false}
    });
  },
  lagoa(){
    const{c,x,pos,pts}=tela();const I=imgsLagoa();const DY=95,BASE=H-90,ALC=135,PR=34,RA=165;
    let rows=[[{x:180,rot:0}]],cam=0,r=0,cur={x:180},score=0,mx=0,tc=0,comecou=false,anim=null,t=0,sqz=0,pad=null,queda=null,ondas=[],gotas=[],nao=null;
    const gera=()=>{while(rows.length<mx+12){
      const prev=rows[rows.length-1],nv=[];let sem=prev.slice();
      const livre=xx=>nv.every(q=>Math.abs(q.x-xx)>=84);
      while(sem.length){const p=sem[0];let xx=Math.max(40,Math.min(W-40,p.x+rnd(-75,75))),tent=0;while(!livre(xx)&&tent++<12)xx=Math.max(40,Math.min(W-40,p.x+rnd(-75,75)));
        if(!livre(xx)){const j=nv.reduce((m,q)=>Math.abs(q.x-p.x)<Math.abs(m.x-p.x)?q:m,nv[0]);sem=sem.filter(q=>Math.abs(q.x-j.x)>ALC-12);continue}
        nv.push({x:xx,rot:Math.random()*6.28});sem=sem.filter(q=>Math.abs(q.x-xx)>ALC-12)}
      const extra=Math.random()<.55?1:0+(Math.random()<.25?1:0);
      for(let e=0;e<extra&&nv.length<4;e++){let xx=rnd(40,W-40),tent=0;while(!livre(xx)&&tent++<14)xx=rnd(40,W-40);if(livre(xx))nv.push({x:xx,rot:Math.random()*6.28})}
      rows.push(nv)}};gera();
    const ry=i=>BASE-(i*DY-cam);
    pts(0);$('hv').textContent='Toque numa folha vizinha';
    const sapoCai=(px,py)=>{queda={t:0,x:px,y:py};splash(px,py)};
    const pula=(tx,ty)=>{
      if(anim||queda||acabou)return;
      let alvo=null,ai=-1,md=1e9;
      for(let i=Math.max(0,r-1);i<=r+2&&i<rows.length;i++)rows[i].forEach(q=>{const d=Math.hypot(q.x-tx,ry(i)-ty);if(d<md){md=d;alvo=q;ai=i}});
      const noPad=alvo&&md<=PR+10;
      const fy=ry(r);
      if(noPad){
        if(ai===r&&Math.abs(alvo.x-cur.x)<2){return}
        if(Math.hypot(alvo.x-cur.x,ry(ai)-fy)>RA){nao={t:0,x:tx,y:ty};return}
        if(!comecou){comecou=true;$('hv').textContent=''}
        anim={de:{x:cur.x,i:r},para:{x:alvo.x,i:ai},t:0,ok:true};cur={x:alvo.x};r=ai;
      }else{
        let ti=-1,bd=1e9;for(let i=Math.max(0,r);i<=r+1;i++){const d=Math.abs(ry(i)-ty);if(d<bd){bd=d;ti=i}}
        if(Math.hypot(tx-cur.x,ry(ti)-fy)>RA||bd>DY*.55){nao={t:0,x:tx,y:ty};return}
        if(!comecou){comecou=true;$('hv').textContent=''}
        anim={de:{x:cur.x,i:r},para:{x:tx,i:ti},t:0,ok:false};cur={x:tx};r=ti;
      }
    };
    c.addEventListener('pointerdown',e=>{e.preventDefault();const p=pos(e);pula(p.x,p.y)});
    const onda=(ox,oy,n)=>{for(let i=0;i<(n||2);i++)ondas.push({x:ox,y:oy,t:-i*7})};
    const splash=(sx,sy)=>{sfx('erro');onda(sx,sy,3);for(let i=0;i<12;i++){const a=-Math.PI/2+rnd(-70,70)/100*1.6;gotas.push({x:sx,y:sy,vx:Math.cos(a)*rnd(8,28)/10,vy:Math.sin(a)*rnd(30,70)/10,t:0})}};
    const ring=(o)=>{const k=o.t/30;if(k<0)return;x.globalAlpha=Math.max(0,.75*(1-k));x.strokeStyle='#e8fbff';x.lineWidth=3-k*1.5;x.beginPath();x.arc(o.x,o.y,18+k*34,0,7);x.stroke();x.globalAlpha=Math.max(0,.4*(1-k));x.strokeStyle='#7fe0ff';x.lineWidth=2;x.beginPath();x.arc(o.x,o.y,26+k*44,0,7);x.stroke();x.globalAlpha=1};
    loop(dt=>{
      t+=dt;
      if(comecou){tc+=dt;cam+=(.6+Math.min(2.7,tc*.00065))*dt}
      if(sqz>0)sqz-=dt;if(nao){nao.t+=dt;if(nao.t>14)nao=null}
      if(anim){anim.t+=dt/9;if(anim.t>=1){const ok=anim.ok,pi=anim.para.i,px=anim.para.x;anim=null;
        if(!ok){sapoCai(px,ry(pi))}
        else{if(pi>mx){score+=pi-mx;mx=pi;pts(score);gera()}sqz=9;pad={i:pi,x:px,t:0};onda(px,ry(pi),2);sfx('pulo')}}}
      if(pad){pad.t+=dt;if(pad.t>10)pad=null}
      if(queda){queda.t+=dt;if(queda.t>34){fim(score);return false}}
      else if(!anim&&ry(r)>H-4)sapoCai(cur.x,ry(r));
      ondas.forEach(o=>o.t+=dt);ondas=ondas.filter(o=>o.t<30);
      gotas.forEach(g=>{g.t+=dt;g.x+=g.vx*dt;g.y+=g.vy*dt;g.vy+=.35*dt});gotas=gotas.filter(g=>g.t<34);
      const gr=x.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#2fc9ff');gr.addColorStop(1,'#1fb0f0');x.fillStyle=gr;x.fillRect(0,0,W,H);
      x.lineCap='round';
      for(let i=0;i<11;i++){const yy=((i*78+cam*.7+t*.25)%(H+120))-50,xx=((i*131)%300)-20+Math.sin(t*.01+i)*8,ll=40+(i*37)%70;x.strokeStyle='rgba(255,255,255,'+(.28+(i%3)*.1)+')';x.lineWidth=3;x.beginPath();x.moveTo(xx,yy);x.quadraticCurveTo(xx+ll/2,yy-9,xx+ll,yy);x.stroke()}
      ondas.forEach(ring);
      for(let i=Math.max(0,r-3);i<rows.length;i++){const y=ry(i);if(y<-50||y>H+50)continue;rows[i].forEach((q,k)=>{
        const bob=Math.sin(t*.04+i*1.7+k)*1.6;let esc=1+Math.sin(t*.03+i+k)*.012;
        if(pad&&pad.i===i&&Math.abs(pad.x-q.x)<1)esc*=1-Math.sin(Math.min(1,pad.t/10)*Math.PI)*.08;
        const px=q.x,py=y+bob,alc=!anim&&!queda&&Math.hypot(q.x-cur.x,y-ry(r))<=RA&&!(i===r&&Math.abs(q.x-cur.x)<2);
        x.fillStyle='rgba(8,110,190,.35)';x.beginPath();x.ellipse(px+2,py+8,31*esc,28*esc,0,0,7);x.fill();
        if(I.folha.naturalWidth){x.save();x.translate(px,py);x.rotate(q.rot);x.scale(esc,esc);x.drawImage(I.folha,-35,-34,70,67);x.restore()}
        if(alc&&comecou===false){x.strokeStyle='#ffffffcc';x.lineWidth=2.5;x.setLineDash([5,6]);x.beginPath();x.arc(px,py,PR+3,0,7);x.stroke();x.setLineDash([])}})}
      if(nao){x.globalAlpha=Math.max(0,1-nao.t/14);x.strokeStyle='#ff4f5e';x.lineWidth=4;x.beginPath();x.arc(nao.x,nao.y,16+nao.t,0,7);x.stroke();x.globalAlpha=1}
      let px=cur.x,py=ry(r),sx=1,sy=1,rot=0,alfa=1;
      if(anim){const a=anim.t,h=Math.sin(a*Math.PI);const gx=anim.de.x+(anim.para.x-anim.de.x)*a,gy=ry(anim.de.i)+(ry(anim.para.i)-ry(anim.de.i))*a;
        x.fillStyle='rgba(8,110,190,'+(.34-h*.18)+')';x.beginPath();x.ellipse(gx+2,gy+8,(20-h*5),(17-h*4),0,0,7);x.fill();
        px=gx;py=gy-h*30;sx=sy=1+h*.4;rot=Math.sin(a*Math.PI*2)*.28+(anim.para.x-anim.de.x)/400}
      else if(queda){const k=queda.t/34;px=queda.x;py=queda.y;sx=sy=Math.max(0,1-k*1.1);alfa=Math.max(0,1-k*1.3)}
      else{const q=sqz>0?Math.sin(sqz/9*Math.PI/2):0;sx=1+q*.16+Math.sin(t*.07)*.012;sy=1-q*.14-Math.sin(t*.07)*.012;py+=Math.sin(t*.04+r*1.7)*1.6;
        x.fillStyle='rgba(8,110,190,.3)';x.beginPath();x.ellipse(px+2,py+8,19,16,0,0,7);x.fill()}
      if(!queda||queda.t<26){x.save();x.globalAlpha=alfa;x.translate(px,py);x.rotate(rot);x.scale(sx,sy);if(I.sapo.naturalWidth)x.drawImage(I.sapo,-24,-23,48,46);x.restore();x.globalAlpha=1}
      gotas.forEach(g=>{x.globalAlpha=Math.max(0,1-g.t/34);x.fillStyle='#dff7ff';x.beginPath();x.ellipse(g.x,g.y,2.6,3.6,0,0,7);x.fill();x.strokeStyle='#7fe0ff';x.lineWidth=1;x.stroke()});x.globalAlpha=1;
      if(ry(r)>H-60&&!queda){x.fillStyle='#ff4f5e55';x.fillRect(0,H-12,W,12)}
    });
  },
  bolhas(){
    const{c,x,pos,pts}=tela();let bs=[],fx=[],score=0,vidas=3,prox=300,t=0,flash=0;pts(0);
    const vid=()=>$('hv').textContent='Vidas: '+'●'.repeat(Math.max(0,vidas))+'○'.repeat(3-Math.max(0,vidas));vid();
    const CB=['#7fc8ff','#ff8fa3','#f5b800','#8be3a8','#c4a8ff'];
    const perde=()=>{vidas--;flash=12;vid()};
    c.addEventListener('pointerdown',e=>{e.preventDefault();const p=pos(e);
      for(let i=bs.length-1;i>=0;i--){const b=bs[i];if(Math.hypot(p.x-b.px,p.y-b.y)<b.r+8){bs.splice(i,1);fx.push({x:b.px,y:b.y,r:b.r,v:1});if(b.esp)perde();else{score++;pts(score)}break}}});
    loop(dt=>{
      t+=dt;prox-=dt*16.67;
      if(prox<=0){prox=Math.max(260,850-score*9);const r=rnd(18,30),esp=score>8&&Math.random()<Math.min(.25,score/120);bs.push({x:rnd(r+10,W-r-10),y:H+r,r,esp,c:CB[rnd(0,4)],v:1.3+Math.min(3.4,score*.035)+Math.random()*.6,ph:Math.random()*6})}
      for(const b of bs){b.y-=b.v*dt;b.px=b.x+Math.sin(t*.05+b.ph)*9;if(b.y<-b.r){b.fora=1;if(!b.esp)perde()}}
      bs=bs.filter(b=>!b.fora);
      if(vidas<=0){fim(score);return false}
      const gr=x.createLinearGradient(0,0,0,H);gr.addColorStop(0,flash>0?'#ffd0d4':'#d6f1ff');gr.addColorStop(1,'#6fc3f0');x.fillStyle=gr;x.fillRect(0,0,W,H);if(flash>0)flash-=dt;
      x.fillStyle='#ff4f5e33';x.fillRect(0,0,W,6);
      for(const b of bs){
        if(b.esp){x.fillStyle='#3b2a6b';x.beginPath();for(let k=0;k<20;k++){const a=k*Math.PI/10+t*.02,rr2=k%2?b.r*.78:b.r+4;x.lineTo(b.px+Math.cos(a)*rr2,b.y+Math.sin(a)*rr2)}x.fill();bola(x,b.px-4,b.y-3,2.5,'#fff');bola(x,b.px+4,b.y-3,2.5,'#fff')}
        else{x.globalAlpha=.8;bola(x,b.px,b.y,b.r,b.c);x.globalAlpha=1;x.strokeStyle='#ffffffaa';x.lineWidth=2;x.beginPath();x.arc(b.px,b.y,b.r,0,7);x.stroke();bola(x,b.px-b.r*.4,b.y-b.r*.4,b.r*.22,'#fff')}
      }
      fx=fx.filter(f=>(f.v-=.06*dt)>0);fx.forEach(f=>{x.strokeStyle=`rgba(255,255,255,${f.v})`;x.lineWidth=3;x.beginPath();x.arc(f.x,f.y,f.r+(1-f.v)*22,0,7);x.stroke()});
    });
  },
  copos(){
    clear();$('modal').classList.add('cena-copos');limpa.push(()=>$('modal').classList.remove('cena-copos'));acabou=false;let score=0,slot=[0,1,2],bola=0,pode=false;const P=[18,50,82];
    stage.innerHTML=`<div class="hud"><span id="pt">0 acertos</span><span id="hv"></span></div><div class="mesa"><div class="bolinha" id="bl">${BOLA}</div>${[0,1,2].map(i=>`<button class="copo" aria-label="Copo ${i+1}">${COPO}</button>`).join('')}</div><p class="msg" id="dc"></p>`;
    const els=[...stage.querySelectorAll('.copo')],bl=$('bl'),dc=$('dc');
    const pos=d=>els.forEach((e,i)=>{e.style.setProperty('--d',d+'ms');e.style.left=P[slot[i]]+'%'});
    const espera=ms=>new Promise(r=>later(r,ms));
    pos(0);
    const rodada=async()=>{
      pode=false;bola=rnd(0,2);bl.style.left=P[slot[bola]]+'%';bl.style.visibility='visible';dc.textContent='Olhe onde está a bolinha…';
      await espera(350);els[bola].classList.add('up');await espera(950);els[bola].classList.remove('up');await espera(350);
      bl.style.visibility='hidden';dc.textContent='Embaralhando…';
      const n=Math.min(16,3+score),d=Math.max(170,520-score*25);
      for(let k=0;k<n;k++){const a=rnd(0,2);let b;do{b=rnd(0,2)}while(b===a);[slot[a],slot[b]]=[slot[b],slot[a]];pos(d);await espera(d+40)}
      bl.style.left=P[slot[bola]]+'%';dc.textContent='Onde está a bolinha?';pode=true;
    };
    els.forEach((e,i)=>e.addEventListener('click',async()=>{
      if(!pode)return;pode=false;bl.style.visibility='visible';e.classList.add('up');
      if(i===bola){score++;$('pt').textContent=score+' acertos';dc.textContent='Acertou!';await espera(800);e.classList.remove('up');await espera(300);rodada()}
      else{dc.textContent='Errou! A bolinha estava aqui.';await espera(450);els[bola].classList.add('up');await espera(1400);fim(score)}
    }));
    rodada();
  },
  corrida(){
    const{c,x,pts}=tela();const I=imgsCorr();const DIM={"0": [129, 129], "1": [129, 132], "2": [131, 149], "3": [127, 148], "4": [124, 128], "5": [123, 128]},TOPO='rgb(17,164,253)';
    const G=H-90,BW=508,BH=414,GW=165,GH=94,KB=.4;
    let p={x:92,y:G,vy:0,chao:true},obs=[],fichas=[],cf=220,pegou=0,v=4.2,dist=0,score=0,bonus=0,falta=330,comecou=false,pede=0,fase=0,sq=0,tt=0,ant='';
    pts(0);$('hv').textContent='Toque para começar';
    let seg=false,hT=0,nj=0,vidas=3,inv=0;const perde=()=>{vidas--;sfx('escudo');if(vidas<=0){fim(score);return true}inv=100;return false};const puf=[];const pula=e=>{if(e)e.preventDefault();if(!comecou){comecou=true;$('hv').textContent=''}pede=8;seg=true};
    const solta=()=>{seg=false};
    c.addEventListener('pointerdown',pula);c.addEventListener('pointerup',solta);c.addEventListener('pointercancel',solta);c.addEventListener('pointerleave',solta);
    onKey(e=>{if(e.key===' '||e.key==='ArrowUp')pula(e)});const kup=e=>{if(e.key===' '||e.key==='ArrowUp')seg=false};window.addEventListener('keyup',kup);limpa.push(()=>window.removeEventListener('keyup',kup));
    const tile=(im,w,h,y,off)=>{if(!im.naturalWidth)return;const o=((off%(2*w))+2*w)%(2*w);for(let k=-1;k*w-o<W;k++){const px=Math.round(k*w-o);if(((k%2)+2)%2===0)x.drawImage(im,px,y,w+1,h);else{x.save();x.translate(px+w+1,y);x.scale(-1,1);x.drawImage(im,0,0,w+1,h);x.restore()}}};
const OB={ped:{i:'o_pedra',w:56,h:33,in:8,tol:6,dy:1.6},esp:{i:'o_esp',w:82,h:24,in:8,tol:6,dy:1.2},cx:{i:'o_caixa',w:56,h:49,in:5,tol:4,dy:0.4},toc:{i:'o_toco',w:47,h:44,in:4,tol:4,dy:1.2},cog:{i:'o_cog',w:42,h:41,in:8,tol:4,dy:-2.4}};
    const novo=()=>{let k;
      const L=['ped','toc','esp','cx','cog'];
      k=L[Math.floor(Math.random()*L.length)];if(k===ant)k=L[(L.indexOf(k)+1+Math.floor(Math.random()*(L.length-1)))%L.length];ant=k;
      let o;if(k==='bur')o={k,w:rnd(64,90)+Math.min(24,score/4),h:0,in:15,tol:0};else{const t=OB[k];o={k,w:t.w,h:t.h,in:t.in,tol:t.tol}}
      o.x=W+20;obs.push(o);fichas=fichas.filter(m=>m.x<o.x-45||m.x>o.x+o.w+45);
      const rr_=Math.random();falta=o.w+v*40+70+(rr_<.25?rnd(0,50):rr_<.65?rnd(90,260):rnd(280,520))};
    loop(dt=>{
      tt+=dt;
      if(comecou){
        v=Math.min(9.5,4.2+dist/2400);dist+=v*dt;const n=Math.floor(dist/25)+bonus;if(n!==score){score=n;pts(score)}
        const sobre=obs.some(o=>o.k==='bur'&&p.x>o.x+o.in&&p.x<o.x+o.w-o.in);
        if(pede>0){pede-=dt;if(p.chao){p.vy=-9;p.chao=false;pede=0;hT=0;nj=1;sfx('pulo')}else if(nj===1&&p.y<G-6){p.vy=-8.4;pede=0;hT=0;nj=2;sq=0;sfx('pulo');for(let i=0;i<5;i++)puf.push({x:p.x+rnd(-8,8),y:p.y-8,t:0,vx:rnd(-10,10)/10})}}
        const py0=p.y;let gv=.55;if(!p.chao&&p.vy<0&&seg&&hT<18){gv=.27;hT+=dt}p.vy+=gv*dt;p.y+=p.vy*dt;
        if(p.y>=G&&p.vy>=0){if(sobre)p.chao=false;else if(py0<=G+.5){if(!p.chao)sq=7;p.y=G;p.vy=0;p.chao=true;nj=0}else{if(perde())return false;obs=obs.filter(o=>!(o.k==='bur'&&o.x<p.x+70&&o.x+o.w>p.x-70));p.y=G-90;p.vy=0;nj=1}}
        if(p.y>G+60){if(perde())return false;obs=obs.filter(o=>!(o.k==='bur'&&o.x<p.x+70&&o.x+o.w>p.x-70));p.y=G-90;p.vy=0;nj=1}
        if(inv>0)inv-=dt;
        if(sq>0)sq-=dt;
        falta-=v*dt;if(falta<=0)novo();
        obs.forEach(o=>o.x-=v*dt);obs=obs.filter(o=>o.x>-120);
        fichas.forEach(m=>m.x-=v*dt);fichas=fichas.filter(m=>m.x>-40);
        cf-=v*dt;if(cf<=0){if(obs.some(o=>o.x+o.w>W-70)){cf=40}else{const n=rnd(1,3),t=Math.random(),h=[26,62,92][rnd(0,2)];for(let i=0;i<n;i++){const xx=W+30+i*30;fichas.push({x:xx,y:t<.35?G-26-Math.sin(i/(n-1||1)*Math.PI)*58:G-h})}cf=v*60+rnd(260,640)}}
        for(const o of obs){if(o.k==='bur')continue;if(!o.hit&&inv<=0&&p.x+11>o.x+o.in&&p.x-11<o.x+o.w-o.in&&p.y>G-o.h+o.tol){o.hit=1;if(perde())return false;p.vy=-8;p.chao=false;nj=1;sq=0}}
        fichas=fichas.filter(m=>{if(Math.hypot(p.x-m.x,p.y-26-m.y)<24){moedas++;pegou++;salvaCarteira();sfx('moeda');return false}return true});
        fase+=dt*(.09+v*.014);
      }
      const bgY=G-4-BH;
      const gr=x.createLinearGradient(0,0,0,bgY);gr.addColorStop(0,'#0a84ea');gr.addColorStop(1,TOPO);x.fillStyle=gr;x.fillRect(0,0,W,bgY+1);
      [[60,70,.55,.04],[250,150,.8,.06],[130,240,.65,.05],[330,330,.7,.045]].forEach(([cx,cy,sz,sp],i)=>{if(cy>bgY-10)return;const px=((cx-tt*sp*(1+i*.3)-dist*.06*sz)%(W+160)+W+160)%(W+160)-80;x.fillStyle='#ffffffd9';[[0,0,20],[22,-6,26],[48,0,19],[12,6,18],[36,7,18]].forEach(([dx,dy,r])=>{x.beginPath();x.arc(px+dx*sz,cy+dy*sz,r*sz,0,7);x.fill()});x.fillStyle='#bfe6fb99';x.beginPath();x.ellipse(px+30*sz,cy+14*sz,40*sz,7*sz,0,0,7);x.fill()});
      tile(I.bg,BW,BH,bgY,dist*.28);
      tile(I.chao,GW,GH,G-4,dist);
      obs.forEach(o=>{
        if(o.k==='bur'){if(I.o_bur.naturalWidth)x.drawImage(I.o_bur,o.x-3,G-8,o.w+6,30)}
        else{const t=OB[o.k],im=I[t.i];if(im&&im.naturalWidth)x.drawImage(im,o.x,G+t.dy-t.h,t.w,t.h)}});
      fichas.forEach((m,i)=>{if(I.o_moeda.naturalWidth){const w=26*(.75+.25*Math.abs(Math.sin(tt*.08+i)));x.drawImage(I.o_moeda,m.x-w/2,m.y-14+Math.sin(tt*.1+i)*2,w,29)}});
      puf.forEach(q=>{q.t+=dt;q.x+=q.vx*dt-v*dt*.3});for(let i=puf.length-1;i>=0;i--)if(puf[i].t>16)puf.splice(i,1);
      puf.forEach(q=>{x.globalAlpha=Math.max(0,1-q.t/16)*.8;x.fillStyle='#fff';x.beginPath();x.arc(q.x,q.y+q.t*.4,3+q.t*.25,0,7);x.fill()});x.globalAlpha=1;
      x.font='bold 22px system-ui,sans-serif';x.textAlign='left';x.textBaseline='top';for(let i=0;i<3;i++){x.lineWidth=3;x.strokeStyle='#ffffff';x.strokeText('♥',12+i*24,52);x.fillStyle=i<vidas?'#ff3b5c':'#00000040';x.fillText('♥',12+i*24,52)}
      if(I.o_moeda.naturalWidth)x.drawImage(I.o_moeda,12,82,22,22);x.font='bold 20px system-ui,sans-serif';x.textAlign='left';x.textBaseline='middle';x.lineWidth=3;x.strokeStyle='#fff';x.strokeText('×'+pegou,38,94);x.fillStyle='#3a2f6b';x.fillText('×'+pegou,38,94);
      /* coelho */
      const alt=Math.max(0,G-p.y);x.fillStyle='#00000026';x.beginPath();x.ellipse(p.x,G+1,15-alt*.06,3.2-alt*.01,0,0,7);x.fill();
      let fr;if(!p.chao)fr=p.vy<-1.5?2:3;else fr=[0,1,4,5][Math.floor(fase)%4];
      const im=I['c'+fr],d=DIM[fr];
      if(im&&im.naturalWidth&&!(inv>0&&Math.floor(inv/5)%2)){const w=d[0]*KB,h=d[1]*KB;x.save();x.translate(p.x,p.y+3);
        const bob=p.chao&&comecou?Math.abs(Math.sin(fase*Math.PI/2))*-1.6:0;x.translate(0,bob);
        if(!p.chao)x.rotate(Math.max(-.22,Math.min(.3,p.vy*.022)));
        if(sq>0){const q=sq/7;x.scale(1+.16*q,1-.18*q)}
        x.drawImage(im,-w/2,-h,w,h);x.restore()}
    });
  },
  prateleira(){
    clear();acabou=false;const NM=21,TR=21,N=22,COL=3;let sh=Array.from({length:N},()=>[]),sel=null,drag=null,score=0,lim=2600,tt=0,fl=new Set(),gelo=0,dica=null,pw={lupa:1,estrela:1,troca:3,gelo:5},prox=6;
    const NT=10,TY=embaralha(UQPR.slice()).slice(0,NT);
    const modal=$('modal');modal.classList.add('cena-prat');for(const t of TY)stage.style.setProperty('--pr'+t,'url('+SPRPR['pr'+t]+')');for(const k in SPRBT)stage.style.setProperty('--b-'+k,'url('+SPRBT[k]+')');
    limpa.push(()=>{modal.classList.remove('cena-prat');for(const t of TY)stage.style.removeProperty('--pr'+t);for(const k in SPRBT)stage.style.removeProperty('--b-'+k)});
    const IM=imgsPrat();let pronto=false;Promise.all(TY.map(t=>IM['pr'+t]).map(i=>i.decode?i.decode().catch(()=>{}):0)).then(()=>{pronto=true});
    const trio=s=>s.length===3&&s[0]===s[1]&&s[1]===s[2];
    const R=()=>rnd(0,NT-1);
    const poe=()=>{const L=[];for(let i=0;i<NM;i++)if(sh[i].length<3)L.push(i);if(!L.length)return -1;const i=L[rnd(0,L.length-1)];sh[i].push(R());return i};
    for(let k=0;k<34;k++){const i=poe();if(i>=0&&trio(sh[i]))sh[i][2]=(sh[i][2]+1)%NT}
    stage.innerHTML=`<div class="prbd"><div class="hud"><span id="pt">0 trios</span><span id="hv"></span></div><div class="bar"><i id="bt" style="width:100%"></i></div><div class="pall" id="pall"><div class="estante" id="sf"></div><div class="pfoot"><div id="trb"></div><div class="pws" id="pws"></div></div></div></div>`;
    const sf=$('sf'),trb=$('trb'),pall=$('pall'),pws=$('pws');
    const cel=i=>{const s=sh[i],dk=dica&&dica.d===i;return `<div class="sl${i===TR?' band':''}${s.length===3&&!trio(s)?' cheia':''}${fl.has(i)?' ok':''}${dk?' dica':''}" data-s="${i}">${[0,1,2].map(j=>`<span class="it${sel&&sel.s===i&&sel.j===j?' on':''}${dica&&dica.s===i&&dica.j===j?' dk':''}" data-j="${j}" style="${s[j]!==undefined&&!(drag&&drag.s===i&&drag.j===j&&drag.on)?'--s:var(--pr'+TY[s[j]]+');--a:'+ASPN[TY[s[j]]]:'visibility:hidden'}"></span>`).join('')}</div>`};
    const icones={lupa:'🔍',estrela:'⭐',troca:'🔄',gelo:'❄️'};
    const desenha=()=>{
      let livres=0;for(let i=0;i<NM;i++)livres+=3-sh[i].length;const oc=100-livres/63*100;$('bt').style.width=Math.max(4,oc)+'%';$('bt').style.background=gelo>0?'':oc>85?'linear-gradient(#ff8a6a,#e0321f)':oc>65?'linear-gradient(#ffe36a,#e8a416)':'';$('hv').textContent=gelo>0?'Congelado!':livres<=6?'Quase cheio!':'Espaços livres: '+livres;
      let t='';for(let i=0;i<NM;i++)t+=cel(i);sf.innerHTML=t;trb.innerHTML=cel(TR);
      pws.innerHTML=Object.keys(icones).map(k=>`<button class="pw${pw[k]<=0?' off':''}" data-p="${k}" aria-label="${k}"><b></b><i>${pw[k]}</i></button>`).join('');
      $('bt').parentNode.classList.toggle('gel',gelo>0)};
    const confere=i=>{if(i>=0&&trio(sh[i])&&!fl.has(i)){fl.add(i);if(sel&&sel.s===i)sel=null;desenha();later(()=>{sh[i]=[];fl.delete(i);score++;$('pt').textContent=score+' trios';
      if(--prox<=0){prox=6;const k=Object.keys(pw);pw[k[rnd(0,3)]]=Math.min(9,pw[k[rnd(0,3)]]+1)}desenha()},340)}};
    const usa=k=>{if(pw[k]<=0||drag)return;
      if(k==='lupa'){dica=null;let ach=null;
        for(let b=0;b<N&&!ach;b++){if(sh[b].length>=3||fl.has(b))continue;for(let v=0;v<NT&&!ach;v++){const n=sh[b].filter(x=>x===v).length;if(n>=2&&sh[b].length<3){for(let a=0;a<N&&!ach;a++){if(a===b||fl.has(a))continue;const j=sh[a].indexOf(v);if(j>=0)ach={s:a,j,d:b}}}}}
        if(!ach)for(let b=0;b<N&&!ach;b++){if(sh[b].length>=3||fl.has(b))continue;for(const v of sh[b]){for(let a=0;a<N&&!ach;a++){if(a===b)continue;const j=sh[a].indexOf(v);if(j>=0)ach={s:a,j,d:b}}if(ach)break}}
        if(!ach){$('hv').textContent='Sem dica agora';return}
        pw.lupa--;dica=ach;desenha();later(()=>{dica=null;desenha()},3500)}
      if(k==='estrela'){const c={};for(let i=0;i<N;i++)if(!fl.has(i))sh[i].forEach(v=>c[v]=(c[v]||0)+1);const ks=Object.keys(c);if(!ks.length)return;const v=+ks.sort((a,b)=>c[b]-c[a])[0];pw.estrela--;
        const n=c[v];for(let i=0;i<N;i++)sh[i]=sh[i].filter(x=>x!==v);sel=null;score+=Math.max(1,Math.floor(n/3));$('pt').textContent=score+' trios';desenha()}
      if(k==='troca'){pw.troca--;const all=[];for(let i=0;i<N;i++)if(!fl.has(i))sh[i].forEach(v=>all.push(v));const idx=[];for(let i=0;i<N;i++)if(!fl.has(i))idx.push(i);
        const ar=embaralha(all);const cap=idx.map(()=>0);idx.forEach(i=>sh[i]=[]);let q=0;ar.forEach(v=>{let t=0;do{q=(q+1)%idx.length;t++}while(sh[idx[q]].length>=3&&t<99);sh[idx[q]].push(v)});
        for(let i=0;i<N;i++)if(trio(sh[i]))sh[i][2]=(sh[i][2]+1)%NT;sel=null;desenha()}
      if(k==='gelo'){pw.gelo--;gelo=7000;desenha()}};
    const fantasma=e=>{drag.g.style.left=(e.clientX-drag.ox)+'px';drag.g.style.top=(e.clientY-drag.oy)+'px'};
    const marca=e=>{const t=document.elementFromPoint(e.clientX,e.clientY),sl=t&&t.closest&&t.closest('.sl');pall.querySelectorAll('.sl.alvo').forEach(x=>x.classList.remove('alvo'));
      if(sl&&+sl.dataset.s!==drag.s&&sh[+sl.dataset.s].length<3&&!fl.has(+sl.dataset.s))sl.classList.add('alvo')};
    const fimDrag=()=>{if(drag&&drag.g)drag.g.remove();drag=null};limpa.push(fimDrag);
    pall.addEventListener('pointerdown',e=>{
      const pb=e.target.closest('.pw');if(pb){e.preventDefault();usa(pb.dataset.p);return}
      const sl=e.target.closest('.sl');if(!sl)return;e.preventDefault();
      const s=+sl.dataset.s;if(fl.has(s)||drag)return;const itE=e.target.closest('.it'),j=itE?+itE.dataset.j:-1,tem=j>=0&&sh[s][j]!==undefined;
      try{pall.setPointerCapture(e.pointerId)}catch(_){}
      drag={s,j,tem,x:e.clientX,y:e.clientY,on:false,v:tem?sh[s][j]:-1,el:itE}});
    pall.addEventListener('pointermove',e=>{if(!drag||!drag.tem)return;
      if(!drag.on){if(Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<9)return;
        const r=drag.el.getBoundingClientRect(),g=document.createElement('div');g.className='it fant';g.style.cssText=`--s:var(--pr${TY[drag.v]});position:fixed;width:${r.width}px;height:${r.height}px;left:${r.left}px;top:${r.top}px;pointer-events:none;z-index:50;margin:0`;
        stage.appendChild(g);drag.g=g;drag.ox=drag.x-r.left;drag.oy=drag.y-r.top;drag.on=true;sel=null;dica=null;desenha()}
      fantasma(e);marca(e)});
    pall.addEventListener('pointerup',e=>{if(!drag)return;const d=drag;
      if(!d.on){fimDrag();if(fl.has(d.s))return;const s=d.s,j=d.j,tem=d.tem;
        if(!sel){if(tem)sel={s,j}}
        else if(sel.s===s){sel=tem&&j!==sel.j?{s,j}:null}
        else if(sh[s].length<3){sh[s].push(sh[sel.s].splice(sel.j,1)[0]);sel=null;confere(s)}
        else if(tem)sel={s,j};
        desenha();return}
      d.g.style.display='none';const t=document.elementFromPoint(e.clientX,e.clientY),sl=t&&t.closest&&t.closest('.sl');fimDrag();
      if(sl){const s2=+sl.dataset.s;if(s2!==d.s&&!fl.has(s2)&&!fl.has(d.s)&&sh[d.s][d.j]===d.v){if(sh[s2].length<3){sh[s2].push(sh[d.s].splice(d.j,1)[0])}else{let bj=0,bd=1e9;sl.querySelectorAll('.it').forEach((el,q)=>{const r=el.getBoundingClientRect(),dd=Math.abs(e.clientX-(r.left+r.width/2));if(dd<bd){bd=dd;bj=q}});const tmp=sh[s2][bj];sh[s2][bj]=d.v;sh[d.s][d.j]=tmp;fl.has(d.s)||confere(d.s)}sel=null;desenha();confere(s2);return}}
      desenha()});
    pall.addEventListener('pointercancel',()=>{fimDrag();desenha()});
    pall.addEventListener('touchmove',e=>{e.preventDefault()},{passive:false});pall.addEventListener('contextmenu',e=>e.preventDefault());
    for(let i=0;i<N;i++)if(trio(sh[i]))sh[i][2]=(sh[i][2]+1)%NT;
    desenha();
    loop(dt=>{
      if(!pronto)return;
      if(gelo>0){gelo-=dt*16.67;if(gelo<=0){gelo=0;desenha()}return}
      tt+=dt*16.67;
      if(tt>=lim){tt=0;lim=Math.max(800,lim*.985);const i=poe();if(i<0){if(fl.size)return;fim(score);return false}confere(i);desenha()}
    });
  },
  cobra(){
    const{c,x,pts}=tela();
    const C=20,CO=18,RO=Math.floor(H/C);let s=[{x:9,y:Math.floor(RO/2)},{x:8,y:Math.floor(RO/2)},{x:7,y:Math.floor(RO/2)}],d={x:1,y:0},nx=d,food,score=0,spd=170,acc=0;
    const novo=()=>{do{food={x:rnd(0,CO-1),y:rnd(0,RO-1)}}while(s.some(p=>p.x===food.x&&p.y===food.y))};novo();pts(0);
    const vira=(a,b)=>{if(a===-d.x&&b===-d.y)return;nx={x:a,y:b}};
    let p0=null;c.addEventListener('pointerdown',e=>{p0={x:e.clientX,y:e.clientY}});
    c.addEventListener('pointermove',e=>{if(!p0)return;const dx=e.clientX-p0.x,dy=e.clientY-p0.y;if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;Math.abs(dx)>Math.abs(dy)?vira(Math.sign(dx),0):vira(0,Math.sign(dy));p0={x:e.clientX,y:e.clientY}});
    c.addEventListener('pointerup',()=>p0=null);
    onKey(e=>{const m={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1],a:[-1,0],d:[1,0],w:[0,-1],s:[0,1]}[e.key];if(m){e.preventDefault();vira(...m)}});
    const P=q=>[q.x*C+10,q.y*C+10];
    loop(dt=>{
      acc+=dt*16.67;
      if(acc>=spd){acc=0;d=nx;const h={x:s[0].x+d.x,y:s[0].y+d.y};
        if(h.x<0||h.y<0||h.x>=CO||h.y>=RO||s.slice(0,-1).some(p=>p.x===h.x&&p.y===h.y)){fim(score);return false}
        s.unshift(h);if(h.x===food.x&&h.y===food.y){score++;pts(score);spd=Math.max(95,spd-3);novo()}else s.pop()}
      for(let i=0;i<CO;i++)for(let j=0;j<RO;j++){x.fillStyle=(i+j)%2?'#aad751':'#a2d149';x.fillRect(i*C,j*C,C,C)}
      {const fx=food.x*C+10,fy=food.y*C+11;x.fillStyle='#0002';x.beginPath();x.ellipse(fx,fy+7.5,6.5,2.2,0,0,7);x.fill();
        const gr=x.createRadialGradient(fx-2,fy-2,1,fx,fy,8);gr.addColorStop(0,'#ff6a4d');gr.addColorStop(1,'#e8321f');x.fillStyle=gr;x.beginPath();x.arc(fx,fy,7.6,0,7);x.fill();
        x.fillStyle='#ffffff90';x.beginPath();x.ellipse(fx-2.6,fy-3,1.8,1.1,-.6,0,7);x.fill();
        x.fillStyle='#4f8a1e';x.beginPath();x.ellipse(fx+2.6,fy-8,3.2,1.6,-.5,0,7);x.fill();x.strokeStyle='#6b4226';x.lineWidth=1;x.beginPath();x.moveTo(fx,fy-7);x.lineTo(fx-.5,fy-9.5);x.stroke()}
      x.strokeStyle='#3f6b24';x.lineWidth=10;x.strokeRect(0,0,W,H);x.strokeStyle='#ffffff66';x.lineWidth=1.5;x.strokeRect(5.5,5.5,W-11,H-11);
      const n=s.length;x.lineCap='round';x.lineJoin='round';
      const cor=i=>{const t=n<2?0:i/(n-1);return`rgb(${Math.round(74-30*t)},${Math.round(125-45*t)},${Math.round(245-45*t)})`};
      x.strokeStyle='#00000022';x.lineWidth=16;x.beginPath();s.forEach((q,i)=>{const[a,b]=P(q);i?x.lineTo(a+1,b+2):x.moveTo(a+1,b+2)});x.stroke();
      for(let i=n-1;i>0;i--){const a=P(s[i]),b=P(s[i-1]);x.strokeStyle=cor(i);x.lineWidth=16;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()}
      {const h=s[0],[hx,hy]=P(h);x.save();x.translate(hx,hy);if(d.x<0)x.scale(-1,1);else if(d.y<0)x.rotate(-Math.PI/2);else if(d.y>0)x.rotate(Math.PI/2);
        x.fillStyle=cor(0);x.beginPath();x.ellipse(1,0,10.5,9.5,0,0,7);x.fill();
        for(const k of[-1,1]){x.fillStyle='#fff';x.beginPath();x.arc(4,k*4.6,3.6,0,7);x.fill();x.fillStyle='#1a2a6a';x.beginPath();x.arc(5.2,k*4.6,1.8,0,7);x.fill()}
        x.restore()}
    });
  },
  pulo(){
    const{c,x,pts}=tela();const I=imgsPulo(),FEET=24,HW=18,PW=64,PH=60;
    let gy=H-64,p={x:180,y:gy-FEET,vx:0,vy:-11},alt=0,score=0,hold=0,keys=0,vida=0,sq=0,face=1,tilt=0,tiltOn=false,tt=0,estre=0;
    const GR=['g1','g2','g3','g4','g4'],NV=['n1','n2'];let ant=null;
    const nova=(y,sc)=>{const w=Math.max(50,78-sc/60),mv=Math.random()<Math.min(.5,sc/600)?(Math.random()<.5?-1:1)*(1+sc/400):0;
      const q={x:rnd(0,Math.round(W-w)),y,w,mv,k:GR[rnd(0,4)],item:null,once:false,gone:0};
      if(!mv&&!(ant&&ant.once)&&Math.random()<Math.min(.3,.12+sc/900)){q.once=true;q.k=NV[rnd(0,1)]}
      ant=q;
      if(!mv&&!q.once&&sc>250&&Math.random()<.14){q.k='esp';q.w=Math.max(54,w+6)}
      else if(q.k!=='esp'&&!q.once){const r=Math.random();if(!vida&&r<.06)q.item='cor';else if(sc>80&&r<.11)q.item='est';else if(r<.27)q.item='moeda'}
      return q};
    let pl=[{x:0,y:gy,w:W,mv:0,k:'chao',item:null,gone:0}];
    while(pl[pl.length-1].y>-20){pl.push(nova(pl[pl.length-1].y-rnd(55,80),0))}
    pts(0);
    let tx=null;const set=e=>{const r=c.getBoundingClientRect();tx=(e.clientX-r.left)/r.width*W};
    c.addEventListener('pointerdown',e=>{c.setPointerCapture(e.pointerId);set(e)});c.addEventListener('pointermove',e=>{if(e.buttons||e.pointerType==='touch')set(e)});
    c.addEventListener('pointerup',()=>tx=null);c.addEventListener('pointercancel',()=>tx=null);
    onKey(e=>{if(e.key==='ArrowLeft')keys=-1;if(e.key==='ArrowRight')keys=1});
    const up=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight')keys=0};window.addEventListener('keyup',up);limpa.push(()=>window.removeEventListener('keyup',up));
    const ori=e=>{if(e.gamma==null)return;const ang=(screen.orientation&&screen.orientation.angle)||window.orientation||0;
      const v=ang===90?e.beta:(ang===-90||ang===270)?-e.beta:ang===180?-e.gamma:e.gamma;if(v==null)return;tiltOn=true;
      const m=Math.abs(v)<3?0:v-Math.sign(v)*3;tilt=Math.max(-1,Math.min(1,m/18))};
    window.addEventListener('deviceorientation',ori);limpa.push(()=>window.removeEventListener('deviceorientation',ori));
    const perm=()=>{try{const D=window.DeviceOrientationEvent;if(D&&typeof D.requestPermission==='function')D.requestPermission().catch(()=>{})}catch(_){}};
    perm();c.addEventListener('pointerdown',perm,{once:true});
    const dano=()=>{if(vida){vida=0;p.vy=-11.2;sq=6;sfx('escudo')}else{fim(score);return true}};
    const draw=(im,px,py,w,h)=>{if(im&&im.complete&&im.naturalWidth)x.drawImage(im,px,py,w,h)};
    const dr=(k,px,py,w)=>{const im=I[k];if(im&&im.naturalWidth){const h=w*im.naturalHeight/im.naturalWidth;x.drawImage(im,px,py,w,h);return h}return 0};
    loop(dt=>{
      tt+=dt;
      hold=tx==null?0:Math.max(-1,Math.min(1,(tx-p.x)/28));const dir=hold||keys||(tiltOn?tilt:0);p.vx=(p.vx+dir*.75*dt)*Math.pow(.9,dt);p.vx=Math.max(-7.5,Math.min(7.5,p.vx));p.x+=p.vx*dt;
      if(dir<-.1)face=-1;else if(dir>.1)face=1;
      if(p.x<HW){p.x=HW;p.vx=0}if(p.x>W-HW){p.x=W-HW;p.vx=0}
      const py=p.y;p.vy+=.38*dt;p.y+=p.vy*dt;if(sq>0)sq-=dt;
      if(p.vy>0)for(const q of pl){if(q.gone)continue;if(py+FEET<=q.y+3&&p.y+FEET>=q.y&&p.x>q.x-HW+6&&p.x<q.x+q.w+HW-6){
        p.y=q.y-FEET;if(q.k==='esp'){if(dano())return false;break}
        p.vy=-11.2;sq=6;sfx('pulo');if(q.once){q.gone=1;sfx('acerto')}break}}
      pl.forEach(q=>{if(q.gone)q.gone+=dt;if(q.mv){q.x+=q.mv*dt;if(q.x<0||q.x>W-q.w)q.mv*=-1}
        if(q.item){const ix=q.x+q.w/2,iy=q.y-24;if(Math.hypot(p.x-ix,p.y-iy)<26){
          if(q.item==='cor'){vida=1;sfx('escudo')}else if(q.item==='est'){p.vy=-19;sq=0;sfx('item')}else{alt+=100;sfx('moeda')}q.item=null}}});
      if(p.y<230){const d=230-p.y;p.y=230;pl.forEach(q=>q.y+=d);gy+=d;alt+=d}
      {const g0=pl.find(q=>q.k==='chao');if(g0&&alt<450)g0.y=Math.min(g0.y,H-44)}
      const n=Math.floor(alt/10);if(n!==score){score=n;pts(score)}
      pl=pl.filter(q=>q.y<H+30&&q.gone<18);
      while(pl[pl.length-1].y>-20){const t=pl[pl.length-1].y,gap=rnd(55,80)+Math.min(45,score/25);pl.push(nova(t-gap,score))}
      if(p.y>H+40){fim(score);return false}
      /* fundo */
      const gr=x.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#1fbcff');gr.addColorStop(1,'#c4efff');x.fillStyle=gr;x.fillRect(0,0,W,H);
      const hz=H-90+alt*.22;
      if(hz<H+140){x.fillStyle='#8fd8d0';x.beginPath();x.moveTo(0,H+200);x.lineTo(0,hz-40);for(let i=0;i<=W;i+=30)x.lineTo(i,hz-40-Math.sin(i*.021+1)*26-Math.sin(i*.07)*8);x.lineTo(W,H+200);x.fill();
        x.fillStyle='#5cc3a0';x.beginPath();x.moveTo(0,H+200);x.lineTo(0,hz);for(let i=0;i<=W;i+=30)x.lineTo(i,hz-Math.sin(i*.034+3)*18-Math.sin(i*.09)*6);x.lineTo(W,H+200);x.fill();
        x.globalAlpha=.55;[['p2',-6],['p1',52],['p3',110],['p2',170],['p1',232],['p3',290]].forEach(([k,ox],i)=>{const im=I[k];if(im&&im.naturalWidth){const w=64+(i%3)*10,h=w*im.naturalHeight/im.naturalWidth;x.drawImage(im,ox,hz-h+14,w,h)}});x.globalAlpha=1}
      [[30,.18,70],[210,.3,40],[120,.42,120],[290,.25,150]].forEach(([cx,f,cy],i)=>{const cyy=((cy+alt*f)%(H+120))-60,w=70+(i%2)*26;dr('nuvem',(cx+tt*.1*(i+1)+i*50)%(W+120)-60,cyy,w)});
      /* chão e cenário inicial */
      const g0=pl.find(q=>q.k==='chao');
      if(g0){dr('terra',-40,g0.y-6,234);dr('terra',126,g0.y-6,234);if(alt<30){dr('arb',14,g0.y-30,56);dr('pedra',150,g0.y-30,48);dr('placa',296,g0.y-62,50)}}
      pl.forEach(q=>{if(q.k==='chao')return;
        if(q.k==='esp'){const im=I.esp;if(im&&im.naturalWidth){const sc=q.w/im.naturalWidth,h=im.naturalHeight*sc;x.drawImage(im,q.x,q.y-h+54*sc,q.w,h)}}
        else if(q.gone){x.globalAlpha=Math.max(0,1-q.gone/18);dr(q.k,q.x,q.y-2+q.gone*2.5,q.w);x.globalAlpha=1}
        else dr(q.k,q.x,q.y-2,q.w);
        if(q.item){const ix=q.x+q.w/2,iy=q.y-24+Math.sin(tt*.12)*3,s=q.item==='est'?26:24;dr(q.item,ix-s/2,iy-s/2,s)}});
      /* porquinho */
      const P=I.pig;let fr;
      if(sq>0)fr=P[3*4+3];else if(p.vy<0)fr=P[2*4+Math.min(3,Math.floor((1+p.vy/11.5)*4))];else fr=P[3*4+Math.min(2,Math.floor(p.vy/3.5))];
      x.save();x.translate(p.x,p.y);if(face<0)x.scale(-1,1);if(fr&&fr.naturalWidth)x.drawImage(fr,-PW/2,-PH/2-1,PW,PH);x.restore();
      if(vida){x.globalAlpha=.9;dr('cor',12,50,22);x.globalAlpha=1}
    });
  },
  voo(){
    const{c,x,pts}=tela();const I=imgsVoo();
    const sc=Math.max(W/941,H/1672),bw=941*sc,bh=1672*sc,bdx=(W-bw)/2,bdy=H-bh,gt=bdy+1440*sc,by0=Math.round(H*.4);
    let b={x:90,y:by0,vy:0},canos=[],score=0,comecou=false,chao=0;pts(0);$('hv').textContent='Toque para começar';
    const AW=36,AH=27.5,CW=66,bate=e=>{if(e)e.preventDefault();comecou=true;$('hv').textContent='';b.vy=-6.4};
    c.addEventListener('pointerdown',bate);onKey(e=>{if(e.key===' '||e.key==='ArrowUp')bate(e)});
    loop(dt=>{
      const v=Math.min(4.6,2.6+score*.06),gap=Math.max(118,165-score*2);
      if(comecou){b.vy+=.38*dt;b.y+=b.vy*dt;
        if(!canos.length||canos[canos.length-1].x<W-190)canos.push({x:W+10,y:rnd(70,Math.floor(gt-50-gap)),g:gap,ok:false});
        canos.forEach(k=>k.x-=v*dt);canos=canos.filter(k=>k.x>-80);
        for(const k of canos){if(!k.ok&&k.x+60<b.x){k.ok=true;score++;pts(score)}
          if(b.x+10>k.x-1&&b.x-10<k.x+61&&(b.y-8<k.y||b.y+8>k.y+k.g)){fim(score);return false}}
        if(b.y+11>gt+4||b.y<-30){fim(score);return false}}
      else b.y=by0+Math.sin(performance.now()/250)*8;
      chao+=v*dt;
      if(I.bg.naturalWidth)x.drawImage(I.bg,bdx,bdy,bw,bh);else{x.fillStyle='#38b6ff';x.fillRect(0,0,W,H)}
      const cw=CW,chh=I.capb.naturalHeight*CW/I.capb.naturalWidth;
      canos.forEach(k=>{const px=k.x-3;
        if(I.corpo.naturalWidth){x.drawImage(I.corpo,px,-10,cw,k.y-chh+12);x.drawImage(I.capb,px,k.y-chh,cw,chh);
          const t=k.y+k.g;x.drawImage(I.corpo,px,t+chh-2,cw,H-t);x.drawImage(I.capt,px,t,cw,I.capt.naturalHeight*CW/I.capt.naturalWidth)}});
      if(I.chao.naturalWidth){const tw=I.chao.naturalWidth*(sc/.6)*(232/I.chao.naturalHeight)*0+821*sc,th=232*sc,o=chao%tw;for(let xx=-o;xx<W;xx+=tw)x.drawImage(I.chao,xx,gt,tw+1,th)}
      x.save();x.translate(b.x,b.y);x.rotate(Math.max(-.45,Math.min(.9,b.vy/10)));if(I.ave.naturalWidth)x.drawImage(I.ave,-AW/2,-AH/2,AW,AH);x.restore();
    });
  },
  frutas(){
    const{c,x,pos,pts}=tela();const I=imgsFrutas(),DF={"bg": [470, 754], "laranja": [60, 71], "maca": [60, 70], "limao": [58, 74], "bomba": [84, 100], "morango": [62, 73], "cesta": [262, 110], "maca2": [60, 70], "macav": [67, 74], "cereja": [58, 41], "mirtilo": [41, 40], "lima": [48, 52], "uva": [69, 88]},BW=60;let bx=180,itens=[],score=0,vidas=3,prox=0,flash=0,t=0,pegas=[];pts(0);
    const vid=()=>$('hv').textContent='Vidas: '+'●'.repeat(vidas)+'○'.repeat(3-vidas);vid();
    const mv=e=>{bx=Math.max(BW,Math.min(W-BW,pos(e).x))};
    c.addEventListener('pointerdown',e=>{c.setPointerCapture(e.pointerId);mv(e)});c.addEventListener('pointermove',mv);
    let kd=0;onKey(e=>{if(e.key==='ArrowLeft')kd=-1;if(e.key==='ArrowRight')kd=1});
    const up=()=>kd=0;window.addEventListener('keyup',up);limpa.push(()=>window.removeEventListener('keyup',up));
    const FR=['laranja','maca','limao','morango','macav','cereja','mirtilo','lima','uva'],FW=40;
    loop(dt=>{
      if(!I.bg.naturalWidth||!I.cesta.naturalWidth||!I.bomba.naturalWidth||!I.laranja.naturalWidth){x.fillStyle='#4aa8ff';x.fillRect(0,0,W,H);return}
      t+=dt;bx=Math.max(BW,Math.min(W-BW,bx+kd*7*dt));
      prox-=dt*16.67;if(prox<=0){prox=Math.max(320,900-score*12);const bomba=Math.random()<Math.min(.3,.08+score/150);itens.push({x:rnd(24,W-24),y:-30,v:2+Math.min(4,score*.04)+Math.random(),b:bomba,k:bomba?'bomba':FR[rnd(0,FR.length-1)],r:Math.random()*6,w:(Math.random()-.5)*.03})}
      for(const it of itens){it.y+=it.v*dt;it.r+=it.w*dt;
        if(!it.f&&it.y>H-92&&it.y<H-52&&Math.abs(it.x-bx)<BW-8){it.f=1;if(it.b){vidas--;flash=12;vid()}else{score++;pts(score);pegas.push({x:it.x,y:H-86,t:0})}}
        if(!it.f&&it.y>H+10){it.f=1;if(!it.b){vidas--;flash=12;vid()}}}
      itens=itens.filter(i=>!i.f);pegas=pegas.filter(p=>(p.t+=dt)<22);
      if(vidas<=0){fim(score);return false}
      {const bw=DF.bg[0],bh=DF.bg[1],sc=Math.max(W/bw,H/bh),dw=bw*sc,dh=bh*sc;x.drawImage(I.bg,(W-dw)/2,H-dh,dw,dh)}
      if(flash>0){x.fillStyle='rgba(255,70,90,'+Math.min(.35,flash/30)+')';x.fillRect(0,0,W,H);flash-=dt}
      itens.forEach(it=>{const d=DF[it.k],w=it.b?FW*1.15:it.k==='mirtilo'?FW*.7:it.k==='cereja'?FW*.9:it.k==='uva'?FW*.95:FW,h=w*d[1]/d[0];
        const g=x.createLinearGradient(0,it.y-h/2-60,0,it.y-h/2);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(1,it.b?'rgba(255,140,150,.5)':'rgba(255,255,255,.5)');x.fillStyle=g;for(const dx of[-9,0,9])x.fillRect(it.x+dx-.8,it.y-h/2-60,1.6,60);
        x.save();x.translate(it.x,it.y);x.rotate(Math.sin(it.r)*.25);x.drawImage(I[it.k],-w/2,-h/2,w,h);x.restore()});
      {const d=DF.cesta,w=BW*2,h=w*d[1]/d[0];x.save();x.translate(bx,H-58);
        pegas.forEach(p=>{const k=1-p.t/22;x.globalAlpha=k;x.fillStyle='#ffe066';for(let i=0;i<5;i++){const an=-Math.PI*(.15+.7*i/4),r=8+p.t*1.6;x.beginPath();x.arc(Math.cos(an)*r+(p.x-bx)*.2,Math.sin(an)*r-h/2,2.2*k+.6,0,7);x.fill()}});x.globalAlpha=1;
        x.drawImage(I.cesta,-w/2,-h/2,w,h);x.restore()}
    });
  },
  cores(){
    clear();acabou=false;let score=0,t0=0,lim=2200;
    const CORES=[['VERMELHO','#ff4f5e'],['AZUL','#2340d8'],['VERDE','#1fae6a'],['AMARELO','#f5b800']];
    stage.innerHTML=`<div class="hud"><span id="pt">0 acertos</span><span></span></div><div class="bar"><i id="bt" style="width:100%"></i></div><div class="big" id="pal" style="font-size:clamp(38px,9vw,60px);padding:16px 0">&nbsp;</div><div class="cores" id="cr"></div>`;
    let alvo;
    const rodada=()=>{
      const a=rnd(0,3);let tinta;do{tinta=rnd(0,3)}while(tinta===a);alvo=a;
      const pal=$('pal');pal.textContent=CORES[a][0];pal.style.color=CORES[tinta][1];
      const ord=[0,1,2,3].sort(()=>Math.random()-.5);
      $('cr').innerHTML=ord.map(i=>`<button data-i="${i}" style="background:${CORES[i][1]}" aria-label="${CORES[i][0].toLowerCase()}"></button>`).join('');
      $('cr').querySelectorAll('button').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(+b.dataset.i===alvo){score++;$('pt').textContent=score+' acertos';lim=Math.max(650,lim*.96);rodada()}else fim(score)}));
      t0=performance.now();
    };
    rodada();
    loop(()=>{const r=1-(performance.now()-t0)/lim;$('bt').style.width=Math.max(0,r*100)+'%';if(r<=0){fim(score);return false}});
  }
};

/* ---------- abas ---------- */
$('tabs').innerHTML=CATS.map(([id,nome,sub,ks])=>`<h3 class="cat">${nome} <small>${sub}</small></h3><div class="grade">${ks.map(k=>`<button class="tab" data-k="${k}"><span class="ti">${ICN[k]||IC[k]}</span>${GAMES[k].nome}</button>`).join('')}</div>`).join('');
$('eu').onclick=abrePerfil;$('pX').onclick=fechaPerfil;

function renderHome(){
  try{const rg=resumoGeral(),{jogos,cats}=analisa(),part=Object.values(hist).reduce((s,x)=>s+x.length,0),jogados=KEYS.filter(k=>jogos[k].rec!==null||jogos[k].part>0).length;
  const xp=part*20+jogados*50+rg.primeiros*100,N=500,nv=Math.floor(xp/N)+1,cur=xp%N,rac=cats.find(c=>c.id==='raciocinio');
  const CQ=[['Primeira Vitória',rg.primeiros>=1,'Fique em 1º lugar em um jogo'],['Mestre do Puzzle',!!rac&&rac.jogados>=rac.total,'Jogue todos os jogos de Raciocínio'],['Campeão da Família',rg.pos===0,'Lidere o Ranking Geral'],['Sempre Joga',part>=25,'Jogue 25 partidas'],['Top 1',rg.primeiros>=3,'Fique em 1º lugar em 3 jogos']];
  $('uNivel').textContent='Nível '+nv;$('uXp').style.width=Math.max(3,cur/N*100)+'%';$('uXpT').textContent=cur+' / '+N+' XP';
  $('uMoe').textContent=moedas;$('uCon').textContent=CQ.filter(c=>c[1]).length;$('uPos').textContent=rg.pos>=0?(rg.pos+1)+'º':'-';
  $('conq').innerHTML=CQ.map((c,i)=>`<div class="bd${c[1]?'':' lock'}" title="${c[2]}"><img src="${BADGES[i]}" alt=""><span>${c[0]}</span></div>`).join('')}catch(_){}
};
{const nav=$('nav'),ls2=[...nav.querySelectorAll('a')];
 let trava=0;ls2.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const el=$(a.dataset.s);if(!el)return;ls2.forEach(x=>x.classList.toggle('on',x===a));trava=Date.now()+900;const y=a.dataset.s==='topo'?0:Math.max(0,el.getBoundingClientRect().top+scrollY-10);scrollTo({top:y,behavior:'smooth'})}));
 $('navPerfil').addEventListener('click',abrePerfil);
 const abre=id=>{$(id).hidden=false;document.body.style.overflow='hidden';render()},fecha=m=>{m.hidden=true;document.body.style.overflow=''};
 $('navRank').addEventListener('click',()=>abre('mRank'));$('navConq').addEventListener('click',()=>abre('mConq'));
 ['mRank','mConq'].forEach(id=>{const m=$(id);m.addEventListener('click',e=>{if(e.target===m||e.target.closest('[data-fecha]'))fecha(m)})});
 addEventListener('keydown',e=>{if(e.key==='Escape')['mRank','mConq'].forEach(id=>{if(!$(id).hidden)fecha($(id))})});
 $('conq').addEventListener('click',e=>{const b=e.target.closest('.bd');if(b)$('conqDica').textContent=b.title});
 const marca=()=>{if(Date.now()<trava)return;let on=ls2[0];ls2.forEach(a=>{const el=$(a.dataset.s);if(el&&el.getBoundingClientRect().top<innerHeight*.4)on=a});ls2.forEach(a=>a.classList.toggle('on',a===on))};
 addEventListener('scroll',marca,{passive:true});marca()}
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('perfil').hidden)fechaPerfil()});
if(!eu.name){
  let bAv=rnd(0,AVS.length-1);$('boas').hidden=false;document.body.style.overflow='hidden';
  escolheAv($('bAvs'),bAv,a=>bAv=a);
  $('bNome').addEventListener('input',()=>{$('bOk').disabled=!$('bNome').value.trim()});
  const entra=async()=>{const n=$('bNome').value.trim();if(!n)return;const er=await salvaPerfil(n,bAv);if(er){erroNome($('bNome'),er);return}$('boas').hidden=true;document.body.style.overflow=''};$('bNome').addEventListener('input',()=>erroNome($('bNome'),''));
  $('bOk').onclick=entra;$('bNome').addEventListener('keydown',e=>{if(e.key==='Enter')entra()});
  setTimeout(()=>$('bNome').focus(),50);
}
$('tabs').querySelectorAll('.tab').forEach(b=>b.onclick=()=>{cur=b.dataset.k;$('modal').hidden=false;document.body.style.overflow='hidden';intro();$('fechar').focus()});
$('fechar').onclick=pedeSair;
/* ganchos de som: botões, pontos, vidas, fim de jogo */
document.querySelectorAll('.somb').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();som=!som;ls.set('pf-som',som?'1':'0');atualizaSomBtn();if(musica.g)musica.g.gain.value=som?.5:0;if(som){ac();sfx('click')}}));
atualizaSomBtn();
document.addEventListener('pointerdown',e=>{
  ac();if(e.target.closest&&e.target.closest('.mc,.pads'))return;const b=e.target.closest&&e.target.closest('button');
  if(b&&!b.disabled){b.classList.add('press');const t0=_real();let off=false;const tira=()=>{if(off)return;off=true;setTimeout(()=>b.classList.remove('press'),Math.max(0,140-(_real()-t0)))};
    ['pointerup','pointercancel','pointerleave'].forEach(n=>b.addEventListener(n,tira,{once:true}));setTimeout(tira,900)}
  if(b&&!b.classList.contains('somb')){
    if(b.classList.contains('tab'))sfx('select');
    else if(['play','again','cbt'].includes(b.id)||(b.id==='bOk'))sfx('play');
    else if(['fechar','volta','sairSim','sairNao','pX'].includes(b.id))sfx('sair');
    else sfx('click');return}
  const cv=e.target.closest&&e.target.closest('.cv canvas');
  if(cv&&emJogo&&!pausado&&cur!=='teclas'){sfx(['tiroalvo','canhao','arco'].includes(cur)?'tiro':'tap')}
},true);
{let ultPt=-1,ultV=-1;
 const semPt=()=>cur==='nave'||cur==='invasores'||cur==='teclas';
 new MutationObserver(()=>{
  if(!emJogo){ultPt=-1;ultV=-1;return}
  const pt=$('pt'),hv=$('hv');
  if(pt){const n=parseInt(pt.textContent)||0;if(ultPt>=0&&n>ultPt&&!semPt())sfx('ponto');ultPt=n}
  if(hv&&/Vidas/.test(hv.textContent)){const v=(hv.textContent.match(/●/g)||[]).length;if(ultV>=0&&v<ultV)sfx('dano');ultV=v}
 }).observe(stage,{childList:true,subtree:true,characterData:true});
}

$('sairNao').onclick=()=>{$('sair').hidden=true;retoma()};
$('sairSim').onclick=()=>{$('sair').hidden=true;retoma();fecha()};
window.addEventListener('keydown',e=>{if(e.key!=='Escape'||$('modal').hidden)return;if(!$('sair').hidden){$('sair').hidden=true;retoma()}else pedeSair()});

/* ---------- banco de dados: Firebase (Firestore) com login anônimo ---------- */
function pedeCodigo(erro){
  return new Promise(res=>{
    const m=$('codigo'),inp=$('cdIn'),er=$('cdErro');m.hidden=false;document.body.style.overflow='hidden';
    er.hidden=!erro;er.textContent=erro||'';inp.value='';setTimeout(()=>inp.focus(),50);
    const ok=()=>{const v=inp.value.trim();if(!v)return;$('cdOk').onclick=null;inp.onkeydown=null;m.hidden=true;document.body.style.overflow='';res(v)};
    $('cdOk').onclick=ok;inp.onkeydown=e=>{if(e.key==='Enter')ok()};
  });
}
async function conectaDb(){
  const cfg=window.FIREBASE_CONFIG;
  if(cfg&&cfg.apiKey&&window.firebase){
    try{
      if(!firebase.apps.length)firebase.initializeApp(cfg);
      const auth=firebase.auth();
      if(!auth.currentUser)await auth.signInAnonymously();
      pid=auth.currentUser.uid;ls.set('pf-id',pid);
      const f=firebase.firestore(),mb=f.doc('membros/'+pid);
      /* só entra quem sabe o código da família (as regras do banco conferem) */
      let ja=false;try{ja=(await mb.get()).exists}catch(e){}
      let erro='';
      for(let t=0;!ja&&t<8;t++){
        const cod=ls.get('pf-cod')||await pedeCodigo(erro);
        try{await mb.set({codigo:cod});ls.set('pf-cod',cod);ja=true}
        catch(e){ls.set('pf-cod','');erro=(e&&e.code==='permission-denied')?'Código incorreto. Confira com a família e tente de novo.':'Não deu para conferir agora. Verifique a internet e tente de novo.'}
      }
      if(!ja)return null;
      return f;
    }catch(e){console.warn('Firebase indisponível',e)}
  }
  if(typeof claude!=='undefined'&&claude.use){try{return await claude.use('db')}catch(e){}}
  return null;
}
/* ---------- conexão ---------- */
try{scores=JSON.parse(ls.get('pf-scores2')||'[]')}catch(e){scores=[]}
render();
const st=$('status'),local=()=>{st.textContent='Placar salvo só neste aparelho.'};
const timeout=setTimeout(()=>{st.textContent='O placar compartilhado ainda não respondeu. Os resultados aparecem assim que conectar.'},10000);
(async()=>{
  try{
    db=await conectaDb();
    if(!db){clearTimeout(timeout);local();return}
    db.collection('scores').onSnapshot(s=>{
      scores=s.docs.map(d=>d.data()).filter(Boolean);render();
      if(!s.metadata.fromCache){clearTimeout(timeout);st.textContent='Placar compartilhado com a família, ao vivo.'}
    },()=>{clearTimeout(timeout);db=null;local()});
    let conferiu=false;
    db.collection('perfis').onSnapshot(s=>{perfis={};s.docs.forEach(d=>{const v=d.data();if(v)perfis[d.id]=v});
      if(!s.metadata.fromCache&&!conferiu){conferiu=true;const p=perfis[pid];if(eu.name&&(!p||p.name!==eu.name||p.av!==eu.av))db.doc('perfis/'+pid).set({name:eu.name,av:eu.av,at:new Date().toISOString()}).catch(()=>{})}
      render()},()=>{});
    db.doc('hist/'+pid).get().then(d=>{if(!d.exists)return;const g=(d.data()||{}).g||{};let mudou=false;
      Object.keys(g).forEach(k=>{if(Array.isArray(g[k])){const p=[];for(let i=0;i+1<g[k].length;i+=2)p.push([g[k][i],g[k][i+1]]);if(p.length>(hist[k]||[]).length){hist[k]=p;mudou=true}}});
      if(mudou){ls.set('pf-hist',JSON.stringify(hist));render()}}).catch(()=>{});
  }catch(e){clearTimeout(timeout);local()}
})();
}
