const campioni = [

{
nome:"Kargan",
classe:"Barbaro",
immagine:"images/kargan.jpg",

flavour:"Capotribù del Lupo Bianco, guida il suo clan con forza e onore.",
fight:"Travolge il nemico in prima linea, assorbe danni e domina il corpo a corpo.",

facilita:5,
danni:5,
difesa:4,
mobilita:2,
controllo:2,
supporto:1
},

{
nome:"Vivienne Fox",
classe:"Ladro",
immagine:"images/vivienne.jpg",

flavour:"Ladra elfica dalle misteriose lame psioniche, elegante e letale.",
fight:"Colpisce i bersagli isolati con rapidità, sfruttando mobilità e precisione.",

facilita:3,
danni:4,
difesa:3,
mobilita:5,
controllo:3,
supporto:1
},

{
nome:"Dantu Lighierù",
classe:"Bardo",
immagine:"images/dantu.jpg",

flavour:"Spadaccino e artista, trasforma ogni duello in uno spettacolo.",
fight:"Alterna magia e scherma, adattandosi a ogni situazione senza perdere ritmo.",

facilita:3,
danni:3,
difesa:3,
mobilita:4,
controllo:3,
supporto:3
},

{
nome:"Kaede Akatsuki, la Rinnegata",
classe:"Monaco",
immagine:"images/kaede.jpg",

flavour:"Shinobi rinnegata che ha trasformato la disciplina in un'arma.",
fight:"Controlla il campo con velocità, colpi mirati e continue riposizioni.",

facilita:3,
danni:4,
difesa:4,
mobilita:4,
controllo:4,
supporto:2
},

{
nome:"Sir Rhogar",
classe:"Mago",
immagine:"images/rhogar.jpg",

flavour:"Aristocratico maestro della lama, unisce magia e scherma in perfetta armonia.",
fight:"Alterna incantesimi e fendenti con estrema eleganza e precisione.",

facilita:2,
danni:5,
difesa:3,
mobilita:4,
controllo:4,
supporto:2
},

{
nome:"Rask 'Red Dust'",
classe:"Artefice",
immagine:"images/rask.jpg",

flavour:"Geniale inventore coboldo, sempre pronto a stupire con le sue creazioni.",
fight:"Combatte dalla distanza con cannoni e marchingegni, controllando il campo.",

facilita:2,
danni:4,
difesa:3,
mobilita:2,
controllo:4,
supporto:4
},

{
nome:"Daphne, Strega Cremisi",
classe:"Stregone",
immagine:"images/daphne.jpg",

flavour:"Strega cremisi legata al potere dei draghi e delle fiamme.",
fight:"Infligge enormi danni magici e punisce i nemici con potenti esplosioni.",

facilita:3,
danni:5,
difesa:2,
mobilita:2,
controllo:5,
supporto:2
},

{
nome:"Melkor",
classe:"Chierico",
immagine:"images/melkor.jpg",

flavour:"Gigante goliath consacrato alla guerra e alla vittoria.",
fight:"Sostiene il gruppo con la fede, resiste agli assalti e schiaccia i nemici in prima linea.",

facilita:4,
danni:4,
difesa:5,
mobilita:2,
controllo:3,
supporto:3
},

{
nome:"Kael Mord, Redivivo",
classe:"Warlock",
immagine:"images/kael.jpg",

flavour:"Un redivivo che ha stretto un oscuro patto per sfuggire alla morte.",
fight:"Logora lentamente gli avversari con magie oscure e un controllo costante.",

facilita:2,
danni:4,
difesa:2,
mobilita:2,
controllo:5,
supporto:3
},

{
nome:"Pin, lo Stelo",
classe:"Ranger",
immagine:"images/pin.jpg",

flavour:"Piccolo esploratore dal grande coraggio, inseparabile dalle sue bestie.",
fight:"Colpisce da lontano coordinandosi con la sua bestia per mettere in difficoltà il nemico.",

facilita:4,
danni:4,
difesa:3,
mobilita:4,
controllo:3,
supporto:3
},

{
nome:"Toren, Primo Albero",
classe:"Druido",
immagine:"images/toren.jpg",

flavour:"Guardiano firbolg della natura, saldo come una quercia secolare.",
fight:"Si trasforma per dominare la mischia e protegge gli alleati con la forza della natura.",

facilita:2,
danni:4,
difesa:4,
mobilita:4,
controllo:4,
supporto:5
},

{
nome:"Harlan, il Mastino",
classe:"Guerriero",
immagine:"images/harlan.jpg",

flavour:"Veterano instancabile, celebre per la sua freddezza sul campo di battaglia.",
fight:"Controlla il ritmo dello scontro con tecniche marziali e manovre tattiche.",

facilita:3,
danni:3,
difesa:4,
mobilita:3,
controllo:4,
supporto:2
},

{
nome:"Thalia",
classe:"Paladino",
immagine:"images/thalia.jpg",


flavour:"Campionessa aasimar della Gloria, simbolo di coraggio e speranza.",
fight:"Difende i compagni e guida l'assalto con resistenza e potenza divina.",


facilita:4,
danni:4,
difesa:4,
mobilita:3,
controllo:2,
supporto:4
}
];

const roster = document.getElementById("roster");

function stelle(valore){

    let stelle = Math.round(valore);

    return "★".repeat(stelle)
         + "☆".repeat(5-stelle);

}

campioni.forEach(campione=>{

    roster.innerHTML += `

    <div class="card">

        <img src="${campione.immagine}">

        <h2>${campione.nome}</h2>

        <p>${campione.classe}</p>

       <div class="stats">

<div>Facilità <span>${stelle(campione.facilita)}</span></div>

<div>Danni <span>${stelle(campione.danni)}</span></div>

<div>Difesa <span>${stelle(campione.difesa)}</span></div>

<div>Mobilità <span>${stelle(campione.mobilita)}</span></div>

<div>Controllo <span>${stelle(campione.controllo)}</span></div>

<div>Supporto <span>${stelle(campione.supporto)}</span></div>

</div>

    </div>

    `;
    });