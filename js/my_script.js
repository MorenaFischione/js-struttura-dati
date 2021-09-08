// Creo un oggetto card

var card = {

    name : "Draghetto dell'Accademia", // assegno un valore alla proprietà name(=nome)
    launchCost : { // assegno alla proprietà launchCost(=costo di lancio) un valore oggetto 
                   // che contiene a sua volta proprietà con valore colore (quanti mana devo utilizzare per far partire la magia))
        common : 2,
        white : 0   ,
        ublue : 0,
        black : 1,
        red : 0,
        green : 0,
    },

    type : "creature", // Riga del Tipo 

    subType: "drake",  // quale tipo di creatura è

    expansion : {  // tipo di espansione che contiene un oggetto con proprietà : name rarity e maxinumNumber
        expansionId : "",
        name : "Dominaria",
        rarity : "Common",
        maximumNumber : 160,
    },

    collectionNumber : 40, // proprietà collectionNumber che indica il  numero della card

    flavorText : { // proprietà che indica il colore del testo costituita da un oggetto di author e quote(=citazione)
        author : "Svetlin Velinov",
        quote : "You may pay an additional 4 as you cast this spell.",
    },

    abilities : [ // proprietà della card abilities costituita da un array di oggetti perchè una card puo contenere piu abilità
        {
            launchCost : { // proprietà che contiene un altro oggetto con stesste caretteristiche del launchCost sopra  e description
                common : 4,
                white : 0   ,
                ublue : 0,
                black : 0,
                red : 0,
                green : 0,
            },
            description : "If Academy Drake was kicked, it enters the battlefield with two +1/+1 counters on it.",
        },
    ],

    illustrator : { // proprietà illustrator della card che contiene un oggetto di proprietà relative all'autore
        id : 12,
        nome : "Svetlin",
        surname : "Velinov",
        dateOfBirth : "11/2/1980",
        placeOfBirth : "Cansas",
    },

    illustationImage : "",

    constitution : 2, //    proprietà con il valore della costituzione

    strength : 2,     //    proprietà con il valore della forza

    borderColor : "blue",  // proprietà con il valore del colore del bordo

    cardImage : "img/cardImage.png", // proprietà con il valore immagine della card prima salvata nella cartella img

    combinedManaCost : function() { // funzione che mi restituisce la somma dei mana necessari per far partire la magia
        let sum = 0;
        for (let key in this.launchCost) {
            sum += this.launchCost[key];
        }
        return sum;
    },
};

// Template literals   ` `

console.table(card);
console.log(card.combinedManaCost());