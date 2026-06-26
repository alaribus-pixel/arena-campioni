const campioni = [

{
nome:"Kargan",
classe:"Barbaro",
immagine:"images/kargan.jpg",
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
facilita:2.5,
danni:4,
difesa:3,
mobilita:5,
controllo:3.5,
supporto:1
},

{
nome:"Dantu Lighierù",
classe:"Bardo",
immagine:"images/dantu.jpg",
facilita:3,
danni:3,
difesa:3,
mobilita:4,
controllo:3,
supporto:3.5
},

{
nome:"Kaede Akatsuki, la Rinnegata",
classe:"Monaco",
immagine:"images/kaede.jpg",
facilita:3,
danni:4,
difesa:3.5,
mobilita:4.5,
controllo:4,
supporto:2
},

{
nome:"Sir Rhogar",
classe:"Mago",
immagine:"images/rhogar.jpg",
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
facilita:2.5,
danni:4,
difesa:3,
mobilita:2,
controllo:4.5,
supporto:4.5
},

{
nome:"Daphne, Strega Cremisi",
classe:"Stregone",
immagine:"images/daphne.jpg",
facilita:3,
danni:5,
difesa:2,
mobilita:2.5,
controllo:5,
supporto:2.5
},

{
nome:"Melkor",
classe:"Chierico",
immagine:"images/melkor.jpg",
facilita:4,
danni:4,
difesa:5,
mobilita:2,
controllo:3,
supporto:3.5
},

{
nome:"Kael Mord, Redivivo",
classe:"Warlock",
immagine:"images/kael.jpg",
facilita:2,
danni:4,
difesa:2.5,
mobilita:2.5,
controllo:4.5,
supporto:3
},

{
nome:"Pin, lo Stelo",
classe:"Ranger",
immagine:"images/pin.jpg",
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
facilita:2.5,
danni:4,
difesa:4,
mobilita:3.5,
controllo:4,
supporto:5
},

{
nome:"Harlan, il Mastino",
classe:"Guerriero",
immagine:"images/harlan.jpg",
facilita:3,
danni:3.5,
difesa:4,
mobilita:3.5,
controllo:4.5,
supporto:2
},

{
nome:"Thalia",
classe:"Paladino",
immagine:"images/thalia.jpg",
facilita:4,
danni:4,
difesa:4.5,
mobilita:3.5,
controllo:2.5,
supporto:4
}
];

const roster = document.getElementById("roster");

function stelle(valore){

let piene = Math.floor(valore);
let mezza = valore % 1 >= 0.5 ? 1 : 0;
let vuote = 5 - piene - mezza;

return "★".repeat(piene)
     + (mezza ? "⯨" : "")
     + "☆".repeat(vuote);

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